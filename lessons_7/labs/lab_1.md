# GLAB 320H.7.1 - React Movie Search

## Learning Objectives

After this lab, learners will have demonstrated the ability to:

- Use `create-react-app` or Vite to create a React application.
- Use the `useEffect` React hook.
- Implement the lifting state pattern.
- Bind React components to user input elements.
- Make external API requests within a React application.

---

## Setup

```bash
npx create-react-app react-movie-search
cd react-movie-search
npm start
```

> **Alternative (Vite):** `npm create vite@latest react-movie-search -- --template react`

---

## Accessing the OMDB API

Get a free API key from [http://www.omdbapi.com/](http://www.omdbapi.com/).

Test your key:
```
http://www.omdbapi.com/?apikey=YOURKEY&t=godfather
```

> Backup key (use sparingly): `98e3fb1f`

---

## Create Components

Create `src/components/MovieDisplay.js` and `src/components/Form.js`:

### MovieDisplay.js

```jsx
export default function MovieDisplay({ movie }) {
  const loaded = () => (
    <>
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Year}</h2>
    </>
  );

  const loading = () => <h1>No Movie to Display</h1>;

  return movie ? loaded() : loading();
}
```

### Form.js

```jsx
import { useState } from "react";

export default function Form({ moviesearch }) {
  const [formData, setFormData] = useState({ searchterm: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    moviesearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
```

---

## Wire Up App.js

```jsx
import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "98e3fb1f";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  // Load a default movie on mount
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
```

---

## Key Concepts Used

- **Lifting State** — movie data lives in App, shared via props
- **useEffect** — loads a default movie on first render
- **Controlled Form** — input bound to state with onChange handler
- **Conditional Rendering** — loaded/loading pattern for async data

---

## Bonus

Try loading a **random movie** on each page refresh instead of always starting with "Clueless."

---

*Copyright © Per Scholas 2026*

