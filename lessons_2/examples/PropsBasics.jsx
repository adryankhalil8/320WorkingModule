// PropsBasics.jsx - Passing and using props
import React from "react";

function UserCard({ name, role, avatar = "👤" }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      margin: "0.5rem",
      display: "inline-block",
      textAlign: "center",
      minWidth: "150px",
    }}>
      <div style={{ fontSize: "3rem" }}>{avatar}</div>
      <h3>{name}</h3>
      <p style={{ color: "#666" }}>{role}</p>
    </div>
  );
}

function PropsBasics() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Team Directory</h1>
      <UserCard name="Alice" role="Frontend Developer" avatar="👩‍💻" />
      <UserCard name="Bob" role="Backend Developer" avatar="👨‍💻" />
      <UserCard name="Charlie" role="Designer" avatar="🎨" />
      <UserCard name="Diana" role="Project Manager" />
    </div>
  );
}

export default PropsBasics;
