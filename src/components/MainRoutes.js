import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; 
import Contact from "./Contact";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default MainRoutes;