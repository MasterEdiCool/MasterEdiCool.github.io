# MasterEdiCool.github.io

Edison Chen's personal portfolio — a multi-page static site covering projects, bio, contact info, and resume.

## Structure
- `pages/` — top-level pages
  - `index.html` — landing / welcome page
  - `projects.html` — projects index with cards
  - `bio.html` — about page
  - `contact.html` — contact links
  - `resume.html` — resume page (downloads from `pdfs/resume.pdf`)
- `projects/` — per-project case-study pages with Summary / Design / Gallery / Notebook tabs
  - `1502FinalProject.html` — GE 1502 Cornerstone 2 final project
  - `testProject.html` — Mousey the Junkbot
- `notebooks/` — engineering design notebooks linked from project pages
  - `1502FinalReportNotebook.html` — 1502 final project design notebook
  - `notebook.html` — generic notebook template
- `styles.css` — shared white/neutral theme, Inter font
- `script.js` — mobile nav toggle, slideshow controls, tab panels, year stamp
- `images/`, `videos/` — media assets
- `pdfs/resume.pdf` — downloadable resume

## Run locally
Serve the folder so relative paths resolve:

```
python -m http.server 8000
```

Then visit http://localhost:8000/pages/index.html.

## Deploy
The repo is named `MasterEdiCool.github.io`, so pushing to the default branch publishes the site at https://masteredicool.github.io. The landing page is `pages/index.html`.

## Resume
`pdfs/resume.pdf` is the file served by the "Download Resume" button on the Resume page. Replace it to update the download.
