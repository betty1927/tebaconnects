# TEBA CONNECTS — CMS & TECHNICAL HANDOVER GUIDE

This document serves as the technical reference, editorial handover, and content management guide for the **Teba Connects** 8-page Next.js web application.

---

## 1. Technical Implementation & Architecture

### 1.1 Technology Stack
- **Framework**: Next.js 14 (App Router)
- **UI & Styling**: React 18, Tailwind CSS 3.4
- **Typography**: Editorial Serif headings (`Georgia`, `Cambria`, serif) paired with clean geometric Sans-Serif body (`Inter`, system-ui)
- **Palette**:
  - Signature Crimson Red: `#B42034` (hover: `#931828`)
  - Executive Deep Navy: `#071B31` (light accent: `#0D2744`)
  - Pure White: `#FFFFFF`
  - Soft Neutrals: `#FAFBFD`, `#F5F5F5`
  - Status Accents: Emerald `#059669` (Signed / Verified), Amber `#D97706` (Prospective), Blue `#2563EB` (Commentary)

### 1.2 Responsive & Accessibility Standards
- **Viewport Testing**: Verified responsive from mobile 320px, 375px, 640px, 768px, 1024px, to 1440px+ widescreen displays.
- **Accessibility (WCAG 2.1 AA)**:
  - High-contrast text ratios exceeding 4.5:1 on light and dark backgrounds.
  - Visible focus rings (`focus:ring-2 focus:ring-[#B42034]`) on all interactive buttons, inputs, and links.
  - Semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
  - Screen-reader friendly alt attributes and ARIA labels on all icons and interactive drawers.
- **Performance & Core Web Vitals**:
  - Image assets loaded asynchronously with native lazy loading (`loading="lazy"` and `decoding="async"`).
  - SVG vector icons and logos to prevent layout shifts (CLS: 0).
  - Zero heavy external runtime font dependencies.

### 1.3 SEO & Structured Data
- **Metadata**: Canonical URLs, meta titles, descriptions, and OpenGraph / Twitter Cards configured in `app/layout.jsx`.
- **Dynamic Sitemap**: Automatically generated at `/sitemap.xml` via `app/sitemap.js`.
- **Robots Directives**: Configured via `app/robots.js` directing search engines to the sitemap.
- **JSON-LD Schema**: Embedded Schema.org `ProfessionalService` and `Organization` structured data with founder bio, contact phone numbers, global service offerings, and social profiles.

---

## 2. CMS-Editable Content Architecture

All website content is organized into human-readable JSON files in the `/data` directory. Editorial owners can update copy, add events, publish articles, or amend contact details without touching React code.

### 2.1 File Map for Editorial Owners

| Content Area | Editable Data File | What Can Be Updated |
| :--- | :--- | :--- |
| **Site-wide Settings** | `data/site.json` | Brand name, global phone numbers, emails, addresses, navigation links. |
| **Page 1 — Home** | `data/home.json` | Hero copy, 3 value pillars, core services summary, 3 markets preview, 10 sectors, featured events, founder preview, approach strip, closing CTA. |
| **Page 2 — About Us** | `data/about.json` | 2-paragraph company profile, Vision & Mission statements, Our Story & Why We Exist, 4 approach modules, founder leadership bio & quote. |
| **Page 3 — Services** | `data/services.json` | Five core service titles, summaries, descriptions, deliverables, "Who We Support", approach strip. |
| **Page 4 — Global Markets**| `data/markets.json` | USA, Africa, and Middle East corridor overviews, sectors, deliverables, and compliance disclaimer. |
| **Page 5 — Partnerships** | `data/partnerships.json` | Five partnership categories, partner directory with status badges (*Signed Partner*, *Prior Engagement*, *Prospective Discussion*). |
| **Page 6 — Events** | `data/events.json` | Verified event listings with dates, venues, roles, audience, 6 detail modules (*Overview, Who Should Attend, Exhibitor/Sponsor, Delegation Package, Agenda/Venue, Inquiry*). |
| **Page 7 — Insights** | `data/insights.json` | Executive briefings, articles, categories, takeaways, citations, and classification badges (*Verified Opportunity* vs. *Strategic Commentary*). |
| **Page 8 — Contact** | `data/contact.json` | Email addresses, USA/Ethiopia phone numbers, LinkedIn profiles, five-service dropdown options, privacy consent text. |

---

## 3. Step-by-Step Editorial Training

