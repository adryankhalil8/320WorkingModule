// UserContext.jsx - Auth context with login/logout using useContext + useState
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ username, loginTime: new Date().toLocaleTimeString() });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

function LoginForm() {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) login(username);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Please Log In</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name..."
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button type="submit" style={{ padding: "0.5rem 1rem" }}>Log In</button>
    </form>
  );
}

function Dashboard() {
  const { user, logout } = useContext(UserContext);
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Welcome, {user.username}!</h2>
      <p>You logged in at {user.loginTime}</p>
      <button onClick={logout} style={{ padding: "0.5rem 1rem" }}>Log Out</button>
    </div>
  );
}

function UserContextDemo() {
  const { user } = useContext(UserContext);
  return user ? <Dashboard /> : <LoginForm />;
}

function App() {
  return (
    <UserProvider>
      <div style={{ maxWidth: "500px", margin: "auto", fontFamily: "sans-serif" }}>
        <h1 style={{ textAlign: "center" }}>User Context Demo</h1>
        <UserContextDemo />
      </div>
    </UserProvider>
  );
}

export default App;
