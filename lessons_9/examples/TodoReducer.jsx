// TodoReducer.jsx - Todo list managed with useReducer
import React, { useReducer, useState } from "react";

const initialTodos = [
  { id: 1, text: "Learn useReducer", done: false },
  { id: 2, text: "Build a todo app", done: false },
  { id: 3, text: "Read React docs", done: true },
];

function todosReducer(state, action) {
  switch (action.type) {
    case "added":
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "toggled":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "deleted":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function TodoReducer() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch({ type: "added", text });
    setText("");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h1>Todo List (useReducer)</h1>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add a todo..."
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            padding: "0.5rem", borderBottom: "1px solid #eee",
          }}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => dispatch({ type: "toggled", id: todo.id })}
            />
            <span style={{
              flex: 1,
              textDecoration: todo.done ? "line-through" : "none",
              color: todo.done ? "#999" : "#333",
            }}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "deleted", id: todo.id })}
              style={{ color: "red", border: "none", cursor: "pointer" }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <p>{todos.filter((t) => !t.done).length} of {todos.length} remaining</p>
    </div>
  );
}

export default TodoReducer;
