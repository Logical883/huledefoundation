# Hulede Foundation

Public website for the **Hulede Foundation**, the family nonprofit founded in 2018 in memory of Mr. Patrick Hulede. The Foundation supports brilliant but needy Ghanaian students — primarily at KNUST — with scholarships, laptops, mentorship, and community service.

The name is **Hulede**.

## Pages

| Path | Page |
|---|---|
| `/` | Home: events and news slider, notices, routes into the rest of the site |
| `/about` | About Us: origin, vision, mission, and scholarship numbers |
| `/management` | Management: founder and board |
| `/application` | Application Info: eligibility, the 30 May 2026 scholars event, and service rules |
| `/gallery` | Gallery: Pixieset albums |
| `/contact` | Contact form |

**Apply Now** in the header opens the official application form. Older paths (`/home`, `/team`, `/projects`, `/editor`, `/support`) redirect to the current pages.

## Stack

- React 19 and Vite
- React Router
- Plain CSS with a light and dark theme (`localStorage` key `hf-theme`)
- Contact messages go to [Formspree](https://formspree.io/f/mldpjqqp)
- Hosted as a single-page app (see `vercel.json`)

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Content

Copy, statistics, and photographs live in the page components and in `src/assets` and `public/images`. There is no CMS or database.
