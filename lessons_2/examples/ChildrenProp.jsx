// ChildrenProp.jsx - Using props.children for wrapper components
import React from "react";

function Card({ title, children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "12px",
      padding: "1.5rem",
      margin: "1rem 0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    }}>
      {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
      {children}
    </div>
  );
}

function ChildrenProp() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Using props.children</h1>

      <Card title="About Us">
        <p>We are a team of passionate developers.</p>
        <p>We build amazing things with React!</p>
      </Card>

      <Card title="Contact">
        <ul>
          <li>Email: hello@example.com</li>
          <li>Phone: 555-0123</li>
        </ul>
      </Card>

      <Card>
        <p><em>This card has no title — just content passed as children.</em></p>
      </Card>
    </div>
  );
}

export default ChildrenProp;
