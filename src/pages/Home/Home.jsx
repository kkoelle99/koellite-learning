import Header from "../../components/Header/Header";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import GradeSelector from "../../components/GradeSelector/GradeSelector";
import LearningJourney from "../../components/LearningJourney/LearningJourney";
import SubjectGrid from "../../components/SubjectGrid/SubjectGrid";

import "./Home.css";

function Home() {
  return (
    <div className="app theme-koellite">
      <Header />

      <main className="home-page">
        <WelcomeCard childName="Mason" />
        <GradeSelector />
        <LearningJourney />
        <SubjectGrid />
      </main>
    </div>
  );
}

export default Home;