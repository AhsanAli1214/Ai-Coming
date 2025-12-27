import { pgTable, text, serial, timestamp, integer, jsonb, boolean, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User Preferences (Stored locally in frontend usually, but schema supports sync if needed)
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

// AI Chat Sessions
export const chatSessions = pgTable("chat_sessions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  personality: text("personality").notNull().default("Professional"),
  responseLength: text("response_length").notNull().default("Medium"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Chat Messages
export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull().references(() => chatSessions.id),
  role: text("role", { enum: ["user", "model"] }).notNull(),
  content: text("content").notNull(),
  translation: jsonb("translation"), // { lang: text }
  createdAt: timestamp("created_at").defaultNow(),
});

// Base schemas
export const insertSubscriberSchema = createInsertSchema(subscribers).pick({ email: true });
export const insertChatSessionSchema = createInsertSchema(chatSessions).omit({ id: true, createdAt: true, updatedAt: true });
export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({ id: true, createdAt: true });

// Explicit API types
export type Subscriber = typeof subscribers.$inferSelect;
export type ChatSession = typeof chatSessions.$inferSelect;
export type ChatMessage = typeof chatMessages.$inferSelect;

export type CreateSubscriberRequest = z.infer<typeof insertSubscriberSchema>;
export type CreateChatSessionRequest = z.infer<typeof insertChatSessionSchema>;
export type CreateChatMessageRequest = z.infer<typeof insertChatMessageSchema>;

export type ContentToolType = 
  | "text-enhancer" 
  | "email-writer" 
  | "blog-generator" 
  | "study-material" 
  | "code-explainer" 
  | "math-solver" 
  | "translator" 
  | "social-media" 
  | "resume-assistant" 
  | "story-generator";

export interface ContentGenerationRequest {
  tool: ContentToolType;
  input: string;
  options?: Record<string, any>;
}
