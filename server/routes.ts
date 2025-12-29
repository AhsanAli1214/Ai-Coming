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
      
      // Check if already subscribed
      const existing = await storage.getSubscriberByEmail(input.email);
      if (existing) return res.status(409).json({ message: "Already subscribed" });
      
      // Store in local DB
      const subscriber = await storage.createSubscriber(input);

      // Try to store in Supabase (optional - doesn't block subscription)
      if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
        try {
          console.log("Storing in Supabase:", input.email);
          await supabase
            .from('subscribers')
            .insert([{ email: input.email }])
            .then();
        } catch (supaErr) {
          console.log("Supabase backup storage skipped:", supaErr);
          // Continue - local storage is sufficient
        }
      }

      res.status(201).json({ message: "Subscribed!", id: subscriber.id });
    } catch (err) {
      console.error("Subscription error:", err);
      res.status(400).json({ message: "Invalid input" });
    }
  });

  return httpServer;
}
