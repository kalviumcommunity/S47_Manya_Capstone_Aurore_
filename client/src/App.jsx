import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./Pages/Main/LandingPage";
import HomePage from "./Pages/Main/HomePage";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import MarsRover from "./FetchedData/MarsRover";
import APOD from "./FetchedData/APOD";
import ISROLaunches from "./FetchedData/ISROLaunches";
import Articles from "./FetchedData/Articles";
import Blogs from "./FetchedData/Blogs";
import ChangePassword from "./Pages/Auth/ResetPassword";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import SolarSystem from "./Pages/OtherPages/SolarSystem";
import UserPosts from "./Pages/Posts/UserPosts";
import CreatePost from "./Pages/Posts/CreatePost";
import axios from "axios";
import LoginFirstPage from "./Pages/Auth/LoginFirst";
import ResetPassword from "./Pages/Auth/ResetPassword";
import UserProfile from "./Pages/OtherPages/UserProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset/:id/:token" element={<ResetPassword />} />

        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/marsrover" element={<MarsRover />} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/isro-launches" element={<ISROLaunches />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/solar-system" element={<SolarSystem />} />
        <Route path="/my-posts" element={<UserPosts />} />
        <Route path="/register" element={<CreatePost />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/main" element={<HomePage />} />

        <Route path="/" element={<LoginFirstPage />} />
        <Route path="*" element={<LoginFirstPage />} />
      </Routes>
    </>
  );
}

export default App;
