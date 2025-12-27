import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Shield, Zap, Wand2, Rocket, Globe, Sparkles, MessageSquare, Code, BookOpen, PenTool, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Manual() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>

        <div className="space-y-12">
          {/* Header */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Ahsan AI Hub</h1>
            <p className="text-xl text-muted-foreground">Complete Platform Overview & User Manual</p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <Badge variant="secondary">Privacy-First</Badge>
              <Badge variant="secondary">100% Free</Badge>
              <Badge variant="secondary">No Login Required</Badge>
              <Badge variant="secondary">Advanced AI</Badge>
            </div>
          </section>

          {/* Executive Summary */}
          <Card className="border-primary/10 bg-muted/30">
            <CardHeader>
              <CardTitle>Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                <strong>Ahsan AI Hub</strong> is a modern, privacy-first AI platform that provides free access to advanced AI tools and services. 
                Designed by Ahsan Ali, it prioritizes user accessibility and data security above all else.
              </p>
              <ul>
                <li><strong>Privacy-First:</strong> No data stored on servers, everything stays local.</li>
                <li><strong>Completely Free:</strong> Zero cost for all premium-grade tools.</li>
                <li><strong>Installable:</strong> Works as a Progressive Web App (PWA) for native experience.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Core Features Breakdown */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Core Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover-elevate">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>AI Chat Interface</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Real-time conversation with multiple personality modes (Friendly, Professional, Creative, Teacher). 
                  Includes text-to-speech and instant translation in 50+ languages.
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <PenTool className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Content Tools</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  A suite of 9 specialized tools: Text Enhancer, Email Writer, Blog Generator, Social Media Post Creator, and more.
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Code Assistance</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Line-by-line explanations, debugging help, and logic breakdowns for 50+ programming languages.
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Learning Suite</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Study Material Generator and Math Solver with detailed step-by-step solutions for complex problems.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* User Manual */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">User Manual</h2>
            <Card>
              <CardContent className="pt-6 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">1</span>
                    Getting Started
                  </h3>
                  <p className="text-muted-foreground pl-10">
                    Visit the platform—no registration is needed. You'll land on the Home dashboard where you can 
                    immediately access the Chat or any of the 9 Content Tools.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">2</span>
                    Customizing Experience
                  </h3>
                  <p className="text-muted-foreground pl-10">
                    Navigate to Settings to adjust the AI Personality Mode. Choose "Professional" for work, 
                    "Teacher" for learning, or "Creative" for brainstorming. You can also set preferred response lengths.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">3</span>
                    Managing Data
                  </h3>
                  <p className="text-muted-foreground pl-10">
                    Your history is stored in your browser's local storage. You can view past chats in the History page, 
                    export them as JSON, or clear them permanently from the Settings menu.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Technical Specifications */}
          <section className="space-y-6 pb-12">
            <h2 className="text-3xl font-bold">Technical Specifications</h2>
            <div className="grid gap-4 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Framework</span>
                <span className="text-muted-foreground">Next.js 15+</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">AI Intelligence</span>
                <span className="text-muted-foreground">Advanced Enterprise Models</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Storage Method</span>
                <span className="text-muted-foreground">IndexedDB / LocalStorage (Client-only)</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Language Support</span>
                <span className="text-muted-foreground">50+ Languages (AI Contextual)</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
