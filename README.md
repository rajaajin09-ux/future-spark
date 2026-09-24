# Future Spark website

Static site, no build step. Four pages share one stylesheet and one small script. The layout follows the structure of mindrobotics.com (mark plus two pill buttons, staggered wordmark hero with the three white shapes, tag-pill headlines, 2:1 photo bands, rounded image frames, pill-shaped footer bar), with Future Spark's own content, photos and colors; fonts are Outfit and Nunito from Google Fonts.

- `index.html` — home
- `get-involved.html` — request kits, sponsor a kit, volunteer
- `for-funders.html` — program summary, logic model, budget (prints to one page; `future-spark-one-pager.pdf` is that printout)
- `contact.html` — contact, press paragraph, logo downloads
- `css/styles.css`, `js/main.js`, `images/`

## Deploy
Netlify or Cloudflare Pages: point at this repo, no build command, publish directory `/`. GitHub Pages: Settings → Pages → deploy from `main`, root.

## Forms
The forms open the visitor's email app with the answers filled in (no backend needed). To switch to a form service later, give each `<form>` an `action` URL and remove the mailto handler in `js/main.js`.

## Editing numbers
Kits delivered, schools, organizations and the 1,000 goal appear on the home page (numbers row and progress bar), the funders page and the contact page. Search for `300` when they change.
