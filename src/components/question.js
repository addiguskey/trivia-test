import React, { useState, useEffect } from "react";
import axios from "axios";
import Correct from "./rightAnswer";
import Wrong from "./wrongAnswer";

export default function Questions() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  function correct() {
    setIsCorrect((isCorrect) => !isCorrect);
  }

  function wrong() {
    setIsWrong((isWrong) => !isWrong);
  }

  let data = undefined;
  useEffect(() => {
    const loadQuestions = async () => {
      const url = "https://the-trivia-api.com/v2/questions";
      setLoading(true);

      try {
        const resp = await fetch(url);
        data = await resp.json();
        // Do anything you need to do to
        // data before this call:
        console.log(data[1]);
        setQuestions(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    loadQuestions();
  }, []);

  return (
    <>
      {loading ? (
        <h4>Loading Questions...</h4>
      ) : (
        questions.map((data) => (
          // Presently we only fetch
          // title from the API
          <div>
            <h4>{data.question.text}</h4>
            <ul>
              <li>
                <button
                  onClick={wrong}
                  className="btn btn-transparent border-0"
                >
                  {" "}
                  {data.incorrectAnswers[0]}
                </button>
              </li>
              <li>
                {" "}
                <button
                  onClick={wrong}
                  className="btn btn-transparent border-0"
                >
                  {" "}
                  {data.incorrectAnswers[1]}
                </button>
              </li>
              <li>
                {" "}
                <button
                  onClick={wrong}
                  className="btn btn-transparent border-0"
                >
                  {" "}
                  {data.incorrectAnswers[2]}
                </button>
              </li>
              <li>
                {" "}
                <div>
                  <button
                    // ref={ref}
                    id="correctAnswer"
                    onClick={correct}
                    className="btn btn-transparent border-0"
                  >
                    {data.correctAnswer}
                  </button>
                </div>
              </li>
            </ul>
            {isCorrect && <Correct></Correct>}
            {isWrong && <Wrong></Wrong>}
          </div>
        ))
      )}
    </>
  );
}
