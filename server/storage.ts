import { type Subscriber, type InsertSubscriber, subscribers, type ChatSession, type ChatMessage, chatSessions, chatMessages } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Subscribers
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;

  // Chat Sessions
  getChatSessions(): Promise<ChatSession[]>;
  getChatSession(id: number): Promise<ChatSession | undefined>;
  createChatSession(session: any): Promise<ChatSession>;
  deleteChatSession(id: number): Promise<void>;

  // Messages
  getMessages(sessionId: number): Promise<ChatMessage[]>;
  createMessage(message: any): Promise<ChatMessage>;
}

export class DatabaseStorage implements IStorage {
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db.insert(subscribers).values(insertSubscriber).returning();
    return subscriber;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const [subscriber] = await db.select().from(subscribers).where(eq(subscribers.email, email));
    return subscriber;
  }

  async getChatSessions(): Promise<ChatSession[]> {
    return await db.select().from(chatSessions).orderBy(desc(chatSessions.updatedAt));
  }

  async getChatSession(id: number): Promise<ChatSession | undefined> {
    const [session] = await db.select().from(chatSessions).where(eq(chatSessions.id, id));
    return session;
  }

  async createChatSession(session: any): Promise<ChatSession> {
    const [newSession] = await db.insert(chatSessions).values(session).returning();
    return newSession;
  }

  async deleteChatSession(id: number): Promise<void> {
    await db.delete(chatMessages).where(eq(chatMessages.sessionId, id));
    await db.delete(chatSessions).where(eq(chatSessions.id, id));
  }

  async getMessages(sessionId: number): Promise<ChatMessage[]> {
    return await db.select().from(chatMessages).where(eq(chatMessages.sessionId, sessionId)).orderBy(chatMessages.createdAt);
  }

  async createMessage(message: any): Promise<ChatMessage> {
    const [newMessage] = await db.insert(chatMessages).values(message).returning();
    // Update session timestamp
    await db.update(chatSessions).set({ updatedAt: new Date() }).where(eq(chatSessions.id, message.sessionId));
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
