import React from "react";
import { Link } from "react-router-dom";
import "./NavbarBasic.css";

const NavbarBasic: React.FC = () => {
  return (
    <nav>
      <div className="nav-list">
        <div>
          <Link to="/">
            <img className="home-img" src="jobhome.png" alt="home" />
          </Link>
        </div>
        <div>
          <span>
            <Link to="/company">
              <img
                className="companylog-img"
                src="jobcompany.png"
                alt="companylogin"
              />
            </Link>
          </span>
          <span>
            <Link to="/userlog">
              <img className="userlog-img" src="joblogin.png" alt="userlogin" />
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBasic;
