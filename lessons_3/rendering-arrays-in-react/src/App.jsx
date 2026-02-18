import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [learnerData, setLearnerData] = useState({
    learners: [
      {
        name: 'Cait Yomorta',
        bio: 'Lorem ipsum dolor sit amet...',
        scores: [
          { date: '2018-02-08', score: 77 },
          { date: '2018-04-22', score: 92 },
          { date: '2018-09-15', score: 68 }
        ]
      },
      {
        name: 'Holly Baird',
        bio: 'Eum molestiae explicabo deserunt...',
        scores: [
          { date: '2018-12-14', score: 88 },
          { date: '2019-01-09', score: 79 },
          { date: '2019-02-23', score: 91 },
          { date: '2019-03-01', score: 95 }
        ]
      },
      {
        name: 'Wes Mungia',
        bio: 'Repudiandae veritatis recusandae...',
        scores: [
          { date: '2018-10-11', score: 62 },
          { date: '2018-11-24', score: 74 },
          { date: '2018-12-19', score: 85 }
        ]
      }
    ]
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learners</h1>
        {learnerData.learners.map((learner, index) => (
          <div key={index}>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            <p>Current Score: {learner.scores[learner.scores.length - 1].score}</p>
            <p>Date: {learner.scores[learner.scores.length - 1].date}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
