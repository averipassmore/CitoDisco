import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; 
import Contact from "./Contact";
import Courses from "./Courses";
import Events from "./Events";
import Italian from "./Italian";
import Courses2 from "./Courses2";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/events' element={<Events/>}/>
        <Route exact path='/courses2' element={<Courses/>}/>
        <Route exact path='/courses' element={<Courses2 />}/>
        <Route exact path='/courses/italian' element={<Italian />}/>
      </Routes>
    </Router>
  )
}

export default MainRoutes;