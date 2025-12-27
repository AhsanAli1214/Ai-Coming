import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Download, Bell, Sparkles, Moon, Sun, Monitor } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";

export default function Settings() {
  const { toast } = useToast();
  const [theme, setTheme] = useState("system");
  const [personality, setPersonality] = useState("Professional");
  const [responseLength, setResponseLength] = useState("Medium");

  const clearHistory = useMutation({
    mutationFn: async () => {
      // In a real local-storage app, this would clear IndexedDB/localStorage
      // For this DB-backed demo, we'll clear sessions via API
      await apiRequest("DELETE", "/api/chat/sessions/all");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/chat/sessions"] });
      toast({ title: "Success", description: "All chat history has been cleared." });
    },
  });

  return (
    <div className="container mx-auto py-12 px-6 max-w-3xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-muted-foreground">Customize your Ahsan AI experience.</p>
      </div>

      <div className="space-y-8">
        {/* Personality */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <User className="h-5 w-5 text-primary" /> Personality Mode
          </h2>
          <Card>
            <CardContent className="pt-6">
              <RadioGroup value={personality} onValueChange={setPersonality} className="grid grid-cols-2 gap-4">
                {["Friendly", "Professional", "Creative", "Teacher"].map((mode) => (
                  <div key={mode} className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={mode} id={mode} />
                    <Label htmlFor={mode} className="flex-1 cursor-pointer font-medium">{mode}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </section>

        {/* Response Length */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> Response Length
          </h2>
          <Card>
            <CardContent className="pt-6">
              <RadioGroup value={responseLength} onValueChange={setResponseLength} className="grid grid-cols-3 gap-4">
                {["Short", "Medium", "Explained"].map((len) => (
                  <div key={len} className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={len} id={len} />
                    <Label htmlFor={len} className="flex-1 cursor-pointer font-medium">{len}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </section>

        {/* Appearance */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Monitor className="h-5 w-5 text-primary" /> Appearance
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Theme</Label>
                  <p className="text-sm text-muted-foreground">Choose your preferred visual style.</p>
                </div>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Animations</Label>
                  <p className="text-sm text-muted-foreground">Enable visual effects and transitions.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Management */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" /> Data & Privacy
          </h2>
          <Card className="border-destructive/20">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Download Data</Label>
                  <p className="text-sm text-muted-foreground">Export your history and settings as JSON.</p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="space-y-0.5">
                  <Label className="text-destructive">Clear History</Label>
                  <p className="text-sm text-muted-foreground">Permanently delete all chat history.</p>
                </div>
                <Button variant="destructive" size="sm" onClick={() => clearHistory.mutate()}>
                  <Trash2 className="mr-2 h-4 w-4" /> Clear All
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
