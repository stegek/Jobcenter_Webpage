import React from "react";
import "./HeaderStart.css";

interface headerProps {
  term: string;
  setTerm: (input: string) => void;
  region: string;
  setRegion: (rInput: string) => void;
}

const HeaderStart: React.FC<headerProps> = (props) => {
  const handleSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputterm = event.currentTarget.value;
    props.setTerm(inputterm);
  };

  const handleRegionInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const regionInput = event.currentTarget.value;
    props.setRegion(regionInput);
  };

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
          value={props.term}
          onChange={handleSearchInput}
        />
        <input
          type="text"
          placeholder="Bundesland/Bezirk eingeben..."
          className="search-input-right"
          value={props.region}
          onChange={handleRegionInput}
        />
      </div>
    </div>
  );
};

export default HeaderStart;
