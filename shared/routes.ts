import { z } from 'zod';
import { insertSubscriberSchema, insertChatSessionSchema, insertChatMessageSchema } from './schema';

export const errorSchemas = {
  validation: z.object({ message: z.string(), field: z.string().optional() }),
  notFound: z.object({ message: z.string() }),
  internal: z.object({ message: z.string() }),
};

export const api = {
  subscribe: {
    create: {
      method: 'POST' as const,
      path: '/api/subscribe',
      input: insertSubscriberSchema,
      responses: {
        201: z.object({ message: z.string(), id: z.number() }),
        400: errorSchemas.validation,
      },
    },
  },
  chat: {
    sessions: {
      list: {
        method: 'GET' as const,
        path: '/api/chat/sessions',
        responses: { 200: z.array(z.any()) },
      },
      create: {
        method: 'POST' as const,
        path: '/api/chat/sessions',
        input: insertChatSessionSchema,
        responses: { 201: z.any() },
      },
      delete: {
        method: 'DELETE' as const,
        path: '/api/chat/sessions/:id',
        responses: { 204: z.void() },
      }
    },
    messages: {
      list: {
        method: 'GET' as const,
        path: '/api/chat/sessions/:sessionId/messages',
        responses: { 200: z.array(z.any()) },
      },
      create: {
        method: 'POST' as const,
        path: '/api/chat/messages',
        input: insertChatMessageSchema,
        responses: { 201: z.any() },
      }
    }
  },
  ai: {
    generate: {
      method: 'POST' as const,
      path: '/api/ai/generate',
      input: z.object({
        tool: z.string(),
        input: z.string(),
        personality: z.string().optional(),
        length: z.string().optional(),
      }),
      responses: { 200: z.object({ content: z.string() }) },
    },
    stream: {
      method: 'GET' as const,
      path: '/api/ai/stream',
      input: z.object({ prompt: z.string(), sessionId: z.string().optional() }),
      responses: { 200: z.any() }
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
