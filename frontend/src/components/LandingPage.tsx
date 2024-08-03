import React from "react";
import "./LandingPage.css";
import NavbarBasic from "./NavbarBasic";
import HeaderStart from "./HeaderStart";
import FeaturesStart from "./FeaturesStart";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <NavbarBasic />
      <div className="start-container">
        <HeaderStart />
        <FeaturesStart />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
