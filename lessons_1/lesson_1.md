# 320H.1 - Introduction to React

## Learning Objectives

By the end of this lesson, learners will be able to:

- Describe why React is so popular and in high demand.
- Describe the history of React.
- Describe what React is in terms of code organization.
- Explain what "JSX" is.
- Create and style React components.
- Use standard JavaScript patterns with React.
- Import and export React components across files.
- Build a simple React app.

---

## React

React is a free and open-source front-end JavaScript library for building **component-based** user interfaces.

React is **not** a full Model-View-Controller (MVC) framework like some other front-end frameworks you may have heard of (like Next.js, which uses the React library). React is a library that encourages and facilitates the creation of reusable UI components that present data which can change over time.

React was created by **Jordan Walke**, a software engineer at Facebook, in response to the company's growing need for a more dynamic, responsive interface that was also fast, scalable, and highly performant. React was released in **2013** and has since been maintained by Meta and a large community of contributors.

### Why React Is Popular

- Simple to read and easy to use
- Designed for easy maintenance
- Robust, interactive, and dynamic
- Easy to test
- Cross-platform via React Native

### Key Concepts in This Lesson

- Separation of Concerns
- Component-Driven Development
- Beginning with the End in Mind
- Declarative Programming
- The Virtual DOM
- React Developer Tools
- Components
- JSX

---

## Separation of Concerns

Separation of concerns is the practice of breaking down a web application into distinct parts that each handles a separate concern (UI, business logic, data access, etc.).

**Traditional front-end separation:**

| Layer | Purpose |
|---|---|
| HTML | Structure |
| CSS | Presentation |
| JavaScript | Functionality |

With React, separation of concerns is organized by **component** — each component contains its own structure, style, and behavior.

### Thin Vertical Slices and User Stories

This approach is known as **"thin vertical slices."** Each deliverable should encompass a small but fully-functioning feature that covers all "horizontal" aspects of the platform.

**User Stories** (from Agile methodology) follow this pattern:

> **As a** `<role>`, **I want** `<functionality>` **so that I can achieve** `<outcome>`.

**Example:**

> As a learner, I must be able to upload the results of my assignments so that I can receive credit for my work.

**Acceptance Criteria:**

- Verify that I can upload a file or link.
- Verify that the file or link is stored in the database.
- Verify that I can remove and replace an upload.

User stories should follow the **INVEST** mnemonic:

| Letter | Meaning | Description |
|---|---|---|
| I | Independent | Self-contained |
| N | Negotiable | Leave space for discussion |
| V | Valuable | Must deliver value to stakeholders |
| E | Estimatable | Can estimate size |
| S | Small | Small enough to plan accurately |
| T | Testable | Provides info needed for testing |

**Horizontal vs. Vertical Examples:**

| Type | Example |
|---|---|
| Horizontal | Modify CSS to add drop shadow to all `<img>` elements |
| Horizontal | Build an HTML table to store dates and data ranges |
| **Vertical** | Create a data table that fetches from our API to display user data |
| **Vertical** | Add filters to change data display between date, location, and financial impact |

---

## Component-Driven Development

**Component-Driven Development (CDD)** uses reusable components to create a user interface:

- Each component renders a specific part of the UI
- Components can be **composed together**
- Uses a **declarative programming** style
- Encourages **modular, reusable code**
- Supports **server-side rendering**

---

## Components

A React app's UI consists of components — both built-in and user-defined.

- **React Elements** — built-in components that emit HTML elements (`<div>`, `<h1>`, etc.)
- **Custom Components** — the components we create, used like HTML tags (`<HomePage>`, `<SearchBar>`)

> **Important:** Components must always start with a **capital letter**.

### Basic Component Example

```jsx
function PerScholasLogo() {
  return (
    <img
      src="https://perscholas.org/wp-content/themes/per-scholas/assets/images/logo1.svg"
      alt="Per Scholas"
    />
  );
}
```

### Composing Components

```jsx
<PageContainer>
  <Navigation>
    <PerScholasLogo />
    <SearchBar />
    <Login />
  </Navigation>
  <Sidebar />
  <ContentContainer>
    <TableOfContents />
    <Article />
    <Article />
    <Article />
  </ContentContainer>
</PageContainer>
```

---

## JSX

JSX is an **XML-based syntax** that looks like HTML. Browsers don't understand JSX, so it must be **transpiled** into pure JavaScript (handled automatically by tools like Babel/Vite).

