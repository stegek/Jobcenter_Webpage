import React from "react";
import { Link } from "react-router-dom";
import "./NavbarBasic.css";

const NavbarBasic: React.FC = () => {
  return (
    <nav>
      <div className="nav-list">
        <div>
          <Link to="/">
            <img
              className="home-img"
              src="jobhome.png"
              alt="home"
              onMouseOver={(event) =>
                (event.currentTarget.src = "jobhome_hover.png")
              }
              onMouseOut={(event) => (event.currentTarget.src = "jobhome.png")}
            />
          </Link>
        </div>
        <div>
          <span>
            <Link to="/company">
              <img
                className="nav-span-img"
                src="jobcompany.png"
                alt="companylogin"
                onMouseOver={(event) =>
                  (event.currentTarget.src = "jobcompany_hover.png")
                }
                onMouseOut={(event) =>
                  (event.currentTarget.src = "jobcompany.png")
                }
              />
            </Link>
          </span>
          <span>
            <Link to="/userlog">
              <img
                className="nav-span-img"
                src="joblogin.png"
                alt="userlogin"
                onMouseOver={(event) =>
                  (event.currentTarget.src = "joblogin_hover.png")
                }
                onMouseOut={(event) =>
                  (event.currentTarget.src = "joblogin.png")
                }
              />
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBasic;
