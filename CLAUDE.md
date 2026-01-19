# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server (Vite, port 5173)
- `npm run build` - Production build to `/dist`
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

This is a React 19 landing page application using Vite 7 as the build tool.

**Tech Stack:**
- React 19 with React Router 7 (HashRouter for static hosting compatibility)
- Material-UI (MUI) for components
- Emotion for CSS-in-JS styling

**Path Alias:** `@` maps to `/src`

**Code Organization:**
- `src/pages/` - Route-based page components (Home, NotFound)
- `src/components/` - Reusable UI components (Header, Footer, ParticlesBackground)
- `src/theme.js` - Centralized MUI theme with custom color palette

**Theme Colors:**
- Primary: black (#000), Secondary: white (#fff), Accent: cyan (#00ccff)
- Custom background palette: dark, dark2, medium, light

## Code Style

- No semicolons
- Single quotes
- 2 space indentation
- Trailing commas (ES5 style)
- Arrow parens always required
