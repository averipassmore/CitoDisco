import React from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import logo from '../images/citodiscologo.png';
import About from "./About";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleContact = () => navigate('/contact');
  
  return (
    <div>
      <NavBar />
      <div className="Landing-page">
        <img src={logo} alt="Cito Disco Logo"></img>
        <div className="Landing-page-text">
        </div>
        <div onClick={handleContact} className="Button-wrapper"><button>Book your free consultation!</button></div>
      </div>
      <About/>
    </div>
  )
}

export default LandingPage;