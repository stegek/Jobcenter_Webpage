import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const date: string = new Date().getFullYear().toString();

  return (
    <footer className="footer-container">
      <ul>
        <li className="nav-item">Home</li>
        <li className="nav-item">Features</li>
        <li className="nav-item">Pricing</li>
        <li className="nav-item">FAQs</li>
        <li className="nav-item">About</li>
      </ul>
      <p className="text-center text-body-secondary">© {date} TamaMalu GmbH</p>
    </footer>
  );
};

export default Footer;
