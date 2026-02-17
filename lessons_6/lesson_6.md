# 320H.6 - React Hooks: useRef

## Learning Objectives

By the end of this lesson, learners will be able to:

- Describe the difference between `useRef` and `useState`.
- Use `useRef` to store references across renders.
- Create and use ref callback functions.
- Use `useRef` to reference and manipulate DOM elements.
- Use `forwardRef` to add refs to custom components.
- Use `useImperativeHandle` to control exposed DOM methods.
- Create uncontrolled forms using refs.

---

## React "Escape Hatches"

React provides tools called **"escape hatches"** for connecting to external systems (browser APIs, non-React widgets, remote servers). The `useRef` hook is one such escape hatch.

---

## The useRef Hook

```jsx
import { useRef } from "react";
```

### Basic Usage

```jsx
const ref = useRef(0);
// ref = { current: 0 }
```

- `ref.current` is **mutable** — you can read from and write to it.
- Changing a ref **does not trigger a re-render** (unlike `useState`).
- Ref values **persist between renders**.

### Refs vs. State

| Feature | `useRef` | `useState` |
|---|---|---|
| Returns | `{ current: value }` | `[value, setValue]` |
| Triggers re-render | No | Yes |
| Mutable | Yes | Use setter function |
| Reading during render | Avoid | Safe |

### Rule of Thumb

> If information is used for **rendering**, use **state**. If it doesn't need to cause re-renders, consider a **ref**.

---

## DOM Manipulation with Refs

The most common use case: accessing DOM elements.

```jsx
function TextInput() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

### Common DOM Uses

- **Focusing** a node
- **Scrolling** to a node
- **Measuring** node size or position

---

## Ref Callbacks

For dynamic lists where you don't know how many refs you'll need, use a **ref callback** with a Map:

```jsx
function ScrollableList({ items }) {
  const itemsRef = useRef(new Map());

  function scrollToItem(id) {
    const node = itemsRef.current.get(id);
    node.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          ref={(node) => {
            if (node) itemsRef.current.set(item.id, node);
            else itemsRef.current.delete(item.id);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```

---

## Forwarding Refs to Custom Components

By default, you cannot place a ref on a custom component. Use `forwardRef`:

```jsx
import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
```

### Limiting Exposed Methods with useImperativeHandle

```jsx
import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return <input {...props} ref={realInputRef} />;
});
```

---

## Form Handling with Refs

### Controlled Forms (bound to state)

```jsx
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ name: "", age: 0 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={form.name} onChange={handleChange} name="name" />
      <input type="number" value={form.age} onChange={handleChange} name="age" />
      <input type="submit" value="Submit" />
    </form>
  );
};
```

### Uncontrolled Forms (using refs)

```jsx
import { useRef } from "react";

const Form = () => {
  const nameInput = useRef(null);
  const ageInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameInput.current.value,
      age: ageInput.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameInput} placeholder="Name" />
      <input type="number" ref={ageInput} placeholder="Age" />
      <input type="submit" value="Submit" />
    </form>
  );
};
```

---

## Best Practices

- Treat refs as an **escape hatch** — don't overuse them.
- Don't read or write refs during rendering.
- **Never** modify DOM nodes that React manages.
- Use **controlled forms** when form data needs to be rendered elsewhere; **uncontrolled** when it doesn't.

---

*Copyright © Per Scholas 2026*

