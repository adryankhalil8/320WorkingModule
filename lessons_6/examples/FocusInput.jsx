// FocusInput.jsx - Using useRef to focus a DOM element
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.borderColor = "blue";
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>useRef — Focus an Input</h1>
      <p>Click the button to focus the input field:</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="I'll get focused..."
        style={{ padding: "0.5rem", fontSize: "1rem", border: "2px solid #ccc", borderRadius: "4px" }}
      />
      <button onClick={handleClick} style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
