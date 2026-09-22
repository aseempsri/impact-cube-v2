# Impact Cube — React Website

React + TypeScript + Vite site for Impact Cube.
Deployed automatically to **GitHub Pages** on every push to `main`.

**Live site:** https://impactcube.in/

## Preview locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173/).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushing to `main` runs `.github/workflows/deployment.yaml`, which builds the app and
publishes `dist/` to GitHub Pages.

In the repo **Settings → Pages**:
1. Set Source to **GitHub Actions**
2. Under Custom domain, enter `impactcube.in` and save
3. Wait for DNS check, then enable **Enforce HTTPS**

### Hostinger DNS (impactcube.in)

Point the apex and `www` at GitHub Pages (keep MX / email TXT records as they are):

| Type | Name | Content | TTL |
|------|------|---------|-----|
| A | `@` | `185.199.108.153` | 300 |
| A | `@` | `185.199.109.153` | 300 |
| A | `@` | `185.199.110.153` | 300 |
| A | `@` | `185.199.111.153` | 300 |
| CNAME | `www` | `aseempsri.github.io` | 300 |

Delete the old Hostinger A record (`@` → `2.57.91.91`) and change `www` so it no longer points at `impactcube.in`.

## Structure

```
src/
  components/     Header, Footer, Layout, CubeModule, FaceCard, Placeholder, Icons
  data/faces.ts   Six faces + case studies + problem rows
  pages/          Home, TheCube, HowWeWork, OurWork, About, Contact, FacePage
  styles.css      Design tokens + shared styles
legacy/           Original static HTML/CSS/JS reference
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/the-cube` | The Cube |
| `/how-we-work` | How We Work |
| `/our-work` | Our Work |
| `/about` | About |
| `/contact` | Contact |
| `/face/:slug` | Face detail |
