import "./Header.css";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("koelliteLoggedIn");
        navigate("/login");
    }
  return (
    <header className="top-nav">
      <div className="brand">
        <div className="logo">🌟</div>

        <div>
          <h1>Koellite Learning</h1>
          <p>Learning Your Way</p>
        </div>
      </div>
    <div className="header-actions">
      <button className="parent-button">
        Parent Area
      </button>
      <button className="logout-button" onClick={handleLogout}> Logout </button>
    </div>
    </header>
  );
}

export default Header;