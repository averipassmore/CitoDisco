import React from "react";
import Footer from "./Footer";
import Julia from '../images/JuliaTestimonial.jpg';
import June from '../images/JuneTestimonial.jpg';
import Melodi from '../images/MelodiTestimonial.jpg';


const Testimonials = () => {
  return (
    <div>
      <div className="Testimonials">
        <h1>Testimonials</h1>
        <div className="Testimonials-content">
          <div className="Testimonial">
            <img src={Julia} alt="Reviewer"></img>
            <p>Cito Disco is an amazing and fun way to learn the Italian language online. The personalized instruction makes all the difference.</p>
            <p>- Julia (Las Vegas, Private Lessons Online)</p>
          </div>
          <div className="Testimonial">
            <img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Reviewer"></img>
            <p>We absolutely love our Italian lessons with Ms. Laura, not only are we speaking and conversing in Italian at our lessons, but we are also learning about Italian culture. Our lessons are a highlight of our day, and we feel we are making good progress! Highly recommend Cito Disco!!!</p>
            <p>- Dana, Gloria, and Emme (Las Vegas, Small Group Lessons in Person)</p>
          </div>
          <div className="Testimonial">
            <img src={June} alt="Reviewer"></img>
            <p>Laura and Cito Disco make learning a new language fun. She’s an amazing teacher and her technique is flawless. It’s for all ages so join now!!!</p>
            <p>- June (Las Vegas, Private Lessons in Person)</p>
          </div>
          <div className="Testimonial">
            <img src={Melodi} alt="Reviewer"></img>
            <p>Over the years I've taken many different language courses. Laura Marino's teaching method has been brilliant. It's not like any of the others. It's practical, and she makes learning easier and fun with her system.</p>
            <p>- Melodi (Las Vegas, Private Lessons in Person)</p>
          </div>
        </div>
      </div>
      {/* <Supporting/> */}
      <Footer/>
    </div>
  )
}

export default Testimonials;