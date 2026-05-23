# BitNByte IT — Company Website

The official BitNByte IT website. Built with React 18, Vite, Tailwind CSS, and Framer Motion. Designed to deploy on **GitHub Pages** with a custom domain (`bitnbyteit.com`).

> **Your Vision. Our Code. Your Success.**

---

## 🚀 Quick Start (Local Development)

Requires **Node.js 18+**.

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# Open http://localhost:5173
```

That's it. Edits to JSON files in `src/data/` reflect instantly thanks to Vite HMR.

---

## 📦 Project Structure

```
bitnbyte-it/
├── public/                  # Static assets served as-is
│   ├── CNAME               # Your custom domain (bitnbyteit.com)
│   ├── favicon.png         # Site favicon
│   ├── og-cover.png        # OpenGraph share image
│   └── posts/              # Blog post images
│
├── src/
│   ├── assets/             # Imported assets (logo, covers)
│   ├── components/         # Reusable React components
│   │   ├── Layout.jsx      # Page shell (Navbar + Outlet + Footer)
│   │   ├── Navbar.jsx      # Top nav + theme toggle
│   │   ├── Footer.jsx      # Footer + newsletter signup
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── Terminal.jsx    # Auto-typing terminal animation
│   │   ├── Marquee.jsx     # Tech-stack scrolling marquee
│   │   ├── ServiceCard.jsx # Reusable service card
│   │   ├── DeviceShowcase.jsx # Desktop/tablet/mobile mockups
│   │   ├── SectionHeading.jsx # Reusable section header
│   │   └── Logo.jsx        # Brand logo component
│   │
│   ├── pages/              # Route-level pages
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx     # Includes validated form → Google Sheets
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   ├── Help.jsx        # FAQ page
│   │   └── NotFound.jsx
│   │
│   ├── data/               # 🌟 ALL content lives here — edit JSON to update site
│   │   ├── site.json       # Company info, contacts, social, terminal text
│   │   ├── services.json   # Services list
│   │   ├── projects.json   # Portfolio projects
│   │   ├── reviews.json    # Client testimonials
│   │   ├── blog.json       # Blog posts
│   │   └── linkedin.json   # LinkedIn post links (paste your post URLs here)
│   │
│   ├── hooks/
│   │   └── useTheme.js     # Dark/light mode logic
│   │
│   ├── App.jsx             # Router + route registration
│   ├── main.jsx            # React entry
│   └── index.css           # Tailwind + custom utilities
│
├── .github/workflows/
│   └── deploy.yml          # Auto-deploy on push to main
│
├── google-apps-script.gs   # Backend for contact form (paste in Apps Script)
├── tailwind.config.js
├── vite.config.js
├── package.json
└── index.html
```

---

## ✏️ How to Update Content (JSON-Driven)

Everything on the website is driven by JSON files in `src/data/`. Edit a JSON file, save, and the site updates everywhere it appears.

### Change company info / contact details
Edit `src/data/site.json`:
```json
{
  "company": { "name": "...", "tagline": "...", "location": "..." },
  "contact": { "email": "...", "whatsapp": ["..."], "address": "..." },
  "social": { "linkedin": "...", "facebook": "...", "github": "..." }
}
```

### Add a new service
Append to the `services` array in `src/data/services.json`. The `icon` field is a [Lucide icon name](https://lucide.dev/icons/) — e.g. `"Code2"`, `"Cloud"`, `"Sparkles"`.

### Add a portfolio project
Append to `src/data/projects.json`. The `category` field automatically appears as a filter chip on the Portfolio page.

### Add a client review
Append to `src/data/reviews.json`. The `avatar` field is a 1–2 character initial string.

### Add a blog post
Append to `src/data/blog.json`. Set the `cover` path to point to an image in `public/posts/`.

### Add / update LinkedIn posts displayed on the site
Edit `src/data/linkedin.json`. Paste your LinkedIn post URLs in the `url` field:
```json
{
  "id": "li-4",
  "url": "https://www.linkedin.com/posts/bitnbyte-it-XXXXXX-activity-YYYYYYY",
  "title": "Your post title",
  "excerpt": "Short summary...",
  "image": "/posts/post1.jpg",
  "date": "2026-02-01"
}
```

### Update the auto-typing terminal animation
Edit the `terminalLines` array in `src/data/site.json`. Each string is a line that types itself out.

### Update the scrolling tech-stack marquee
Edit the `marquee` array in `src/data/site.json`.

---

## 📨 Contact Form → Google Sheets Setup

The contact form and newsletter send submissions to a Google Sheet via Google Apps Script. **Free, no backend needed.**

### One-time setup (10 minutes)

1. **Create the sheet**
   - Go to [sheets.google.com](https://sheets.google.com) and create a new sheet
   - Name it: `BitNByte Contacts`
   - (Optional) Add two tabs: `Contacts` and `Newsletter` — the script will create them automatically if missing

2. **Add the script**
   - In the sheet, click **Extensions → Apps Script**
   - Delete any existing code
   - Open `google-apps-script.gs` from this repo
   - Copy its entire contents and paste into the Apps Script editor
   - Press **Ctrl/Cmd + S** to save (give the project any name)

3. **Deploy as web app**
   - Click **Deploy → New deployment** (top right)
   - Click the gear ⚙️ icon → choose **Web app**
   - Description: `BitNByte form handler`
   - **Execute as:** Me (your account)
   - **Who has access:** Anyone
   - Click **Deploy**
   - **Authorize** when prompted (ignore Google's "unsafe" warning — it's your own script)
   - Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfy.../exec`)

