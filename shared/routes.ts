import { z } from 'zod';
import { insertSubscriberSchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
  conflict: z.object({
    message: z.string(),
  }),
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
        409: errorSchemas.conflict,
        500: errorSchemas.internal,
      },
    },
  },
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
