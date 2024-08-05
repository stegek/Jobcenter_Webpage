import React from "react";
import "./HeaderCompanyStart.css";

const HeaderCompanyStart: React.FC = () => {
  return (
    <div className="header-company-container">
      <div className="header-company-slogan">
        <h1>Mit Chinjob zum Traumkandidaten</h1>
        <p>Schalten Sie jetzt beim Testsieger des Magazin Chintech</p>
      </div>
      <div className="header-company-img-container">
        <img
          className="header-company-start-img"
          src="chingraduate.jpg"
          alt="chingraduate"
        />
      </div>
      <div className="header-company-button-container">
        <button>Stellenanzeige aufgeben</button>
      </div>
    </div>
  );
};

export default HeaderCompanyStart;
