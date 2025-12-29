import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { supabase } from "./supabase";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.subscribe.create.path, async (req, res) => {
    try {
      const input = api.subscribe.create.input.parse(req.body);
      
      // Still store in local DB for redundancy/speed
      const existing = await storage.getSubscriberByEmail(input.email);
      if (existing) return res.status(409).json({ message: "Already subscribed" });
      const subscriber = await storage.createSubscriber(input);

      // Store in Supabase
      try {
        console.log("Attempting to store in Supabase:", input.email);
        const { error } = await supabase
          .from('subscribers')
          .insert([{ email: input.email }]);
        
        if (error) {
          console.error("Supabase storage error:", error);
          // Return error to user if supabase fails and we need it for waitlist
          return res.status(500).json({ message: "Subscription failed. Please try again later." });
        }
      } catch (supaErr) {
        console.error("Supabase connection error:", supaErr);
        return res.status(500).json({ message: "Service connection error. Please try again." });
      }

      res.status(201).json({ message: "Subscribed!", id: subscriber.id });
    } catch (err) {
      res.status(400).json({ message: "Invalid input" });
    }
  });

  return httpServer;
}
