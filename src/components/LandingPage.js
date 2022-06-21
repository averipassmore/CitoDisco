import React from "react";
import NavBar from "./NavBar";
import logo from '../images/citodiscologo.png'

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div className="Landing-page">
        <h1>Cito Disco</h1>
        <img src={logo} alt="Cito Disco Logo"></img>
      </div>
    </div>
  )
}

export default LandingPage;