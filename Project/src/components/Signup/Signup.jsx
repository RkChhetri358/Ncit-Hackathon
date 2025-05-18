import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Proceed with submission logic here
    setError("");
    alert("Submitted successfully!");
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <div id="title">Sign up</div>
        </div>

        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <label htmlFor="firstname">First Name: </label>
                <input type="text" />
              </div>
              <div className="row">
                <label htmlFor="lastname">Last Name: </label>
                <input type="text" />
              </div>
              <div className="row">
                <label htmlFor="phone">Phone No: </label>
                <input type="text" />
              </div>
              <div className="row">
                <label htmlFor="address">Address: </label>
                <input type="text" />
              </div>
              <div className="row">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="row password-row">
                <label htmlFor="password">Password: </label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className="eye-icon"
                  />
                </div>
              </div>

              <div className="row password-row">
                <label htmlFor="confirmpassword">Confirm Password: </label>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                    onClick={toggleConfirmPasswordVisibility}
                    className="eye-icon"
                  />
                </div>
              </div>

              {error && <p className="error-message">{error}</p>}
<br/>
              <div className="row">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
