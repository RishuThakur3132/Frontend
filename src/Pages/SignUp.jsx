import "../CSS/Signup.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Empty fields check
    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    // Password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check email
    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      setError("Email already registered");
      return;
    }

    // Create unique ID automatically
    const newUser = {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password,
    };

    // Add new user
    users.push(newUser);

    // Save users
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Account created successfully!");

    // Clear form
    setName("");
    setEmail("");
    setPassword("");

    // Go to login
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="signup-page">

      <div className="signup-box">

        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join Car 24  today</p>
        </div>

        <form onSubmit={handleSignup}>

          {/* Name */}
          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error */}
          {error && (
            <p className="signup-error">
              {error}
            </p>
          )}

          {/* Success */}
          {success && (
            <p className="signup-success">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="signup-btn"
          >
            Create Account
          </button>

        </form>

        <div className="login-link">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Signup;