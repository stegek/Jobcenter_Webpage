import React from "react";
import NavbarCompany from "./NavbarCompany";
import Footer from "../Footer";
import HeaderCompanyStart from "./HeaderCompanyStart";

const CompanyLanding: React.FC = () => {
  return (
    <div className="company-landing-page">
      <NavbarCompany />
      <div className="companystart-container">
        <HeaderCompanyStart />
      </div>
      <Footer />
    </div>
  );
};

export default CompanyLanding;
