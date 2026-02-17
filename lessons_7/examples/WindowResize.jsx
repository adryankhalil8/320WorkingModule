// WindowResize.jsx - useEffect to track browser window size
import React, { useState, useEffect } from "react";

function WindowResize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Window Size Tracker</h1>
      <p>Resize your browser window to see this update.</p>
      <div style={{ fontSize: "2rem", fontFamily: "monospace", margin: "1rem" }}>
        {size.width} x {size.height}
      </div>
      <div style={{
        width: `${Math.min(size.width / 5, 300)}px`,
        height: `${Math.min(size.height / 5, 200)}px`,
        backgroundColor: "lightblue",
        margin: "auto",
        border: "2px solid steelblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
      }}>
        Mini preview
      </div>
    </div>
  );
}

export default WindowResize;
