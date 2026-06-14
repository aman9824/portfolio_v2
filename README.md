# Aman Patel — Portfolio

A fast, animated, recruiter-ready portfolio for a **Forward-Deployed AI Engineer**.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · lucide-react.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build / serve:

```bash
npm run build
npm run start
```

> Built and verified on Node v26 / npm 11. If a build issue appears on a very new Node, switch to Node 22 LTS (`nvm install 22 && nvm use 22`) and re-run `npm install`.

---

## Editing content

**All text lives in one file: [`lib/content.ts`](lib/content.ts)** — profile, hero, stats, about, projects, experience, skills, certifications. Edit there; components read from it.

- This is a **public** site — client work is described generically (industry + scale only, e.g. "Fortune-50 automotive customer"). No client names or confidential project specifics.
- **Hero highlights:** wrap a word in `*asterisks*` in `hero.headline` to render it as a gradient highlight.
- **Resume download:** replace `public/Aman_Patel_Resume.pdf` with your latest export (buttons point to `/Aman_Patel_Resume.pdf`).
- **Project links:** as each repo ships, add its `repo` / `demo` URL and flip `status` to `"Live"`.

---

## Deploy to Vercel (updates amanpatel.vercel.app)

1. Push this folder to a GitHub repo (e.g. `github.com/aman9824/portfolio`):
   ```bash
   git init && git add . && git commit -m "New portfolio"
   git branch -M main
   git remote add origin https://github.com/aman9824/portfolio.git
   git push -u origin main
   ```
2. In Vercel, open your existing **amanpatel** project → Settings → Git → connect this repo (or import fresh and set the domain to `amanpatel.vercel.app`).
3. Deploy. Vercel auto-detects Next.js — no env vars or extra config needed.

CLI alternative: `npm i -g vercel && vercel --prod`.

---

## Project structure

```
app/
  layout.tsx          # SEO / Open Graph metadata
  page.tsx            # composes all sections
  globals.css         # Tailwind + custom utilities (gradient text, grid, marquee)
components/
  Nav, Hero, Stats, Marquee, About, Projects, Experience,
  Skills, Certifications, Contact, Footer
  ui/Reveal.tsx       # scroll-reveal animation
  ui/Section.tsx      # section wrapper + heading
lib/content.ts        # ⭐ single source of truth for all content
public/               # resume PDF, favicon, OG image
```

---

## Theming

Colors live in [`tailwind.config.ts`](tailwind.config.ts): `navy` (background), `clay` + `amber` (accents/gradients), `sky` (secondary), `ink` (text). Animations: `float`, `marquee`, `gradient`, `pulse-slow`. Change them once there to re-skin the whole site.
