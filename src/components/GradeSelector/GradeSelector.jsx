import "./GradeSelector.css";

function GradeSelector() {
  return (
    <section className="grade-section">
      <h2>Choose Your Learning Path</h2>

      <div className="grade-grid">
        <button className="grade-card">
          <span>🎨</span>
          <strong>Pre-K</strong>
          <p>Colors, shapes, letters, and numbers</p>
        </button>

        <button className="grade-card">
          <span>🔤</span>
          <strong>Kindergarten</strong>
          <p>Letter sounds, counting, and patterns</p>
        </button>

        <button className="grade-card">
          <span>📖</span>
          <strong>1st Grade</strong>
          <p>Reading, phonics, and addition</p>
        </button>

        <button className="grade-card">
          <span>🧠</span>
          <strong>2nd Grade</strong>
          <p>Comprehension, math, and word problems</p>
        </button>
      </div>
    </section>
  );
}

export default GradeSelector;