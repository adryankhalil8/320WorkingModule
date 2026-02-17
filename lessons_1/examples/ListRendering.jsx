// ListRendering.jsx - Rendering lists from arrays with .map() and keys
import React from "react";

const fruits = [
  { id: 1, name: "Apple", emoji: "🍎", color: "red" },
  { id: 2, name: "Banana", emoji: "🍌", color: "yellow" },
  { id: 3, name: "Grapes", emoji: "🍇", color: "purple" },
  { id: 4, name: "Orange", emoji: "🍊", color: "orange" },
  { id: 5, name: "Watermelon", emoji: "🍉", color: "green" },
];

function FruitCard({ fruit }) {
  return (
    <div style={{
      border: `2px solid ${fruit.color}`,
      borderRadius: "8px",
      padding: "1rem",
      margin: "0.5rem",
      display: "inline-block",
      minWidth: "120px",
      textAlign: "center",
    }}>
      <span style={{ fontSize: "2rem" }}>{fruit.emoji}</span>
      <h3>{fruit.name}</h3>
    </div>
  );
}

function ListRendering() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Fruit Gallery</h1>
      <p>Rendered from an array using .map() with unique keys:</p>
      <div>
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
}

export default ListRendering;
