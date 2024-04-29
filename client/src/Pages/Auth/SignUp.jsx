import React from "react";
import "../../Styles/Login.css";
import { useState } from "react";
import { IoMail } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tc, setTc] = useState(false); 

  const [showPassword, setShowPassword] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(IoMdEyeOff);
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(IoMdEyeOff);
  

  const loginwithgoogle = () => {
    window.open("http://localhost:5000/auth/google/callback","_self")
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
   
    if (!tc) {
       alert("Please accept the terms and conditions.");
       return; 
    }
   
    if (password !== confirmPassword) {
       alert("Password and confirm password should be the same.");
       return; 
    }
   
    try {
       const res = await axios.post("http://localhost:5000/api/user/register", {
         name: username,
         email: email,
         password: password,
         password_confirmation: confirmPassword,
         tc: tc,
       });
   
       if (res.data.status === "success") {
         alert("Registration successful");
         navigate("/login");
       } else {
         // Check for specific error message for email already exists
         if (res.data.message === "Email already exists") {
           alert("This email already exists. Please use a different email.");
         } else {
           // Handle other error messages
           alert("Registration failed: " + res.data.message);
         }
       }
    } catch (error) {
       // Handle errors, e.g., show an error message
       alert("An error occurred during registration");
    }
   };

   
  const handleShowPassword = () => {
    setShowPassword(showPassword === "password" ? "text" : "password");
    setPasswordIcon(showPassword === "password" ? IoMdEyeOff : IoEye);
  }; 
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(showConfirmPassword === "password" ? "text" : "password");
    setConfirmPasswordIcon(showConfirmPassword === "password" ? IoMdEyeOff : IoEye);
  };
   

  return (
    <div className="loginPage">
      <div className="wrapper">
        <form onSubmit={handleSignUp}>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i>
              <IoMail />
            </i>
          </div>
          <div className="input-box"> 
            <input
              type={showPassword}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           <i  onClick={handleShowPassword}>{passwordIcon}</i>

          </div>
          <div className="input-box">
            <input
              type={showConfirmPassword}
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
           <i  onClick={handleShowConfirmPassword}>{confirmPasswordIcon}</i>

          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={tc}
                onChange={(e) => setTc(e.target.checked)}
              />
              I agree to the Terms and Conditions
            </label>
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
        <button className='login-with-google-btn' onClick={loginwithgoogle}>
            Sign in with Google
          </button>
      </div>
    </div>
  );
}

export default SignUpForm;
