import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import ChildProfiles from "../../components/ChildProfiles/ChildProfiles";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import KindergartenPath from "../../components/Grades/Kindergarten/KindergartenPath";
import LearningJourney from "../../components/LearningJourney/LearningJourney";
import SubjectGrid from "../../components/SubjectGrid/SubjectGrid";
import ColorCustomizer from "../../components/ColorCustomizer/ColorCustomizer";

import "./Home.css";

const defaultChildren = [
  {
    id: 1,
    name: "Mason",
    avatar: "😊",
    grade: "Kindergarten",
    theme: {
      background: "#fff7c7",
      button: "#ff9fd0",
      buttonHover: "#ff85c4",
      glow: "#ffd6ec",
      text: "#2f2f2f",
    },
  },
  {
    id: 2,
    name: "Lily",
    avatar: "🎨",
    grade: "Kindergarten",
    theme: {
      background: "#f5efff",
      button: "#bda7ff",
      buttonHover: "#a48cff",
      glow: "#e5d6ff",
      text: "#2f2f2f",
    },
  },
];

function Home() {
  const [children, setChildren] = useState(() => {
    const savedChildren = localStorage.getItem("koelliteChildren");
    return savedChildren ? JSON.parse(savedChildren) : defaultChildren;
  });

  const [activeChildId, setActiveChildId] = useState(children[0].id);

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
      currentChildren.map((child) => {
        const defaultChild = defaultChildren.find(
          (defaultChild) => defaultChild.id === child.id
        );

        return child.id === activeChildId
          ? {
              ...child,
              theme: defaultChild.theme,
            }
          : child;
      })
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