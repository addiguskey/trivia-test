import "./App.css";
import React, { useState, useEffect } from "react";
// import Questions from "./components/question";
import TriviaQs from "./components/questions2";

const styles = {};
function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);

  return (
    <div className="App">
      {showFinalResults ? (
        <div className="score-card">
          <h1>Final Results</h1>
          <button className="btn btn-transparent restart-button">
            Restart Game
          </button>
        </div>
      ) : (
        <div className="question-card">
          {/* <h2>Question {currentQ + 1} out of 10</h2> */}

          <TriviaQs> </TriviaQs>
        </div>
      )}{" "}
    </div>
  );
}

export default App;
