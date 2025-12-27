import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Instagram, Twitter, Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="container mx-auto py-12 px-6 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">About Ahsan AI Hub</h1>
        <p className="text-muted-foreground">The story behind the platform and its mission.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <Card className="h-fit">
          <CardContent className="pt-6 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User size={48} />
            </div>
            <h2 className="text-xl font-bold">Ahsan Ali</h2>
            <p className="text-sm text-muted-foreground mb-4">CIT Student & Developer</p>
            <div className="flex justify-center gap-2">
              <Button size="icon" variant="ghost" asChild>
                <a href="https://instagram.com/ahsan.ali.wadani" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://twitter.com/Ahsan_Ali_12" target="_blank" rel="noreferrer"><Twitter size={18} /></a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://ahsan-tech-hub.blogspot.com" target="_blank" rel="noreferrer"><Globe size={18} /></a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ahsan AI Hub was born out of a passion for making advanced AI technology accessible and private for everyone. 
                As a developer and student, I noticed that many AI platforms require complex logins or store personal data, 
                which can be a barrier for many.
              </p>
              <p>
                My goal is to provide a comprehensive suite of tools that respect user privacy while delivering 
                enterprise-grade performance using models like Google's Gemini 2.0.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Privacy First", desc: "No data collection on servers." },
                  { title: "Completely Free", desc: "Premium AI for everyone." },
                  { title: "User Friendly", desc: "Intuitive and clean design." },
                  { title: "High Quality", desc: "Powered by Gemini 2.0 Flash." },
                ].map((v) => (
                  <li key={v.title} className="space-y-1">
                    <span className="font-bold text-foreground">{v.title}</span>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
