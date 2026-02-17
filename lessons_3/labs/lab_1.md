# ALAB 320H.3.1 - Rendering Arrays from State

## Learning Objectives

After completing this lab, learners will have demonstrated the ability to:

- Create React components from arrays of data stored in state.

---

## Instructions

1. Create a new React application locally using `npx create-react-app rendering-arrays` or Vite.
2. Follow the requirements below to build your application.
3. Push your completed code to a GitHub repository and submit the link.

---

## Requirements

- Use the provided **learner data array** (below) to initialize state in the `<App>` component using `useState`.
- Display a `<Learner>` component for each learner in the array.
- The `<Learner>` component should render the learner's **name** and **bio**.
- The `<Learner>` component should render a `<Score>` component for each score in the learner's `scores` array.
- The `<Score>` component should display the **date** and **score** properties.

> **Layout and styling** are up to you — keep it clean and user-friendly.

---

## Provided Learner Data

```js
const learners = [
  {
    name: "Cait Yomorta",
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
    scores: [
      { date: "2018-02-08", score: 77 },
      { date: "2018-04-22", score: 92 },
      { date: "2018-09-15", score: 68 },
    ],
  },
  {
    name: "Holly Baird",
    bio: "Eum molestiae explicabo deserunt, maiores quod eaque omnis...",
    scores: [
      { date: "2018-12-14", score: 88 },
      { date: "2019-01-09", score: 79 },
      { date: "2019-02-23", score: 91 },
      { date: "2019-03-01", score: 95 },
    ],
  },
  {
    name: "Wes Mungia",
    bio: "Repudiandae veritatis recusandae quidem tenetur impedit...",
    scores: [
      { date: "2018-10-11", score: 62 },
      { date: "2018-11-24", score: 74 },
      { date: "2018-12-19", score: 85 },
    ],
  },
];
```

---

## Hint

Initialize state as an object with a `learners` key:

```jsx
const [learnerData, setLearnerData] = useState({ learners: [...] });
```

You will **not** update state in this lab — only initialize it, pass it as props, and render it.

---

## Deliverables

A link to a GitHub repository containing your completed lab with no errors.

---

*Copyright © Per Scholas 2026*

