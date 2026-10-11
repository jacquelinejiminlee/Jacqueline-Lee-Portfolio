# Jacqueline Lee — Portfolio

Static HTML/CSS/JS site. No build step, no framework.

## Pages

```
index.html       Home (3D image ring)
about.html       About
projects.html    Project list
  gssf.html        GSSF rebrand
  spendly.html     Spendly
  ic.html          Im'peccable Chicken
  liner.html       Liner
artworks.html    Creative Works (3D gallery)
```

`mtp.html` and `avec.html` are older pages that aren't linked from the nav.

## Shared files

- `design-system.css`: colors, type, gradient blobs, grain, glass, scroll reveal
- `case-study.css`: case study layout (hero, sections, side rail, footer)
- `nav.css` / `nav.js`: top navigation, injected on every page
- `ambient.js`: page-wide background glow (per-page colors)
- `reveal.js`: fade-in on scroll
- `case-toc.js`: side section rail built from `data-toc` attributes
- `parallax.js`: subtle scroll parallax

Each page's images live in a folder with the same name (`gssf/`, `spendly/`, `ic/` …).

## Preview locally

```bash
ruby -run -e httpd . -p 8000
```

Then open http://localhost:8000.
