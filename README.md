# Jacqueline Lee — Portfolio

Plain static HTML/CSS/JS rebuild of [jacquelinejiminlee.xyz](https://jacquelinejiminlee.xyz/), extracted from the
original Readymag-hosted site so it can be edited and version-controlled directly on GitHub.

## Structure

```
index.html       Home (3D drag-to-rotate image ring)
about.html       About / resume
projects.html    Project index
gssf.html        Case study — Global Student Startup Foundation
mtp.html         Case study — Melrose Trading Post
ic.html          Case study — Im'peccable Chicken
avec.html        Case study — Avécbag
spendly.html     Case study — Spendly
artworks.html    Artworks gallery (3D ring, filterable)

assets/
  css/nav.css    Shared site navigation bar (used by every page)
  js/nav.js      Injects the nav bar + highlights the current page
  images/<page>/ Self-hosted images for that page
```

There is no build step and no framework — every page is a self-contained HTML file with its own
`<style>`/`<script>`. The only shared piece across pages is the navigation bar in `assets/css/nav.css`
and `assets/js/nav.js`; edit those two files to change the nav site-wide.

## Editing

Open any `.html` file directly and edit the markup/CSS/JS in place — no dependencies to install.
To add or swap an image, drop the file into `assets/images/<page>/` and update the `src`/URL in that
page's HTML.

## Preview locally

Any static file server works, e.g. from this folder:

```bash
ruby -run -e httpd . -p 8000
```

Then open http://localhost:8000.

## Deploying to GitHub Pages with a custom domain

1. Push this folder's contents to a GitHub repo (e.g. as the root of `main`, or into a `docs/` folder).
2. In the repo's **Settings → Pages**, set the source to that branch/folder.
3. Add a `CNAME` file at the repo root containing just your domain, e.g.:
   ```
   www.jacquelinejiminlee.xyz
   ```
4. At your domain registrar, point the domain at GitHub Pages:
   - For an apex domain (`jacquelinejiminlee.xyz`): add `A` records to GitHub's Pages IPs
     (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153).
   - For a `www` or other subdomain: add a `CNAME` record pointing to `<username>.github.io`.
5. Wait for DNS to propagate, then enable "Enforce HTTPS" in the Pages settings.

## Notes on the original site

- The live site was built in Readymag, a drag-and-drop site builder — but every page's actual content
  was authored as custom HTML/CSS/JS and embedded via Readymag's code-injection widget. That custom
  code is what's in this repo; nothing here is Readymag-generated markup.
  ⚠️ Some interactive JS (the 3D drag-to-rotate rings on Home/Artworks, custom cursor, scroll reveals)
  was written for that specific embedding context — double-check it after any bigger structural edit.
- The top navigation bar (logo + Home/About/Projects/Artworks links) lived in Readymag's own site
  chrome, outside the per-page code, so it didn't exist as reusable code anywhere. It's been rebuilt
  from scratch as `assets/css/nav.css` + `assets/js/nav.js`.
- Several images were previously hosted on a free image host (i.ibb.co) rather than Readymag's own
  CDN; all of those have been downloaded and are now self-hosted under `assets/images/`.
- Fonts: DM Sans, DM Mono, and Miss Fajardose (the cursive logo), all loaded from Google Fonts — no
  paid/licensed fonts involved.
