import { useState } from "react";
import MarkdownViewer from "./MarkdownViewer.jsx";

// Lesson 1 examples
import HelloWorld from "@lessons/lessons_1/examples/HelloWorld.jsx";
import JSXBasics from "@lessons/lessons_1/examples/JSXBasics.jsx";
import ComponentComposition from "@lessons/lessons_1/examples/ComponentComposition.jsx";
import ConditionalRendering from "@lessons/lessons_1/examples/ConditionalRendering.jsx";
import ListRendering from "@lessons/lessons_1/examples/ListRendering.jsx";

// Lesson 2 examples
import PropsBasics from "@lessons/lessons_2/examples/PropsBasics.jsx";
import LiftingState from "@lessons/lessons_2/examples/LiftingState.jsx";
import ChildrenProp from "@lessons/lessons_2/examples/ChildrenProp.jsx";

// Lesson 3 examples
import Counter from "@lessons/lessons_3/examples/Counter.jsx";
import ObjectState from "@lessons/lessons_3/examples/ObjectState.jsx";
import ArrayState from "@lessons/lessons_3/examples/ArrayState.jsx";

// Lesson 4 examples
import FilterableProductTable from "@lessons/lessons_4/examples/FilterableProductTable.jsx";

// Lesson 5 examples
import EventHandling from "@lessons/lessons_5/examples/EventHandling.jsx";
import StateIsolation from "@lessons/lessons_5/examples/StateIsolation.jsx";

// Lesson 6 examples
import FocusInput from "@lessons/lessons_6/examples/FocusInput.jsx";
import Stopwatch from "@lessons/lessons_6/examples/Stopwatch.jsx";
import ControlledVsUncontrolled from "@lessons/lessons_6/examples/ControlledVsUncontrolled.jsx";

// Lesson 7 examples
import FetchData from "@lessons/lessons_7/examples/FetchData.jsx";
import CleanupEffect from "@lessons/lessons_7/examples/CleanupEffect.jsx";
import WindowResize from "@lessons/lessons_7/examples/WindowResize.jsx";

// Lesson 8 examples
import BasicRouter from "@lessons/lessons_8/examples/BasicRouter.jsx";

// Lesson 9 examples
import CounterReducer from "@lessons/lessons_9/examples/CounterReducer.jsx";
import TodoReducer from "@lessons/lessons_9/examples/TodoReducer.jsx";

// Lesson 10 examples
import ThemeContext from "@lessons/lessons_10/examples/ThemeContext.jsx";
import UserContext from "@lessons/lessons_10/examples/UserContext.jsx";

