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

    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      setError("Email already registered");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Account created successfully!");

    setName("");
    setEmail("");
    setPassword("");

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

          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="signup-error">
              {error}
            </p>
          )}

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