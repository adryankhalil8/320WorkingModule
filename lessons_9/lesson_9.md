# 320H.9 - React Hooks: useReducer

## Learning Objectives

By the end of this lesson, learners will be able to:

- Explain the purpose of reducer functions.
- Describe the interaction between dispatch and action objects.
- Use the `useReducer` hook to manage state with reducer functions.
- Explain the difference between `useState` and `useReducer`.
- Create mutating reducer functions with `useImmerReducer`.

---

## The useReducer Hook

`useReducer` is an alternative to `useState` that centralizes state-setting logic into **reducer functions**.

### Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- `reducer` — function that calculates the next state from `(state, action)`.
- `initialState` — the starting state value.
- `dispatch` — function to send **actions** to the reducer.

---

## Dispatching Actions

Instead of setting state directly, you **dispatch actions** — objects describing _what happened_:

```jsx
dispatch({ type: "increment" });
dispatch({ type: "decrement" });
dispatch({ type: "set_step", payload: 5 });
```

Action objects typically have:
- `type` — describes the action
- `payload` — additional data needed

---

## Reducer Functions

Reducers contain all the logic for updating state. By convention, use a **switch statement**:

```jsx
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "set":
      return action.payload;
    default:
      throw new Error("Unknown action: " + action.type);
  }
}
```

### Complete Counter Example

```jsx
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>-1</button>
    </div>
  );
}
```

---

## useState vs. useReducer

| Aspect | `useState` | `useReducer` |
|---|---|---|
| **Code size** | Less upfront | More upfront, but scales better |
| **Readability** | Great for simple updates | Better for complex logic |
| **Debugging** | Harder to trace | Can log every action |
| **Testing** | Test within component | Reducer can be tested in isolation |

> **Recommendation:** Use `useReducer` when you encounter **bugs from incorrect state updates** or when many event handlers modify state in similar ways.

---

## useImmerReducer

Replace `useReducer` with `useImmerReducer` from `use-immer` to write **mutating** logic:

```bash
npm install use-immer
```

```jsx
import { useImmerReducer } from "use-immer";

function todosReducer(draft, action) {
  switch (action.type) {
    case "add":
      draft.push({ id: Date.now(), text: action.text, done: false });
      break;
    case "toggle":
      const todo = draft.find((t) => t.id === action.id);
      todo.done = !todo.done;
      break;
    case "delete":
      return draft.filter((t) => t.id !== action.id);
  }
}

const [todos, dispatch] = useImmerReducer(todosReducer, []);
```

---

## Knowledge Check

1. What is a reducer function?
2. What is the difference between `dispatch` and `setState`?
3. When should you use `useReducer` over `useState`?

---

## Lab Activity

- **ALAB 320H.9.1** — Building a Todo List

---

*Copyright © Per Scholas 2026*

