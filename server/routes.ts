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
        const { error } = await supabase
          .from('subscribers')
          .insert([{ email: input.email }]);
        
        if (error) {
          console.error("Supabase storage error:", error);
          // We don't fail the request if Supabase fails but local storage succeeded
        }
      } catch (supaErr) {
        console.error("Supabase connection error:", supaErr);
      }

      res.status(201).json({ message: "Subscribed!", id: subscriber.id });
    } catch (err) {
      res.status(400).json({ message: "Invalid input" });
    }
  });

  return httpServer;
}
