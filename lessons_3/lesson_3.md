# 320H.3 - React Hooks: useState

## Learning Objectives

By the end of this lesson, learners will be able to:

- Explain what React hooks are and how they are used.
- Use the `useState` hook to manage local state.
- Use updater functions to update state using previous state.
- Use set functions to set state inside of event handlers.
- Describe the difference between primitive values and reference types in state.
- Update objects and arrays in state without mutating the state.
- Describe the purpose of the Immer library.
- Use the `useImmer` hook to simplify state updates.

---

## React Hooks

Hooks let you use different React features alongside your components. Any function starting with `use` is a **hook** — a special function only available while React is rendering.

**Rules:**

- Hooks can only be called at the **top level** of your components.
- You **cannot** call hooks inside conditional statements, loops, or nested functions.

---

## The useState Hook

The `useState` hook generates special variables — updating them triggers the component (and its children) to re-render.

### Import

```jsx
import { useState } from "react";
```

### Basic Usage

```jsx
const [counter, setCounter] = useState(0);
```

- `counter` — the current state value
- `setCounter` — the function to update state
- `0` — the initial value

### Counter Example

```jsx
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addOne}>Click Me to Add One</button>
    </div>
  );
}
```

**What happens when the button is clicked:**

1. `setCounter` is passed the current value plus one.
2. React compares the new value to the old value.
3. If different, React updates the Virtual DOM and then the real DOM.

---

## Updater Functions

When updating state based on previous state, use **updater functions**:

```jsx
// Without updater function (can cause issues with batching):
setCounter(counter + 1);

// With updater function (recommended):
setCounter((c) => c + 1);
```

### Why Updater Functions Matter

```jsx
const addThree = () => {
  // This only adds 1, not 3!
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
};

const addThreeCorrectly = () => {
  // This correctly adds 3
  setCounter((c) => c + 1);
  setCounter((c) => c + 1);
  setCounter((c) => c + 1);
};
```

> **Best Practice:** Always use updater functions when updating state based on previous state.

---

## Immutable State

State in React is **immutable** — it cannot be changed, only recreated.

### With Objects — DON'T Mutate

```jsx
// ❌ BAD — mutating existing state
state[0] = 6;
setState(state);

// ❌ BAD — same reference
const updatedState = state;
setState(updatedState);

// ✅ GOOD — create a new copy
const updatedState = [...state];
updatedState[0] = 6;
setState(updatedState);
```

### Updating Objects with Spread Operator

```jsx
const [person, setPerson] = useState({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
});

// Update one property:
setPerson({
  ...person,
  email: "newemail@example.com",
});
```

### Dynamic Property Names

```jsx
function handleChange(e) {
  setPerson({
    ...person,
    [e.target.name]: e.target.value,
  });
}
```

### Nested Objects

```jsx
setPerson({
  ...person,
  address: {
    ...person.address,
    zip: "90210",
  },
});
```

---

## Updating Arrays in State

**Methods that mutate (avoid in state):** `push`, `pop`, `shift`, `unshift`, `splice`, `reverse`, `sort`

**Methods that return new arrays (safe for state):** `concat`, `[...arr]`, `filter`, `slice`, `map`

### Adding to an Array

```jsx
setPeople([
  "Patrick",   // prepend
  ...people,   // copy existing
  "Sandy",     // append
]);
```

### Removing from an Array

```jsx
setPeople(people.filter((person) => person.id !== idToRemove));
```

### Inserting into an Array

```jsx
function immutableInsert(arr, newItem, insertAt) {
  return [
    ...arr.slice(0, insertAt),
    newItem,
    ...arr.slice(insertAt),
  ];
}
```

---

## The useImmer Hook

The `use-immer` package lets you write **mutating** code while Immer ensures immutability behind the scenes:

```bash
npm install use-immer
```

```jsx
import { useImmer } from "use-immer";

const [person, updatePerson] = useImmer({
  name: "Jane",
  address: { city: "NYC", zip: "10001" },
});

// Mutating syntax works!
updatePerson((draft) => {
  draft.address.zip = "90210";
});
```

---

## Knowledge Check

1. What does `useState` return?
2. Why should you use updater functions when updating state based on previous state?
3. Why can't you mutate state directly?
4. How do you update a nested object in state?
5. What does the Immer library do?

---

## Lab Activity

- **ALAB 320H.3.1** — Rendering Arrays from State

---

*Copyright © Per Scholas 2026*

