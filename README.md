# Toby Clark

A Jekyll site using the [Sidey](https://github.com/ronv/sidey) theme structure, configured for deployment to GitHub Pages with GitHub Actions.

## Write An Entry

Oddments are Markdown files in `_oddments/`; publications are Markdown files in `_publications/`. Copy one of the template entries in the relevant directory, give it a new filename, then edit its front matter and body. Each entry is displayed on its section page and given its own URL.

For publications, `date` is the conference date used for ordering, while `conference` and `conference_url` provide the linked venue shown beside the title.

## Pages

Edit `index.html` to change Introduction. Edit `_pages/oddments.md`, `_pages/publications.md`, or `_pages/search.md` to change their listing-page copy.

## Deployment

The workflow in `.github/workflows/pages.yml` follows GitHub Pages' Jekyll Actions deployment path. In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions** once.

## Local Development

With a current Ruby installation:

```sh
bundle install
bundle exec jekyll serve
```

The GitHub Pages project URL is configured as `https://tobybenjaminclark.github.io/wiki/`.

## Theme License

The Sidey theme is MIT licensed. Its original license is included in `LICENSE.md`.
