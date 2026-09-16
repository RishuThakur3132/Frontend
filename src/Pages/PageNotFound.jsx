import { useNavigate } from "react-router-dom";
import "../CSS/PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-not-found">

      <div className="error-card">

        <div className="car-icon">🚗</div>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for doesn't exist
          or may have been moved.
        </p>

        <div className="error-buttons">
          <button onClick={() => navigate("/")}>
            🏠 Go Home
          </button>

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>
        </div>

      </div>

    </div>
  );
}

export default PageNotFound;