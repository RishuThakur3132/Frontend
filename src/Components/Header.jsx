import "../CSS/Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
    navigate("/login");
  };

  return (
    <div className="home-page">
      <nav className="navbar">

        <div className="logo">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "120%",
            }}
          >
            Car 24
          </Link>
        </div>

        <div className="car-animation"></div>

        <ul className="nav-links">

          <li className="icon">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="icon">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Contact
            </NavLink>
          </li>

          <li className="icon">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              About
            </NavLink>
          </li>

          {!isLogged ? (
            <li className="icon">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Login / Signup
              </NavLink>
            </li>
          ) : (
            <>
              <li className="icon">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  Profile
                </NavLink>
              </li>
            </>
          )}

        </ul>

      </nav>
    </div>
  );
}

export default Header;