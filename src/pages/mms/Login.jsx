import React, { useState } from "react";
import "./Login.css";
import backgroundImage from "../../assets/mms.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "maker" && password === "payflex123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/mms/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div
      className="mms-login-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mms-login-glass">
        <h2>PayFlex MMS Login</h2>
        <p>Secure access for authorized users only.</p>

        <form className="mms-login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-msg">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
