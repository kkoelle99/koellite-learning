import "./WelcomeCard.css";

function WelcomeCard({ childName }) {
  return (
    <section className="welcome-card">
      <div>
        <p className="welcome-small-text">
          Welcome back
        </p>

        <h2>Hi, {childName}!</h2>

        <p className="welcome-message">
          What would you like to learn today?
        </p>
      </div>

      <div className="avatar">
        😊
      </div>
    </section>
  );
}

export default WelcomeCard;