const lessons = [
  {
    title: "Lesson 1 — Intro to React",
    lessonFile: "/lessons_1/lesson_1.md",
    labs: [
      { name: "Lab 1.1", file: "/lessons_1/labs/lab_1.md" },
      { name: "Lab 1.2", file: "/lessons_1/labs/lab_2.md" },
    ],
    examples: [
      { name: "HelloWorld", component: HelloWorld },
      { name: "JSX Basics", component: JSXBasics },
      { name: "Component Composition", component: ComponentComposition },
      { name: "Conditional Rendering", component: ConditionalRendering },
      { name: "List Rendering", component: ListRendering },
    ],
  },
  {
    title: "Lesson 2 — State & Props",
    lessonFile: "/lessons_2/lesson_2.md",
    labs: [
      { name: "Lab 2.1", file: "/lessons_2/labs/lab_1.md" },
    ],
    examples: [
      { name: "Props Basics", component: PropsBasics },
      { name: "Lifting State", component: LiftingState },
      { name: "Children Prop", component: ChildrenProp },
    ],
  },
  {
    title: "Lesson 3 — useState",
    lessonFile: "/lessons_3/lesson_3.md",
    labs: [
      { name: "Lab 3.1", file: "/lessons_3/labs/lab_1.md" },
    ],
    examples: [
      { name: "Counter", component: Counter },
      { name: "Object State", component: ObjectState },
      { name: "Array State (Shopping List)", component: ArrayState },
    ],
  },
  {
    title: "Lesson 4 — Thinking in React",
    lessonFile: "/lessons_4/lesson_4.md",
    labs: [],
    examples: [
      { name: "Filterable Product Table", component: FilterableProductTable },
    ],
  },
  {
    title: "Lesson 5 — Interactive Components",
    lessonFile: "/lessons_5/lesson_5.md",
    labs: [],
    examples: [
      { name: "Event Handling", component: EventHandling },
      { name: "State Isolation", component: StateIsolation },
    ],
  },
  {
    title: "Lesson 6 — useRef",
    lessonFile: "/lessons_6/lesson_6.md",
    labs: [],
    examples: [
      { name: "Focus Input", component: FocusInput },
      { name: "Stopwatch", component: Stopwatch },
      { name: "Controlled vs Uncontrolled", component: ControlledVsUncontrolled },
    ],
  },
  {
    title: "Lesson 7 — useEffect",
    lessonFile: "/lessons_7/lesson_7.md",
    labs: [
      { name: "Lab 7.1", file: "/lessons_7/labs/lab_1.md" },
    ],
    examples: [
      { name: "Fetch Data", component: FetchData },
      { name: "Cleanup Effect", component: CleanupEffect },
      { name: "Window Resize", component: WindowResize },
    ],
  },
  {
    title: "Lesson 8 — React Router",
    lessonFile: "/lessons_8/lesson_8.md",
    labs: [
      { name: "Lab 8.1", file: "/lessons_8/labs/lab_1.md" },
      { name: "Lab 8.2", file: "/lessons_8/labs/lab_2.md" },
    ],
    examples: [
      { name: "Basic Router", component: BasicRouter },
    ],
  },
  {
    title: "Lesson 9 — useReducer",
    lessonFile: "/lessons_9/lesson_9.md",
    labs: [
      { name: "Lab 9.1", file: "/lessons_9/labs/lab_1.md" },
    ],
    examples: [
      { name: "Counter Reducer", component: CounterReducer },
      { name: "Todo Reducer", component: TodoReducer },
    ],
  },
  {
    title: "Lesson 10 — useContext",
    lessonFile: "/lessons_10/lesson_10.md",
    labs: [],
    examples: [
      { name: "Theme Context", component: ThemeContext },
      { name: "User Context", component: UserContext },
    ],
  },
];

// ── Tab Button ────────────────────────────────────────────
function TabButton({ label, active, onClick, badge }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.5rem 1rem",
        border: "none",
        borderBottom: active ? "3px solid #e94560" : "3px solid transparent",
        background: active ? "#fff" : "transparent",
        color: active ? "#e94560" : "#666",
        fontWeight: active ? "bold" : "normal",
        cursor: "pointer",
        fontSize: "0.9rem",
        transition: "all 0.15s",
      }}
    >
      {label}
      {badge > 0 && (
        <span style={{
          backgroundColor: "#e94560",
          color: "#fff",
          borderRadius: "10px",
          padding: "1px 6px",
          fontSize: "0.7rem",
          marginLeft: "6px",
        }}>
          {badge}
        </span>
      )}
    </button>
  );
}

