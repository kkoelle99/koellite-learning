import { useNavigate } from "react-router-dom";

import "./LettersSound.css";

function LettersSounds() {
  const navigate = useNavigate();

  return (
    <main className="letters-page">
      <section className="letters-container">
        <button className="back-home-button" onClick={() => navigate("/home")}>
          ← Back to Home
        </button>

        <div className="letters-header">
          <p>Kindergarten</p>
          <h1>Letters & Sounds</h1>
          <span>
            Practice letter recognition, beginning sounds, and simple phonics
            skills at a comfortable pace.
          </span>
        </div>

        <div className="letters-lessons-grid">
          <button className="lesson-card" onClick={() => navigate("/parent/letter-recognition")}>
            <span>🔠</span>
            <strong>Letter Recognition</strong>
            <p>Practice identifying uppercase and lowercase letters.</p>
          </button>

          <button className="lesson-card">
            <span>👂</span>
            <strong>Beginning Sounds</strong>
            <p>Match letters with the sounds they make.</p>
          </button>

          <button className="lesson-card">
            <span>🧩</span>
            <strong>Sound Matching</strong>
            <p>Match pictures with beginning letter sounds.</p>
          </button>

          <button className="lesson-card coming-soon-lesson">
            <span>⭐</span>
            <strong>Review Practice</strong>
            <p>Coming soon: gentle review activities.</p>
          </button>
        </div>
      </section>
    </main>
  );
}

export default LettersSounds;