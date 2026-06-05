import { useNavigate } from "react-router-dom";

import "./KindergartenPath.css";


function KindergartenPath() {

  const navigate = useNavigate();

  return (
    <section className="kindergarten-section">
      <div className="section-heading">
        <p>Current Focus</p>
        <h2>Kindergarten Learning Path</h2>
        <span>
          Build confidence with letters, sounds, numbers, shapes, colors, and daily routines.
        </span>
      </div>

            <div className="timer-feature timer-notice">
        ⏱ Timed practice is available.
      </div>

      <div className="kindergarten-grid" onClick={() => navigate("/parent/letters-sounds")}>
        <button className="path-card">
          <span>🔤</span>
          <strong>Letters & Sounds</strong>
          <p>Practice letter recognition and beginning sounds.</p>
        </button>

        <button className="path-card">
          <span>📖</span>
          <strong>Early Reading</strong>
          <p>Explore sight words, picture matching, and simple sentences.</p>
        </button>

        <button className="path-card">
          <span>🔢</span>
          <strong>Numbers & Counting</strong>
          <p>Count objects, recognize numbers, and build number sense.</p>
        </button>

        <button className="path-card">
          <span>🎨</span>
          <strong>Shapes & Colors</strong>
          <p>Identify shapes, colors, patterns, and matching pairs.</p>
        </button>
      </div>
    </section>
  );
}

export default KindergartenPath;