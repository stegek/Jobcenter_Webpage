import React from "react";
import "./HeaderCompanyStart.css";
import { Link } from "react-router-dom";

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
        <Link to="/ad-prices">
          <button>Stellenanzeige aufgeben</button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderCompanyStart;
