import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import ChildProfiles from "../../components/ChildProfiles/ChildProfiles";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import KindergartenPath from "../../components/Grades/Kindergarten/KindergartenPath";
import LearningJourney from "../../components/LearningJourney/LearningJourney";
import SubjectGrid from "../../components/SubjectGrid/SubjectGrid";

import "./Home.css";

const defaultChildren = [];


function Home() {
  const navigate = useNavigate();

  const accessibilitySettings = JSON.parse(localStorage.getItem("koelliteAccessibilitySettings")) || {};

  const [children] = useState(() => {
    const savedChildren = localStorage.getItem("koelliteChildren");
    return savedChildren ? JSON.parse(savedChildren) : defaultChildren;
  });

  const [activeChildId, setActiveChildId] = useState(children[0]?.id || null);

  const activeChild = children.find((child) => child.id === activeChildId);

  if (!activeChild) {
    return (
      <div className={`app theme-koellite ${accessibilitySettings.largeText ? "large-text" : ""} ${accessibilitySettings.reduceMotion ? "reduce-motion" : ""} ${accessibilitySettings.calmMode ? "calm-mode" : ""} ${!accessibilitySettings.timersEnabled ? "timers-disabled" : ""}`}>
        <Header />

        <main className="home-page">
          <section className="welcome-card empty-profile-card">
            <div>
              <p className="welcome-small-text">Welcome to Koellite Learning</p>
              <h2>Lets create your first learner profile!!</h2>
              <p className="welcome-message">
                Add a child profile to personalize Koellite Learning with their name, grade, avatar, and learning colors. You can create multiple profiles for siblings or different learning stages. Each profile will have its own themes, progress tracking, and settings to make learning fun and personalized!
              </p>

              <button
                className="parent-button"
                onClick={() => navigate("/parent/profiles")}
              >
                Add Child Profile
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div
      className={`app theme-koellite ${accessibilitySettings.largeText ? "large-text" : ""} ${accessibilitySettings.reduceMotion ? "reduce-motion" : ""} ${accessibilitySettings.calmMode ? "calm-mode" : ""} ${!accessibilitySettings.timersEnabled ? "timers-disabled" : ""}`}
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

        <KindergartenPath />

        <LearningJourney />

        <SubjectGrid />
      </main>
    </div>
  );
}

export default Home;