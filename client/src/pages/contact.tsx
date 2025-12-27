import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Instagram, Twitter, Facebook, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="container mx-auto py-12 px-6 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Get in Touch</h1>
        <p className="text-muted-foreground">Have questions or feedback? We're here to help.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover-elevate">
          <CardHeader>
            <Mail className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Official Support</CardTitle>
            <CardDescription>For technical issues and tickets.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">tickets@ahsan-ai-hub.p.tawk.email</p>
            <Button variant="link" className="px-0 mt-2" asChild>
              <a href="mailto:tickets@ahsan-ai-hub.p.tawk.email">Send an email</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <Instagram className="h-8 w-8 text-pink-500 mb-2" />
            <CardTitle>Instagram</CardTitle>
            <CardDescription>Fastest response for quick queries.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">@ahsan.ali.wadani</p>
            <Button variant="link" className="px-0 mt-2" asChild>
              <a href="https://instagram.com/ahsan.ali.wadani" target="_blank" rel="noreferrer">Follow & Message</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <Twitter className="h-8 w-8 text-blue-400 mb-2" />
            <CardTitle>Twitter / X</CardTitle>
            <CardDescription>Updates and community support.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">@Ahsan_Ali_12</p>
            <Button variant="link" className="px-0 mt-2" asChild>
              <a href="https://twitter.com/Ahsan_Ali_12" target="_blank" rel="noreferrer">View Profile</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <Globe className="h-8 w-8 text-green-500 mb-2" />
            <CardTitle>Portfolio</CardTitle>
            <CardDescription>Explore more projects and work.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">ahsan-tech-hub.blogspot.com</p>
            <Button variant="link" className="px-0 mt-2" asChild>
              <a href="https://ahsan-tech-hub.blogspot.com" target="_blank" rel="noreferrer">Visit Website</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 bg-muted/50">
        <CardContent className="py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Our support team is available 24/7. We strive to respond to all inquiries within 24 hours.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
