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
                <div className="Event-info-content-wrapper">
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"/></svg>                  
                  <h2>Date</h2>
                </div>
                <div className="Event-info-content-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/></svg>
                  <h2>Address</h2>
                </div>
                <div className="Event-info-content-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M11.29,15.29a1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2.84.84,0,0,0,.08.38.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54A1,1,0,0,0,13,16a1,1,0,0,0-.29-.71A1,1,0,0,0,11.29,15.29ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,7A3,3,0,0,0,9.4,8.5a1,1,0,1,0,1.73,1A1,1,0,0,1,12,9a1,1,0,0,1,0,2,1,1,0,0,0-1,1v1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,12,7Z"/></svg>                  
                  <h2>Questions</h2>
                </div>
              </div>
            </div>
            <div className="Event-bottom">
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam et vestibulum arcu. Phasellus eu pretium arcu. Duis ut ex a justo sagittis pretium sit amet ac leo. Maecenas sit amet justo sed massa consequat malesuada quis eu eros. Maecenas laoreet lorem vitae tincidunt cursus. Curabitur id neque auctor elit ornare auctor at in odio. Quisque vel varius enim, non iaculis urna. Phasellus quis metus ut enim tincidunt dapibus. Sed egestas sem cursus urna ultrices, a dignissim dolor ultricies.</p>
            </div>
          </div>
        </div>

        <h1>Past Events</h1>
        <div className="Events-content">
          <div className="Event">
            <div className="Event-top">
              <img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Reviewer"></img>
              <div className="Event-info">
                <div className="Event-info-content-wrapper">
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"/></svg>                  
                  <h2>Date</h2>
                </div>
                <div className="Event-info-content-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/></svg>
                  <h2>Address</h2>
                </div>
                <div className="Event-info-content-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M11.29,15.29a1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2.84.84,0,0,0,.08.38.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54A1,1,0,0,0,13,16a1,1,0,0,0-.29-.71A1,1,0,0,0,11.29,15.29ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,7A3,3,0,0,0,9.4,8.5a1,1,0,1,0,1.73,1A1,1,0,0,1,12,9a1,1,0,0,1,0,2,1,1,0,0,0-1,1v1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,12,7Z"/></svg>                  
                  <h2>Questions</h2>
                </div>
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
                <div className="Event-info-content-wrapper">
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"/></svg>                  
                  <h2>Date</h2>
                </div>
                <div className="Event-info-content-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/></svg>
                  <h2>Address</h2>
                </div>
                <div className="Event-info-content-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1A1A1A" d="M11.29,15.29a1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2.84.84,0,0,0,.08.38.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54A1,1,0,0,0,13,16a1,1,0,0,0-.29-.71A1,1,0,0,0,11.29,15.29ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,7A3,3,0,0,0,9.4,8.5a1,1,0,1,0,1.73,1A1,1,0,0,1,12,9a1,1,0,0,1,0,2,1,1,0,0,0-1,1v1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,12,7Z"/></svg>                  
                  <h2>Questions</h2>
                </div>
              </div>
            </div>
            <div className="Event-bottom">
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam et vestibulum arcu. Phasellus eu pretium arcu. Duis ut ex a justo sagittis pretium sit amet ac leo. Maecenas sit amet justo sed massa consequat malesuada quis eu eros. Maecenas laoreet lorem vitae tincidunt cursus. Curabitur id neque auctor elit ornare auctor at in odio. Quisque vel varius enim, non iaculis urna. Phasellus quis metus ut enim tincidunt dapibus. Sed egestas sem cursus urna ultrices, a dignissim dolor ultricies.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Events;