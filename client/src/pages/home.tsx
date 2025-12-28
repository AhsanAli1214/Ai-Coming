import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Shield, Zap, Rocket, BookOpen, MessageSquare, Wand2, Globe, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

import logoImg from "@assets/icon-removebg-preview_1766949541761.png";
import homeScreenshot from "@assets/image_1766949551550.png";

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
    <div className="flex flex-col w-full min-h-screen selection:bg-primary/20">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[100px]" />
      </div>
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background border-b">
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary animate-pulse">
            ✨ Launching Soon
          </Badge>
          <div className="flex justify-center mb-6">
            <img src={logoImg} alt="Ahsan AI Hub Logo" className="h-24 w-24 md:h-32 md:w-32 object-contain hover:scale-105 transition-transform duration-300" />
          </div>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight lg:text-7xl">
            Ahsan AI Hub
          </h1>
          <p className="mx-auto mb-10 max-w-[800px] text-xl text-muted-foreground leading-relaxed">
            The ultimate privacy-first productivity suite. Empowering creators and students with 
            advanced AI tools, zero data storage, and 100% free access. 
            Experience real-time text-to-speech, contextual translations, and intelligent code assistance 
            in a seamless, secure, and professional environment.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex-1 flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email for early access" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full h-12 bg-background/50 backdrop-blur-sm border-primary/20 focus-visible:ring-primary/30"
              />
              <Button 
                size="lg" 
                className="rounded-full h-12 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" 
                disabled={subscribeMutation.isPending}
                onClick={() => {
                  if (email && /^\S+@\S+\.\S+$/.test(email)) {
                    subscribeMutation.mutate(email);
                  } else {
                    toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
                  }
                }}
              >
                Notify Me
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-12">
            <Button variant="outline" size="lg" asChild className="rounded-full border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary transition-all group">
              <Link href="/manual">
                More About Ahsan AI Hub
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium">
              Innovation without surveillance • Intelligence without cost
            </p>
          </div>

          {/* Screenshot Preview */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-primary/10 shadow-2xl shadow-primary/5">
            <img src={homeScreenshot} alt="Ahsan AI Hub Interface Preview" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "AI Tools", value: "9+" },
              { label: "Pages", value: "13+" },
              { label: "Privacy", value: "100%" },
              { label: "Cost", value: "$0" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
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
            { title: "Privacy-First", icon: Shield, desc: "Absolute security with local data encryption. Your history never leaves your device." },
            { title: "Enterprise Intelligence", icon: Zap, desc: "Leveraging world-class AI models for human-like reasoning and creative power." },
            { title: "9+ Pro Tools", icon: Wand2, desc: "Specialized suite for blog generation, email drafting, and rapid code analysis." },
            { title: "Frictionless Access", icon: Rocket, desc: "No sign-ups, no logins. 100% of the platform is ready for you instantly." },
            { title: "Global Reach", icon: Globe, desc: "Deep translation support for 50+ languages with contextual accuracy." },
            { title: "Native Experience", icon: Sparkles, desc: "Progressive Web App support for a smooth mobile and desktop experience." }
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

      {/* Detailed Features Section */}
      <section className="py-24 px-6 border-t">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Toolset</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 h-8 w-8 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold">Intelligent Chat</h4>
                    <p className="text-sm text-muted-foreground">Adjustable personality modes and response lengths tailored to your needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-8 w-8 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Code size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold">Code Explainer</h4>
                    <p className="text-sm text-muted-foreground">Understand complex logic with line-by-line breakdowns for multiple languages.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-8 w-8 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold">Educational Support</h4>
                    <p className="text-sm text-muted-foreground">Generate high-quality study materials and solve math problems with clear steps.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-3xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4">Privacy & Control</h3>
              <p className="text-muted-foreground mb-6">
                Unlike other platforms, Ahsan AI Hub operates entirely without server-side storage. 
                Your conversations are private, your settings are local, and you have complete control 
                to clear your data at any time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>7-Day Local Auto-Cleanup</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Client-Side Request Throttling</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Data Export Functionality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-6 border-t bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex p-3 rounded-2xl bg-primary/5 mb-6">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-6">About Ahsan AI Hub</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Ahsan AI Hub was founded on the principle that powerful AI should be accessible to everyone 
              without compromising their digital privacy. 
            </p>
            <p className="font-medium text-foreground">
              Our mission is to provide a comprehensive, privacy-first productivity suite that empowers 
              creators, students, and professionals to achieve more, 100% free of charge and 
              with zero data tracking.
            </p>
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
