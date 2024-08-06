import React from "react";
import "./FeaturesCompanyStart.css";

const FeatureCompanyStart: React.FC = () => {
  return (
    <div className="features-company-start-container">
      <div className="icon-container">
        <img src="crowd.png" alt="crowd" />
      </div>
      <div className="icon-container">
        <img src="graduationHat.png" alt="graduation-hat" />
      </div>
      <div className="icon-container">
        <img
          className="austria-black-img"
          src="austria_black.png"
          alt="austria"
        />
      </div>
      <div className="icon-container">
        <img src="clock.png" alt="clock" />
      </div>
      <div className="p-container">
        <p>Eine der meistbesuchten Jobplattformen Österreichs </p>
      </div>

      <div className="p-container">
        <p>Vom Nachwuchstalent zur Führungskraft</p>
      </div>

      <div className="p-container">
        <p>Reichweite für ganz Österreich</p>
      </div>

      <div className="p-container">
        <p>Veröffentlicht in 10 Minuten</p>
      </div>
    </div>
  );
};

export default FeatureCompanyStart;
