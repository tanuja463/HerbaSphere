import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");   // 👈 NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Save username also
    localStorage.setItem(
      "user",
      JSON.stringify({ username, email, password })
    );

    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signup</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSignup}>

          {/* Username */}
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Signup</button>
        </form>

        <p className="switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;