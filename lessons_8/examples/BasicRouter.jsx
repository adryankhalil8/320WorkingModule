// BasicRouter.jsx - Basic React Router setup with multiple pages
import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav style={{
        backgroundColor: "#333", padding: "1rem",
        display: "flex", gap: "1rem",
      }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>🏠 Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>ℹ️ About</Link>
        <Link to="/users" style={{ color: "white", textDecoration: "none" }}>👥 Users</Link>
      </nav>
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our React Router example!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This app demonstrates React Router with nested routes and URL parameters.</p>
    </div>
  );
}

const users = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Manager" },
];

function UserList() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ margin: "0.5rem 0" }}>
            <Link to={`/users/${user.id}`}>{user.name}</Link> — {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetail() {
  const { userId } = useParams();
  const user = users.find((u) => u.id === Number(userId));

  if (!user) return <h2>User not found!</h2>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Role: {user.role}</p>
      <Link to="/users">← Back to Users</Link>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 — Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

function BasicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/:userId" element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default BasicRouter;
