# Future Spark website

Static site, no build step. Seven pages: `index.html`, `about.html`, `kits.html`, `impact.html`, `get-involved.html`, `for-funders.html`, `contact.html`. The stylesheet and script are built into each page so any page opens on its own; `css/styles.css` and `js/main.js` are the source copies. Photos and logo files are in `images/`.

## Deploy
- **GitHub Pages:** Settings, then Pages, set Source to "GitHub Actions". The workflow in `.github/workflows/pages.yml` deploys every push.
- **Netlify or Cloudflare Pages:** point at this repo, no build command, publish directory `/`.

## Forms
The forms open the visitor's email app with the answers filled in. To use a form service later, add an `action` URL to each `<form>` and remove the mailto handler in `js/main.js`.

## Editing content
Edit the HTML pages directly. Numbers (300 kits, 3 schools, 3 organizations, the 1,000 goal) appear on the home, impact, and funders pages. `future-spark-one-pager.pdf` is the funders page printed; regenerate it from the browser's print dialog after edits.
