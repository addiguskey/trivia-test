import "./App.css";
import React, { useState, useEffect } from "react";
import Questions from "./components/question";

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);

  return (
    <div className="App">
      {/* 1. header */}
      <h1>Are you good at triivia?</h1>
      {/* 2. Current Score */}
      <h2>Current Score: {score}</h2>
      {showFinalResults ? (
        <div className="score-card">
          <h1>Final Results</h1>
          <h2 className="final-results"> 1 of 5 Correct (20%)</h2>
          <button className="restart-button">Restart Game</button>
        </div>
      ) : (
        <div className="question-card">
          {/* <h2>Question {currentQ + 1} out of 10</h2> */}

          <Questions></Questions>
        </div>
      )}{" "}
    </div>
  );
}

export default App;
