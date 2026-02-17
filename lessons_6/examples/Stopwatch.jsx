// Stopwatch.jsx - useRef to hold mutable values (interval ID)
import React, { useState, useRef } from "react";

function Stopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
    const startTime = Date.now() - elapsed;
    intervalRef.current = setInterval(() => {
      setElapsed(Date.now() - startTime);
    }, 10);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setElapsed(0);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Stopwatch</h1>
      <p style={{ fontSize: "3rem", fontFamily: "monospace", margin: "1rem" }}>
        {formatTime(elapsed)}
      </p>
      <div>
        <button onClick={start} disabled={isRunning} style={{ margin: "0.25rem", padding: "0.5rem 1.5rem", fontSize: "1rem" }}>
          ▶️ Start
        </button>
        <button onClick={stop} disabled={!isRunning} style={{ margin: "0.25rem", padding: "0.5rem 1.5rem", fontSize: "1rem" }}>
          ⏸ Stop
        </button>
        <button onClick={reset} style={{ margin: "0.25rem", padding: "0.5rem 1.5rem", fontSize: "1rem" }}>
          🔄 Reset
        </button>
      </div>
      <p style={{ color: "#666", marginTop: "1rem" }}>
        The interval ID is stored in a ref — it persists across renders without causing re-renders.
      </p>
    </div>
  );
}

export default Stopwatch;