// ── Main App ──────────────────────────────────────────────
function App() {
  const [activeLesson, setActiveLesson] = useState(null); // index
  const [activeTab, setActiveTab] = useState("lesson");    // "lesson" | "labs" | "examples"
  const [activeExample, setActiveExample] = useState(null);
  const [activeLab, setActiveLab] = useState(null);
  const [expandedLesson, setExpandedLesson] = useState(null);

  const lesson = activeLesson !== null ? lessons[activeLesson] : null;
  const ActiveComponent = activeExample?.component;

  const selectLesson = (index) => {
    setActiveLesson(index);
    setActiveTab("lesson");
    setActiveExample(null);
    setActiveLab(null);
    setExpandedLesson(index);
  };

  const goHome = () => {
    setActiveLesson(null);
    setActiveTab("lesson");
    setActiveExample(null);
    setActiveLab(null);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* ── Sidebar ── */}
      <nav style={{
        width: "280px",
        minWidth: "280px",
        backgroundColor: "#1a1a2e",
        color: "#e0e0e0",
        padding: "1rem",
        overflowY: "auto",
        borderRight: "2px solid #16213e",
      }}>
        <h2
          onClick={goHome}
          style={{
            color: "#e94560",
            margin: "0 0 1rem 0",
            fontSize: "1.1rem",
            cursor: "pointer",
          }}
        >
          Module 320H — React
        </h2>
        {lessons.map((l, idx) => (
          <div key={idx} style={{ marginBottom: "0.25rem" }}>
            <button
              onClick={() => {
                if (expandedLesson === idx) {
                  setExpandedLesson(null);
                } else {
                  setExpandedLesson(idx);
                }
                selectLesson(idx);
              }}
              style={{
                width: "100%",
                textAlign: "left",
                background: activeLesson === idx ? "#16213e" : "transparent",
                color: "#e0e0e0",
                border: "none",
                padding: "0.5rem",
                cursor: "pointer",
                borderRadius: "4px",
                fontSize: "0.85rem",
                fontWeight: activeLesson === idx ? "bold" : "normal",
              }}
            >
              {expandedLesson === idx ? "▾" : "▸"} {l.title}
            </button>
            {expandedLesson === idx && (
              <div style={{ paddingLeft: "1.25rem" }}>
                {/* Lesson link */}
                <button
                  onClick={() => { selectLesson(idx); setActiveTab("lesson"); }}
                  style={{
                    display: "block", width: "100%", textAlign: "left",
                    background: activeLesson === idx && activeTab === "lesson" ? "#e94560" : "transparent",
                    color: activeLesson === idx && activeTab === "lesson" ? "#fff" : "#aaa",
                    border: "none", padding: "0.3rem 0.5rem", cursor: "pointer",
                    borderRadius: "4px", fontSize: "0.8rem",
                  }}
                >
                  📖 Lesson Content
                </button>
                {/* Labs */}
                {l.labs.map((lab, labIdx) => (
                  <button
                    key={labIdx}
                    onClick={() => {
                      setActiveLesson(idx);
                      setActiveTab("labs");
                      setActiveLab(lab);
                      setActiveExample(null);
                    }}
                    style={{
                      display: "block", width: "100%", textAlign: "left",
                      background: activeLab?.name === lab.name ? "#e94560" : "transparent",
                      color: activeLab?.name === lab.name ? "#fff" : "#aaa",
                      border: "none", padding: "0.3rem 0.5rem", cursor: "pointer",
                      borderRadius: "4px", fontSize: "0.8rem",
                    }}
                  >
                    🧪 {lab.name}
                  </button>
                ))}
                {/* Examples */}
                {l.examples.map((ex, exIdx) => (
                  <button
                    key={exIdx}
                    onClick={() => {
                      setActiveLesson(idx);
                      setActiveTab("examples");
                      setActiveExample(ex);
                      setActiveLab(null);
                    }}
                    style={{
                      display: "block", width: "100%", textAlign: "left",
                      background: activeExample?.name === ex.name ? "#e94560" : "transparent",
                      color: activeExample?.name === ex.name ? "#fff" : "#aaa",
                      border: "none", padding: "0.3rem 0.5rem", cursor: "pointer",
                      borderRadius: "4px", fontSize: "0.8rem",
                    }}
                  >
                    ⚡ {ex.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* ── Main Content ── */}
      <main style={{ flex: 1, overflowY: "auto", backgroundColor: "#fafafa" }}>
        {lesson ? (
          <div>
            {/* Tab bar */}
            <div style={{
              display: "flex",
              gap: "0",
              borderBottom: "1px solid #ddd",
              backgroundColor: "#fff",
              padding: "0 1rem",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}>
              <TabButton
                label="📖 Lesson"
                active={activeTab === "lesson"}
                onClick={() => { setActiveTab("lesson"); setActiveExample(null); setActiveLab(null); }}
              />
              {lesson.labs.length > 0 && (
                <TabButton
                  label="🧪 Labs"
                  active={activeTab === "labs"}
                  onClick={() => { setActiveTab("labs"); setActiveExample(null); setActiveLab(lesson.labs[0]); }}
                  badge={lesson.labs.length}
                />
              )}
              <TabButton
                label="⚡ Examples"
                active={activeTab === "examples"}
                onClick={() => { setActiveTab("examples"); setActiveLab(null); setActiveExample(null); }}
                badge={lesson.examples.length}
              />
            </div>

            {/* Tab content */}
            <div style={{ padding: "2rem" }}>
              {/* LESSON TAB */}
              {activeTab === "lesson" && (
                <MarkdownViewer url={lesson.lessonFile} />
              )}

              {/* LABS TAB */}
              {activeTab === "labs" && (
                <div>
                  {lesson.labs.length > 1 && (
                    <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
                      {lesson.labs.map((lab) => (
                        <button
                          key={lab.name}
                          onClick={() => setActiveLab(lab)}
                          style={{
                            padding: "0.4rem 1rem",
                            border: activeLab?.name === lab.name ? "2px solid #e94560" : "1px solid #ccc",
                            borderRadius: "4px",
                            background: activeLab?.name === lab.name ? "#fff5f5" : "#fff",
                            color: activeLab?.name === lab.name ? "#e94560" : "#333",
                            cursor: "pointer",
                            fontWeight: activeLab?.name === lab.name ? "bold" : "normal",
                          }}
                        >
                          {lab.name}
                        </button>
                      ))}
                    </div>
                  )}
                  {activeLab && <MarkdownViewer url={activeLab.file} />}
                </div>
              )}

              {/* EXAMPLES TAB */}
              {activeTab === "examples" && (
                <div>
                  {ActiveComponent ? (
                    <div>
                      <div style={{
                        marginBottom: "1rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: "#e8e8e8",
                        borderRadius: "4px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}>
                        <strong>{activeExample.name}</strong>
                        <button
                          onClick={() => setActiveExample(null)}
                          style={{
                            background: "none", border: "1px solid #999",
                            borderRadius: "4px", padding: "0.25rem 0.75rem", cursor: "pointer",
                          }}
                        >
                          ← All Examples
                        </button>
                      </div>
                      <ActiveComponent />
                    </div>
                  ) : (
                    <div>
                      <h2 style={{ marginTop: 0 }}>Interactive Examples</h2>
                      <p style={{ color: "#666" }}>Click an example to run it:</p>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
                        {lesson.examples.map((ex) => (
                          <button
                            key={ex.name}
                            onClick={() => setActiveExample(ex)}
                            style={{
                              padding: "1.5rem 1rem",
                              border: "1px solid #ddd",
                              borderRadius: "8px",
                              backgroundColor: "#fff",
                              cursor: "pointer",
                              textAlign: "center",
                              fontSize: "0.95rem",
                              transition: "all 0.15s",
                              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = "#e94560";
                              e.currentTarget.style.boxShadow = "0 2px 8px rgba(233,69,96,0.15)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "#ddd";
                              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)";
                            }}
                          >
                            ⚡ {ex.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ── Home Screen ── */
          <div style={{ padding: "3rem", maxWidth: "800px", margin: "auto" }}>
            <h1 style={{ color: "#1a1a2e", marginBottom: "0.5rem" }}>Module 320H — React</h1>
            <p style={{ color: "#666", fontSize: "1.1rem" }}>
              Welcome to the React curriculum. Select a lesson from the sidebar to get started.
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}>
              {lessons.map((l, idx) => (
                <button
                  key={idx}
                  onClick={() => selectLesson(idx)}
                  style={{
                    padding: "1.25rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#e94560";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ddd";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <div style={{ fontWeight: "bold", marginBottom: "0.5rem", color: "#1a1a2e" }}>
                    {l.title}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#999" }}>
                    {l.examples.length} examples
                    {l.labs.length > 0 && ` · ${l.labs.length} lab${l.labs.length > 1 ? "s" : ""}`}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
