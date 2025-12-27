import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Shield, Zap, Rocket, BookOpen, MessageSquare, Wand2, Globe, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      await apiRequest("POST", "/api/subscribe", { email });
    },
    onSuccess: () => {
      toast({ title: "Success!", description: "You've been added to the waitlist." });
      setEmail("");
    },
    onError: () => {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    },
  });

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background border-b">
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary animate-pulse">
            ✨ Launching Soon
          </Badge>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight lg:text-7xl">
            Ahsan AI Hub
          </h1>
          <p className="mx-auto mb-10 max-w-[800px] text-xl text-muted-foreground leading-relaxed">
            The ultimate privacy-first productivity suite. Empowering creators and students with 
            advanced AI tools, zero data storage, and 100% free access.
          </p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (email) subscribeMutation.mutate(email);
            }}
            className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto mb-12"
          >
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full h-12"
            />
            <Button size="lg" className="rounded-full h-12 px-8" disabled={subscribeMutation.isPending}>
              Notify Me
            </Button>
          </form>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The Complete AI Experience</h2>
          <p className="text-muted-foreground">Premium features, zero cost, absolute privacy.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Privacy-First", icon: Shield, desc: "No data stored on servers. Your history stays on your device." },
            { title: "Gemini 2.0 Power", icon: Zap, desc: "Powered by the latest Google Gemini 2.0 Flash model." },
            { title: "9+ Pro Tools", icon: Wand2, desc: "Blog generator, email writer, code explainer, and more." },
            { title: "No Login Required", icon: Rocket, desc: "Start using all features immediately without an account." },
            { title: "50+ Languages", icon: Globe, desc: "Real-time translation and multilingual chat support." },
            { title: "PWA Support", icon: Sparkles, desc: "Install as an app on your mobile or desktop device." }
          ].map((f) => (
            <Card key={f.title} className="hover-elevate border-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 text-primary">
                  <f.icon className="w-6 h-6" />
                </div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{f.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* User Manual Preview */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">Quick Start Guide</h2>
          <div className="space-y-12">
            {[
              { step: "1", title: "Access & Customize", desc: "Visit the hub and go to Settings to choose your AI's personality (Friendly, Professional, Teacher) and response length." },
              { step: "2", title: "Choose Your Tool", desc: "Select from our specialized suite: Text Enhancer, Blog Generator, Code Explainer, or the 24/7 AI Chat." },
              { step: "3", title: "Interact & Export", desc: "Chat in real-time, translate responses to 50+ languages, or listen via Text-to-Speech. Copy or download results instantly." }
            ].map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t mt-auto text-center px-6">
        <p className="text-muted-foreground mb-4">Ahsan AI Hub — Built by Ahsan Ali</p>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground/60">
          <span>Privacy-First</span>
          <span>•</span>
          <span>Zero-Data Storage</span>
          <span>•</span>
          <span>100% Free</span>
        </div>
      </footer>
    </div>
  );
}
