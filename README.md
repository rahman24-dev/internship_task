# Logic Loop — design agency site

A single-page site for a small design studio, built with Next.js and Tailwind CSS. Black-and-white editorial theme, light/dark toggle, and a redesigned portfolio, hero, and contact section.

## Note on AI assistance

I used Claude (Anthropic) to help speed up parts of this project — mainly restyling the components, writing the light/dark theme logic, and drafting this README. I reviewed and adjusted the output myself rather than using it as-is. Flagging this for transparency since it's part of an assignment.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- Tailwind CSS v4
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. The page auto-updates as you edit files.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.jsx      Root layout — fonts, metadata, theme-flash prevention script
  page.jsx         Composes the sections below
  globals.css       Design tokens (colors, fonts), animations, grain overlay
components/
  Header.jsx       Nav bar with logo, links, theme toggle, mobile menu
  Hero.jsx         Landing headline with line-reveal animation
  Services.jsx     Studio's four core services, as a divided list
  Portfolio.jsx    Selected work, alternating image/text rows
  Contact.jsx      Sentence-style contact form + direct contact info
  Footer.jsx       Simple footer
  ThemeToggle.jsx   Light/dark switch, persisted to localStorage
  MagneticButton.jsx Reusable hover effect for primary buttons/links
```

## Design notes

- **Color** — a warm off-black (`#1a1917`) and off-white (`#f6f4ee`) rather than pure black/white, defined once as CSS variables in `globals.css` and swapped via a `data-theme` attribute on `<html>`.
- **Type** — Fraunces (serif, for headings) paired with Inter (sans, for body/UI text), loaded through `next/font/google`.
- **Theme toggle** — an inline script in `layout.jsx` sets the theme before the page paints, so there's no flash of the wrong theme on load. The toggle itself lives in `ThemeToggle.jsx` and saves the choice to `localStorage`.
- **Motion** — kept deliberately minimal: one line-reveal animation on the hero when the page loads, plus hover states (image zoom, underline links, magnetic buttons) that only respond to user interaction. All motion respects `prefers-reduced-motion`.

## Known limitation in this environment

This was developed in a sandboxed environment without access to `fonts.googleapis.com`, so the production build couldn't fully verify the Google Fonts fetch there. This resolves automatically with a normal internet connection — `next/font/google` fetches and self-hosts the font files at build time.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)