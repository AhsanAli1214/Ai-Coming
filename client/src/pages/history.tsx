import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { ChatSession } from "@shared/schema";
import { Link } from "wouter";
import { format } from "date-fns";

export default function History() {
  const { data: sessions, isLoading } = useQuery<ChatSession[]>({ queryKey: ["/api/chat/sessions"] });

  const deleteSession = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/chat/sessions/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/chat/sessions"] });
    },
  });

  return (
    <div className="container mx-auto py-12 px-6 max-w-4xl">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Chat History</h1>
          <p className="text-muted-foreground">Review and manage your past conversations.</p>
        </div>
        <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full text-sm">
          <Clock className="h-4 w-4 text-primary" />
          <span>7-day auto-cleanup active</span>
        </div>
      </div>

      <div className="grid gap-4">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="animate-pulse h-24" />
          ))
        ) : sessions?.length === 0 ? (
          <Card className="flex flex-col items-center justify-center p-12 text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground/20 mb-4" />
            <h3 className="text-lg font-medium">No history yet</h3>
            <p className="text-muted-foreground mb-6">Your past conversations will appear here.</p>
            <Button asChild>
              <Link href="/chat">Start a new chat</Link>
            </Button>
          </Card>
        ) : (
          sessions?.map((session) => (
            <Card key={session.id} className="hover-elevate">
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{session.title}</CardTitle>
                  <CardDescription>
                    Last updated: {format(new Date(session.updatedAt), "PPP p")}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteSession.mutate(session.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/chat" className="flex items-center gap-2">
                      Open <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
