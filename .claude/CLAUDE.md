# amigo-www

## Overview

Amigo is a Next.js 12 web app with Firebase backend (Auth, Firestore, Cloud Functions). It includes user signup, login, activation flow, and a protected dashboard.

## Tech Stack

- **Framework:** Next.js 12 (Pages Router) with TypeScript
- **UI:** React 18, React-Bootstrap 5, CSS Modules
- **Backend:** Firebase (Auth, Firestore, Cloud Functions)
- **Auth:** Firebase Auth via `AuthContext` with cookie-based session (`nookies`)
- **Hosting:** Firebase Hosting (static export via `next build`)

## Project Structure

```
pages/            # Next.js pages (index, login, signup, activate, dashboard)
pages/api/        # API routes
components/       # Shared components (Navbar, ProtectedRoute)
context/          # React context providers (AuthContext)
config/           # Firebase config
functions/        # Firebase Cloud Functions (TypeScript)
styles/           # Global CSS and CSS Modules
public/           # Static assets
```

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint

## Git Rules

- Never run `git commit` directly — the user's SSH key requires a passphrase they enter manually
- Stage files with `git add`, then give the user the exact `git commit` command to run themselves
- Wait for the user to confirm the commit is done before proceeding

## Guidelines

- Use TypeScript for all new files
- Use React-Bootstrap for UI components
- Follow existing patterns in `pages/` and `components/`
- Firebase config lives in `config/firebase.ts`
- Auth state is managed via `context/AuthContext.tsx` and `components/ProtectedRoute.tsx`
