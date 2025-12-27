import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, HelpCircle, Shield, FileText, User, Mail, Instagram, Twitter, Globe } from "lucide-react";

const faqs = [
  { q: "What is Ahsan AI Hub?", a: "Ahsan AI Hub is a comprehensive, privacy-first AI platform designed to help users with writing, coding, and creative tasks using advanced AI models like Gemini 2.0." },
  { q: "Is it really free?", a: "Yes, 100% free. All premium features are available at zero cost as part of our commitment to accessibility." },
  { q: "Is my data secure?", a: "Absolutely. We are privacy-first. No login is required, and your chat history is stored locally on your device, never on our servers." },
  { q: "What personality modes are available?", a: "We offer Friendly, Professional, Creative, and Teacher modes to tailor the AI's responses to your specific needs." },
];

export default function FAQ() {
  return (
    <div className="container mx-auto py-12 px-6 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Find answers to common questions about Ahsan AI Hub.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
