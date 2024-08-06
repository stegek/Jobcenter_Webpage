import React from "react";
import "./HeaderCompanyStart.css";

const HeaderCompanyStart: React.FC = () => {
  return (
    <div className="header-company-container">
      <div className="header-company-slogan">
        <img
          className="company-slogan"
          src="companyStartHeaderSlogan.png"
          alt="Slogan"
        />
        <img
          className="company-subslogan"
          src="companyStartHeaderSubslogan.png"
          alt="Subslogan"
        />
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
