// JSXBasics.jsx - Demonstrates core JSX rules and features
import React from "react";

function JSXBasics() {
  const name = "React Developer";
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;

  // Rule 1: Only one top-level element (using Fragment)
  return (
    <>
      {/* Rule 5: JavaScript expressions in curly braces */}
      <h1>Welcome, {name}!</h1>
      <p>The current year is {currentYear}.</p>
      <p>2 + 2 = {2 + 2}</p>

      {/* Rule 2: camelCase attributes */}
      <button onClick={() => alert("Clicked!")}>Click Me</button>

      {/* Rule 3: Inline styles as objects */}
      <div style={{ backgroundColor: "lightblue", padding: "1rem", borderRadius: "8px" }}>
        <p>This div has inline styles using object syntax.</p>
      </div>

      {/* Conditional rendering with && */}
      {isLoggedIn && <p>You are logged in!</p>}

      {/* Conditional rendering with ternary */}
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </>
  );
}

export default JSXBasics;
