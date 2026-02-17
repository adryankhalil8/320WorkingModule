# 320H.10 - React Hooks: useContext

## Learning Objectives

By the end of this lesson, learners will be able to:

- Describe the purpose of React context.
- Avoid prop drilling through the use of React context.
- Use `createContext` to define and export new context.
- Use the `useContext` hook to read from context.
- Use `Context.Provider` to provide context from a parent component.
- Integrate context with state for interactive context values.
- Explain alternatives to and common use cases for context.

---

## The Problem with Props

**Prop drilling** — passing props through many intermediary components — becomes painful as hierarchies deepen.

Context lets you **"teleport" data** to any component in the tree without explicitly passing props.

---

## Using Context: Three Steps

### 1. Create Context

```jsx
// LevelContext.js
import { createContext } from "react";
export const LevelContext = createContext(1);
```

### 2. Use Context (in child components)

```jsx
import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  // Use level to determine heading size...
}
```

### 3. Provide Context (from parent)

```jsx
import { LevelContext } from "./LevelContext";

export default function Section({ level, children }) {
  return (
    <section>
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```

> `useContext` reads from the **nearest** Provider above it in the tree.

---

## Nested Context

Providers can use context from their own ancestors and increment it:

```jsx
export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```

---

## Context with State

**You can pass state with context!** This enables interactive, dynamic context values:

```jsx
function MyApp() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <Page />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}
```

### Multiple Contexts

```jsx
function MyProviders({ children, theme, setTheme }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}
```

---

## When to Use Context

**Start with props.** Only use context when:

- Many components need the same data
- Props would need to pass through many intermediary layers
- Component extraction doesn't simplify the problem

### Common Use Cases

| Use Case | Description |
|---|---|
| **Theming** | Light/dark mode across the app |
| **Current User** | Authentication state |
| **Routing** | Current route information |
| **State Management** | Complex state with reducers + context |

---

## Alternatives to Context

1. **Pass props** — even through several levels (clarity is valuable).
2. **Extract components** — reduce layers between data source and consumer.
3. **Use `children` prop** — pass JSX through wrapper components.

---

## Key Takeaways

- `createContext` defines the context with a default value.
- `useContext` reads from the nearest Provider above.
- `Context.Provider` wraps children and supplies a value.
- Context passes through **all** intermediate components automatically.
- Different contexts are **independent** — they don't override each other.
- Combine context with **state** and **reducers** for scalable state management.

---

*Copyright © Per Scholas 2026*

