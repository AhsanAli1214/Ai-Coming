import { useState, useRef, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, User, Bot, Plus } from "lucide-react";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { ChatSession, ChatMessage } from "@shared/schema";

export default function Chat() {
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data: sessions } = useQuery<ChatSession[]>({ queryKey: ["/api/chat/sessions"] });
  const { data: messages, isLoading: messagesLoading } = useQuery<ChatMessage[]>({
    queryKey: ["/api/chat/messages", sessionId],
    enabled: sessionId !== null,
  });

  const createSession = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/chat/sessions", { title: "New Conversation" });
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/chat/sessions"] });
      setSessionId(data.id);
    },
  });

  const sendMessage = useMutation({
    mutationFn: async (content: string) => {
      if (!sessionId) return;
      await apiRequest("POST", "/api/chat/messages", { sessionId, role: "user", content });
      const aiRes = await apiRequest("POST", "/api/ai/generate", { tool: "Chat", input: content });
      const aiData = await aiRes.json();
      await apiRequest("POST", "/api/chat/messages", { sessionId, role: "bot", content: aiData.content });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/chat/messages", sessionId] });
      setInput("");
    },
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Session Sidebar */}
        <div className="w-64 border-r bg-muted/20 p-4">
          <Button className="mb-4 w-full" onClick={() => createSession.mutate()}>
            <Plus className="mr-2 h-4 w-4" /> New Chat
          </Button>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-2">
              {sessions?.map((s) => (
                <Button
                  key={s.id}
                  variant={sessionId === s.id ? "secondary" : "ghost"}
                  className="w-full justify-start truncate"
                  onClick={() => setSessionId(s.id)}
                >
                  {s.title}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col">
          <ScrollArea className="flex-1 p-6">
            <div className="mx-auto max-w-3xl space-y-6">
              {messages?.map((m) => (
                <div key={m.id} className={`flex gap-4 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                    {m.role === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <Card className={`max-w-[80%] ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted/50"}`}>
                    <CardContent className="p-3 text-sm leading-relaxed">{m.content}</CardContent>
                  </Card>
                </div>
              ))}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim() && sessionId) sendMessage.mutate(input);
              }}
              className="mx-auto flex max-w-3xl gap-2"
            >
              <Input
                placeholder={sessionId ? "Type a message..." : "Select or create a chat to begin"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={!sessionId || sendMessage.isPending}
              />
              <Button type="submit" size="icon" disabled={!sessionId || sendMessage.isPending}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
