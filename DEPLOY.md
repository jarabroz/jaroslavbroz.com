# Deploying jaroslavbroz.com

The site is a Next.js static export: `npm run build` writes plain files to `out/`.

## 1. Push to GitHub (account `jarabroz`)

1. Create an empty repo on github.com, e.g. `jaroslavbroz.com` (no README).
2. In this folder:

```bash
git init -b main
git add .
git commit -m "Initial site"
git remote add origin https://github.com/jarabroz/jaroslavbroz.com.git
git push -u origin main
```

## 2. Connect to Cloudflare

Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git, pick the repo.

| Setting | Value |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Environment variable | `NODE_VERSION` = `22` |

Every push to `main` now deploys automatically.

## 3. Custom domain

In the Pages project: Custom domains > Set up a domain > `jaroslavbroz.com`.
Since the domain's DNS is already on Cloudflare, it adds the records and HTTPS for you.
Repeat for `www.jaroslavbroz.com`. Then set a redirect from www to the apex
(Rules > Redirect Rules) if you want one address.

## Before going live

- Replace the `JB` placeholder in `app/page.tsx` with a photo (`public/jaroslav.jpg`).
- Add an email or contact form if you want one besides LinkedIn.
- Add a 1200x630 preview image for LinkedIn shares (`openGraph.images` in `app/layout.tsx`).
- Check with Dlubal that naming the company, products and award is fine.
