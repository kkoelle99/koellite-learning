import "./LearningJourney.css";

function LearningJourney() {
  return (
    <section className="daily-section">
      <h2>Today’s Learning Journey</h2>

      <div className="journey-list">
        <button className="journey-card complete">
          <span>📚</span>
          <div>
            <strong>Reading</strong>
            <p>Completed</p>
          </div>
          <b>✓</b>
        </button>

        <button className="journey-card">
          <span>➕</span>
          <div>
            <strong>Math</strong>
            <p>Ready when you are</p>
          </div>
        </button>

        <button className="journey-card">
          <span>🧘</span>
          <div>
            <strong>Break Time</strong>
            <p>Pause anytime</p>
          </div>
        </button>

        <button className="journey-card">
          <span>⭐</span>
          <div>
            <strong>Reward Time</strong>
            <p>Earn after learning</p>
          </div>
        </button>
      </div>
    </section>
  );
}

export default LearningJourney;