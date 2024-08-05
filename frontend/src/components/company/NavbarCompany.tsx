import React from "react";
import "./NavbarCompany.css";
import { Link } from "react-router-dom";

const NavbarCompany: React.FC = () => {
  return (
    <nav>
      <div className="nav-list-company">
        <div>
          <Link to="/">
            <img
              src="jobhome.png"
              alt="home"
              className="home-img"
              onMouseOver={(event) =>
                (event.currentTarget.src = "jobhome_hover.png")
              }
              onMouseLeave={(event) =>
                (event.currentTarget.src = "jobhome.png")
              }
            />
          </Link>
        </div>
        <div>
          <Link to="/company-login">
            <img
              src="joblogin.png"
              alt="company-login"
              className="log-img"
              onMouseOver={(event) =>
                (event.currentTarget.src = "joblogin_hover.png")
              }
              onMouseLeave={(event) =>
                (event.currentTarget.src = "joblogin.png")
              }
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCompany;
