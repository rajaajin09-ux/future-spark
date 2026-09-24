# Future Spark website

Single-file static site, no build step. `future-spark.html` holds all CSS and JS; `index.html` just redirects to it. Photos and SVGs are referenced relatively, so keep them in the same folder.

## What's here
- `future-spark.html` — the site. Search it for `[[PLACEHOLDER` (80 of them) before launch; the footer button "Hide placeholder highlights" turns off the yellow marking for client previews.
- `future-spark-one-pager.pdf` — the For Funders section printed to one letter page. Regenerate it by opening the site, going to For funders, and choosing Print (the print stylesheet does the rest).
- `future-spark-logo*.svg`, `favicon.svg`, `logo-note.md` — proposed logo, pending team approval.
- `photo-*.jpg` — the team's own photos (confirm the students pictured have consented).
- `screenshots/` — 1440 and 375 renders, the logo concepts, the print preview.
- `DELIVERY-NOTES.md` — research, design memo, audit, placeholder inventory, what to send next, go-live steps.
- `future-spark-website.zip` — the earlier build this one replaces. Safe to delete.

## Deploy
- **Netlify / Cloudflare Pages:** point at this repo, no build command, publish directory `/`.
- **GitHub Pages:** Settings → Pages → deploy from `main`, root. `index.html` forwards to `future-spark.html`.

## Forms and payments
Both forms post to Formspree. Create a form at formspree.io and paste its ID into the two `action` attributes (search `formspree.io/f/`). Until then, submitting shows an email fallback instead of failing. Sponsorships go by Zelle; the comment in the Sponsor block names what to switch to once there is a bank account and a fiscal sponsor.

## Editing numbers
Kits built and the goal are set in two places: the `data-built` / `data-goal` attributes on `#wall`, and the text of the proof row, the impact counts, the funder page and the press facts. Search for `300` and `1,000` when they change.
