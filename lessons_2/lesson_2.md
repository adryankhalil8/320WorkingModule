# 320H.2 - React State and Props

## Learning Objectives

By the end of this lesson, learners will be able to:

- Describe React state and props.
- Use React state and props to pass information between components.
- Build a simple application that uses state and props.

---

## React State and Props

### State

State is the particular condition that something is in at a given point in time. In React:

- **State can only be changed** by the component that "owns" that state.
- When a component's state changes, that **entire component is re-rendered**, including all child components.
- A "stateful" component passes any state needed by child components as **props**.

### Props

**Props** (short for properties) are arbitrary inputs passed as arguments into React components.

- Props are accessible as key/value pairs on a `props` object.
- **Props are always read-only** in the receiving component.
- Props can only be sent **from a parent to a child**.
- If the parent needs data from a child, it should **send a function as a prop**.
- **Anything** can be sent as a prop, including JSX.

### Basic Example

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
```

> Props are passed just like HTML attributes, but they are **React props**, not HTML attributes. You must explicitly use them within your component.

```jsx
function Welcome(props) {
  return <h1 style={props.style}>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" style={{ color: "red" }} />;
```

### Passing Data from Child to Parent

```jsx
const Child = (props) => {
  props.setter(8);
  return <h1>{props.stuff}</h1>;
};

const Parent = () => {
  let someVariable;
  const setSV = (data) => {
    someVariable = data;
  };
  return <Child stuff="hello world" setter={setSV} />;
};
```

---

## State Management

As a general rule of thumb for where state should live:

| Components Using State | Recommendation |
|---|---|
| 0-1 | In the one component using it |
| 2-5 | In a shared parent, as low in the tree as possible |
| 5+ | Consider using Context or Redux |

### Lifting State

When siblings need to share state, **lift the state** into their common parent:

1. House the state in the parent.
2. Pass a **function** as props to the sender (to update parent state).
3. Pass the **state** as props to the receiver.

```jsx
import { useState } from "react";

const SenderChild = ({ update }) => {
  return <button onClick={() => update("Goodbye")}>Click Me</button>;
};

const ReceiverChild = ({ value }) => {
  return <h1>{value}</h1>;
};

const Parent = () => {
  const [state, setState] = useState("Hello");
  return (
    <div>
      <ReceiverChild value={state} />
      <SenderChild update={setState} />
    </div>
  );
};
```

### Prop Drilling

Prop drilling is when you pass props through many layers of components that don't use the data themselves:

```jsx
const Parent = () => <Child cheese="gouda" />;
const Child = ({ cheese }) => <GrandChild data={cheese} />;
const GrandChild = ({ data }) => <h1>{data}</h1>;
```

Solutions include: **React Context**, **useReducer**, **Redux**, and more (covered in later lessons).

---

## Handling Props

### Destructuring Props

```jsx
const Component = ({ name, age = 0 }) => (
  <div>
    <h1>{name}</h1>
    <h2>{age}</h2>
  </div>
);
```

### Spreading Props

```jsx
const userProps = {
  name: "John Doe",
  age: 35,
  website: "deeperThanCode.com",
};

return <Component {...userProps} />;
```

### `props.children`

All components have a `children` prop representing any elements wrapped between the component's opening and closing tags:

```jsx
const Container = ({ children }) => {
  const style = { width: "90%", margin: "auto", border: "1px solid green" };
  return <div style={style}>{children}</div>;
};

const App = () => (
  <Container>
    <h1>Hello World</h1>
  </Container>
);
```

---

## Dynamic Props and Rendering

Props can change over time. React handles this by re-rendering components when state changes. Props are **immutable** — when a component needs different props, its parent passes a new props object.

### How React Renders Efficiently

1. React renders to an in-memory **Virtual DOM**.
2. Compares the latest Virtual DOM to the previous one (the **diff**).
3. Updates only the changed parts in the browser's actual DOM.

---

## Using Arrays with Props

Use `Array.map()` to build components from data:

```jsx
const DogList = () => {
  const dogs = [
    { name: "Sparky", age: 5 },
    { name: "Spot", age: 3 },
  ];

  return (
    <div>
      {dogs.map((dog) => (
        <div key={dog.name}>
          <h1>{dog.name}</h1>
          <h2>{dog.age}</h2>
        </div>
      ))}
    </div>
  );
};
```

> Always provide unique **keys** to elements inside `map()`. Use stable IDs from your data, not array indices.

---

## Conditional Rendering

```jsx
// Ternary
const IsEven = ({ number }) =>
  number % 2 === 0 ? <h1>Even</h1> : <h1>Odd</h1>;

// Switch
const Hello = ({ language }) => {
  switch (language) {
    case "eng": return <h1>Hello</h1>;
    case "esp": return <h1>Hola</h1>;
    default: return <h1>No Language Detected</h1>;
  }
};
```

---

## Knowledge Check

1. What is the difference between state and props?
2. How do you pass data from a parent to a child component?
3. How do you pass data from a child to a parent?
4. What is "lifting state" and when do you use it?
5. What is prop drilling?

---

*Copyright © Per Scholas 2026*

