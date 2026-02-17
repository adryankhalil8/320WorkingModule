// CounterReducer.jsx - Simple counter using useReducer
import React, { useReducer } from "react";

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementByAmount":
      return { count: state.count + action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>useReducer Counter</h1>
      <p style={{ fontSize: "3rem", margin: "1rem" }}>{state.count}</p>
      <div>
        <button onClick={() => dispatch({ type: "decrement" })} style={{ margin: "0.25rem", padding: "0.5rem 1rem" }}>
          - 1
        </button>
        <button onClick={() => dispatch({ type: "reset" })} style={{ margin: "0.25rem", padding: "0.5rem 1rem" }}>
          Reset
        </button>
        <button onClick={() => dispatch({ type: "increment" })} style={{ margin: "0.25rem", padding: "0.5rem 1rem" }}>
          + 1
        </button>
        <button onClick={() => dispatch({ type: "incrementByAmount", payload: 5 })} style={{ margin: "0.25rem", padding: "0.5rem 1rem" }}>
          + 5
        </button>
      </div>
    </div>
  );
}

export default CounterReducer;
