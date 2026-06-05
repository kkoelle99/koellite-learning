import { useNavigate } from "react-router-dom";

import "./ParentArea.css";

function ParentArea() {
  const navigate = useNavigate();

  return (
    <main className="parent-area-page">
      <section className="parent-area-card">
        <button className="back-home-button" onClick={() => navigate("/home")}>
          ← Back to Home
        </button>

        <div className="parent-area-header">
          <p>Parent Tools</p>
          <h1>Parent Area</h1>
          <span>
            Manage profiles, learning settings, progress, and accessibility tools.
          </span>
        </div>

        <div className="parent-tools-grid">
          <button className="parent-tool-card" onClick={() => navigate("/parent/profiles")}>
            <span>👧</span>
            <strong>Manage Profiles</strong>
            <p>Add, edit, or update child learning profiles.</p>
          </button>

          <button className="parent-tool-card" onClick={() => navigate("/parent/settings")}>
            <span>🎨</span>
            <strong>Settings</strong>
            <p>Manage themes, accessibility, and parent controls.</p>
          </button>

        </div>
      </section>
    </main>
  );
}

export default ParentArea;