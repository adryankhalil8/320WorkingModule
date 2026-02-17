// ConditionalRendering.jsx - Multiple patterns for conditional rendering
import React from "react";

// Pattern 1: If/Else with multiple returns
function UserGreeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back!</h2>;
  }
  return <h2>Please sign in.</h2>;
}

// Pattern 2: Ternary operator
function StatusBadge({ isOnline }) {
  return (
    <span style={{
      color: "white",
      backgroundColor: isOnline ? "green" : "gray",
      padding: "4px 12px",
      borderRadius: "12px",
      fontSize: "0.85rem",
    }}>
      {isOnline ? "Online" : "Offline"}
    </span>
  );
}

// Pattern 3: && short-circuit
function Notification({ count }) {
  return (
    <div>
      <h3>Inbox</h3>
      {count > 0 && <p>You have {count} new messages!</p>}
    </div>
  );
}

// Pattern 4: Object lookup
function TrafficLight({ color }) {
  const messages = {
    red: "Stop!",
    yellow: "Caution!",
    green: "Go!",
  };
  return <p>{messages[color] || "Unknown signal"}</p>;
}

function ConditionalRendering() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Conditional Rendering Patterns</h1>

      <UserGreeting isLoggedIn={true} />
      <UserGreeting isLoggedIn={false} />

      <div style={{ margin: "1rem 0" }}>
        <StatusBadge isOnline={true} /> <StatusBadge isOnline={false} />
      </div>

      <Notification count={5} />
      <Notification count={0} />

      <TrafficLight color="green" />
      <TrafficLight color="red" />
    </div>
  );
}

export default ConditionalRendering;