### 3.1 Adding or Updating an Event (`data/events.json`)
To publish an event:
1. Open `data/events.json`.
2. Locate the `"events"` array.
3. Add or update the event object ensuring all 9 attributes and 6 detail modules are filled:
```json
{
  "id": "new-event-slug",
  "title": "Summit Name",
  "statusType": "Upcoming",
  "badge": "UPCOMING 2026",
  "verifiedDate": "Month Year",
  "venue": "Venue Name, City, Country",
  "organizer": "Organizer Name",
  "tebaRole": "Strategic Partner",
  "audience": "Target attendee profiles",
  "participationOptions": "Delegate Passes, Exhibitor Booths",
  "registrationLink": "/contact?inquiry=Events&event=Summit%20Name",
  "image": "/assets/event-dubai.jpg",
  "details": {
    "overview": "Platform summary...",
    "whoShouldAttend": "Target audience...",
    "exhibitorSponsorOptions": "Packages available...",
    "delegationPackage": "Delegation offerings...",
    "agendaVenue": "Venue and schedule...",
    "inquiryFormText": "Inquire for Delegation"
  }
}
```

### 3.2 Publishing an Insight / Article (`data/insights.json`)
To add a new market perspective:
1. Open `data/insights.json`.
2. Add an article entry under `"articles"`, setting `"type"` strictly to either:
   - `"Verified Opportunity"` (active commercial initiative or deal pipeline)
   - `"Strategic Commentary"` (thought leadership or policy analysis)
3. Provide `"keyTakeaways"` as bullet points and cite `"sourceReferences"`.

### 3.3 Adding a Partner Profile (`data/partnerships.json`)
To update partner relationships:
1. Open `data/partnerships.json`.
2. Update the `"partners"` array.
3. Assign `"statusType"` to:
   - `"Signed Partner"` (Emerald badge)
   - `"Prior Engagement"` (Blue badge)
   - `"Prospective Discussion"` (Amber badge)
4. Confirm `"logoPermission"` reflects verified brand clearance.

---

## 4. Production Deployment & Handover

### 4.1 Deployment to Vercel (Recommended)
1. Sign in to [Vercel](https://vercel.com) using your GitHub account (`betty1927`).
2. Click **Add New Project** and select `tebaconnects`.
3. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: Next.js default
4. Click **Deploy**.
5. Under **Project Settings > Domains**, add your custom domain: `tebaconnects.com` and `www.tebaconnects.com`.
6. Configure DNS at your registrar (A record pointing to `76.76.21.21` or CNAME `cname.vercel-dns.com`).

### 4.2 Security, HTTPS & Privacy
- **HTTPS**: Automatically provisioned with free SSL/TLS certificates on Vercel/Netlify.
- **Spam Protection**: The contact form in `app/contact/page.jsx` requires verified client-side validation and privacy consent confirmation before submission.
- **Analytics & Tracking**: Can be configured by passing Google Analytics / Tag Manager IDs into `app/layout.jsx` without altering page content.

---

## 5. Acceptance Verification Checklist

- [x] **Page 1 — Home**: Hero, 3 pillars under hero, 5 services, 3 markets, 10 sectors, events, founder preview, approach strip, consultation CTA.
- [x] **Page 2 — About Us**: Approved two-paragraph profile, vision, mission, our story, why we exist, 4 approach modules, founder leadership profile.
- [x] **Page 3 — Services**: Five approved services with deliverables and target audiences, dark navy approach strip.
- [x] **Page 4 — Global Markets**: USA, Africa, and Middle East corridors with sector focus and compliance disclaimer.
- [x] **Page 5 — Partnerships**: Five categories, relationship classification (Signed, Prior, Prospective), governance statement.
- [x] **Page 6 — Events**: Verified upcoming platforms with verified dates, 6 detail modules on every event, zero invented dates.
- [x] **Page 7 — Insights**: Five categories, article fields with key takeaways and citations, commentary vs verified opportunity badges.
- [x] **Page 8 — Contact**: Approved email addresses, phone lines, LinkedIn profiles, five-service inquiry form with privacy consent.
- [x] **Imagery & Branding**: Authentic red-blazer skyline portrait in hero; authentic black-blazer chair portrait with layered globe graphic in founder sections; stylized TC monogram logo.
- [x] **Technical**: Next.js 14 App Router, dynamic XML sitemap, robots.txt, JSON-LD Schema.org, responsive at 320px+, zero external dependencies.
