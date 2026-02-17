# Module 320H — React

Welcome to the React module! This repository contains 10 lessons, hands-on labs, and 25 interactive code examples covering React fundamentals.

## Getting Started

### Prerequisites

- **Node.js** version 18 or higher — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor (we recommend **VS Code**)

### Setup

1. **Clone this repository:**

   ```bash
   git clone <your-repo-url>
   cd module_320_react
   ```

2. **Install dependencies:**

   ```bash
   cd demo-app
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open the app** — the terminal will show a local URL (usually `http://localhost:5173`). Open it in your browser.

That's it! You'll see a sidebar with all 10 lessons. Each lesson has:
- **📖 Lesson Content** — the full lesson text rendered in the browser
- **🧪 Labs** — hands-on assignments (where applicable)
- **⚡ Examples** — interactive, runnable React examples that demonstrate the concepts

---

## Repository Structure

```
module_320_react/
├── README.md                ← You are here
├── INSTRUCTORS_GUIDE.md     ← 6-day schedule (instructors only)
├── demo-app/                ← Vite React app that hosts all examples
│   ├── package.json
│   ├── src/
│   │   ├── App.jsx          ← Main app with lesson/example browser
│   │   └── MarkdownViewer.jsx
│   └── ...
├── lessons_1/               ← Lesson 1: Introduction to React
│   ├── lesson_1.md
│   ├── labs/
│   │   ├── lab_1.md
│   │   └── lab_2.md
│   └── examples/
│       ├── HelloWorld.jsx
│       ├── JSXBasics.jsx
│       └── ...
├── lessons_2/               ← Lesson 2: State & Props
│   ├── lesson_2.md
│   ├── labs/
│   └── examples/
├── ...
└── lessons_10/              ← Lesson 10: useContext
    ├── lesson_10.md
    └── examples/
```

## Lessons Overview

| # | Topic | Labs | Examples |
|---|-------|------|----------|
| 1 | Introduction to React | 2 | 5 |
| 2 | React State and Props | 1 | 3 |
| 3 | React Hooks: useState | 1 | 3 |
| 4 | Thinking in React | — | 1 |
| 5 | Interactive Components | — | 2 |
| 6 | React Hooks: useRef | — | 3 |
| 7 | React Hooks: useEffect | 1 | 3 |
| 8 | React Router | 2 | 1 |
| 9 | React Hooks: useReducer | 1 | 2 |
| 10 | React Hooks: useContext | — | 2 |

## Working on Labs

Each lab has its own markdown file with instructions. To complete a lab:

1. Read the lab instructions in the app (or in the `labs/` folder markdown files)
2. Create a **new React project** for your lab work:
   ```bash
   npm create vite@latest my-lab-1 -- --template react
   cd my-lab-1
   npm install
   npm run dev
   ```
3. Build what the lab asks for in your new project
4. Push your completed lab to your own GitHub repository

> **Note:** The `demo-app` is for viewing lessons and examples. Create separate projects for your lab work so you can practice from scratch.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm run dev` shows "port in use" | Try `npm run dev -- --port 3000` |
| Module not found errors | Run `npm install` again inside `demo-app/` |
| Node version too old | Upgrade Node.js to v18+ from [nodejs.org](https://nodejs.org/) |
| Page is blank | Check the browser console (F12) for errors |
