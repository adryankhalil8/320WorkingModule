// ThemeContext.jsx - Theme toggle using useContext
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
  light: { background: "#ffffff", color: "#333333", buttonBg: "#333", buttonColor: "#fff", cardBg: "#f5f5f5" },
  dark: { background: "#1a1a2e", color: "#e0e0e0", buttonBg: "#e94560", buttonColor: "#fff", cardBg: "#16213e" },
};

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");
  const toggleTheme = () => setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme: themes[themeName], themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme, themeName, toggleTheme } = useContext(ThemeContext);
  return (
    <header style={{ backgroundColor: theme.buttonBg, color: theme.buttonColor, padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ margin: 0 }}>Theme Context Demo</h1>
      <button onClick={toggleTheme} style={{ padding: "0.5rem 1rem", cursor: "pointer", backgroundColor: theme.cardBg, color: theme.color, border: "none", borderRadius: "4px" }}>
        Switch to {themeName === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}

function Card({ title, children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.cardBg, color: theme.color, padding: "1.5rem", borderRadius: "8px", margin: "1rem 0" }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function Content() {
  return (
    <main style={{ padding: "2rem" }}>
      <Card title="About useContext">
        <p>The useContext hook lets deeply nested components access shared data without prop drilling.</p>
      </Card>
      <Card title="How This Works">
        <p>The ThemeProvider wraps the app and provides theme data. Header and Card components consume it via useContext — no props passed!</p>
      </Card>
    </main>
  );
}

function ThemeContextDemo() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh" }}>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default ThemeContextDemo;
