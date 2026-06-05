import { useNavigate } from "react-router-dom";

import "./ProgressReports.css";

function ProgressReports() {
  const navigate = useNavigate();

  return (
    <main className="progress-page">
      <section className="progress-container">
        <button
          className="back-home-button"
          onClick={() => navigate("/parent/settings")}
        >
          ← Back to Settings
        </button>

        <div className="progress-header">
          <p>Learning Reports</p>
          <h1>Progress Reports</h1>
          <span>
            Progress data will appear here as children complete lessons and
            activities.
          </span>
        </div>

        <div className="progress-empty-card">
          <span className="progress-icon">📊</span>

          <h2>No learning data yet</h2>

          <p>
            Once Koellite Learning activities are added, this page will show
            completed lessons, progress by subject, streaks, and areas that may
            need extra practice.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProgressReports;