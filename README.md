# Obsidian Game Store

A React and TypeScript rebuild of the Obsidian game catalog, deployed as a
static single page app to GitHub Pages.

## What changed from the old Django app

- Full rebuild in React 19, TypeScript and Vite. No backend required.
- Design system rewritten to a near black, museum catalog aesthetic:
  serif display type, thin sans body copy, no saturated color, slow
  critically damped scroll reveals, and a subtle film grain overlay.
- Name corrected from "Obsidian Game Club" to **Obsidian Game Store**.
- Genres reduced from nine to seven. Chess and Puzzle and Strategy now
  share one shelf, "Puzzle & Strategy", since they were the same kind
  of thinking game.
- New, Trending, Featured, and Editors Choice are no longer flags an
  admin flips. They are computed in `src/lib/categories.ts` from real
  fields: release date recency, play count, rating and review volume.
  Not every game qualifies for every shelf anymore.
- Games that live inside `pixelRealms` (Neon Blocks, Neural Grid,
  Tic-Tac-Toe) and `driftlineArcade` (Skyfold Aviary, VoidRunner) link
  straight to the specific game path on GitHub Pages, skipping each
  repo's own landing page.
- Every game card also links to its real GitHub source repository.
- Sign in and sign up are a working demo only. There is no server:
  an email creates a session in `localStorage`, and library and
  wishlist state persist per browser. See `src/lib/auth.tsx`.
- Individual game logic and assets are untouched, exactly as requested,
  ready for you to upgrade repo by repo later. The store only supplies
  the shell, the cover art, and the linking.

## Adding a new game later

Open `src/data/games.ts` and add an entry with a slug, genre, cover
image (drop an SVG or image into `public/covers`), repo URL and a
play URL. It appears in the catalog, its genre shelf, and is eligible
for New / Trending / Featured automatically based on its data.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploying

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and
publishes `dist` to GitHub Pages on every push to `main`.

1. Push this repository to GitHub.
2. In the repo, go to Settings, then Pages, and set Source to
   "GitHub Actions".
3. Push to `main`. The workflow sets the Vite base path automatically
   from the repository name, so the site works whether the repo is
   named `obsidian-game-store` or anything else.

If you ever build locally for a specific repo name, pass it explicitly:

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build
```
