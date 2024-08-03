import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserLogin from "./components/UserLogin";
import CompanyLanding from "./components/CompanyLanding";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user-log" element={<UserLogin />} />
      <Route path="/company" element={<CompanyLanding />} />
    </Routes>
  );
};

export default AppRoutes;
