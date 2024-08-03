import React from "react";
import "./HeaderStart.css";

const HeaderStart: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-img">
        <img
          src="rocketchin.jpg"
          alt="rocketchin"
          className="header-start-img"
        />
      </div>
      <div className="header-h1">
        <img src="startheading.png" alt="slogan" className="header-slogan" />
      </div>
      <div className="header-space"></div>
      <div className="header-searchbar">
        <input
          type="text"
          placeholder="Welcher Job darfs denn sein ..."
          className="search-input-left"
        />
        <input
          type="text"
          placeholder="Bundesland/Bezirk eingeben..."
          className="search-input-right"
        />
      </div>
    </div>
  );
};

export default HeaderStart;
