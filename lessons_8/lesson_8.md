# 320H.8 - React Router

## Learning Objectives

By the end of this lesson, learners will be able to:

- Setup and use React Router.
- Create Router, Route, Link, and Switch components.
- Pass router props.
- Use URL parameters.
- Consume a third-party API in React.

---

## The Problem

React apps are **single-page applications** (SPAs) — one HTML file. React Router lets us define components that render based on the URL, creating the illusion of multiple pages.

---

## Using BrowserRouter

Wrap your entire app in `BrowserRouter` to enable routing:

```jsx
// index.js
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

---

## Creating Routes

Use `Routes` and `Route` from `react-router-dom`:

```jsx
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
```

---

## Navigation with Link

Use `Link` instead of `<a>` tags (prevents page refresh):

```jsx
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
```

---

## URL Parameters and useParams

Define URL parameters with `:paramName`:

```jsx
<Route path="/profile/:id" element={<Profile />} />
```

Access them with `useParams`:

```jsx
import { useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  const userId = params.id;
  return <h1>User ID: {userId}</h1>;
}
```

---

## Consuming Third-Party APIs

The standard pattern for API calls in React:

```jsx
import { useState, useEffect } from "react";

export default function DataComponent() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const json = await response.json();
      setData(json);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const loaded = () => (
    <div>
      <h1>{data.title}</h1>
    </div>
  );

  const loading = () => <h1>Loading...</h1>;

  return data ? loaded() : loading();
}
```

---

## Lab Activities

- **GLAB 320H.8.1** — React Router App
- **ALAB 320H.8.1** — Consuming Third-Party APIs

---

*Copyright © Per Scholas 2026*

