# BenGatlinWebsite

Personal professional website for Ben Gatlin — built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build tools. Deployable directly to GitHub Pages.

## Stack

- HTML5 (semantic, accessible)
- CSS3 with custom properties (no preprocessor)
- Vanilla JavaScript (ES6+)
- Fonts: Playfair Display + Lora (Google Fonts)

## Pages

| File | Route | Description |
|------|-------|-------------|
| `index.html` | `/` | Hero, intro |
| `about.html` | `/about.html` | Bio, areas of interest |
| `experience.html` | `/experience.html` | Education, work timeline, resume download |
| `projects.html` | `/projects.html` | Project card grid |
| `contact.html` | `/contact.html` | Email, LinkedIn, GitHub links |

## Structure

```
css/styles.css    — All styles
js/scripts.js     — Mobile nav, scroll reveal, active link
assets/           — profile.jpg, resume.pdf
```

## Local Development

No build step needed. Open any `.html` file directly in a browser, or use a simple local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deployment

GitHub Pages — push to `main`. Enable in repo Settings → Pages → Deploy from branch → main → / (root).

See [CLAUDE.md](./CLAUDE.md) for full conventions and how to add projects or experience entries.
