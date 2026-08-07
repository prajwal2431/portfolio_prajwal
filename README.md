# Prajwal Nivangune — Portfolio

Modern portfolio focused on **Agentic AI Engineering** and **Cloud Data Engineering**.

## Stack

- React 18 + TypeScript + Vite
- Framer Motion
- CSS variables for light / dark themes

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

This repo is a **project site** at `https://prajwal2431.github.io/portfolio_prajwal/`. Vite uses `base: '/portfolio_prajwal/'` so assets load under that path.

1. In the repo on GitHub: **Settings → Pages → Build and deployment → Source** → choose **GitHub Actions** (not “Deploy from a branch”).
2. Push to `main`; the **Deploy to GitHub Pages** workflow builds `dist/` and publishes it.

Do not point Pages at the repository root: the root `index.html` is for local dev only (`/src/main.tsx`) and will 404 in production.

Legacy static site files are preserved under `_legacy/`.
