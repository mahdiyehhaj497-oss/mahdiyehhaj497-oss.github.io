# Mahdiyeh Hajesmaily — Portfolio

Personal bilingual (EN / FA) portfolio built with React, Vite and Tailwind CSS.

Live: https://mahdiyehhaj497-oss.github.io

## Run locally

```bash
npm install
npm run dev
```

## Edit the content

All texts (English and Persian) live in one file: `src/i18n.jsx`.
To change a sentence, edit it in both the `en` and `fa` sections.

- Components: `src/components/`
- Resume file: `public/resume.pdf`
- Favicon, 404 page, robots.txt, sitemap.xml: `public/`

## Deploy

Every push to `main` is built and deployed automatically to GitHub Pages
by GitHub Actions (`.github/workflows/deploy.yml`).