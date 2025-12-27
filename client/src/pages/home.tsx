import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, MessageSquare, Wrench, Shield, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const features = [
  { title: "Advanced AI Chat", description: "Powered by Gemini 2.0 for human-like reasoning.", icon: MessageSquare, color: "text-blue-500" },
  { title: "Content Creation", description: "Specialized tools for writers and creators.", icon: Wrench, color: "text-purple-500" },
  { title: "Privacy First", description: "Your data stays yours. No tracking, no selling.", icon: Shield, color: "text-green-500" },
  { title: "Fast & Reliable", description: "Optimized for speed across all devices.", icon: Zap, color: "text-yellow-500" },
];

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-6">
      <section className="mb-16 text-center">
        <div className="mb-6 flex justify-center">
          <Sparkles className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome to Ahsan AI Hub</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          The ultimate productivity suite powered by cutting-edge AI. Secure, fast, and built for you.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/chat">Start Chatting</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/content-tools">Explore Tools</Link>
          </Button>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="hover-elevate">
            <CardHeader>
              <feature.icon className={`h-8 w-8 ${feature.color} mb-2`} />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-20 rounded-xl bg-muted/50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to boost your productivity?</h2>
        <p className="mb-8 text-muted-foreground">Join thousands of users leveraging Ahsan AI for their daily tasks.</p>
        <Button variant="secondary" asChild>
          <Link href="/about">Learn More About Us</Link>
        </Button>
      </section>
    </div>
  );
}
