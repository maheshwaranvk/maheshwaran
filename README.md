# Maheshwaran — Portfolio (React + Vite)

Personal portfolio and newsletter site for Maheshwaran, Solution AI Architect.
Built with **React 18**, **Vite**, **React Router** and **Framer Motion**.

## Run it on your computer

You need Node.js (version 18 or newer). In a terminal, inside this folder:

```bash
npm install      # first time only: downloads the libraries into node_modules/
npm run dev      # starts the site at http://localhost:5173 and reloads as you edit
```

Open the address it prints (usually http://localhost:5173). Stop it with `Ctrl + C`.

To build the final, optimised site:

```bash
npm run build    # creates the dist/ folder, which is what gets published
npm run preview  # previews that built version locally
```

## Where to edit things

| You want to change… | Edit this file |
|---|---|
| Any text, numbers, links, projects, programs, reading list | `src/data/site.js` |
| Colours, fonts, spacing, animations | `src/index.css` (colours are at the top) |
| A page's layout | `src/pages/*.jsx` |
| A reusable piece (header, photo mosaic, stats panel, pop-up…) | `src/components/*.jsx` |
| Photos | `public/assets/` and `public/assets/sessions/` |

Most day-to-day updates (new project, new newsletter pick, new session photo) only need `src/data/site.js`.

## Project structure

```
src/
  data/site.js          ← all content
  pages/                ← Home, About, Projects, WorkWithMe, Newsletter
  components/           ← Header, Footer, StatPanel, Mosaic, Lightbox, Pipeline,
                          Marquee, Typewriter, CountUp, NewsletterPopup, SubscribeForm…
  index.css             ← design system and animations
public/assets/          ← headshot and session photos
```

## Newsletter pop-up

Shows after the visitor has been on the site 12 seconds and scrolled 25% of a page.
Change the timing in `site.popup` inside `src/data/site.js`.

## Subscribe forms

They open your Substack subscribe page with the email filled in; Substack stores the list.
Check `substackPublication` in `src/data/site.js` matches your publication address.

## Publish (free)

1. Push this folder to a GitHub repository.
2. In Vercel or Netlify, import the repository. Framework preset: **Vite**.
   Build command `npm run build`, output folder `dist`.
3. Add your domain in the host's dashboard.

`vercel.json` and `public/_redirects` are included so page links like `/about` work after publishing.
