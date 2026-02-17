// ControlledVsUncontrolled.jsx - Compare controlled and uncontrolled form inputs
import React, { useState, useRef } from "react";

function ControlledVsUncontrolled() {
  // Controlled input
  const [controlledValue, setControlledValue] = useState("");

  // Uncontrolled input
  const uncontrolledRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Controlled: "${controlledValue}"\nUncontrolled: "${uncontrolledRef.current.value}"`
    );
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h1>Controlled vs Uncontrolled Inputs</h1>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ marginBottom: "1rem", padding: "1rem" }}>
          <legend><strong>Controlled Input</strong></legend>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>React state drives the value. Every keystroke triggers a re-render.</p>
          <input
            type="text"
            value={controlledValue}
            onChange={(e) => setControlledValue(e.target.value)}
            placeholder="Type here..."
            style={{ padding: "0.5rem", width: "100%" }}
          />
          <p>Current state: <code>{controlledValue || "(empty)"}</code></p>
        </fieldset>

        <fieldset style={{ marginBottom: "1rem", padding: "1rem" }}>
          <legend><strong>Uncontrolled Input</strong></legend>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>The DOM holds the value. We read it via ref only when needed.</p>
          <input
            type="text"
            ref={uncontrolledRef}
            defaultValue=""
            placeholder="Type here..."
            style={{ padding: "0.5rem", width: "100%" }}
          />
          <p>Value is read from ref on submit only.</p>
        </fieldset>

        <button type="submit" style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
          Submit Both
        </button>
      </form>
    </div>
  );
}

export default ControlledVsUncontrolled;
