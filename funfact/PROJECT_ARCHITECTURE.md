# Project Architecture — funfact

## Purpose
Brief overview of the project's structure, responsibilities, and conventions to help contributors understand and extend the app.

## Goals
- Keep the app small and focused (single-page React + Vite + TypeScript)
- Encourage simple component boundaries and clear folder structure
- Use TypeScript for type-safety and ESLint/Prettier for consistent style

## Tech stack
- Framework: React + TypeScript
- Bundler/dev server: Vite
- Linting/formatting: ESLint + Prettier
- Testing (recommended): Vitest / React Testing Library

## High-level structure

Repository (relevant):

- funfact/
  - public/           -> static assets served as-is
  - src/              -> application source
    - assets/         -> images, fonts, icons
    - main.tsx        -> app bootstrap (render + providers)
    - index.css       -> global styles
    - App.tsx         -> root app component (routes, layout)
    - App.css         -> app-specific styles
  - package.json      -> scripts and dependencies
  - tsconfig.*        -> TypeScript configs
  - vite.config.ts    -> Vite configuration

Keep components small and colocate related styles next to components when it makes sense.

## `src` conventions
- Components: PascalCase filenames (e.g., `MyButton.tsx`). Keep components in `src/components/` if they grow beyond 1–2 files.
- Hooks: `useXxx.ts` in `src/hooks/`.
- Utilities: `src/lib/` or `src/utils/` for pure helpers.
- Types: `src/types/` or `src/@types/` for shared TypeScript types.

## State management
- Small apps: use React `useState` / `useReducer` and Context for app-wide state.
- If the app grows: adopt a lightweight state library (Zustand, Redux Toolkit).

## Routing
- Use `react-router` if multiple views are needed. Keep route declarations in `src/App.tsx` or a dedicated `src/routes/` file.

## Styling
- Simple projects: CSS modules or plain CSS (current project uses `App.css`/`index.css`).
- For larger scale: adopt CSS-in-JS or a design-system approach and centralize tokens in `src/styles/`.

## Tests
- Add unit tests beside the modules (e.g., `Component.test.tsx`) using Vitest + Testing Library.

## Linting & Formatting
- ESLint + Prettier configured in the repository; run `npm run lint` and `npm run format` before commits.

## Build & Run
- Dev: `npm run dev` (Vite)
- Build: `npm run build`
- Preview: `npm run preview`

## Environment variables
- Place frontend runtime vars in `.env` files (e.g., `.env.local`). Document required variables in this file if the app depends on them.

## CI / CD (recommended)
- Basic pipeline: install, lint, test, build. Deploy `dist/` to static host (Netlify, Vercel, GitHub Pages).

## Contribution notes
- Keep PRs small and focused. Include a short description and testing notes.
- Follow the TypeScript strictness and lint rules in repo.

## Where to start reading the code
- App bootstrap: `src/main.tsx`
- Root UI and routes: `src/App.tsx`
- Example component: `src/App.tsx`

## Extending the architecture
- Add `src/services/` for API clients.
- Add `src/state/` for centralized state logic when needed.

---
If you'd like, I can: add this file to the repository (done), update README with a short link to it, or expand any section into more detail.
