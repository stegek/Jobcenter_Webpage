import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarCompany from "./NavbarCompany";
import Footer from "../Footer";
import "./AdPriceList.css";

interface priceProps {
  setChoice: (text: string) => void;
}

const AdPriceList: React.FC<priceProps> = (prop) => {
  let navigate = useNavigate();

  const handleChoice = (text: string) => {
    prop.setChoice(text);
    navigate("/warenkorb");
  };

  return (
    <div>
      <NavbarCompany />
      <div className="company-adprice-container">
        <div className="price-item basic">
          <h1>Basic</h1>
          <hr />
          <h3>599€ inkl. MwSt</h3>
          <hr />
          <ul>
            <li>30 Tage Laufzeit</li>
            <li>Datumsaktualisierung nach 15 Tagen</li>
            <li>Anzeigencheck Basic</li>
            <li>Persönlicher Ansprechpartner</li>
          </ul>

          <div className="button-container">
            <button
              name="basic"
              onClick={(e) => handleChoice(e.currentTarget.name)}
            >
              Auswählen
            </button>
          </div>
        </div>
        <div className="price-item advanced">
          <h1>Advanced</h1>
          <hr />
          <h3>799€ inkl. MwSt</h3>
          <hr />

          <ul>
            <li>60 Tage Laufzeit</li>
            <li>Datumsaktualisierung nach 15 Tagen</li>
            <li>Anzeigencheck Basic</li>
            <li>Persönlicher Ansprechpartner</li>
            <li>Platzierung im Job Agent</li>
          </ul>
          <div className="button-container">
            <button
              name="advanced"
              onClick={(e) => handleChoice(e.currentTarget.name)}
            >
              Auswählen
            </button>
          </div>
        </div>
        <div className="price-item professional">
          <h1>Professional</h1>
          <hr />
          <h3>1399€ inkl. MwSt</h3>
          <hr />
          <ul>
            <li>60 Tage Laufzeit</li>
            <li>Datumsaktualisierung nach 15 Tagen</li>
            <li>Veröffentlichung auf Partnerseiten</li>
            <li>Anzeigencheck Basic</li>
            <li>Persönlicher Ansprechpartner</li>
            <li>Platzierung im Job Agent</li>
          </ul>
          <div className="button-container">
            <button
              name="professional"
              onClick={(e) => handleChoice(e.currentTarget.name)}
            >
              Auswählen
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdPriceList;
