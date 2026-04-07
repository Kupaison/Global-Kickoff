# GLOBAL KICKOFF™ — Website

> Live. Loud. Global. — World Cup Watch Party Event Brand

A production-ready Next.js website for the GLOBAL KICKOFF™ event brand. Built for conversion, brand credibility, and scalability across multiple cities.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| React 18 | UI |
| Tailwind CSS 3 | Styling |
| Google Fonts | Typography (Bebas Neue + DM Sans) |
| Vercel | Deployment |

---

## Local Development

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.local.example .env.local
# Edit .env.local with your values
```

### 4. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## GitHub Setup

```bash
# 1. Initialize git (if not done)
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "feat: initial GLOBAL KICKOFF™ site"

# 4. Create repo on GitHub (github.com → New Repository)
# Name it: global-kickoff (or your preference)

# 5. Connect and push
git remote add origin https://github.com/YOUR_USERNAME/global-kickoff.git
git branch -M main
git push -u origin main
```

---

## Vercel Deployment

### Option A — Import from GitHub (recommended)
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your `global-kickoff` GitHub repository
3. Vercel auto-detects Next.js — no config needed
4. Add environment variables from `.env.local.example` in the Vercel dashboard
5. Click **Deploy**

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel
# Follow prompts
```

### Custom Domain
1. In Vercel → Project → Settings → Domains
2. Add `globalkickoff.com` (or your domain)
3. Update DNS at your registrar per Vercel's instructions

---

## Customization Guide

### 🎟️ Update Ticket Links
Edit `components/sections/Events.js` or `lib/config.js`:
```js
ticketUrl: "https://eventbrite.com/e/YOUR-EVENT-ID"
```

### 📅 Add / Edit Events
Edit the `EVENTS` array in `lib/config.js`:
```js
{
  city: "Miami",
  venue: "Wynwood Venue Name",
  match: "Brazil vs Argentina",
  date: "June 28, 2026",
  time: "Doors 7:00 PM",
  badge: "SELLOUT",
  ticketUrl: "https://...",
  soldOut: false,
  featured: true,
}
```

### 🌆 Update City Expansion List
Edit `CITIES` in `lib/config.js`. Status options:
- `"active"` — shows green LIVE badge
- `"next"` — shows gold NEXT badge
- `"coming-soon"` — shows muted SOON badge

### 📧 Wire Up Email Capture
In `components/sections/EmailCapture.js`, replace the `setTimeout` mock with your real provider:

**Mailchimp:**
```js
const res = await fetch(process.env.NEXT_PUBLIC_MAILCHIMP_URL, {
  method: "POST",
  body: JSON.stringify({ email_address: email, status: "subscribed" }),
  headers: { "Content-Type": "application/json" },
});
```

**Supabase:**
```js
const { error } = await supabase.from("leads").insert({ email, city });
```

### 🎨 Update Brand Colors
Edit `tailwind.config.js` → `theme.extend.colors.brand`:
```js
green: "#39FF14",   // neon green accent
gold: "#D4AF37",    // gold accent
black: "#070707",   // background
```

### 🔤 Change Fonts
Edit `app/layout.js`. Current stack:
- **Display:** Bebas Neue (headers, numbers)
- **Body:** DM Sans (copy, descriptions)
- **Mono:** DM Mono (labels, tags, tracking)

To change, swap the Google Font imports and update `--font-display`, `--font-body`, `--font-mono` variables.

### 📱 Social Links
Edit `BRAND.social` in `lib/config.js` — or directly in `components/sections/Footer.js`.

### 📞 Contact Emails
Edit `BRAND.email` in `lib/config.js`.

---

## Project Structure

```
global-kickoff/
├── app/
│   ├── layout.js          # Root layout, fonts, metadata
│   ├── page.js            # Home page (assembles all sections)
│   └── globals.css        # Global styles, animations, utilities
├── components/
│   ├── Nav.js             # Sticky navigation
│   ├── ScrollReveal.js    # Intersection observer scroll animations
│   ├── ui/
│   │   ├── CTABlock.js    # Reusable CTA component
│   │   ├── EventCard.js   # Reusable event card
│   │   └── CityCard.js    # Reusable city card
│   └── sections/
│       ├── Hero.js        # Hero / above the fold
│       ├── Ticker.js      # Marquee text strip
│       ├── About.js       # Experience pillars
│       ├── Events.js      # Upcoming events
│       ├── WhyAttend.js   # Six reasons to attend
│       ├── Cities.js      # City expansion map
│       ├── Partners.js    # Sponsor / venue tiers
│       ├── EmailCapture.js# Lead capture form
│       └── Footer.js      # Footer
├── lib/
│   └── config.js          # ← EDIT HERE: events, cities, brand info
├── public/
│   └── robots.txt
├── .env.local.example     # Environment variable template
├── .gitignore
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
└── package.json
```

---

## SEO

- Metadata defined in `app/layout.js` — update title, description, and OG tags
- `public/robots.txt` — update sitemap URL when live
- Add a `app/sitemap.js` file for dynamic sitemap generation

---

## Performance Tips

- Replace all placeholder `ticketUrl` values with real Eventbrite or external links
- Add a `favicon.ico` to `/public`
- Add OG image at `/public/og-image.png` (1200×630px) and reference in metadata
- Consider adding Google Analytics via `NEXT_PUBLIC_GA_MEASUREMENT_ID`

---

## Support

For questions about customization:
→ partnerships@globalkickoff.com  
→ hello@globalkickoff.com
