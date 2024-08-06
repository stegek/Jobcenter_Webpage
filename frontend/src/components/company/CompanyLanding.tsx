import React from "react";
import NavbarCompany from "./NavbarCompany";
import Footer from "../Footer";
import HeaderCompanyStart from "./HeaderCompanyStart";
import FeatureCompanyStart from "./FeaturesCompanyStart";

const CompanyLanding: React.FC = () => {
  return (
    <div className="company-landing-page">
      <NavbarCompany />
      <div className="companystart-container">
        <HeaderCompanyStart />
        <FeatureCompanyStart />
      </div>
      <Footer />
    </div>
  );
};

export default CompanyLanding;
