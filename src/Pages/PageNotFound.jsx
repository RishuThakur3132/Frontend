import { Link } from "react-router-dom";
import "../CSS/pageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found">

      <div className="not-found-container">

        {/* 404 Illustration */}
        <div className="illustration">

          <div className="number four">4</div>

          <div className="zero">
            <div className="zero-inner"></div>
          </div>

          <div className="number four">4</div>

        </div>

        {/* Heading */}
        <h1>Page Not Found</h1>

        {/* Description */}
        <p>
          We're sorry, the page you requested could not be found.
          <br />
          Please go back to the homepage.
        </p>

        {/* Home Button */}
        <Link to="/" className="home-button">
          GO HOME
        </Link>

      </div>

    </div>
  );
}

export default PageNotFound;