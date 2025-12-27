import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Subscribe
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

  // Chat Sessions
  app.get(api.chat.sessions.list.path, async (req, res) => {
    const sessions = await storage.getChatSessions();
    res.json(sessions);
  });

  app.post(api.chat.sessions.create.path, async (req, res) => {
    const session = await storage.createChatSession(req.body);
    res.status(201).json(session);
  });

  app.delete(api.chat.sessions.delete.path, async (req, res) => {
    await storage.deleteChatSession(Number(req.params.id));
    res.status(204).end();
  });

  // Messages
  app.get(api.chat.messages.list.path, async (req, res) => {
    const messages = await storage.getMessages(Number(req.params.sessionId));
    res.json(messages);
  });

  app.post(api.chat.messages.create.path, async (req, res) => {
    const message = await storage.createMessage(req.body);
    res.status(201).json(message);
  });

  // AI Generation
  app.post(api.ai.generate.path, async (req, res) => {
    try {
      const { tool, input, personality = "Professional", length = "Medium" } = req.body;
      
      const prompt = `
        Role: ${personality} Assistant
        Task: ${tool}
        User Input: ${input}
        Response Length: ${length}
        
        Provide a high-quality, helpful response as described in the Ahsan AI Hub manual.
      `;

      const { text } = await generateText({
        model: google("gemini-1.5-flash"),
        prompt: prompt,
      });

      res.json({ content: text });
    } catch (err) {
      console.error("AI Error:", err);
      res.status(500).json({ message: "AI Generation failed" });
    }
  });

  return httpServer;
}
