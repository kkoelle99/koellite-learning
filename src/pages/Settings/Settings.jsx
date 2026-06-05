import { useNavigate } from "react-router-dom";

import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  return (
    <main className="settings-page">
      <section className="settings-container">
        <button className="back-home-button" onClick={() => navigate("/parent")}>
          ← Back to Parent Area
        </button>

        <div className="settings-header">
          <p>Parent Controls</p>
          <h1>Settings</h1>
          <span>
            Manage themes, accessibility options, and learning preferences.
          </span>
        </div>

        <div className="settings-grid">
          <button
            className="settings-card"
            onClick={() => navigate("/parent/settings/themes")}
          >
            <span>🎨</span>
            <strong>Theme Settings</strong>
            <p>Customize each child’s colors and learning space.</p>
          </button>

          <button className="settings-card" onClick={() => navigate("/parent/settings/accessibility")}>
            <span>♿</span>
            <strong>Accessibility</strong>
            <p>Control motion, text size, timers, and sensory settings.</p>
          </button>

          <button className="settings-card" onClick={() => navigate("/parent/settings/progress")}>
            <span>📊</span>
            <strong>Progress Reports</strong>
            <p>View completed lessons, subject growth, and learning progress.</p>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Settings;