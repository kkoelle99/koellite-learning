import "./WelcomeCard.css";

function WelcomeCard({ child }) {
  return (
    <section className="welcome-card">
      <div>
        <p className="welcome-small-text">
          Welcome back
        </p>

        <h2>Hi, {child.name}!</h2>

        <p className="welcome-message">
          What would you like to learn today?
        </p>

        <div className="child-grade">
          Current Path: {child.grade}
        </div>
      </div>

      <div
        className="avatar"
        style={{
          backgroundColor: child.favoriteColor,
        }}
      >
        {child.avatar}
      </div>
    </section>
  );
}

export default WelcomeCard;