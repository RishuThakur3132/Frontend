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
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <span className="logo-car">CAR</span>
          <span className="logo-24"> 24</span>
        </Link>
      </div>

      {/* Navigation */}
      <ul className="nav-links">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            🏠 Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            📞 Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            ℹ️ About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Cart"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            🛒 Cart
          </NavLink>
        </li>

        {/* Login / Profile */}
        {!isLogged ? (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              🔐 Login / Signup
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                👤 Profile
              </NavLink>
            </li>

            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}

      </ul>

      {/* Right Side Button */}
      <button
        className="sell-car-btn"
        onClick={() => navigate("/cars")}
      >
        🚗 Browse Cars
      </button>

    </header>
  );
}

export default Header;