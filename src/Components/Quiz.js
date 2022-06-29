import React, { useState } from "react";
import "./index.css";
import { questions } from "./Question";

const Quiz = () => {
  const [currentQuestion, setCurrentQu] = useState(0);
  const [showScore, setShowscore] = useState(false);
  const [score, setscore] = useState(0);

  const handleNextQusetion = (isCorrect) => {
    if (isCorrect === true) {
      alert("correct answer");
      setscore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQu(nextQuestion);
    } else {
      alert(" You are finished");
      setShowscore(true);
    }
  };

  return (
    <>
      <div className="center_div">
        <div className="main_div">
          {showScore ? (
            <div>
              Your score is {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className="question_section">
                <div className="section_count">
                  <span>Question {currentQuestion + 1}/</span>
                  {questions.length}
                </div>
                <div className="question_text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer_section">
                {questions[currentQuestion].answerOption.map((curAnser) => (
                  <button
                    onClick={() => handleNextQusetion(curAnser.isCorrect)}
                  >
                    {curAnser.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
