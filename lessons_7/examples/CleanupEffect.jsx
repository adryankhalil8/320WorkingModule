// CleanupEffect.jsx - Demonstrating useEffect cleanup with a timer
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer effect: starting interval");
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function runs when component unmounts
    return () => {
      console.log("Timer cleanup: clearing interval");
      clearInterval(id);
    };
  }, []); // Empty dependency array = run once on mount

  return (
    <div style={{
      backgroundColor: "#1a1a2e", color: "#e94560",
      padding: "1rem 2rem", borderRadius: "8px",
      fontFamily: "monospace", fontSize: "2rem",
      display: "inline-block",
    }}>
      ⏱ {seconds}s
    </div>
  );
}

function CleanupEffect() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>useEffect Cleanup</h1>
      <p>Toggle the timer to see cleanup run (check the console).</p>
      <button
        onClick={() => setShowTimer(!showTimer)}
        style={{ padding: "0.5rem 1rem", marginBottom: "1rem", fontSize: "1rem" }}
      >
        {showTimer ? "Hide Timer (unmount)" : "Show Timer (mount)"}
      </button>
      <div>{showTimer ? <Timer /> : <p>Timer is unmounted. Interval has been cleared!</p>}</div>
    </div>
  );
}

export default CleanupEffect;
