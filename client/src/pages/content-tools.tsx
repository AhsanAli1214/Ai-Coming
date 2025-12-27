import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, Copy, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const tools = [
  { id: "blog", name: "Blog Post Generator", description: "Create high-quality blog outlines or full articles." },
  { id: "social", name: "Social Media Posts", description: "Generate engaging captions for Instagram, Twitter, and LinkedIn." },
  { id: "email", name: "Professional Emails", description: "Draft formal or informal emails for any situation." },
  { id: "summary", name: "Text Summarizer", description: "Condense long articles into key points." },
];

export default function ContentTools() {
  const [selectedTool, setSelectedTool] = useState(tools[0].id);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { toast } = useToast();

  const generate = useMutation({
    mutationFn: async () => {
      const toolName = tools.find(t => t.id === selectedTool)?.name;
      const res = await apiRequest("POST", "/api/ai/generate", { tool: toolName, input });
      return res.json();
    },
    onSuccess: (data) => {
      setOutput(data.content);
    },
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast({ title: "Copied!", description: "Content copied to clipboard." });
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">AI Content Suite</h1>
        <p className="text-muted-foreground">Professional AI tools designed to streamline your creative workflow.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>Select a tool and provide context.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tool</label>
                <Select value={selectedTool} onValueChange={setSelectedTool}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {tools.map(t => (
                      <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Input Context</label>
                <Textarea 
                  placeholder="Describe what you want to generate..." 
                  className="min-h-[200px]"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <Button 
                className="w-full" 
                onClick={() => generate.mutate()}
                disabled={generate.isPending || !input}
              >
                {generate.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Generate Content
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Output</CardTitle>
                <CardDescription>Your generated content will appear here.</CardDescription>
              </div>
              {output && (
                <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {output ? (
                <div className="whitespace-pre-wrap text-sm leading-relaxed">{output}</div>
              ) : (
                <div className="flex h-[400px] flex-col items-center justify-center text-muted-foreground">
                  <Wand2 className="mb-2 h-10 w-10 opacity-20" />
                  <p>No content generated yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
