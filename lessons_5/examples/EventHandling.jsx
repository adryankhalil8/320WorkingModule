// EventHandling.jsx - Various event handling patterns
import React, { useState } from "react";

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ margin: "0.25rem", padding: "0.5rem 1rem", cursor: "pointer" }}>
      {children}
    </button>
  );
}

function AlertButton({ message, children }) {
  return <Button onClick={() => alert(message)}>{children}</Button>;
}

function EventHandling() {
  const [log, setLog] = useState([]);

  const addLog = (message) => {
    setLog((prev) => [`${new Date().toLocaleTimeString()} - ${message}`, ...prev.slice(0, 9)]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Event Handling Patterns</h1>

      <section>
        <h2>Alert Buttons (handler as prop)</h2>
        <AlertButton message="Playing movie!">▶️ Play</AlertButton>
        <AlertButton message="Uploading image!">📤 Upload</AlertButton>
      </section>

      <section style={{ marginTop: "1rem" }}>
        <h2>Logging Buttons (inline handlers)</h2>
        <Button onClick={() => addLog("Clicked Button A")}>Button A</Button>
        <Button onClick={() => addLog("Clicked Button B")}>Button B</Button>
        <Button onClick={() => addLog("Clicked Button C")}>Button C</Button>
      </section>

      <section style={{ marginTop: "1rem" }}>
        <h2>Event Log</h2>
        <div style={{ backgroundColor: "#1a1a1a", color: "#0f0", padding: "1rem", borderRadius: "8px", fontFamily: "monospace", minHeight: "100px" }}>
          {log.length === 0 ? (
            <p style={{ color: "#666" }}>Click buttons to see events logged here...</p>
          ) : (
            log.map((entry, i) => <div key={i}>{entry}</div>)
          )}
        </div>
      </section>
    </div>
  );
}

export default EventHandling;
