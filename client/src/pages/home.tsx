import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, MessageSquare, Wrench, Shield, Zap, BookOpen, Code, Globe, PenTool, BrainCircuit, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

const coreValues = [
  { title: "Privacy First", description: "Zero data collection on servers. Your chats stay on your device.", icon: Shield, color: "text-green-500" },
  { title: "100% Free", description: "Premium AI features (Gemini 2.0) at zero cost to you.", icon: Zap, color: "text-yellow-500" },
  { title: "No Login", description: "Start using immediately. No accounts, no barriers.", icon: Rocket, color: "text-blue-500" },
  { title: "Enterprise Grade", description: "Powered by Google's most advanced Gemini 2.0 Flash model.", icon: BrainCircuit, color: "text-purple-500" },
];

const mainFeatures = [
  { 
    title: "AI Chat Interface", 
    description: "Real-time conversation with customizable personality modes (Friendly, Professional, Creative, Teacher).", 
    icon: MessageSquare 
  },
  { 
    title: "Content Creation Suite", 
    description: "9+ powerful tools including Blog Generator, Email Writer, and Social Media Post creator.", 
    icon: PenTool 
  },
  { 
    title: "Developer Assistant", 
    description: "Line-by-line Code Explainer and debugging support for 50+ programming languages.", 
    icon: Code 
  },
  { 
    title: "Learning & Education", 
    description: "Study Material Generator and Math Solver with step-by-step explanations.", 
    icon: BookOpen 
  },
  { 
    title: "Global Communication", 
    description: "Instant translation in 50+ languages and built-in Text-to-Speech audio support.", 
    icon: Globe 
  },
  { 
    title: "PWA & Mobile Ready", 
    description: "Installable on any device. Works like a native app with offline support.", 
    icon: Zap 
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background border-b">
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary animate-in fade-in slide-in-from-bottom-3 duration-500">
            ✨ Launching Soon
          </Badge>
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-2xl bg-primary/10 animate-in zoom-in duration-700">
              <Sparkles className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Ahsan AI Hub
          </h1>
          <p className="mx-auto mb-10 max-w-[800px] text-xl text-muted-foreground leading-relaxed">
            The ultimate privacy-first productivity suite. 13+ professional pages and 9+ AI tools 
            powered by Gemini 2.0—completely free, no login required.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Button size="lg" className="h-12 px-8 rounded-full" asChild>
              <Link href="/chat">Preview AI Chat</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full" asChild>
              <Link href="/content-tools">Explore Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-20 px-6 space-y-32">
        {/* Core Values / Why Different */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Ahsan AI Hub?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto italic">"Built on the principles of accessibility and absolute privacy."</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, idx) => (
              <Card key={value.title} className="border-none shadow-none bg-muted/30 hover-elevate group transition-all duration-300">
                <CardHeader>
                  <div className={`p-3 rounded-xl bg-background w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className={`h-6 w-6 ${value.color}`} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Breakdown */}
        <section className="bg-muted/30 rounded-3xl p-8 lg:p-16 border border-border/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need, All In One Place</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From professional writing to complex coding, we've got you covered.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-4 p-6 rounded-2xl bg-background border border-border/40 hover:border-primary/20 transition-colors shadow-sm">
                <div className="mt-1 h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-12">Who Is It For?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Students", "Developers", "Content Creators", "Professionals", "Lifelong Learners"].map((target) => (
              <Badge key={target} variant="secondary" className="px-6 py-2 text-base font-medium rounded-full">
                {target}
              </Badge>
            ))}
          </div>
        </section>

        {/* Launch Info CTA */}
        <section className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-12 text-center lg:p-20 shadow-2xl shadow-primary/20">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Join the Future of Private AI</h2>
            <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              We are finalizing the experience. Get ready for a platform that empowers your 
              creativity without compromising your data.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="h-12 px-10 rounded-full" asChild>
                <Link href="/about">Learn the Story</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-10 rounded-full border-primary-foreground/20 bg-white/5 hover:bg-white/10" asChild>
                <Link href="/contact">Get Support</Link>
              </Button>
            </div>
          </div>
          {/* Decorative background blur */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
        </section>
      </div>

      {/* Footer Section */}
      <footer className="mt-20 py-12 border-t bg-muted/20">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-bold">Ahsan AI Hub</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Ahsan AI Hub. Built by Ahsan Ali.</p>
          <div className="flex justify-center gap-6 text-xs font-medium text-muted-foreground uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
