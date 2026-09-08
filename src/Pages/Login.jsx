import "../CSS/Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // Saved users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user
    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    // Current logged-in user save karo
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    localStorage.setItem("isLogged", "true");

    // Profile par jao
    navigate("/profile");
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;