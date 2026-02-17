# ALAB 320H.9.1 - Building a Todo List

## Learning Objectives

After completing this lab, learners will have demonstrated the ability to:

- Use `useReducer` and/or `useImmerReducer` to manage state.
- Use `useState` where reducers aren't appropriate.
- Implement controlled forms and inputs.
- Decide where pieces of state should live.
- Use conditional rendering and styling for a positive UX.
- Create a complete React application from requirements.

---

## Instructions

1. Create a new React application locally:
   ```bash
   npx create-react-app react-todo-list
   cd react-todo-list
   npm start
   ```
2. Follow the requirements below to build your application.
3. Push your completed code to a GitHub repository and submit the link.

---

## Requirements

Your todo list application must have:

### Display
- A heading labeling it as a "Todo List."
- A list of todo items (strings describing activities to complete).

### Each Todo Item
- A **checkbox** indicating whether it is complete.
- A **delete button** (disabled unless the todo is complete).
- An **edit button** that replaces the text with a text input for editing.
  - While editing, hide delete/edit buttons and show a **save button**.

### Adding Todos
- An **input element** to create new todos and add them to the list.
- New todos should appear at the **top** of the list.

---

## Starter Data (Optional)

```js
const initialState = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  { userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  { userId: 1, id: 4, title: "et porro tempora", completed: true },
  { userId: 1, id: 5, title: "laboriosam mollitia et enim", completed: false },
];
```

> **Stretch Goal:** Fetch initial data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos).

---

## Tips

- Start with a **mockup** and follow the "Thinking in React" steps.
- Use `useReducer` for todo operations (add, delete, toggle, edit).
- Use `useState` for the input field and edit mode tracking.
- Remember to provide unique **keys** for list items.

---

## Deliverables

A link to a GitHub repository containing your completed lab with no errors.

---

*Copyright © Per Scholas 2026*

