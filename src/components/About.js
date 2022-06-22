import React from "react";
import about from '../images/about.jpg'
import MeetTheTeam from "./MeetTheTeam";

const About = () => {
  return (
    <div>
      <div className="About">
        <h1>About</h1>
        <img src={about} alt="about"/>
        <p>Sed ac dolor ac tortor elementum faucibus sit amet sed purus. Curabitur vel lacus non tellus ullamcorper varius in lobortis magna. Cras maximus vitae nibh id bibendum. Donec vehicula at libero et rutrum. Donec gravida sem tellus, sed condimentum velit ultricies vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam et vestibulum arcu. Phasellus eu pretium arcu. Duis ut ex a justo sagittis pretium sit amet ac leo. Maecenas sit amet justo sed massa consequat malesuada quis eu eros. Maecenas laoreet lorem vitae tincidunt cursus. Curabitur id neque auctor elit ornare auctor at in odio. Quisque vel varius enim, non iaculis urna. Phasellus quis metus ut enim tincidunt dapibus. Sed egestas sem cursus urna ultrices, a dignissim dolor ultricies.</p>
      </div>
      <MeetTheTeam/>
    </div>
  )
}

export default About;