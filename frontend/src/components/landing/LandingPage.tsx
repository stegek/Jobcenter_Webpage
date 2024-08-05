import React from "react";
import "./LandingPage.css";
import NavbarBasic from "../NavbarBasic";
import HeaderStart from "./HeaderStart";
import FeaturesStart from "./FeaturesStart";
import Footer from "../Footer";

interface landingPageProps {
  term: string;
  setTerm: (input: string) => void;
  region: string;
  setRegion: (rInput: string) => void;
}

const LandingPage: React.FC<landingPageProps> = (props) => {
  return (
    <div className="landing-page">
      <NavbarBasic />
      <div className="start-container">
        <HeaderStart
          term={props.term}
          setTerm={props.setTerm}
          region={props.region}
          setRegion={props.setRegion}
        />
        <FeaturesStart />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
