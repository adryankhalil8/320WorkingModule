# ALAB 320H.1.2 - React Fashion Blog

## Learning Objectives

After completing this lab, learners will have demonstrated the ability to:

- Create an HTML/CSS page from a given mockup.
- Convert an HTML/CSS page into React.
- Style React components to create a desired layout.

---

## Instructions

1. **Build the site locally in plain HTML** first. Don't use React yet.
2. Push the HTML site to GitHub and deploy it on GitHub Pages.
3. **Remake the site with React**, and deploy it to Netlify.
4. In the GitHub README for your React version, include:
   ```
   # [Netlify Live Link](your-netlify-link-here)
   # [GitHub Pages Live Link](your-github-pages-link)
   # [GitHub Link of HTML Version](your-html-repo-link)
   ```
5. Submit the link to the React version GitHub repository.

---

## Build the HTML

1. Create HTML boilerplate in `index.html`.
2. Add `style.css` and link it.
3. Use semantic tags: `<header>`, `<main>`, `<footer>`.
4. Use `<h1>` for the site title and `<h2>` for the subtitle.
5. Create accessible navigation using `<nav>`, `<ul>`, `<li>`, and `<a>` tags with `aria-label` and `role` attributes.
6. Mark up blog posts using the `<article>` tag.
7. Add `alt` attributes to all images.
8. Include a copyright notice in the footer using the `&copy;` HTML entity.

---

## Style with CSS

- Left border on `<html>`: `5px solid lightgray`
- `<body>`: `min-height: 100vh`, `font-family: sans-serif`, `max-width: 1000px`, centered with `margin: auto`
- Padding on `<header>`, `<main>`, `<footer>`: `1rem` top/bottom, `2rem` left/right
- `<h1>` color: `tomato`
- Images: `width: 100%`
- Navigation `<ul>`: remove padding, `list-style-type: none`, use Flexbox
- Top nav links: `color: lightgray`, footer nav: `color: tomato`
- Article bottom: `margin-bottom: 4rem`, `border-bottom: 1px solid lightgray`, `padding-bottom: 2rem`
- First letter of article `<p>`: `::first-letter` pseudo-element, `color: lightgray`
- Copyright text: `color: lightgray`

---

## Convert to React

Remake the entire project in React with these component files:
- `App.js`
- `Header.js`
- `Nav.js`
- `Article.js`
- `Footer.js`

Deploy to Netlify:

```bash
npm run build
```

Then drag and drop the `build` folder into Netlify.

---

## Deliverables

A link to a GitHub repository containing your completed React lab with no errors.

---

*Copyright © Per Scholas 2026*

