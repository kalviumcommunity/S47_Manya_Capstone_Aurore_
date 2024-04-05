import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUpForm from "./Pages/SignUp";
import LoginForm from "./Pages/Login";
import APOD from "./FetchedData/APOD";
import MarsRover from "./FetchedData/MarsRover";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/apod" element={<APOD />}></Route>
        <Route path="/mars-rover" element={<MarsRover/>}></Route>
      </Routes>
    </>
  );
}

export default App;
