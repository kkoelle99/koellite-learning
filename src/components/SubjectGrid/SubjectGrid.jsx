import "./SubjectGrid.css";

function SubjectGrid() {
  return (
    <section className="subject-section">
      <h2>Choose a Subject</h2>

      <div className="subject-grid">
        <button>🔤 Phonics</button>
        <button>📖 Reading</button>
        <button>➕ Math</button>
        <button>🎨 Colors</button>
        <button>🔺 Shapes</button>
        <button>⭐ Rewards</button>
      </div>
    </section>
  );
}

export default SubjectGrid;