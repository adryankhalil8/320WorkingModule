# 320H.4 - Thinking in React

## Learning Objectives

By the end of this lesson, learners will be able to:

- Describe the "Thinking in React" philosophy.
- Use the five-step process to build a React application from scratch.
- Explain what type of data should be used as "state" and what shouldn't.

---

## Thinking in React

The React team provides a five-step process for building React applications efficiently:

1. **Break** your UI into components.
2. **Build** a static version in React.
3. **Find** the minimal state representation.
4. **Identify** where state should live.
5. **Add** inverse data flow.

---

## Step 0: Start with a Mockup

You'll typically start with a mockup and a dataset:

```js
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
```

---

## Step 1: Establish a Component Hierarchy

Draw boxes around each component in the mockup and give them names:

- **FilterableProductTable** (contains the entire app)
  - **SearchBar** (receives user input)
  - **ProductTable** (displays/filters the list)
    - **ProductCategoryRow** (heading for each category)
    - **ProductRow** (row for each product)

**Guidelines:**

- Each component should ideally do **one thing**.
- Components often align with CSS class selectors.
- Well-structured API data often maps directly to component structure.

---

## Step 2: Build a Static Layout

Build a static version first — **lots of typing, not much thinking**. No interactivity yet.

- Small projects: work **top-down** (parent → children).
- Large projects: work **bottom-up** (children → parents).
- Pass data via props, but don't use state yet.

> This learning technique is called **"retrograde analysis"** — starting with the solution and working backwards.

---

## Step 3: Find the Minimal State Representation

For each piece of UI data, ask:

1. Does it remain **unchanged** over time? → Not state.
2. Is it **passed from a parent** via props? → Not state.
3. Can you **compute it** from existing state or props? → Not state.

**Anything left is probably state.**

In our product table example:

| Data | Is State? | Why? |
|---|---|---|
| Original product list | No | Passed as props |
| Search text | **Yes** | Changes over time |
| Checkbox value | **Yes** | Changes over time |
| Filtered product list | No | Computed from other state |

---

## Step 4: Identify Where State Should Live

For each piece of state:

1. Identify every component that **renders** based on that state.
2. Find their **closest common parent**.
3. Place the state there (or above if needed).

```jsx
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
```

---

## Step 5: Add Inverse Data Flow

Pass **set functions** down as props so child components can update parent state:

```jsx
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
```

Inside SearchBar:

```jsx
<input
  type="text"
  value={filterText}
  placeholder="Search..."
  onChange={(e) => onFilterTextChange(e.target.value)}
/>
```

---

## Knowledge Check

1. What are the five steps of "Thinking in React"?
2. How do you determine if something should be state?
3. How do you decide which component should own a piece of state?

---

*Copyright © Per Scholas 2026*

