import React from "react";
import "../Styles/Login.css";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div className="loginPage">
      <div className="wrapper">
        <form>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i>
              <FaUser />
            </i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i>
              <IoMail />
            </i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i>
              <FaLock />
            </i>
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
          <div className="register-link">
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </form>
        <button className="login-with-google-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
