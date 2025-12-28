import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ArrowLeft, Shield, Zap, Wand2, Rocket, Globe, Sparkles, 
  MessageSquare, Code, BookOpen, PenTool, BrainCircuit, 
  User, Mail, Instagram, Twitter, Github, Heart, ServerOff
} from "lucide-react";
import { Button } from "@/components/ui/button";

import logoImg from "@assets/icon-removebg-preview_1766949541761.png";
import studioScreenshot from "@assets/image_1766949590945.png";
import settingsScreenshot from "@assets/image_1766949639025.png";
import aboutScreenshot from "@assets/image_1766949663942.png";

export default function Manual() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Button variant="ghost" asChild className="hover:bg-primary/5 transition-colors">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="h-8 w-8 object-contain" />
            <span className="font-bold tracking-tight">Ahsan AI Hub</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto max-w-5xl px-6 pt-12 space-y-16">
        {/* Hero Section */}
        <header className="text-center space-y-6">
          <Badge variant="secondary" className="px-4 py-1 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Official Documentation
          </Badge>
          <div className="flex justify-center mb-4">
            <img src={logoImg} alt="Ahsan AI Hub" className="h-20 w-20 object-contain drop-shadow-lg" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Platform Overview & User Manual
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the most private, powerful, and free AI productivity suite on the web.
          </p>
        </header>

        {/* Studio Preview */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">The AI Studio</h2>
            <Badge variant="outline">Interface Preview</Badge>
          </div>
          <Card className="overflow-hidden border-primary/10">
            <img src={studioScreenshot} alt="AI Studio Interface" className="w-full h-auto" />
            <CardContent className="p-6 bg-muted/20">
              <p className="text-muted-foreground leading-relaxed">
                The content studio provides a precision-engineered workspace for professional text enhancement, 
                blog generation, and code explanation—all powered by the latest Gemini 2.0 Flash models.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Executive Summary */}
        <section className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-primary/10 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <BrainCircuit size={120} />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong>Ahsan AI Hub</strong> is a modern, privacy-first AI platform that provides free access to advanced AI tools and services. 
                Designed by Ahsan Ali, it prioritizes user accessibility and data security above all else. 
                The platform is built on the belief that the future of AI should be democratized—accessible to all without the "data tax" or subscription fees typical of modern tech.
              </p>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            {[
              { title: "Privacy-First", icon: ServerOff, desc: "No data stored on servers, everything stays local.", color: "text-blue-500" },
              { title: "Completely Free", icon: Zap, desc: "Zero cost for all premium-grade tools.", color: "text-yellow-500" },
              { title: "Installable", icon: Rocket, desc: "Works as a PWA for native experience.", color: "text-purple-500" }
            ].map((item) => (
              <Card key={item.title} className="border-primary/5 bg-muted/20">
                <CardContent className="p-4 flex gap-4 items-center">
                  <div className={`p-2 rounded-lg bg-background ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meet the Developer */}
        <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
            <div className="text-center md:text-left space-y-4">
              <div className="w-32 h-32 mx-auto md:mx-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <User size={64} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ahsan Ali</h3>
                <p className="text-primary font-medium">CIT Student & Visionary Developer</p>
              </div>
              <div className="flex justify-center md:justify-start gap-3">
                <Button size="icon" variant="outline" className="rounded-full" asChild>
                  <a href="https://instagram.com/ahsan.ali.wadani" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full" asChild>
                  <a href="https://twitter.com/Ahsan_Ali_12" target="_blank" rel="noreferrer"><Twitter size={18} /></a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full" asChild>
                  <a href="https://ahsan-tech-hub.blogspot.com" target="_blank" rel="noreferrer"><Globe size={18} /></a>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">The Visionary Behind the Hub</h2>
              <p className="text-muted-foreground leading-relaxed">
                As a Computer Information Technology student, Ahsan Ali recognized the growing gap in AI accessibility. 
                Most powerful models were hidden behind paywalls or required users to surrender their digital privacy. 
                Ahsan AI Hub was created to bridge this gap, providing a secure sanctuary where anyone can leverage 
                cutting-edge intelligence for learning, building, and creating.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Heart className="fill-current h-5 w-5" />
                <span className="font-bold">Built for the community, powered by passion.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Breakdown */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground">Professional-grade tools distributed across 13 specialized pages.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Intelligent Chat", icon: MessageSquare, desc: "Dynamic conversations with modes like 'Friendly' or 'Teacher'. Supports 50+ languages." },
              { title: "Content Suite", icon: PenTool, desc: "9 specialized tools for blogs, emails, social media, and academic writing." },
              { title: "Code Assistance", icon: Code, desc: "Deep logic analysis and debugging help for over 50 programming languages." },
              { title: "Academic Solver", icon: BookOpen, desc: "Step-by-step math solutions and automated study guide generation." },
              { title: "Audio & Speech", icon: Zap, desc: "Instant text-to-speech for all AI responses to help with auditory learning." },
              { title: "Local History", icon: Globe, desc: "7-day auto-saved local storage allows you to resume any task anytime." },
              { title: "React Suspense Integration", icon: Sparkles, desc: "Optimized loading states using React Suspense for a smoother, flicker-free user experience during AI response generation." }
            ].map((item) => (
              <Card key={item.title} className="hover-elevate transition-all border-primary/5 hover:border-primary/20">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mb-2 opacity-80" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* User Manual Section */}
        <section className="space-y-8 bg-primary/5 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center">Comprehensive User Guide</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold border-b pb-2">1. Getting Started</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                  <p className="text-sm text-muted-foreground">Access <strong>https://ahsan-ai-hub.vercel.app</strong> on any browser.</p>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                  <p className="text-sm text-muted-foreground">No registration is needed. You land directly on your private dashboard.</p>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-bold">3</div>
                  <p className="text-sm text-muted-foreground">Click "AI Chat" or pick a specific tool from "Content Suite" to begin.</p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold border-b pb-2 mt-12">2. Personalization</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                  <p className="text-sm text-muted-foreground">Go to <strong>Settings</strong> to toggle between Dark/Light/System themes.</p>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                  <p className="text-sm text-muted-foreground">Set your AI Personality: <strong>Teacher</strong> for learning, <strong>Creative</strong> for ideas.</p>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold border-b pb-2">Customization Interface</h3>
              <Card className="overflow-hidden border-primary/10">
                <img src={settingsScreenshot} alt="Settings Interface" className="w-full h-auto" />
              </Card>
              <p className="text-sm text-muted-foreground italic">
                Choose from multiple color themes (Aurora, Ocean, Forest) and adjust response lengths in the local settings dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Developer Section with Screenshot */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Meet the Developer</h2>
            <p className="text-muted-foreground">The vision behind the hub.</p>
          </div>
          <Card className="overflow-hidden border-primary/10 max-w-4xl mx-auto">
            <img src={aboutScreenshot} alt="About the Developer Interface" className="w-full h-auto" />
          </Card>
        </section>
              <h3 className="text-2xl font-bold border-b pb-2">3. Data & Privacy</h3>
              <div className="space-y-4">
                <Card className="border-none bg-background/50">
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-bold flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" /> 
                      Client-Side Storage
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      All conversation history is encrypted and stored in your browser's IndexedDB. 
                      Ahsan AI Hub never uploads your prompts to a central server for logging. 
                      You are the sole owner of your data.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none bg-background/50">
                  <CardContent className="p-4 space-y-2">
                    <h4 className="font-bold flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-500" /> 
                      Instant Cleanup
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Need a fresh start? Use the "Clear All History" button in Settings to 
                      wipe all local data instantly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <section className="text-center pt-10">
          <p className="text-muted-foreground italic mb-6">"Innovation without surveillance. Intelligence without cost."</p>
          <Button size="lg" className="rounded-full px-10 h-14" asChild>
            <Link href="/">Return to Dashboard</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
