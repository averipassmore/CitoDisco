import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; 
import Contact from "./Contact";
import Courses from "./Courses";
import Events from "./Events";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/courses' element={<Courses/>}/>
        <Route exact path='/events' element={<Events/>}/>
      </Routes>
    </Router>
  )
}

export default MainRoutes;