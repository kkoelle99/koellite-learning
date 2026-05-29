import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import ChildProfiles from "../../components/ChildProfiles/ChildProfiles";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import KindergartenPath from "../../components/Grades/Kindergarten/KindergartenPath";
import LearningJourney from "../../components/LearningJourney/LearningJourney";
import SubjectGrid from "../../components/SubjectGrid/SubjectGrid";
import ColorCustomizer from "../../components/ColorCustomizer/ColorCustomizer";

import "./Home.css";

const defaultTheme = {
  background: "#fff7c7",
  button: "#ff9fd0",
  buttonHover: "#ff85c4",
  glow: "#ffd6ec",
  text: "#2f2f2f",
};

const defaultChildren = [];

function Home() {

  const navigate = useNavigate();
  const [children, setChildren] = useState(() => {
    const savedChildren = localStorage.getItem("koelliteChildren");
    return savedChildren ? JSON.parse(savedChildren) : defaultChildren;
  });

  const [activeChildId, setActiveChildId] = useState(children[0]?.id || null);

  const activeChild = children.find((child) => child.id === activeChildId);

  useEffect(() => {
    localStorage.setItem("koelliteChildren", JSON.stringify(children));
  }, [children]);

  function updateChildTheme(colorType, colorValue) {
    setChildren((currentChildren) =>
      currentChildren.map((child) =>
        child.id === activeChildId
          ? {
              ...child,
              theme: {
                ...child.theme,
                [colorType]: colorValue,
              },
            }
          : child
      )
    );
  }

  function resetChildTheme() {
  setChildren((currentChildren) =>
    currentChildren.map((child) =>
      child.id === activeChildId
        ? {
            ...child,
            theme: defaultTheme,
          }
        : child
    )
  );
}

if (!activeChild) {
  return (
    <div className="app theme-koellite">
      <Header />

      <main className="home-page">
        <section className="welcome-card">
          <div>
            <p className="welcome-small-text">Welcome to Koellite Learning</p>
            <h2>No child profiles yet</h2>
            <p className="welcome-message">
              Add a child profile in the Parent Area to get started.
            </p>
            <button className="parent-button" onClick={() => navigate("/parent/profiles")}>Add Child Profile</button>
          </div>
        </section>
      </main>
    </div>
  );
}

  return (
    <div
      className="app theme-koellite"
      style={{
        background: `radial-gradient(circle at top left, ${activeChild.theme.glow}, transparent 320px), ${activeChild.theme.background}`,
        "--bg-color": activeChild.theme.background,
        "--button-color": activeChild.theme.button,
        "--button-hover": activeChild.theme.buttonHover,
        "--soft-glow": activeChild.theme.glow,
        "--page-text-color": activeChild.theme.text,
      }}
    >
      <Header />

      <main className="home-page">
        <ChildProfiles
          children={children}
          activeChildId={activeChildId}
          onSelectChild={setActiveChildId}
        />

        <WelcomeCard child={activeChild} />

        <ColorCustomizer
          activeChild={activeChild}
          onUpdateTheme={updateChildTheme}
          onResetTheme={resetChildTheme}
        />

        <KindergartenPath />

        <LearningJourney />

        <SubjectGrid />
      </main>
    </div>
  );
}

export default Home;