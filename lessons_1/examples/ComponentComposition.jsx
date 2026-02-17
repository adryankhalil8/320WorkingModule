// ComponentComposition.jsx - Nesting and composing components
import React from "react";

function Header() {
  return (
    <header style={{ backgroundColor: "#333", color: "white", padding: "1rem" }}>
      <h1>My React App</h1>
    </header>
  );
}

function NavItem({ label, href = "#" }) {
  return (
    <li style={{ display: "inline", marginRight: "1rem" }}>
      <a href={href} style={{ color: "lightblue", textDecoration: "none" }}>
        {label}
      </a>
    </li>
  );
}

function Navigation() {
  return (
    <nav style={{ backgroundColor: "#444", padding: "0.5rem" }}>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <NavItem label="Home" />
        <NavItem label="About" />
        <NavItem label="Contact" />
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <main style={{ padding: "2rem" }}>
      <h2>Welcome to Component Composition</h2>
      <p>This page is built from multiple small, reusable components.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", padding: "1rem", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} My React App</p>
    </footer>
  );
}

// The main App composes all components together
function ComponentComposition() {
  return (
    <div>
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default ComponentComposition;
