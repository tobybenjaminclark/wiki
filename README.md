# Toby Clark

A Jekyll site using the [Sidey](https://github.com/ronv/sidey) theme structure, configured for deployment to GitHub Pages with GitHub Actions.

## Write A Project

Projects are Markdown posts. To publish one:

1. Copy `_drafts/project-template.md` into `_posts/`.
2. Rename it in the form `YYYY-MM-DD-project-name.md`.
3. Edit the title, description, tags, and Markdown body.
4. Commit and push to `main`; the Pages workflow builds and deploys it.

For example, a post named `_posts/2026-05-26-example-project.md` is displayed on the Projects page and given its own URL.

## Pages

Edit the Markdown files in `_pages/` to change Introduction, Oddments, Publications, or Search.

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
