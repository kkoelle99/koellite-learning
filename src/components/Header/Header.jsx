import "./Header.css";

function Header() {
  return (
    <header className="top-nav">
      <div className="brand">
        <div className="logo">🌟</div>

        <div>
          <h1>Koellite Learning</h1>
          <p>Learning Your Way</p>
        </div>
      </div>

      <button className="parent-button">
        Parent Area
      </button>
    </header>
  );
}

export default Header;