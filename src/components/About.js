import React from "react";
import MeetTheTeam from "./MeetTheTeam";
import stairs from "../images/stairs.jpg"

const About = () => {
  return (
    <div>
      <div className="About">
        <h1>About</h1>
        <img src={stairs} alt="about"/>
        <p>In Latin, cito disco means “I learn fast, quickly, within a short time” and it efficiently
          pictures the main goal of our courses and events. We love to share our passion for
          World Languages and Culture in a friendly, easy, accessible, and fun way.
          Cito Disco, in fact, provides opportunities to explore cultural diversity through acquisition of
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