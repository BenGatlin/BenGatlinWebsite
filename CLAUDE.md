# BenGatlinWebsite — Claude Code Project Guide

## Project Overview

Personal professional website for Ben Gatlin. Plain HTML, CSS, and vanilla JavaScript — no framework, no build tools. Deployable to GitHub Pages by pushing to `main` (once Pages is enabled in repo settings: Settings → Pages → Deploy from branch → main → / (root)).

## Stack

- **HTML**: Semantic HTML5, one file per page
- **CSS**: Single `css/styles.css` with CSS custom properties for design tokens
- **JS**: Single `js/scripts.js` — mobile nav, active link, smooth scroll, scroll reveal
- **Fonts**: Playfair Display + Lora via Google Fonts (loaded in every `<head>`)
- **Hosting**: GitHub Pages (static, no server required)
- **Build tool**: None

## File Structure

```
BenGatlinWebsite/
├── index.html          # Home / Hero
├── about.html          # About Me
├── experience.html     # Resume / Timeline
├── projects.html       # Project Cards
├── contact.html        # Contact Links
├── css/
│   └── styles.css      # All styles — see section comments inside
├── js/
│   └── scripts.js      # Mobile nav, active link, smooth scroll, scroll reveal
├── assets/
│   ├── profile.jpg     # Profile photo (used on index + about)
│   └── resume.pdf      # Downloadable resume (linked from experience.html)
├── .claude/
│   └── settings.local.json
├── .gitignore
├── CLAUDE.md           # This file
└── README.md
```

## Design Tokens

All defined as CSS custom properties in `css/styles.css` under section `2. DESIGN TOKENS`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-green-dark` | `#1A3320` | Navbar, hero background, dark accents |
| `--color-green-mid` | `#2C4A2E` | Hover states, education card |
| `--color-brown-dark` | `#3D2B1A` | Footer background, dark buttons |
| `--color-brown-mid` | `#6B4C2A` | Timeline dots, card top borders, tags |
| `--color-cream` | `#F5F0E8` | Page backgrounds, navbar text |
| `--color-cream-dark` | `#E8E0D0` | Alternate section backgrounds, borders |
| `--font-heading` | Playfair Display, Georgia, serif | All `h1`–`h4` elements |
| `--font-body` | Lora, Georgia, serif | Body copy, nav links, labels |
| `--max-width` | `1100px` | `.container` max width |
| `--nav-height` | `70px` | Fixed navbar height; used for padding offsets |

## Conventions

### Naming
- HTML files: lowercase, no hyphens (`index.html`, `about.html`)
- CSS classes: `kebab-case` (`.nav-links`, `.timeline-card`, `.project-card`)
- JS variables/functions: `camelCase`
- Assets: `kebab-case` (e.g. `profile-2024.jpg`)

### HTML Patterns
- Every page shares the same navbar and footer — copy both blocks verbatim when adding a page
- All pages have `<main style="padding-top: var(--nav-height);">` to account for the fixed nav (except `index.html`, which uses the hero for this offset)
- Scroll reveal: add class `reveal` to any element you want to animate in on scroll; JS handles the rest

### Placeholders
- All content placeholders are marked with `<!-- PLACEHOLDER: ... -->` HTML comments
- Search for `PLACEHOLDER` across HTML files to find everything that needs real content

## How to Add a New Project Card

1. Open `projects.html`
2. Copy one of the existing `<article class="project-card ...">` blocks
3. Paste it inside `.projects-grid` before the "Coming Soon" card
4. Replace all `<!-- PLACEHOLDER -->` values: title, description, tags, and link
5. Remove `project-card--coming-soon` class if copying from that card

## How to Add an Experience Entry

1. Open `experience.html`
2. Find the `<!-- TIMELINE ENTRY TEMPLATE -->` comment block
3. Copy any `<div class="timeline-entry ...">` block
4. Paste it at the top of `.timeline` (most recent experience first)
5. Replace all `<!-- PLACEHOLDER -->` values: role, company, dates, bullet points

## How to Update Assets

- **Profile photo**: Replace `assets/profile.jpg` (keep the same filename, or update `src` attributes in `index.html` and `about.html`)
- **Resume**: Replace `assets/resume.pdf` (keep the same filename, or update the `href` in `experience.html`)

## Git Workflow

- Branch naming: `feature/<short-description>`, `fix/<short-description>`
- Commit messages: imperative mood ("Add projects section" not "Added projects section")
- Push to `main` to deploy

## Deployment (GitHub Pages)

1. Go to the repository on GitHub
2. Settings → Pages → Build and deployment
3. Source: **Deploy from a branch**
4. Branch: `main` / `/ (root)`
5. Save — the site will be live at `https://bengatlin.github.io/BenGatlinWebsite/`

## Responsive Breakpoints

| Breakpoint | Width | Key changes |
|-----------|-------|-------------|
| Desktop | > 1024px | Full layouts, side-by-side columns |
| Tablet | ≤ 1024px | Condensed columns, stacked education card |
| Mobile | ≤ 768px | Single column, hamburger nav, stacked footer |
