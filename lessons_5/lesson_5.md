# 320H.5 - Interactive React Components

## Learning Objectives

By the end of this lesson, learners will be able to:

- Create interactive components using event handling functions.
- Describe the properties of state across interactive components.
- Describe the "trigger, render, commit" process.
- Explain the behavior of hooks during the rendering process.

---

## Handling Events

React lets you add event handlers to your JSX. Built-in components support browser events like `onClick` by default.

### Naming Conventions

- **Events:** prepended with `on` (e.g., `onClick`, `onMouseEnter`)
- **Handlers:** prepended with `handle` (e.g., `handleClick`, `handleMouseEnter`)

### Basic Event Handler

```jsx
export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

### Inline Handlers

```jsx
<button onClick={() => alert("You clicked me!")}>Click me</button>
```

> **Important:** Pass the function **definition**, not the function **call**:
> - ✅ `onClick={handleClick}`
> - ❌ `onClick={handleClick()}` — this fires immediately on render!

### Event Handler Props

```jsx
function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

// Usage:
<AlertButton message="Playing!">Play Movie</AlertButton>
```

### Component Abstraction with Events

```jsx
function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ title }) {
  return <Button onClick={() => alert(`Playing ${title}!`)}>Play "{title}"</Button>;
}
```

> Events **propagate/bubble** up the component tree. Use `event.stopPropagation()` and `event.preventDefault()` as needed.

---

## Events and State

- You can pass state as a prop to use in event handlers.
- You can use `setState` in handlers to modify state.
- **State is local, isolated, and private** — multiple instances of the same component have independent state.

---

## Rendering and Committing

React follows a three-step process when state changes:

### 1. Trigger

A render is triggered by:

- **Initial render** — `root.render(<App />)`
- **State update** — calling a `setState` function

### 2. Render

React calls your component functions to determine what to display:

- **Initial render:** Creates DOM nodes for all components.
- **Re-renders:** Calculates differences from previous render.

> Components and rendering must always be **pure** — same inputs, same outputs.

### 3. Commit

React makes actual modifications to the DOM:

- **Initial render:** Uses `appendChild()` to place all nodes.
- **Re-renders:** Only updates elements that changed between renders.

After React's commit, the **browser paints** the screen (sometimes called "painting" in React context).

---

## Hooks and Batching

State updates are **batched** — React waits for all code in event handlers to run before processing updates:

```jsx
function nextNextIndex() {
  // Both use the same snapshot value — only increments by 1!
  setIndex(index + 1);
  setIndex(index + 1);
}

function nextNextIndexFixed() {
  // Updater functions are queued — correctly increments by 2!
  setIndex((i) => i + 1);
  setIndex((i) => i + 1);
}
```

> React does **not** batch across separate intentional events like clicks.

---

## Key Takeaways

- Event handlers can be defined inside components, passed as props, or configured with prop arguments.
- Separating styled components from functional ones creates a more reusable library.
- State is **private and isolated** per component instance.
- React uses **trigger → render → commit** to display components.
- State is **batched** during renders — use updater functions for sequential updates.

---

*Copyright © Per Scholas 2026*

