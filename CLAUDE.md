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

If `bundle install` fails, delete `Gemfile.lock` and retry — it is not committed.

## Architecture

### Content structure

Most site content lives in two places:

1. **`_pages/about.md`** — the homepage (`/`). This is the primary content file. It contains raw HTML for publication cards, education, experience, and awards sections with inline CSS. The standard `_publications/` collection is **not** used for homepage display; publication cards are hand-authored HTML here.

2. **`_publications/`** — individual publication detail pages (permalink: `/publication/:slug/`). Reached by clicking publication cards from the homepage.

Other collections (`_talks/`, `_teaching/`, `_portfolio/`, `_posts/`) follow standard Jekyll collection conventions.

### Navigation and pages

- `_data/navigation.yml` — controls top nav links. Currently: "Publications" → `/tags/`, "CV" → PDF.
- `_pages/publications.md` — redirects to Google Scholar (not a listing page).
- `/tags/` — the actual publications browse page, organized by tags from `_publications/` frontmatter.

### Publication frontmatter convention

```yaml
title: "..."
collection: publications
permalink: /publication/slug/
venue: "Conference/Journal Name, Year"
paperurl: "https://..."
codeurl: "https://..."        # optional
authors: "Author1, **Mingfang Zhang**, Author3"   # bold = self
tags: [video-understanding]   # used for /tags/ grouping
```

### Layouts

- `single.html` — primary content layout (sidebar + article). Handles `paperurl`/`codeurl` buttons.
- `archive-taxonomy.html` — renders `/tags/` page.
- `default.html` → wraps `compress.html` (HTML compression disabled in dev).

### Styling

SCSS source in `_sass/`, compiled to `assets/css/main.scss`. Key files: `_variables.scss` (colors, breakpoints). Right sidebar is disabled (width: 0px). Breakpoints: 600/768/925/1280px.

### Bulk content generation

`markdown_generator/` contains Python scripts and Jupyter notebooks that generate `_publications/` and `_talks/` markdown files from TSV spreadsheets. Run these if doing bulk additions.

### Files and images

- `files/` — downloadable files (CV PDF, etc.)
- `images/papers/` — paper thumbnail images referenced by publication cards in `about.md`
- `images/logo/` — institution logos used in about.md cards
