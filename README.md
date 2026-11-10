# Teba Connects - Web Application

A modern, high-performance web platform built with **Next.js (App Router)** and **Tailwind CSS**, directly mapped to the 8-page architecture and visual identity of **Teba Connects**.

---

## 🏗 Project Architecture

### 1. Routes (`/app`)
- `/` — **Home Page**: Split hero, 3 core pillars, 5 core services, 3 regional market cards, 11 key industry sectors, featured convenings, CTA banner.
- `/about-us` — **About Us Page**: Corporate overview, Vision & Mission cards, corporate origin story, Meet Our Founder & CEO (Teba H. Molla), executive quote, 4 core values.
- `/services` — **Services Page**: Detailed breakdown of 5 core services with numbering, scope highlights, and direct inquiry hooks.
- `/global-markets` — **Global Markets Page**: Comprehensive regional focus for **USA**, **Africa**, and the **Middle East** with strategic corridors and key hubs.
- `/partnerships` — **Partnerships Page**: 5-sector partnership ecosystem cards and structured collaboration models.
- `/events` — **Events Page**: Flagship showcases (AGMEX, CAWEE, Africa Investment Circle - Dubai) and track-record capabilities.
- `/insights` — **Insights Page**: Category filter tabs, featured executive briefing (*Ethiopia-Gulf Investment Outlook 2026*), article grid, and newsletter subscription banner.
- `/contact` — **Contact Page**: Split layout with dual regional office contacts (USA & Ethiopia) and full inquiry submission form.

---

### 2. UI Components (`/components`)
- `Navbar.jsx`: Responsive sticky navigation with stylized "TC" monogram, full desktop nav links, mobile drawer, and "Book a Consultation" action button.
- `HeroSection.jsx`: Split-layout hero with red kicker badge, dual-tone typography, subheadline, action buttons, breadcrumb navigation, and portrait visual frame.
- `IconCard.jsx`: Flexible icon card supporting multiple variants (`card`, `redAccent`, `outline`, `minimal`).
- `IconGrid.jsx`: Responsive multi-column grid wrapper (2, 3, 4, 5, 6 columns).
- `ImageCard.jsx`: Multi-mode image card (`overlay`, `stacked`) with hover zoom and category tags.
- `CtaBanner.jsx`: High-contrast dark navy banner with subtle geometric background.
- `Footer.jsx`: 4-column quick action bar, branding, dual-headquarters address, and navigation links.
- `Icons.jsx`: Clean, zero-dependency SVG icon system.

---

### 3. Data Extraction (`/data`)
All copy and metadata from the design mockup are organized into JSON files:
- `data/site.json`: Brand name, slogan, navigation links, theme colors.
- `data/home.json`: Hero text, pillars, core services, markets, key sectors, featured events.
- `data/about.json`: Vision, mission, company story, founder biography & quote, core values.
- `data/services.json`: 5 services with full descriptions and scope points.
- `data/markets.json`: In-depth analysis for USA, Africa, and Middle East corridors.
- `data/partnerships.json`: Ecosystem categories and engagement models.
- `data/events.json`: AGMEX, CAWEE, Africa Investment Circle details and stats.
- `data/insights.json`: Categories, featured report, and market articles.
- `data/contact.json`: Headquarters addresses, direct phone lines, emails, inquiry types.

---

## 🎨 Visual Identity & Color Tokens
- **Crimson Red**: `#C8102E`
- **Dark Charcoal / Midnight**: `#0B1320`
- **Secondary Navy**: `#0F1F38`
- **Neutral Background**: `#F8F9FA`
- **Typography**: Editorial Serif paired with clean Geometric Sans.
