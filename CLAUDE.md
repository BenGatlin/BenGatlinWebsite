# BenGatlinWebsite — Claude Code Project Guide

## Project Overview

Personal professional website for Ben Gatlin. The goal is a polished, performant site that serves as a hub for professional identity: bio, projects, writing, and contact.

## Tech Stack

Framework: **TBD** — likely Astro or Next.js. Decide before scaffolding begins.
Styling: **TBD** — leaning toward Tailwind CSS.
Hosting: **TBD** — likely Vercel or GitHub Pages.
Domain: **TBD**

Once decided, update this section and add a `package.json` / framework-specific config to the root.

## Directory Structure

```
BenGatlinWebsite/
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Route-level page components (or app/ for Next.js App Router)
│   ├── styles/       # Global styles, Tailwind config overrides
│   └── assets/       # Images, fonts, icons used in source
├── public/           # Static files served at root (favicon, robots.txt, OG images)
├── .claude/          # Claude Code project settings
├── CLAUDE.md         # This file
└── README.md         # GitHub-facing project description
```

## Conventions

### Naming
- Files and folders: `kebab-case` for pages and assets, `PascalCase` for component files.
- CSS classes: follow Tailwind utility-first conventions; avoid custom class names unless abstracting a complex pattern.
- Variables/functions: `camelCase` in JS/TS.

### Components
- Keep components small and focused on a single responsibility.
- Co-locate styles with components when framework supports it.
- Prefer composition over inheritance.

### Content
- Written content (bio, project descriptions) lives in `src/pages/` or a `src/content/` folder if using a CMS or Markdown pipeline.
- Images: optimize before committing. Use `.webp` where possible; keep originals in a separate untracked folder if needed.

### Git
- Branch naming: `feature/<short-description>`, `fix/<short-description>`.
- Commit messages: imperative mood, present tense ("Add hero section" not "Added hero section").
- Never commit build artifacts or `node_modules`.

## Development Workflow

```bash
# Install dependencies (once framework is chosen)
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Design Guidelines

- **Tone:** Professional but personal — clean, not corporate.
- **Typography:** Prioritize readability. Choose at most 2 typefaces.
- **Color palette:** TBD. Establish a primary, secondary, and neutral scale before building components.
- **Accessibility:** All interactive elements must be keyboard-navigable. Use semantic HTML. Target WCAG 2.1 AA.
- **Performance:** Aim for Lighthouse score ≥ 90 across all categories before launch.
- **Responsive:** Mobile-first. Test at 375px, 768px, and 1280px breakpoints minimum.

## Pages (Planned)

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, brief intro, links to key sections |
| About | `/about` | Bio, background, values |
| Projects | `/projects` | Portfolio of work |
| Writing | `/writing` | Blog or essays (optional) |
| Contact | `/contact` | Contact form or email link |

## Environment Variables

Store secrets in `.env.local` (never commit). Document required variables here:

| Variable | Purpose | Required |
|----------|---------|---------|
| *(none yet)* | | |

## Deployment

Target platform TBD. Once configured, document the deploy process and any required CI/CD steps here.

## Notes for Claude Code Sessions

- Confirm framework choice before writing any component code.
- When adding a new page, update the Pages table above.
- Do not add dependencies without noting them in this file under a `## Dependencies` section.
- Prefer editing existing files over creating new abstraction layers unless complexity clearly warrants it.
- When touching styles, keep changes scoped — avoid global CSS unless intentional.