```jsx
const element = <h1>Hello, world!</h1>;
```

> JSX is an **expression** — it can be used in conditionals, loops, assigned to variables, accepted as arguments, and returned from functions.

### JSX Rules

#### 1. Only One Top-Level Element

```jsx
// ✅ GOOD
<div>
  <h1>Hello World</h1>
  <p>lorem ipsum</p>
</div>

// ❌ BAD — multiple top-level elements
<h1>Hello World</h1>
<p>lorem ipsum</p>

// ✅ GOOD — using a Fragment
<>
  <h1>Hello World</h1>
  <p>lorem ipsum</p>
</>
```

#### 2. Attributes Are camelCase

| HTML | JSX |
|---|---|
| `onclick` | `onClick` |
| `onchange` | `onChange` |
| `class` | `className` |

#### 3. Inline Styles Use Object Syntax

```jsx
// HTML
<div style="display: flex; background-color: blue;">Hello</div>

// JSX
<div style={{ display: "flex", backgroundColor: "blue" }}>Hello</div>
```

#### 4. Arrays Work

```jsx
return [<h1 key="1">Hello</h1>, <h1 key="2">World</h1>];
```

#### 5. JavaScript Expressions with Curly Braces

```jsx
const name = "Jane Doe";
const element = <h1>Hello, {name}</h1>;
```

#### 6. Everything Must Close

```jsx
<App>
  <Header />
  <Content>
    <Post />
  </Content>
  <Footer />
</App>
```

> **Never** nest component definitions inside other components.

---

## Declarative Programming

Declarative programming in React focuses on **describing what the UI should look like**, rather than the step-by-step instructions to build it. Components, properties, and state let developers express the desired outcome, and React handles the implementation.

---

## The Virtual DOM

The **Virtual DOM** is a JavaScript representation of the actual DOM.

1. React creates a virtual representation of the current DOM.
2. When state changes, React runs a **diffing algorithm** comparing Virtual DOM to actual DOM.
3. Only changed parts are updated — not the entire page.

This makes React fast and efficient.

---

## React Developer Tools

**React Developer Tools** is a browser extension for Chrome and Firefox for inspecting and debugging React components — see components, props, state, and hierarchy interactively.

> Install from the Chrome Web Store by searching "React Developer Tools."

---

## Styled Components

A third-party library for components with built-in CSS:

```bash
npm install styled-components
```

```jsx
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  color: red;
`;

const Component = () => (
  <Container>
    <Title>Hello World</Title>
  </Container>
);
```

---

## Conditional Rendering

React uses pure JavaScript for conditional rendering:

### Ternary Operator

```jsx
const IsEven = ({ number }) => {
  return number % 2 === 0 ? <h1>Even</h1> : <h1>Odd</h1>;
};
```

### Short-Circuit with &&

```jsx
function Navbar({ isLoggedIn = false }) {
  return (
    <nav>
      <Menu />
      {isLoggedIn && <UserMenu />}
      {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
    </nav>
  );
}
```

### Conditional Styles

```jsx
const Modal = ({ visible, children }) => (
  <div style={{ display: visible ? "block" : "none" }}>
    {children}
  </div>
);
```

---

## Using Arrays in React

Use `Array.map()` to generate JSX for each element:

```jsx
const DogList = () => {
  const dogs = [
    { name: "Sparky", age: 5 },
    { name: "Spot", age: 3 },
    { name: "Ralph", age: 7 },
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

> JSX elements inside `map()` always need **keys**. Use stable IDs from your data rather than array indices.

---

## Importing and Exporting Components

```jsx
// Header.js
export default function Header() {
  return <h1>My App</h1>;
}

// App.js
import Header from "./Header";
function App() {
  return <Header />;
}
```

---

## Popular React Libraries

| Library | Purpose |
|---|---|
| `react-router-dom` | Client-side routing |
| `styled-components` | CSS-in-JS styling |
| `Material UI` | Material Design components |
| `Redux / Redux Toolkit` | State management |
| `Formik` | Form handling |

---

## Knowledge Check

1. What is React, and what is it used for?
2. What is a React Component?
3. What is a React Element?
4. What is JSX?
5. How do you create a React Component?
6. How do you include JavaScript expressions inside of JSX?

---

## Lab Activities

- **ALAB 320H.1.1** — React Page Layout
- **ALAB 320H.1.2** — React Fashion Blog

---

*Copyright © Per Scholas 2026*

