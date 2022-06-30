import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Events = () => {
  return (
    <div>
      <NavBar />
      <div className="Events">
        <h1>Upcoming Events</h1>
        <div className="Events-content">
          <div className="Event">
            <div className="Event-top">
              <img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Reviewer"></img>
              <div className="Event-info">
                <h2>Date</h2>
                <h2>Address</h2>
                <h2>Questions</h2>
              </div>
            </div>
            <div className="Event-bottom">
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam et vestibulum arcu. Phasellus eu pretium arcu. Duis ut ex a justo sagittis pretium sit amet ac leo. Maecenas sit amet justo sed massa consequat malesuada quis eu eros. Maecenas laoreet lorem vitae tincidunt cursus. Curabitur id neque auctor elit ornare auctor at in odio. Quisque vel varius enim, non iaculis urna. Phasellus quis metus ut enim tincidunt dapibus. Sed egestas sem cursus urna ultrices, a dignissim dolor ultricies.</p>
            </div>
          </div>
          <div className="Event">
            <div className="Event-top">
              <img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Reviewer"></img>
              <div className="Event-info">
                <h2>Date</h2>
                <h2>Address</h2>
                <h2>Questions</h2>
              </div>
            </div>
            <div className="Event-bottom">
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam et vestibulum arcu. Phasellus eu pretium arcu. Duis ut ex a justo sagittis pretium sit amet ac leo. Maecenas sit amet justo sed massa consequat malesuada quis eu eros. Maecenas laoreet lorem vitae tincidunt cursus. Curabitur id neque auctor elit ornare auctor at in odio. Quisque vel varius enim, non iaculis urna. Phasellus quis metus ut enim tincidunt dapibus. Sed egestas sem cursus urna ultrices, a dignissim dolor ultricies.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h1>Past Events</h1>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Events;