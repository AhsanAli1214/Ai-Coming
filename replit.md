# Ahsan AI Hub

## Overview

Ahsan AI Hub is a privacy-first AI productivity platform that provides free access to advanced AI tools powered by Google's Gemini 2.0 Flash model. The application offers chat assistance, content creation tools, code help, real-time text-to-speech, and translations—all without requiring user login or storing personal data on servers.

The platform is built as a full-stack TypeScript application with a React frontend and Express backend, designed to run as a Progressive Web App (PWA) for installable, offline-capable experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode by default)
- **Build Tool**: Vite for development and production builds
- **Code Splitting**: React.lazy with Suspense for route-based code splitting

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints defined in shared route schemas with Zod validation
- **Database ORM**: Drizzle ORM with PostgreSQL
- **AI Integration**: Google Gemini via Replit AI Integrations (supports text generation and image generation)
- **Session Management**: Express sessions with PostgreSQL storage (connect-pg-simple)

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit for schema migrations (`npm run db:push`)
- **Current Tables**: subscribers, chatSessions, chatMessages

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Vite builds static assets to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Scripts**: `npm run dev` (development), `npm run build` (production build), `npm run start` (production server)

### Project Structure
```
client/           # React frontend application
  src/
    components/   # UI components (shadcn/ui)
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API route handlers
  storage.ts      # Database access layer
  db.ts           # Database connection
  replit_integrations/  # AI service integrations
shared/           # Shared code between client and server
  schema.ts       # Drizzle database schema
  routes.ts       # API route type definitions
```

## External Dependencies

### AI Services
- **Google Gemini**: Text and image generation via Replit AI Integrations
- **Environment Variables**: `AI_INTEGRATIONS_GEMINI_API_KEY`, `AI_INTEGRATIONS_GEMINI_BASE_URL`
- **Models**: gemini-2.5-flash (text), gemini-2.5-flash-image (image generation)

### Database
- **PostgreSQL**: Primary data store
- **Environment Variable**: `DATABASE_URL` (connection string)
- **ORM**: Drizzle with drizzle-kit for migrations

### UI Libraries
- **Radix UI**: Accessible component primitives for dialogs, dropdowns, tooltips, etc.
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Key NPM Packages
- `@tanstack/react-query`: Data fetching and caching
- `wouter`: Client-side routing
- `zod`: Schema validation for API inputs
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `framer-motion`: Animations (noted in requirements)