import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
  if (username === "tcc" && password === "123") {
    navigate("/menu");
  } else {
    toast.error("Username or Password is incorrect")
    }
};

  const loginPageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const boxStyle = {
    border: "2px solid #ccc",
    padding: "20px",
    borderRadius: "5px",
    background: "#fff",
    height: "fit-content",
  };

  return (
    <div className="container" style={loginPageStyle}>
      <div className="box has-text-centered" style={boxStyle}>
        <h1 className="title">Login</h1>
        <div className="field">
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
