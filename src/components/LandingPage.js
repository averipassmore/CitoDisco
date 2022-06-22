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
        <h1>Cito Disco</h1>
        <img src={logo} alt="Cito Disco Logo"></img>
        <h2>"I learn fast"</h2>
        <h2>Enter the world of languages and culture!</h2>
        <div onClick={handleContact}><button>Book your free consultation!</button></div>
      </div>
      <About/>
    </div>
  )
}

export default LandingPage;