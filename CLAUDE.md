# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Production build
- `npm run build:dev` - Development build (with development mode)
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React-based landing page application built with modern web technologies:

### Tech Stack
- **Vite** - Build tool and dev server
- **React 18** - UI library with TypeScript
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management
- **Tailwind CSS** - Styling framework
- **shadcn/ui** - Component library built on Radix UI
- **Lucide React** - Icon library

### Project Structure

**Core Application Files:**
- `src/main.tsx` - Application entry point
- `src/App.tsx` - Root component with routing, providers, and global components
- `src/pages/` - Page components (Index, LandingPage, NotFound)

**Component Architecture:**
- `src/components/ui/` - Reusable UI components from shadcn/ui (buttons, cards, forms, etc.)
- `src/components/` - Business-specific components (CountdownTimer, ExecutiveButton, FeatureList, etc.)
- `src/hooks/` - Custom React hooks (use-mobile, use-toast)
- `src/lib/utils.ts` - Utility functions (includes clsx/tailwind-merge utilities)

**Styling & Configuration:**
- `tailwind.config.ts` - Tailwind configuration with custom theme
- `components.json` - shadcn/ui configuration
- `src/index.css` - Global styles and CSS variables
- Custom CSS variables for theming (primary, accent, premium colors, etc.)

### Key Features

**Landing Page Components:**
- Premium-styled cards and sections
- Countdown timer functionality
- Executive-themed buttons and styling
- Feature lists and price comparisons
- Responsive design with mobile-first approach

**Routing:**
- Single-page application with React Router
- Index page (`/`) renders LandingPage component
- Catch-all route (`*`) for 404 handling

**State Management:**
- TanStack Query for server state
- Context providers for tooltips and toast notifications
- Custom hooks for mobile detection and toast management

**UI System:**
- Consistent design system with shadcn/ui components
- Custom theme with executive/premium styling
- Responsive breakpoints and mobile optimization
- Toast notifications (dual implementation: Radix Toast + Sonner)

### Development Notes

- Uses TypeScript for type safety
- ESLint configured for code quality
- Path aliases configured (`@/` maps to `src/`)
- Component library follows Radix UI patterns
- Styling uses Tailwind with CSS-in-JS via class-variance-authority for component variants