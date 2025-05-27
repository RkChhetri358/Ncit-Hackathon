import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();  // prevent form reload
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
         email:email,
      //  backend:frontend
       
        password,
      });

      if (response.status === 200) {
        alert(`Welcome ${response.data.first_name}`);
        // TODO: save tokens or user info, redirect, etc.
      }
    } catch (error) {
      alert("Login failed! Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="main">
      <div className="header"><h1>Login</h1></div>
      <div className="card">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row password-row">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="register-link">
            Don't have an account? <Link to="/signup">Register here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
