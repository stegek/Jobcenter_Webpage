import React, { useState, useEffect } from "react";
import "./CompanyRegister.css";
import NavbarCompany from "./NavbarCompany";
import Footer from "../Footer";

interface companyregisterprops {
  companyname: string;
  street: string;
  streetnr: number;
  zip: number;
  city: string;
  phone: number;
  password: string;
  passwordcheck: string;
}

interface passwordvalidation {
  status: number;
}

const CompanyRegister: React.FC = () => {
  const [formdata, setFormdata] = useState<companyregisterprops>({
    companyname: "",
    street: "",
    streetnr: 0,
    zip: 0,
    city: "",
    phone: 0,
    password: "",
    passwordcheck: "",
  });

  const [passwordstatus, setPasswordstatus] =
    useState<passwordvalidation["status"]>(0);

  const handleForminput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setFormdata((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  useEffect(() => {
    if (formdata.password.length >= 10) {
      setPasswordstatus(1);
      if (formdata.password === formdata.passwordcheck) {
        setPasswordstatus(2);
      }
    } else {
      setPasswordstatus(0);
    }
  }, [formdata]);

  return (
    <div className="company-register-container">
      <NavbarCompany />
      <div className="company-register-header">
        {passwordstatus !== 2 && (
          <p className="company-register-header-items">
            Passwörter stimmen nicht überein
          </p>
        )}
        {passwordstatus === 0 && (
          <p className="company-register-header-items">
            Passwort min. 10 Zeichen
          </p>
        )}
      </div>
      <form className="company-register-form">
        <input
          className="company-form-input"
          type="text"
          name="companyname"
          placeholder="Name des Unternehmens..."
          value={formdata.companyname}
          onChange={handleForminput}
        />
        <input
          className="company-form-input"
          type="text"
          name="street"
          placeholder="Strassenbezeichung..."
          value={formdata.street}
          onChange={handleForminput}
        />
        <input
          className="company-form-input"
          type="number"
          name="streetnr"
          placeholder="Hausnummer..."
          value={formdata.streetnr}
          onChange={handleForminput}
        />
        <input
          className="company-form-input"
          type="number"
          name="zip"
          placeholder="PLZ..."
          value={formdata.zip}
          onChange={handleForminput}
        />
        <input
          className="company-form-input"
          type="text"
          name="city"
          placeholder="Ort..."
          onChange={handleForminput}
        />
        <input
          className="company-form-input"
          type="number"
          name="phone"
          placeholder="Telefonnummer..."
          value={formdata.phone}
          onChange={handleForminput}
        />
        <input
          className="company-form-input"
          type="password"
          name="password"
          placeholder="Passwort eingeben..."
          value={formdata.password}
          onChange={handleForminput}
        />
        <input
          className="company-form-input"
          type="password"
          name="passwordcheck"
          placeholder="Passwort wiederholen..."
          value={formdata.passwordcheck}
          onChange={handleForminput}
        />
        <input
          className="company-register-submit"
          type="submit"
          value="Abschicken"
        />
      </form>

      <Footer />
    </div>
  );
};

export default CompanyRegister;
