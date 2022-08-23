import React from "react";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const handleHome = () => navigate('/');
  const handleCourses = () => navigate('/courses');
  const handleEvents = () => navigate('/events');
  const handleContact = () => navigate('/contact');

  return (
    <div>
      <div className="Nav-bar">
        <p className="Nav-text" onClick={handleHome}>Home</p><p>|</p>
        <p className="Nav-text" onClick={handleContact}>Contact</p><p>|</p>
        <p className="Nav-text" onClick={handleCourses}>Courses</p><p>|</p>
        <p className="Nav-text" onClick={handleEvents}>Events</p><p>|</p>
        <div className="Nav-text"><div className="Email-logo" style={{cursor:"pointer"}}><a href="mailto:laura@citodisco.com"><svg style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="6vmin" height="6vmin" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path style={{cursor:"pointer"}} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline style={{cursor:"pointer"}} points="22,6 12,13 2,6"></polyline></svg></a></div></div>
      </div>
    </div>
  )
}

export default NavBar;