4. **Paste the URL into the site**
   - Open `src/data/site.json`
   - Replace `REPLACE_WITH_YOUR_APPS_SCRIPT_URL` for both `contactFormUrl` and `newsletterUrl` with the URL you copied (same URL for both — the script routes by source)

5. **Test it!**
   - Run `npm run dev`, fill out the contact form, submit. A new row should appear in your sheet.

The script also auto-sends you an email notification on each new contact submission (configured for `bitnbyteit1@gmail.com`).

---

## 🌐 GitHub Pages Deployment

### Option A — Custom Domain (`bitnbyteit.com`) — recommended

**Step 1: Create the GitHub repo**
1. Go to [github.com/new](https://github.com/new)
2. Repo name: `bitnbyte-website` (or `bitnbyteit.com`)
3. **Public** is required for free GitHub Pages. (Private Pages needs GitHub Pro/Team.)
4. Don't initialize with README — we already have one

**Step 2: Push your code**
```bash
cd bitnbyte-it
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/bitNbyteIT/bitnbyte-website.git
git push -u origin main
```

**Step 3: Enable GitHub Pages**
1. Go to your repo → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` runs automatically on every push to `main`

**Step 4: Point your domain to GitHub Pages**
At your domain registrar (where you bought `bitnbyteit.com`), add these DNS records:

For the **root domain** (bitnbyteit.com), add 4 A records:
```
@   A   185.199.108.153
@   A   185.199.109.153
@   A   185.199.110.153
@   A   185.199.111.153
```

For **www.bitnbyteit.com**, add a CNAME record:
```
www   CNAME   bitNbyteIT.github.io
```

Then in repo **Settings → Pages → Custom domain**, enter `bitnbyteit.com` and check **Enforce HTTPS** once DNS propagates (usually 5 min – 24 hr).

The `public/CNAME` file is already set so the custom domain persists across deployments.

### Option B — `<username>.github.io/<repo>` path

If you'd rather use `https://bitnbyteit.github.io/bitnbyte-website/`:

1. Open `vite.config.js` and change `base: '/'` to `base: '/bitnbyte-website/'` (replace with your repo name)
2. Delete `public/CNAME` (don't need it for github.io subdomain)
3. Push to main — the action will deploy

### About private repos on GitHub Pages

**You cannot host a private repo on GitHub Pages with a free account.** GitHub Pages with a private source repo is only available on GitHub Pro, Team, or Enterprise plans. For a marketing website, public is fine — the code being visible is normal and expected. Don't put any secret keys or credentials in the repo.

---

## 🎨 Theming

- **Default theme is dark** (per your preference)
- Users can toggle via the sun/moon button in the navbar
- Choice is persisted in `localStorage`
- Brand colors live in `tailwind.config.js` under `theme.extend.colors.brand`

To tweak the brand palette, edit the `brand.blue` and `brand.orange` scales in `tailwind.config.js`.

---

## 🛠️ Tech Stack

- **React 18** + **Vite** — fast dev experience, static build
- **Tailwind CSS 3** — utility-first styling with custom brand tokens
- **Framer Motion** — page transitions and micro-animations
- **React Router v6** — `HashRouter` for GitHub Pages compatibility
- **Lucide React** — clean, consistent icons
- **Google Apps Script** — free backend for the contact form

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server (HMR enabled) |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 🎯 Roadmap Ideas

- Hook up a real CMS (Contentful, Sanity, or just keep JSON)
- Add a real blog post detail route (currently blog cards are display-only)
- Auto-fetch LinkedIn posts via their API (requires app approval)
- Add Google Analytics or Plausible
- Add Calendly embed for booking consultations
- Multi-language (Bangla / English)

---

## 📄 License

© BitNByte IT. All rights reserved.

---

Built with care by the BitNByte IT team. 🧡
