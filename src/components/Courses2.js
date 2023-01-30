import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import italianCourse from "../images/italianCourse.jpg"
import latinCourse from "../images/latinCourse.jpg"
import japaneseCourse from "../images/japaneseCourse.jpg"
import eslCourse from "../images/eslCourse.jpg"

const Courses2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div style={{position: "relative", display: "flex", top: "8vmin", justifyContent: "center"}}>
        <h1 style={{fontSize: "6vmin"}}>Courses</h1>
      </div>
      <div className="Courses-List">
        <div className="Course-Card" onClick={() => navigate('/courses/italian')}>
          <img src={italianCourse} alt={"Italian course"}></img>
        </div>
        <div className="Course-Card">
          <img src={latinCourse} alt={"Italian course"}></img>
        </div>
        <div className="Course-Card">
          <img src={japaneseCourse} alt={"Italian course"}></img>
        </div>
        <div className="Course-Card">
          <img src={eslCourse} alt={"Italian course"}></img>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses2;