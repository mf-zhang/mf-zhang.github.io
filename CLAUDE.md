# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal academic website built with **Jekyll** on the **Academic Pages** theme (fork of Minimal Mistakes). Deployed automatically to GitHub Pages on push to `master`.

## Commands

```bash
# Install dependencies (run once, or after gem changes)
bundle install

# Local dev server with live reload at localhost:4000
bundle exec jekyll serve -l -H localhost

# Rebuild minified JS (only needed when editing assets/js/_main.js or vendors)
npm run build:js
npm run watch:js   # watch mode
```

`Gemfile.lock` is committed. If `bundle install` fails anyway, delete it and retry.

## Architecture

### Content structure

Most site content lives in two places:

1. **`_pages/about.md`** — the homepage (`/`). Raw HTML for publication cards, education, experience, and awards sections with inline CSS. The standard `_publications/` collection is **not** used for homepage display; publication cards are hand-authored HTML here.

2. **`_publications/`** — individual publication detail pages (permalink: `/publication/:slug/`). Reached by clicking publication cards from the homepage.

Other collections (`_talks/`, `_teaching/`, `_portfolio/`, `_posts/`) follow standard Jekyll collection conventions.

### Navigation and pages

- `_data/navigation.yml` — controls top nav links. Currently only "Publications" → `/tags/` is active; the CV link is commented out. The `latest_cv_path` key defined there is not consumed anywhere.
- `_pages/publications.md` — redirects to Google Scholar (not a listing page).
- `_pages/tags.md` — the actual publications browse page at `/tags/`, implemented as a Liquid loop over `site.publications` grouped by tag. **Not** `archive-taxonomy.html`.
- `_pages/cv.md` — generates `/cv/` but contains only template placeholder text and is unreachable from navigation.

### Publication frontmatter convention

```yaml
title: "..."
collection: publications
permalink: /publication/slug/
venue: "Conference/Journal Name, Year"
paperurl: "https://..."
codeurl: "https://..."        # optional
authors: "Author1, **Mingfang Zhang**, Author3"   # bold = self
tags:
  - "a) video and multi-view understanding"
  - "b) vision-language multimodal models"
  - "c) human modeling"
```

Tags use long-form strings with a letter prefix (`a)`, `b)`, `c)`). They are slugified by Liquid to produce `/tags/` anchors (e.g., `#a-video-and-multi-view-understanding`). If a tag string changes, every matching `href` anchor in `about.md` must also be updated. A publication can carry multiple tags.

`_config.yml` sets `future: true` so publications with future dates are included in builds.

### Layouts

- `single.html` — primary content layout (sidebar + article). Handles `paperurl`/`codeurl` buttons.
- `default.html` → wraps `compress.html` (HTML compression disabled in dev).

### Sidebar affiliations

`_config.yml` has a non-standard `employer2` field for a second affiliation. It is rendered by a customized `_includes/author-profile.html`. To add or change sidebar affiliations, edit both `_config.yml` and `author-profile.html`.

### Styling

SCSS source in `_sass/`, compiled to `assets/css/main.scss`. Key file: `_variables.scss` (colors, breakpoints). Right sidebar is disabled (width: 0px). Breakpoints: 600/768/925/1280px.

Note: `about.md` references `var(--global-hover-color)` for link hover color, but this CSS variable is not defined in `_sass/`. It falls back to the browser default.

### Files and images

- `files/` — CV PDFs. `Mingfang_Zhang_CV.pdf` is the canonical name; `Mingfang_Zhang_CV_202507.pdf` is a dated archive copy.
- `images/papers/` — paper thumbnails. `.webp` is the format referenced in `about.md`; `.jpeg` copies exist for older papers as fallbacks but are not linked.
- `images/logo/` — institution logos used in `about.md` cards.

### Bulk content generation

`markdown_generator/` contains Python scripts and Jupyter notebooks that generate `_publications/` and `_talks/` markdown files from TSV spreadsheets. Run these if doing bulk additions.
