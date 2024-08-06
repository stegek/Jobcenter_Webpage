import React from "react";
import "./CompanyLogin.css";
import NavbarBasic from "../NavbarBasic";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const CompanyLogin: React.FC = () => {
  return (
    <div className="company-login-page">
      <NavbarBasic />
      <div className="company-login-container">
        <div className="form-container">
          <form className="formparent">
            <input
              className="input-text"
              type="text"
              name="user"
              placeholder="Benutzername..."
            />
            <br />
            <input
              className="input-text"
              type="password"
              name="password"
              placeholder="Passwort..."
            />
            <br />
            <input className="input-button" type="submit" value="Submit" />
          </form>
          <Link className="register-link" to="/company-register">
            <p>Neu bei Chinjob? Hier registrieren </p>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CompanyLogin;
