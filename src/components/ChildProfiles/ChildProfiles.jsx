import "./ChildProfiles.css";

function ChildProfiles({ children, activeChildId, onSelectChild }) {
  return (
    <section className="profiles-section">
      <div className="profiles-header">
        <p>Profiles</p>
        <h2>Who’s Learning Today?</h2>
      </div>

      <div className="profiles-grid">
        {children.map((child) => (
          <button
            key={child.id}
            className={`profile-card ${
              child.id === activeChildId ? "active-profile" : ""
            }`}
            onClick={() => onSelectChild(child.id)}
          >
            <div
              className="profile-avatar"
              style={{ backgroundColor: child.favoriteColor }}
            >
              {child.avatar}
            </div>

            <strong>{child.name}</strong>
          </button>
        ))}

        <button className="profile-card add-profile">
          <div className="profile-avatar">➕</div>
          <strong>Add Profile</strong>
        </button>
      </div>
    </section>
  );
}

export default ChildProfiles;