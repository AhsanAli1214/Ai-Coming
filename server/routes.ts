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
    } catch (err) {
      console.error("Subscription error details:", err);
      if (err instanceof Error) {
        if (err.message.includes("GOOGLE_SHEETS_API_KEY")) {
          return res.status(500).json({ message: "Storage configuration error. Please contact admin." });
        }
        return res.status(400).json({ message: err.message });
      }
      res.status(400).json({ message: "Invalid input or storage error" });
    }
  });

  return httpServer;
}
