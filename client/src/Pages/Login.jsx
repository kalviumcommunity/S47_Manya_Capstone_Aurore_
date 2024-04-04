import React from 'react';
import '../Styles/Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'; 

function LoginForm() {
  return (
    <div className="loginPage">
    <div className="wrapper">
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
          />
          <i>  <FaUser /></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
          />
          <i> <FaLock /></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
            />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register-link">
          <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
        </div>
      </form>
      <button className='login-with-google-btn'>
            Log in with Google
          </button>
    </div>
    </div>
  );
}

export default LoginForm;
