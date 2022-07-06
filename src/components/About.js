import React from "react";
import about from '../images/about.jpg'
import MeetTheTeam from "./MeetTheTeam";

const About = () => {
  return (
    <div>
      <div className="About">
        <h1>About</h1>
        <img src={about} alt="about"/>
        <p>Cito Disco provides opportunities to explore cultural diversity through acquisition of
          world languages and various events that promote global interests. The courses and
          activities are inspired from personal goals and needs of our clientele. Cito Disco offers
          language courses in a friendly and natural way with a constant attention to learner’s
          engagement.
        </p>
      </div>
      <MeetTheTeam/>
    </div>
  )
}

export default About;