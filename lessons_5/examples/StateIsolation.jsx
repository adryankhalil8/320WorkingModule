// StateIsolation.jsx - Each component instance has its own state
import React, { useState } from "react";

function LikeButton({ label }) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ display: "inline-block", margin: "1rem", textAlign: "center" }}>
      <h3>{label}</h3>
      <p style={{ fontSize: "2rem" }}>❤️ {likes}</p>
      <button onClick={() => setLikes(likes + 1)} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
        Like
      </button>
    </div>
  );
}

function StateIsolation() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>State is Isolated Per Instance</h1>
      <p>Each button below has its own independent like count:</p>
      <div>
        <LikeButton label="Post A" />
        <LikeButton label="Post B" />
        <LikeButton label="Post C" />
      </div>
    </div>
  );
}

export default StateIsolation;
