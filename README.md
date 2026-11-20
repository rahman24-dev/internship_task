# Logic Loop — Design Agency Website

A responsive, single-page website for a small design and development studio. It covers the sections a studio site typically needs: services, selected work and a contact form. It includes a light/dark theme and is built to be fast, accessible and easy to maintain.

## Features

- **Responsive layout** — designed mobile-first; tested at phone, tablet and desktop widths.
- **Light and dark mode** — follows the visitor's system setting on first visit, can be toggled manually, and the choice is remembered. A small inline script applies the theme before first paint, so there is no flash of the wrong theme.
- **Sections** — Hero, Services, Selected Work (portfolio) and Contact, with a sticky header and mobile menu.
- **Contact form** — labelled fields, built-in browser validation, loading and success states.
- **Accessibility** — semantic HTML, a skip-to-content link, visible focus states, descriptive image alt text, `aria-label`s on icon buttons, and support for `prefers-reduced-motion`.
- **Optimised images** — project images are served through `next/image`.

## Tech stack

| Area      | Choice                                    |
| --------- | ----------------------------------------- |
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| UI        | React 19                                  |
| Styling   | Tailwind CSS v4                           |
| Icons     | [lucide-react](https://lucide.dev)        |
| Fonts     | System font stack (no external requests)  |

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command         | What it does                      |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Create a production build         |
| `npm start`     | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Project structure

```
app/
  layout.jsx        Root layout, metadata, theme initialisation script
  page.jsx          Composes the page sections
  globals.css       Design tokens (colours, fonts) and base styles
components/
  Header.jsx        Sticky navigation, theme toggle, mobile menu
  Hero.jsx          Headline, call to action, key facts
  Services.jsx      Service cards
  Portfolio.jsx     Project cards
  Contact.jsx       Contact details and enquiry form
  Footer.jsx        Footer
  ThemeToggle.jsx   Light/dark switch, persisted in localStorage
```

## Design decisions

- **Simple, consistent system.** One typeface family, one accent colour (blue), neutral slate greys, and a small set of reusable patterns (cards, buttons, section headings). Nothing is decorative without a reason.
- **Tokens, not hard-coded colours.** All colours are CSS variables defined once in `app/globals.css` and exposed as Tailwind utilities (`bg-page`, `text-muted`, `border-line`, `bg-accent`, and so on). Dark mode only redefines those variables, so components contain no `dark:` overrides.
- **Readable first.** Strong contrast in both themes, generous spacing, and a comfortable line length for body copy.
- **Minimal motion.** Only subtle hover and colour transitions, and they are disabled for visitors who prefer reduced motion.
- **No third-party font requests.** Using the system font stack keeps pages fast and avoids a network dependency at build time.

## Customising

- **Brand colours** — edit the variables at the top of `app/globals.css`.
- **Copy and content** — services are defined in `components/Services.jsx` and projects in `components/Portfolio.jsx`; both are plain arrays at the top of the file.
- **Images** — project images are loaded from Unsplash. If you use another host, add it to `images.remotePatterns` in `next.config.mjs`.

## Limitations

- **The contact form is a front-end demo.** It validates input and shows a success state, but does not send the message anywhere. To make it live, replace the `setTimeout` in `components/Contact.jsx` with a `fetch()` call to an API route or a form service.
- **Content is placeholder.** The studio name, projects, email address and figures are sample content for demonstration.

## AI assistance

I used Claude (Anthropic) as a coding assistant on this project, mainly for refining the UI and for drafting this README. I reviewed the result and can explain how any part of it works.
