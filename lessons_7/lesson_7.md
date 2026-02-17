# 320H.7 - React Hooks: useEffect

## Learning Objectives

By the end of this lesson, learners will be able to:

- Describe the purpose of the `useEffect` hook.
- Use `useEffect` to synchronize with external systems.
- Describe the effect lifecycle.
- Build setup and cleanup functions for effects.

---

## Effects

The `useEffect` hook allows you to **synchronize with external systems** — another React "escape hatch."

**Examples:** Controlling non-React components, server connections, analytics logging.

Effects run code **after rendering**, after the screen has updated.

---

## The useEffect Hook

```jsx
import { useEffect } from "react";
```

### Syntax

```jsx
useEffect(() => {
  // Setup: runs after render
  const connection = createConnection(serverUrl, roomId);
  connection.connect();

  return () => {
    // Cleanup: runs before re-run and on unmount
    connection.disconnect();
  };
}, [serverUrl, roomId]); // Dependencies
```

### Dependency Array Behavior

```jsx
useEffect(() => {
  // Runs after EVERY render
});

useEffect(() => {
  // Runs only on MOUNT (first render)
}, []);

useEffect(() => {
  // Runs on mount AND when a or b change
}, [a, b]);
```

---

## Cleanup Functions

Cleanup functions prevent resource leaks and stale behavior:

### Event Listeners

```jsx
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### Animations

```jsx
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1;
  return () => { node.style.opacity = 0; };
}, []);
```

### Data Fetching

```jsx
useEffect(() => {
  let ignore = false;

  async function fetchData() {
    const json = await fetchTodos(userId);
    if (!ignore) setTodos(json);
  }

  fetchData();
  return () => { ignore = true; };
}, [userId]);
```

---

## Warning: Infinite Loops

Setting state inside an effect that runs on every render creates an infinite loop:

```jsx
// ❌ INFINITE LOOP
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1); // Triggers re-render → triggers effect → ...
});
```

---

## Development Behavior

In **Strict Mode**, React remounts every component once during development (mount → unmount → mount). This helps catch missing cleanup functions.

In **production**, this remounting does not occur.

---

## Effect Lifecycle

Think of effects as **starting** and **stopping** synchronization — independent of component lifecycle:

- **Setup** = start synchronizing
- **Cleanup** = stop synchronizing

Each effect should handle **one** synchronization concern. Use multiple effects for multiple concerns.

---

## Key Takeaways

- Effects run **after** the render commits to the DOM.
- Always specify **dependencies** — React re-runs the effect when they change.
- Return a **cleanup function** to prevent leaks.
- Effects are for **external systems** — if you're only changing React state, you might not need an effect.

---

## Lab Activity

- **GLAB 320H.7.1** — React Movie Search

---

*Copyright © Per Scholas 2026*

