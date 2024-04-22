import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUpForm from "./Pages/SignUp";
import LoginForm from "./Pages/Login";
import APOD from "./FetchedData/APOD";
import MarsRover from "./FetchedData/MarsRover";
import ISROLaunches from "./FetchedData/ISROLaunches";
import Articles from "./FetchedData/Articles";
import Blogs from "./FetchedData/Blogs";
import HomePage from "./Pages/HomePage";
import SolarSystem from "./OtherPages/SolarSystem";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/apod" element={<APOD />}></Route>
        <Route path="/mars-rover" element={<MarsRover/>}></Route>
        <Route path="/isro-launches" element={<ISROLaunches/>}></Route>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/solar-system" element={<SolarSystem />} />
      </Routes>
    </>
  );
}

export default App;
