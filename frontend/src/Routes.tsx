import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import UserLogin from "./components/UserLogin";
import CompanyLanding from "./components/company/CompanyLanding";
import JobresultPage from "./components/jobresult/JobresultPage";
import CompanyLogin from "./components/company/CompanyLogin";

const AppRoutes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchRegion, setSearchRegion] = useState<string>("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage
            term={searchTerm}
            setTerm={setSearchTerm}
            region={searchRegion}
            setRegion={setSearchRegion}
          />
        }
      />
      <Route path="/jobs" element={<JobresultPage />} />
      <Route path="/user-log" element={<UserLogin />} />
      <Route path="/company" element={<CompanyLanding />} />
      <Route path="/company-login" element={<CompanyLogin />} />
    </Routes>
  );
};

export default AppRoutes;
