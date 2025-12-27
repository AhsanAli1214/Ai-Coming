import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export function FeatureCard({ icon, title, description, delay = 0, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="h-full"
    >
      <Card className={cn("glass-card h-full p-6 relative overflow-hidden group hover:border-primary/30", className)}>
        {/* Subtle glow effect on hover */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        
        <div className="mb-4 text-primary p-3 bg-primary/10 rounded-xl w-fit group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}
