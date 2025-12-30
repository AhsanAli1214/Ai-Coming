import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Waitlist functionality migrated to WhatsApp direct link
  app.post(api.subscribe.create.path, async (_req, res) => {
    res.status(200).json({ message: "Waitlist moved to WhatsApp" });
  });

  return httpServer;
}
