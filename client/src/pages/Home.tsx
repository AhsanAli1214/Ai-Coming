import { motion } from "framer-motion";
import { 
  Bot, 
  ShieldCheck, 
  Zap, 
  Code, 
  BookOpen, 
  Languages, 
  PenTool, 
  Globe, 
  Sparkles,
  Lock,
  UserCheck
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { EmailForm } from "@/components/EmailForm";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 bg-gradient-mesh overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '7s' }} />

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 backdrop-blur-sm rounded-full">
              Coming Soon
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
              Ahsan <span className="text-gradient-primary">AI Hub</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Your <span className="text-white font-medium">Privacy-First</span> AI Companion. Access advanced tools completely free, no login required.
            </p>

            <div className="mb-12">
              <EmailForm />
            </div>
          </motion.div>
        </div>
      </section>


      {/* --- VALUE PROPS (Why it's different) --- */}
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Ahsan AI Hub?</h2>
            <p className="text-muted-foreground">The future of AI is private, accessible, and free.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Privacy First",
                desc: "We don't store your conversations. Your data stays yours."
              },
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "No Login Required",
                desc: "Jump straight in. No accounts, no passwords, no friction."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "100% Free",
                desc: "Premium AI features available to everyone at zero cost."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Powered by Gemini 2.0",
                desc: "Leveraging the latest in LLM technology for superior results."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* --- FEATURES GRID --- */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything you need in <span className="text-gradient-primary">one place</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From coding assistance to creative writing, we've bundled the best AI tools into a single, cohesive experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Bot className="w-8 h-8" />}
              title="AI Chat"
              description="Engage with customizable AI personalities for brainstorming, advice, or casual conversation."
              delay={0.1}
            />
            <FeatureCard 
              icon={<PenTool className="w-8 h-8" />}
              title="Content Suite"
              description="9 specialized tools including Writer, Grammar Enhancer, and Blog Post Generator."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Code className="w-8 h-8" />}
              title="Code Assistant"
              description="Debug code, explain complex functions, and generate snippets in any language."
              delay={0.3}
            />
            <FeatureCard 
              icon={<BookOpen className="w-8 h-8" />}
              title="Study & Math"
              description="Step-by-step math solver and study companion for students of all levels."
              delay={0.4}
            />
            <FeatureCard 
              icon={<Languages className="w-8 h-8" />}
              title="Global Translation"
              description="Instant translation across 50+ languages with high accuracy and nuance."
              delay={0.5}
            />
            <FeatureCard 
              icon={<Globe className="w-8 h-8" />}
              title="PWA Ready"
              description="Install as a native app on your device for quick access anywhere, anytime."
              delay={0.6}
            />
          </div>
        </div>
      </section>


      {/* --- PRIVACY COMMITMENT --- */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 transform origin-top-left scale-110" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
              <Lock className="w-10 h-10" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Privacy Promise</h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              "We believe privacy is a fundamental right. Ahsan AI Hub is architected to ensure we cannot see your chats, store your prompts, or sell your data. You are in complete control."
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-white/80">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/5">No Tracking</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/5">No Data Selling</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/5">No History Storage</span>
            </div>
          </motion.div>
        </div>
      </section>


      {/* --- CREATOR --- */}
      <section className="py-20 text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">The Creator</p>
          <h2 className="text-2xl font-bold mb-4">Built by Ahsan Ali</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            An independent developer passionate about making powerful AI tools accessible to everyone, without compromising on privacy.
          </p>
        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="py-10 bg-black/40 text-center text-sm text-muted-foreground border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Ahsan AI Hub. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Launching Soon</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
