// Counter.jsx - Simple counter demonstrating useState
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => setCount(count - 1)} style={{ fontSize: "1.5rem", margin: "0.5rem", padding: "0.5rem 1rem" }}>
          - 1
        </button>
        <button onClick={() => setCount(0)} style={{ fontSize: "1.5rem", margin: "0.5rem", padding: "0.5rem 1rem" }}>
          Reset
        </button>
        <button onClick={() => setCount(count + 1)} style={{ fontSize: "1.5rem", margin: "0.5rem", padding: "0.5rem 1rem" }}>
          + 1
        </button>
      </div>
    </div>
  );
}

export default Counter;
