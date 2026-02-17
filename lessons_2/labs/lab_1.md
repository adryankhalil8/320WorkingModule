# GLAB 320H.2.1 - Building a Simple React Application

## Learning Objectives

After this lab, learners will have demonstrated the ability to:

- Use `create-react-app` or Vite to make a pre-configured React application.
- Create React components.
- Render React components within an application.
- Pass props to React components to modify their behavior.

---

## Setup

If you have not yet installed Node.js and npm, please do so first.

### Create the Application

```bash
npx create-react-app simple-react-application
cd simple-react-application
npm start
```

> **Alternative (Vite):**
> ```bash
> npm create vite@latest simple-react-application -- --template react
> cd simple-react-application
> npm install
> npm run dev
> ```

This opens your browser to `localhost:3000` (or `localhost:5173` with Vite).

> **Note (Windows):** If you get an error, check that the casing of your file path matches what Node expects.

---

## Explore the Default App

- `node_modules/` — external packages and dependencies
- `public/` — files served directly to the client
- `src/` — application files, including `.css` files

---

## Modify App.js

Replace the default content with a simple fragment:

```jsx
function App() {
  return (
    <>
    </>
  );
}

export default App;
```

### Create Simple Components

```jsx
function Header() {
  return <h1>Simple React Application</h1>;
}

function Content(props) {
  return <p style={{ color: props.color }}>{props.text}</p>;
}

function Footer() {
  return <h1>Created by Me, of course.</h1>;
}

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;
```

---

## Next Steps

- Experiment with layout, styling, and other options.
- Try splitting components into separate files with `export default` and `import`.
- Explore different CSS approaches: inline styles, CSS modules, or styled-components.

---

*Copyright © Per Scholas 2026*

