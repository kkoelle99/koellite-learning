import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LetterRecognition.css";

function LetterRecognition() {
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  function checkAnswer(answer) {
    setSelectedAnswer(answer);

    if (answer === "A") {
      setFeedback("🎉 Great job! That's the letter A.");
    } else {
      setFeedback("💛 Almost! Try again.");
    }
  }

  return (
    <main className="activity-page">
      <section className="activity-container">
        <button
          className="back-home-button"
          onClick={() => navigate("/kindergarten/letters")}
        >
          ← Back to Letters & Sounds
        </button>

        <div className="activity-header">
          <p>Lesson 1</p>
          <h1>Letter Recognition</h1>
          <span>Can you identify this letter?</span>
        </div>

        <div className="question-card">
          <div className="letter-display">A</div>

          <div className="answer-grid">
            <button onClick={() => checkAnswer("A")}>A</button>
            <button onClick={() => checkAnswer("B")}>B</button>
            <button onClick={() => checkAnswer("C")}>C</button>
            <button onClick={() => checkAnswer("D")}>D</button>
          </div>

          {feedback && (
            <div className="feedback-message">
              {feedback}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default LetterRecognition;