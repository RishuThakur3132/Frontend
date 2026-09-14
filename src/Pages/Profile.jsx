import "../CSS/Profile.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();

// Current logged-in user
  const [user] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const handleLogout = () => {

    // Login status remove
    localStorage.removeItem("isLogged");

    // Current user remove
    localStorage.removeItem("currentUser");

    // Home page
    navigate("/");
  };


  return (
    <div className="profile-page">

      {/* ================= PROFILE HEADER ================= */}
      <div className="profile-header">

        <div className="profile-left">

          {/* Avatar */}
          <div className="profile-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>

          {/* User Information */}
          <div className="profile-title">
            <h1>{user.name}</h1>
            <p>Welcome back to Car 24</p>
          </div>

        </div>

        {/* Edit Profile */}
        <button
          className="edit-profile-btn"
          onClick={() => alert("Edit Profile")}
        >
          Edit Profile
        </button>

      </div>

      {/* ================= PERSONAL INFORMATION ================= */}
      <div className="profile-card">

        <h2>Personal Information</h2>

        <div className="information-grid">

          {/* User ID */}
          <div className="info-box">
            <span className="info-label">User ID</span>
            <strong>{user.id}</strong>
          </div>

          {/* Full Name */}
          <div className="info-box">
            <span className="info-label">Full Name</span>
            <strong>{user.name}</strong>
          </div>

          {/* Email */}
          <div className="info-box email-box">
            <span className="info-label">Email</span>
            <strong>{user.email}</strong>
          </div>

        </div>

      </div>

      {/* ================= ACCOUNT ================= */}
      <div className="account-section">

        <h2>Account</h2>

        {/* Favourite Cars */}
        <div
          className="account-item"
          onClick={() => navigate("/favourite-cars")}
        >
          <div className="account-icon favourite-icon">
            ♥
          </div>

          <div className="account-content">
            <h3>Favourite Cars</h3>
            <p>View your saved cars</p>
          </div>

          <span className="account-arrow">›</span>
        </div>

        {/* Car Enquiries */}
        <div
          className="account-item"
          onClick={() => navigate("/enquiries")}
        >
          <div className="account-icon enquiry-icon">
            ?
          </div>

          <div className="account-content">
            <h3>Car Enquiries</h3>
            <p>View your car enquiries</p>
          </div>

          <span className="account-arrow">›</span>
        </div>

        {/* Settings */}
        <div
          className="account-item"
          onClick={() => navigate("/settings")}
        >
          <div className="account-icon settings-icon">
            ⚙
          </div>

          <div className="account-content">
            <h3>Settings</h3>
            <p>Manage your account settings</p>
          </div>

          <span className="account-arrow">›</span>
        </div>

      </div>

      {/* ================= LOGOUT ================= */}
      <div className="logout-section">

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("isLogged");
            navigate("/login");
          }}
        >
          <span>↪</span>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;