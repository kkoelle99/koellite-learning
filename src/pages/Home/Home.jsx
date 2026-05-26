import Header from "../../components/Header/Header";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import KindergartenPath from "../../components/Grades/Kindergarten/KindergartenPath";
import LearningJourney from "../../components/LearningJourney/LearningJourney";
import SubjectGrid from "../../components/SubjectGrid/SubjectGrid";

import "./Home.css";

function Home() {
  const activeChild = {
    name: "Mason",
    avatar: "😊",
    favoriteColor: "#ff9fd0",
    grade: "Kindergarten",
  };

  return (
    <div className="app theme-koellite">
      <Header />

      <main className="home-page">
        <WelcomeCard child={activeChild} />

        <KindergartenPath />

        <LearningJourney />

        <SubjectGrid />
      </main>
    </div>
  );
}

export default Home;