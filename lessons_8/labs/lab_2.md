# ALAB 320H.8.1 - Consuming Third-Party APIs

## Learning Objectives

After completing this lab, learners will have demonstrated the ability to:

- Create a React application based on given requirements.
- Consume an external API and render its data.

---

## Instructions

1. Create a new React app:
   ```bash
   npx create-react-app react-star-wars
   cd react-star-wars
   npm install react-router-dom
   ```
2. Delete the contents of `src/` and create blank files: `index.js`, `App.js`, `style.css`.
3. Run `npm start` to start the development server.
4. Use frequent git commits.
5. When finished, push to GitHub and submit the repository link.

---

## Requirements

- Research the [SWAPI documentation](https://swapi.dev/documentation) to find the starships endpoint.
- Create a `services/sw-api.js` service module for all API/fetch calls:
  ```jsx
  export async function getAllStarships() {
    const response = await fetch("https://swapi.dev/api/starships/");
    if (!response.ok) throw new Error("Failed to fetch starships");
    return response.json();
  }
  ```
- Fetch all starships and render a **card** for each one in `<App>`.
- Each card should display the starship's **name**.

---

## Hints

- Hold starship data in state with `useState([])`.
- Use `useEffect` to fetch data on mount.
- Create a `StarshipCard` component.
- Use `.map()` to render a `<StarshipCard />` for each starship.
- If you hit a CORS issue, try adding a trailing `/` to your endpoint URL.

---

## Bonus

- Display additional starship details on each card.
- Implement **pagination** to load more starships with a button click.

---

## Deliverables

A link to a GitHub repository containing your completed lab with no errors.

---

*Copyright © Per Scholas 2026*

