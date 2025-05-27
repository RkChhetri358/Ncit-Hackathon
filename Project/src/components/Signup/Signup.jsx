import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEye,
  faEyeSlash,
  faUser,
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form is being submitted");
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
        username:email,
        first_name:first_name,
        last_name:last_name,
         phone_number: Phonenumber,  
        address,
        email:email,
        password,
         password2: confirmPassword,
      },{
          headers: {
    'Content-Type': 'application/json'
  }

      });
      if (response.status === 201) {
        alert("SignUp Successful");
        navigate("/login"); // Navigate on success
      }
    } catch (error) {
      if (error.response) {
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        alert("No response from server. Please try again later.");
      } else {
        alert(`Error: ${error.message}`);
      }
    }

    setError("");
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
              <div className="row input-with-icon">
                <label htmlFor="firstname">First Name: </label>
                <div className="input-container">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </div>
              </div>

              <div className="row input-with-icon">
                <label htmlFor="lastname">Last Name: </label>
                <div className="input-container">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                </div>
              </div>

              <div className="row input-with-icon">
                <label htmlFor="phone">Phone No: </label>
                <div className="input-container">
                  <FontAwesomeIcon icon={faPhone} className="input-icon" />
                  <input
                    type="text"
                    value={Phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="row input-with-icon">
                <label htmlFor="address">Address: </label>
                <div className="input-container">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="row input-with-icon">
                <label htmlFor="email">Email: </label>
                <div className="input-container">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="row password-row input-with-icon">
                <label htmlFor="password">Password: </label>
                <div className="input-container">
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
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

              <div className="row password-row input-with-icon">
                <label htmlFor="confirmpassword">Confirm Password: </label>
                <div className="input-container">
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
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
              <br />
              <div className="row">
                <button  onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
