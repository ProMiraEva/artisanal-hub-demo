# Artisanal Hub — Handcrafted Wonders

A complete, production-ready React web application for a handmade crafts marketplace. Built with modern tooling and designed for artisans to showcase and sell their work.

## What's included

```
artisanal-hub/
├── src/
│   ├── components/       # UI components (Navbar, Hero, ProductCard, ...)
│   ├── constants/        # Categories, translations, theme
│   ├── services/         # Data layer (mock data, easy to swap for an API)
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main app
│   └── index.css         # Global styles
├── index.html            # Entry HTML
├── package.json          # Dependencies
├── vite.config.ts        # Build configuration
├── tailwind.config.js    # Tailwind CSS config
└── README.md
```

## Tech stack

- **React 18** — UI library
- **Vite 6** — build tool
- **Tailwind CSS 3** — styling
- **TypeScript** — type safety
- **Lucide React** — icons

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build
# → output in dist/
```

## Deploy anywhere

After `npm run build`, the `dist/` folder is a static site. Deploy it to:

- **GitHub Pages** — push `dist/` to a repo, enable Pages
- **Netlify / Vercel / Cloudflare Pages** — drag & drop `dist/`
- **Any static host** — upload `dist/`

## Customize

| What | Where |
|---|---|
| Site name & tagline | `src/constants/translations.ts` → `BRAND` |
| Categories | `src/constants/translations.ts` → `CATEGORIES` |
| Navigation | `src/constants/translations.ts` → `NAV_ITEMS` |
| Colors & theme | `src/constants/theme.ts` |
| Products (mock) | `src/services/mockData.ts` |
| Layout & sections | `src/App.tsx` |
| Components | `src/components/` |

Replace the mock data in `src/services/mockData.ts` with your own products, images and artisans.

## License

Personal and commercial use. You may modify and deploy for your own projects.
