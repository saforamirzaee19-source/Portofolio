# Safora Mirzaee — Portfolio (React version)

This is the original static portfolio (`index.html`, `services.html`, `CSS/style.css`,
`CSS/services.css`, `JS/main.js`, `JS/services.js`) converted into a React + Vite project.

**Nothing about the original markup, styling, or behavior was changed** — only the file
organization changed:

- Every HTML section became a React component with the exact same tags, text, classes,
  and attributes (only `class` → `className`, `for` → `htmlFor`, and self-closing tags,
  which JSX requires).
- `CSS/style.css` and `CSS/services.css` were copied byte-for-byte into `src/styles/`.
- `JS/main.js` and `JS/services.js` were copied logic-for-logic into
  `src/hooks/useMainEffects.js` and `src/hooks/useServicesEffects.js`. The only change is
  that the code now runs inside a `useEffect()` (after React renders the page) instead of
  on the `DOMContentLoaded` / `load` events — the function bodies are otherwise identical.
- Images and the CV PDF were copied into `src/assets/`.

## Structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects, Journey, Contact, Footer, BackToTop
  pages/        Home.jsx (= index.html), Services.jsx (= services.html)
  hooks/        useMainEffects.js (= JS/main.js), useServicesEffects.js (= JS/services.js)
  styles/       style.css, services.css (unchanged)
  assets/       images/, cv/
```

Routing: `/` shows the Home page, `/services` shows the Services page
(via `react-router-dom`'s `HashRouter`, so it works from a static file server too).

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL.

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

The GitHub Actions workflow builds the app and publishes the complete `dist/`
directory, including its hashed JavaScript, CSS, and image assets. In the
repository settings, set **Pages → Build and deployment → Source** to **GitHub
Actions**. Push or merge changes to `main` to deploy.

Note: `services.html` in the original project referenced `images/ai-icon.png`,
`../images/src-bgc.png`, and `../AI-robot.png`, none of which existed in the uploaded
project files — those broken references were left exactly as-is.
