import { Link } from "react-router-dom";
import "../CSS/pageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found">

      <div className="not-found-container">

        <div className="illustration">

          <div className="number four">4</div>

          <div className="zero">
            <div className="zero-inner"></div>
          </div>

          <div className="number four">4</div>

        </div>

        <h1>Page Not Found</h1>

        <p>
          We're sorry, the page you requested could not be found.
          <br />
          Please go back to the homepage.
        </p>

        <Link to="/" className="home-button">
          GO HOME
        </Link>

      </div>

    </div>
  );
}

export default PageNotFound;