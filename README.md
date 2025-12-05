<div align="center">
  <h1>Boltin · Industrial Fastener Manufacturer</h1>
  <p>A professional B2B website for a precision fastener manufacturing company.</p>
</div>

## Feature Highlights

- **Multi-page routing** with React Router for seamless navigation between pages
- **Industrial hero** with layered typography, manufacturing imagery, and dual CTAs ("View Products" / "Request a Quote")
- **Featured products** grid showcasing Solid Rivets, Double-Cap Rivets, Hollow Rivets, and Binding Posts with photography and specifications
- **Products page** with category filtering, material information cards, and customization options sidebar
- **Solutions page** featuring industry-specific applications (Machinery, Leather Goods, Stationery, Electronics, Furniture)
- **About page** with company story, manufacturing process, and quality management certifications
- **Contact page** with product inquiry form, FAQ section, and company contact information
- **Scroll to top** automatically returns to top when navigating between pages
- **Responsive layout** built entirely with utility classes so sections stack elegantly on any device

---

## Tech Stack

| Layer        | Details                           |
| ------------ | --------------------------------- |
| Framework    | React 19 + Vite                   |
| Language     | TypeScript                        |
| Routing      | React Router DOM v7               |
| Styling      | Tailwind-esque utility classes    |
| Icons        | [`lucide-react`](https://lucide.dev) |

All content is front-end only, making it easy to deploy to any static host.

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production (optional)
npm run build
```

- Dev server defaults to `http://localhost:5173`.
- Production files output to `dist/` for hosting on Vercel, Netlify, Render, or static S3/CDN buckets.

---

## Pages & Routes

- `/` - Home page with hero, features, featured products, industries preview, and about teaser
- `/products` - Browse all products with category filtering
- `/solutions` - Industry-specific fastener applications and use cases
- `/about` - Company story, manufacturing process, and quality certifications
- `/contact` - Product inquiry form and company contact information

---

## Project Layout

### Pages
- `pages/Home.tsx` – Main landing page combining hero, features, and product showcase
- `pages/Products.tsx` – Product catalog with filtering and material information
- `pages/Solutions.tsx` – Industry solutions and application showcases
- `pages/About.tsx` – Company information and manufacturing process
- `pages/Contact.tsx` – Product inquiry form and contact details

### Components
- `App.tsx` – Main app shell with routing configuration
- `components/Layout.tsx` – Shared layout with Navbar and Footer
- `components/ScrollToTop.tsx` – Auto-scroll to top on route change

### Data & Types
- `constants.ts` – Product data, navigation links, features, and solutions
- `types.ts` – TypeScript interfaces for Product, Feature, Solution, etc.

Sections are modular so you can reorder, reuse, or swap them for other campaigns without heavy refactors.

---

## Key Features

- **Smooth Navigation**: React Router provides seamless page transitions
- **Auto Scroll**: Automatically scrolls to top when navigating between pages
- **Category Filtering**: Products page allows filtering by fastener type
- **Responsive Design**: Fully responsive layout that works on all devices
- **Industrial UI**: Clean, professional design with manufacturing aesthetic

---

© 2025 Boltin Manufacturing Co., Ltd. (concept project). All brand names are fictional and for demonstration only.
