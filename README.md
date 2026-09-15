# keenanmo.me

Static portfolio + DFIR blog. No build step, no dependencies. Deploys as-is on GitHub Pages.

## Structure

    index.html            Home (thin shell, renders from data)
    about/index.html      About page
    blog/                 Blog (existing)
    assets/
      css/
        main.css          Design tokens + base + nav + shared components
        home.css          Home-only styles
        about.css         About-only styles
      js/
        site.js           Theme toggle + footer year (every page)
        data.js           EDIT HERE: projects + social links
        icons.js          Inline SVG icon set
        home.js           Renders socials + projects from data.js
    images/               Photos and static image assets
    CNAME                 Custom domain for GitHub Pages

## Common edits

- Theme / accent color: assets/css/main.css, the :root block (one place).
- Add a project or change a link: assets/js/data.js.
- Add a social icon: add the SVG to assets/js/icons.js, then reference its key in data.js.
- About text: about/index.html.

## Why no src/ or build folder

This is hand-written static HTML/CSS/JS with no compile step. src/ and dist/
conventions exist to separate source from build output; there is no build here,
so adding them would be empty ceremony. assets/ + images/ at the root is the
correct layout for a no-build static site on GitHub Pages.
