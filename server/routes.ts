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
      const existing = await storage.getSubscriberByEmail(input.email);
      if (existing) return res.status(409).json({ message: "Already subscribed" });
      const subscriber = await storage.createSubscriber(input);
      res.status(201).json({ message: "Subscribed!", id: subscriber.id });
    } catch (err) {
      res.status(400).json({ message: "Invalid input" });
    }
  });

  return httpServer;
}
