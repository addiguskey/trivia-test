import React, { useState } from "react";
import "../App.css";

const styles = {
  title: {
    fontWeight: 900,
    color: " rgb(245, 245, 130)",
  },
  resultsTitle: {
    fontWeight: 900,
    color: "#d0cfcc",
  },
};

export default function TriviaQs() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: "622a1c347cc59eab6f94fba1",
      question: {
        text: 'Which song begins with the lyrics: "Nants ingonyama bagithi Baba / Sithi uhm ingonyama..."?',
      },
      options: [
        {
          isCorrect: false,
          id: 0,
          text: '"SpongeBob SquarePants Theme" by Painty the Pirate',
        },
        {
          isCorrect: false,
          id: 1,
          text: '"Let\'s Go Crazy" by Prince and The Revolution',
        },
        { isCorrect: false, id: 2, text: '"What I Got" by Sublime' },
        { isCorrect: true, id: 3, text: '"Circle of Life" by Elton John' },
      ],
    },
    {
      id: "62373f6dcb85f7ce9e949c98",
      question: {
        text: "Buenos Aires is the capital city of which country?",
      },
      options: [
        { isCorrect: false, id: 0, text: "Venezuela" },
        { isCorrect: false, id: 1, text: "Brazil" },
        { isCorrect: false, id: 2, text: "Colombia" },
        { isCorrect: true, id: 3, text: "Argentina" },
      ],
    },
    {
      id: "622a1c367cc59eab6f9502d9",
      question: {
        text: "Vermicelli literally means ___________.",
      },
      options: [
        { isCorrect: false, id: 0, text: "Skinny Fingers" },
        { isCorrect: false, id: 1, text: "Slim Pencils" },
        { isCorrect: false, id: 2, text: "Long Legs" },
        { isCorrect: true, id: 3, text: "Little worms" },
      ],
    },
    {
      id: "622a1c377cc59eab6f950706",
      question: {
        text: "Which actor has starred in films including King Kong and Enemy of the State?",
      },
      options: [
        { isCorrect: false, id: 0, text: "Ryan Reynolds" },
        { isCorrect: false, id: 1, text: "Hugh Jackman" },
        { isCorrect: true, id: 2, text: "Jack Black" },
        { isCorrect: false, id: 3, text: "Brian Cox" },
      ],
    },
    {
      id: "622a1c397cc59eab6f950dc9",
      question: {
        text: "Which author wrote 'The Kite Runner'?",
      },
      options: [
        { isCorrect: false, id: 0, text: "Nathaniel Hawthorne" },
        { isCorrect: true, id: 1, text: "Khaled Hosseini" },
        { isCorrect: false, id: 2, text: "Robert E. Howard" },
        { isCorrect: false, id: 3, text: "Isabel Allende" },
      ],
    },
    {
      id: "62602d7a4b176d54800e3c9b",
      question: {
        text: "Which of these cities is in Czech Republic?",
      },
      options: [
        { isCorrect: false, id: 0, text: "Oslo" },
        { isCorrect: false, id: 1, text: "Berlin" },
        { isCorrect: true, id: 2, text: "Prague" },
        { isCorrect: false, id: 3, text: "Stockholm" },
      ],
    },
    {
      id: "645a66c9158db1bd1779f1a4",
      question: {
        text: "Which farm animal is commonly associated with the breeds Jersey, Red Poll, and Angus?",
      },
      options: [
        { isCorrect: true, id: 0, text: "Cows" },
        { isCorrect: false, id: 1, text: "Horses" },
        { isCorrect: false, id: 2, text: "Sheep" },
        { isCorrect: false, id: 3, text: "Goats" },
      ],
    },
    {
      id: "622a1c3b7cc59eab6f9515cb",
      question: {
        text: "From which country does the drink Tequila originate?",
      },
      options: [
        { isCorrect: false, id: 0, text: "China" },
        { isCorrect: true, id: 1, text: "Mexico " },
        { isCorrect: false, id: 2, text: "France" },
        { isCorrect: false, id: 3, text: "Australia" },
      ],
    },
    {
      id: "6243353ccfaae40c12961493",
      question: {
        text: "What is the word for a female seal?",
      },
      options: [
        { isCorrect: false, id: 0, text: "A Jenny" },
        { isCorrect: false, id: 1, text: "A Worker" },
        { isCorrect: false, id: 2, text: "A Lioness" },
        { isCorrect: true, id: 3, text: "A Cow" },
      ],
    },
    {
      id: "645f9526541c4d4fc8cf2eb4",
      question: {
        text: "What is the name of the inert gas with atomic number 18?",
      },
      options: [
        { isCorrect: false, id: 0, text: "Neon" },
        { isCorrect: true, id: 1, text: "Argon" },
        { isCorrect: false, id: 2, text: "Helium" },
        { isCorrect: false, id: 3, text: "Radon" },
      ],
    },
  ];

  // Helper Functions

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div>
      {showResults ? (
        <div className="final-results">
          <h1 style={styles.resultsTitle}>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button
            className="btn btn-transparent restart-button text-dark border-0"
            onClick={() => restartGame()}
          >
            Restart game
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h1 style={styles.title}>Are You Good at Trivia?</h1>
          <h2>Score: {score}</h2>{" "}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">
            {questions[currentQuestion].question.text}
          </h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  <button className="btn btn-transparent ">
                    {option.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
