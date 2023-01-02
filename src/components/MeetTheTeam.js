import React from "react";
import Testimonials from "./Testimonials";
import laura from '../images/laura.jpg'
import ruth from '../images/ruth.jpg';
import annalisa2 from '../images/analissa2.jpg';

const MeetTheTeam = () => {
  return (
    <div>
      <div className="Meet-the-team">
        <h1>Meet The Team</h1>
        <div className="Bio">
          <img src={laura} alt="Laura" style={{width: "30vmin", height: "30vmin"}}></img>
          <p>Laura is the founder and CEO of Cito Disco. She graduated Magna Cum Laude in
            Bachelor of Science in Cultural Heritage from University of Pisa. As an educator,
            meeting the needs of the clientele is her main goal. Laura taught Latin, Italian and
            French at Founders Classical Academy of Las Vegas for four years, and Latin and
            Italian in College of Southern Nevada for another four years. During these years, Laura
            constantly explored new teaching methods for instruction of world languages. Most of
            Laura’s clients become very close friends and stay in touch. Laura enjoys traveling,
            visiting museums, art, and begins every single day with cappuccino!
          </p>
        </div>
        <div className="Non-owners">
          <div className="Bio">
            <img src={ruth} alt="Ruth"></img>
            <p>Ruth is the education specialist. She has a Master Degree in Education, major in
              English Language Acquisition and Development from Sierra Nevada University. She
              has taught in schools while living in many countries, but Las Vegas is home to her. Ruth
              teaches middle school, enjoys singing, dancing, speaking in different languages,
              traveling, and she brings these into her teaching practice.
            </p>
          </div>
          <div className="Bio">
            <img className="Annalisa" src={annalisa2} alt="Analisa"></img>
            <p>Annalisa is the video and audio expert who resides in Milano, Italy. She has a degree
              in Public Relations from the University of Milan IULM. You will be listening to her
              pleasant voice as you immerse into the Italian language. She works and lives in Milan
              and enjoys hiking, nature, and ski touring. Annalisa will be sharing all her adventures in
              the duration of the course through videos live from Italy. Like most Italians, she is
              passionate about food and savor different flavors.
            </p>
          </div>
        </div>
      </div>
      <Testimonials/>
    </div>
  )
}

export default MeetTheTeam;