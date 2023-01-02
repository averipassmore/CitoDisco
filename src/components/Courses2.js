import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Courses2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div style={{position: "relative", display: "flex", top: "8vmin", justifyContent: "center"}}>
        <h1>Courses</h1>
      </div>
      <div className="Courses-List">
        <div className="Course-Card" onClick={() => navigate('/courses/italian')}>
          <h1>Italian</h1>
          <h3>Italian For Adults</h3>
          <h4>Online or in person!</h4>
          <h3>Italian for Children</h3>
          <h4>Online or in person!</h4>
          <h2>See more!</h2>
        </div>
        <div className="Course-Card">
          <h1>Latin</h1>
          <h4>Coming soon...</h4>
        </div>
        <div className="Course-Card">
          <h1>Japanese</h1>
          <h4>Coming soon...</h4>
        </div>
        <div className="Course-Card">
          <h1>ESL</h1>
          <h4>Coming soon...</h4>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses2;