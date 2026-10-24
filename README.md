# Funeral Site (Next.js)

Top bar, header (4 menus) aur banner slider. Next.js latest, App Router, TypeScript.

## Run

```bash
npm install
npm run dev
```

## Folder structure

```
src/
├── app/                      # Routes, layout, global styles
├── components/
│   ├── layout/               # TopBar, Header (MainNav)
│   ├── sections/             # Banner (page sections)
│   └── ui/                   # Logo, Icons (chhote reusable parts)
├── config/                   # site.ts, navigation.ts, banner.ts
├── styles/                   # variables.css (colors, sizes, fonts)
└── types/                    # Shared TypeScript types
```

## Common changes

- **Menu add karna:** `src/config/navigation.ts` mein array mein item daalein.
- **Phone / welcome text / location:** `src/config/site.ts`.
- **Banner text, button, slides:** `src/config/banner.ts`. Photo ke liye `image` mein
  `/images/banner-1.jpg` jaisa path dein (file `public/images/` mein rakhein).
- **Colors / sizes:** `src/styles/variables.css`.
