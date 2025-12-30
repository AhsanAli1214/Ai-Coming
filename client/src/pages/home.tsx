import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Shield, Zap, Rocket, BookOpen, MessageSquare, Wand2, Globe, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import logoImg from "@assets/icon-removebg-preview_1766949541761.png";
import homeScreenshot from "@assets/image_1766949551550.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen selection:bg-primary/20">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" style={{ contentVisibility: 'auto' }}>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-8 px-5 py-1.5 text-xs font-semibold uppercase tracking-wider border-primary/30 bg-primary/5 text-primary shadow-sm">
            ✨ Premium Productivity Suite
          </Badge>
          
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 opacity-20" />
            <img src={logoImg} alt="Ahsan AI Hub Logo" className="relative h-28 w-28 md:h-36 md:w-36 object-contain drop-shadow-2xl" loading="eager" decoding="async" width="144" height="144" />
          </div>

          <h1 className="mb-6 text-6xl font-black tracking-tight lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 animate-in fade-in slide-in-from-top-8 duration-1000">
            Ahsan AI Launch
          </h1>
          
          <p className="mx-auto mb-12 max-w-[850px] text-xl md:text-2xl text-muted-foreground leading-relaxed font-light animate-in fade-in slide-in-from-top-4 duration-1000 delay-200">
            The ultimate <span className="text-foreground font-medium">privacy-first</span> AI productivity suite. 
            Empowering creators with professional intelligence, <span className="text-foreground font-medium">zero server-side storage</span>, 
            and 100% free access.
          </p>
          
          <div className="flex flex-col items-center gap-6 mb-16 animate-in fade-in zoom-in slide-in-from-bottom-8 duration-1000 delay-500">
            <a 
              id="wa-waitlist"
              href={`https://wa.me/15557818398?text=${encodeURIComponent(`Hello Ahsan AI Hub Team 👋🚀\n\nI’d love to get *early access* to Ahsan AI Launch and join the launch waitlist.\n\n🔹 Page: Ahsan AI Launch\n🔹 Link: ${typeof window !== 'undefined' ? window.location.href : ''}\n🔹 Device: ${typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop"}\n🔹 Time: ${new Date().toLocaleString()}\n\nPlease notify me when early access or beta is available.\nThank you! ✨`)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="waitlist-btn group relative overflow-hidden"
              data-testid="link-whatsapp-waitlist"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-3">
                <SiWhatsapp className="w-6 h-6 animate-pulse" />
                🚀 Get Early Access to Launch
              </span>
            </a>

            <style>{`
              .waitlist-btn {
                display: inline-flex;
                align-items: center;
                background: linear-gradient(135deg, #4f46e5, #9333ea, #ec4899);
                background-size: 200% 200%;
                animation: gradient-shift 5s ease infinite;
                color: #ffffff;
                padding: 20px 40px;
                border-radius: 20px;
                font-size: 1.25rem;
                font-weight: 800;
                text-decoration: none;
                box-shadow: 0 20px 40px rgba(79,70,229,0.4);
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                border: 1px solid rgba(255,255,255,0.2);
                backdrop-filter: blur(10px);
              }

              @keyframes gradient-shift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }

              .waitlist-btn:hover {
                transform: translateY(-5px) scale(1.05);
                box-shadow: 0 30px 60px rgba(147,51,234,0.5);
              }
            `}</style>
          </div>

          <div className="flex flex-col items-center gap-6 mb-20">
            <Button variant="outline" size="lg" asChild className="rounded-full border-primary/20 bg-primary/5 text-primary group px-8 h-14">
              <Link href="/manual">
                More About Ahsan AI Hub
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/80 font-medium">
              <div className="flex items-center gap-2"><Shield size={18} className="text-primary" /> End-to-End Privacy</div>
              <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> Instant Response</div>
              <div className="flex items-center gap-2"><Rocket size={18} className="text-primary" /> No Login Required</div>
            </div>
          </div>

          <div className="relative mt-20 max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-[2rem] blur-2xl opacity-10" />
            <div className="relative rounded-2xl overflow-hidden border border-primary/10 shadow-2xl bg-background/80 backdrop-blur-sm">
              <img src={homeScreenshot} alt="Ahsan AI Hub Interface Preview" className="w-full h-auto object-cover" loading="lazy" decoding="async" />
              
              {/* Technical Overlay */}
              <div className="absolute bottom-6 right-6 hidden md:block">
                <div className="bg-black/80 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-2xl space-y-4 max-w-xs ring-1 ring-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Privacy Pulse Active</span>
                    </div>
                    <Badge variant="outline" className="text-[8px] h-4 border-white/10 text-white/40">v1.0.4</Badge>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[8px] text-white/40 uppercase tracking-tighter">
                      <span>Encryption Depth</span>
                      <span>256-bit AES</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-blue-400 w-[92%] animate-shimmer" />
                    </div>
                  </div>
                  <p className="text-[10px] text-white/60 leading-relaxed font-light">
                    Zero-Persistence Protocol active. All local metadata verified and isolated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 border-y bg-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "AI Tools", value: "9+", icon: Wand2 },
              { label: "Specialized Pages", value: "13+", icon: BookOpen },
              { label: "Privacy Rating", value: "100%", icon: Shield },
              { label: "Subscription", value: "$0", icon: Zap },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <stat.icon className="w-5 h-5 text-primary/60 mb-3" />
                <div className="text-4xl font-black text-foreground mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid - Reimagined */}
      <section className="py-32 px-6 container mx-auto">
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">The Complete AI Ecosystem</h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Designed for professional creators and students who demand high performance 
            without sacrificing their digital security.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Privacy-First Architecture", icon: Shield, desc: "Absolute security with local-only data encryption. Your history stays in your browser's IndexedDB." },
            { title: "Human-Grade Logic", icon: Zap, desc: "Powered by Gemini 2.0 Flash for reasoning that rivals enterprise-level AI solutions." },
            { title: "Specialized Content Studio", icon: Wand2, desc: "Tailored tools for blog architecture, email conversion, and long-form academic writing." },
            { title: "Zero Friction Experience", icon: Rocket, desc: "Skip the sign-up. 100% of our platform is available from the moment you land on our site." },
            { title: "Contextual Translation", icon: Globe, desc: "Go beyond word-to-word translation with deep semantic understanding in 50+ languages." },
            { title: "PWA Optimized", icon: Sparkles, desc: "Install Ahsan AI Hub directly to your desktop or mobile for a seamless native experience." }
          ].map((f) => (
            <Card key={f.title} className="border-primary/5 bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary shadow-inner">
                  <f.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl mb-3">{f.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground/80 leading-relaxed font-light">{f.desc}</CardDescription>
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
      <section className="py-24 px-6 border-t bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4 text-primary border-primary/20">Advanced Capability</Badge>
                <h2 className="text-4xl font-bold tracking-tight mb-6">Precision-Engineered Toolset</h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Every tool in the Ahsan AI Hub is optimized for a specific professional workflow, 
                  ensuring accuracy and depth in every response.
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  { title: "Intelligent Multi-Modal Chat", icon: MessageSquare, desc: "Context-aware conversations with personality mapping and dynamic response length control." },
                  { title: "High-Logic Code Architecture", icon: Code, desc: "Structural analysis and logic breakdown for over 50 programming languages and frameworks." },
                  { title: "Deep Academic Engine", icon: BookOpen, desc: "Algorithmic solving for complex math and automated curriculum generation for researchers." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="mt-1 h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-primary/5 text-primary shadow-inner">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground/80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-50" />
              <div className="relative bg-background/60 backdrop-blur-2xl rounded-[2rem] p-10 border border-primary/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">Privacy Protocol 1.0</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-6">Sovereign Data Control</h3>
                <p className="text-muted-foreground text-lg mb-8 font-light leading-relaxed">
                  We've architected a system that eliminates the need for central data logging. 
                  By leveraging your browser's secure enclave, we provide a high-performance 
                  experience that remains invisible to our servers.
                </p>
                
                <div className="grid gap-4">
                  {[
                    "Ephemeral Session State",
                    "Hardware-Accelerated Encryption",
                    "Zero-Persistence Architecture"
                  ].map((p) => (
                    <div key={p} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium tracking-wide">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Reimagined */}
      <section className="py-32 px-6 border-t bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full opacity-50" />
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex p-4 rounded-3xl bg-primary/10 mb-8 border border-primary/20 shadow-inner">
            <Rocket className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">The Ahsan AI Vision</h2>
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light">
            <p>
              Ahsan AI Hub isn't just a collection of tools; it's a statement against the commoditization of personal data. 
              Founded by <span className="text-foreground font-semibold">Ahsan Ali</span>, we believe that the power of 
              artificial intelligence should be a basic human right, accessible without a price tag or a privacy cost.
            </p>
            <p className="text-foreground font-medium">
              We leverage the world's most advanced large language models through a secure, transparent relay that 
              prioritizes your digital sovereignty above all else.
            </p>
          </div>
          
          <div className="mt-16 pt-16 border-t border-primary/10 flex flex-wrap justify-center gap-12 grayscale opacity-50">
             <div className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase">Secure</div>
             <div className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase">Open</div>
             <div className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase">Private</div>
             <div className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase">Free</div>
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
