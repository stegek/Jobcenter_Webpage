import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const date: string = new Date().getFullYear().toString();

  return (
    <footer className="footer-container">
      <p className="text-center text-body-secondary">© {date} TamaMalu GmbH</p>
    </footer>
  );
};

export default Footer;
