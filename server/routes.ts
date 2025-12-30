import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

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
      
      // Store in Google Sheets
      const subscriber = await storage.createSubscriber(input);

      res.status(201).json({ message: "Subscribed!", id: subscriber.id });
    } catch (err: any) {
      console.error("Subscription error details:", err);
      const message = err.message || "Failed to subscribe. Please try again later.";
      const status = err.message?.includes("GOOGLE_SHEETS_API_KEY") ? 500 : 400;
      res.status(status).json({ message });
    }
  });

  return httpServer;
}
