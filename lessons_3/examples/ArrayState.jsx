// ArrayState.jsx - Managing array state (add, remove, update)
import React, { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, name: "Apples", bought: false },
    { id: 2, name: "Bread", bought: false },
    { id: 3, name: "Milk", bought: true },
  ]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (!newItem.trim()) return;
    setItems([
      { id: Date.now(), name: newItem, bought: false },
      ...items,
    ]);
    setNewItem("");
  };

  const toggleItem = (id) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, bought: !item.bought } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>🛒 Shopping List</h1>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add item..."
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            padding: "0.5rem", borderBottom: "1px solid #eee",
            textDecoration: item.bought ? "line-through" : "none",
            color: item.bought ? "#999" : "#333",
          }}>
            <input type="checkbox" checked={item.bought} onChange={() => toggleItem(item.id)} />
            <span style={{ flex: 1 }}>{item.name}</span>
            <button onClick={() => removeItem(item.id)} style={{ color: "red", border: "none", cursor: "pointer" }}>✕</button>
          </li>
        ))}
      </ul>
      <p>{items.filter((i) => !i.bought).length} items remaining</p>
    </div>
  );
}

export default ShoppingList;
