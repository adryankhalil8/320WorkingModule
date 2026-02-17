# GLAB 320H.8.1 - React Router App

## Learning Objectives

After completing this lab, learners will be able to:

- Create a "multi-page" React application using BrowserRouter.
- Fetch and handle data from an external API in React.

---

## Setup

```bash
npx create-react-app cryptoprices
cd cryptoprices
npm install react-router-dom
```

Delete the contents of `src/` and create blank files: `index.js`, `App.js`, `style.css`.

```bash
npm start
```

---

## Step 1: Set Up the Router

### index.js

```jsx
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
```

---

## Step 2: Create Pages

Create `src/pages/` with `Main.js`, `Currencies.js`, and `Price.js`:

```jsx
// Main.js
export default function Main() {
  return <h1>This is the Main Page</h1>;
}

// Currencies.js
export default function Currencies() {
  return <h1>This is the Currencies Page</h1>;
}

// Price.js
export default function Price() {
  return <h1>This is the Price Page</h1>;
}
```

---

## Step 3: Create Routes in App.js

```jsx
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}
```

---

## Step 4: Create Navigation

Create `src/components/Nav.js`:

```jsx
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/"><div>CRYPTO PRICES</div></Link>
      <Link to="/currencies"><div>CURRENCIES</div></Link>
    </div>
  );
}
```

Add styles to `style.css`:

```css
.nav {
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 15px;
  font-size: 2em;
}
.nav a {
  color: white;
  text-decoration: none;
}
```

---

## Step 5: Build the Currencies Page

```jsx
import { Link } from "react-router-dom";

export default function Currencies() {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => (
        <Link key={coin.symbol} to={`/price/${coin.symbol}`}>
          <h2>{coin.name}</h2>
        </Link>
      ))}
    </div>
  );
}
```

---

## Step 6: Build the Price Page

Get a free API key from [coinapi.io](https://www.coinapi.io/).

```jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const apiKey = "YOUR_API_KEY";
  const { symbol } = useParams();
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const getCoin = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
      } catch (e) {
        console.error(e);
      }
    };
    getCoin();
  }, [symbol]);

  if (!coin || !coin.rate) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{coin.asset_id_base} / {coin.asset_id_quote}</h1>
      <h2>${coin.rate.toFixed(2)}</h2>
    </div>
  );
}
```

---

*Copyright © Per Scholas 2026*

