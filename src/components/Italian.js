import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Italian = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="Courses">
        <h1>Italian</h1>
        <div className="course-info">
          <h2>ITALIAN FOR ADULTS</h2>
          <h3>ONLINE(VIA ZOOM) OR IN PERSON (LAS VEGAS AREA ONLY)</h3>
          <h4>These Italian private lessons are customized according to the needs and
            interests of each student. In a fun, relaxed, and informal setting, Laura will be
            glad to accompany the student in their journey into the Italian language
            through stories, films, music, YouTube videos, games, and other media and
            activities. With an established method, the student will acquire the Italian
            language in a natural way, without spending too much energy thinking about
            grammar rules and vocabulary lists.
            Do you want to know more about it?</h4>
          <h5 onClick={() => navigate("/contact")}>Book a free consultation!</h5>
        </div>

        <div className="course-info">
          <h2>ITALIAN FOR CHILDREN AND YOUTH</h2>
          <h3>ONLINE(VIA ZOOM) OR IN PERSON (LAS VEGAS AREA ONLY)</h3>
          <h4>Stories, stories, and stories! These are the 3 key words for our Italian lessons
            focused on children and young minds. In a fun, engaging, and immersive way,
            the student will acquire the language without stress, and will turn their
            UFFA(Ugh) into a EVVIVA (Yuppie) mood.
          </h4>
          <h5 onClick={() => navigate("/contact")}>Book a free consultation to chat with Laura about this tutoring opportunity!</h5>
        </div>

        <div className="course-info">
          <h2>ITALIAN FOR SMALL GROUPS</h2>
          <h3>ONLINE(VIA ZOOM) OR IN PERSON (LAS VEGAS AREA ONLY)</h3>
          <h4>Are you and a group of friends planning to travel to Italy? Are you and your
            family members eager to be engaged in a common interest? Are you and a
            group of acquaintances enthusiastic to win the Best Italian Speaker contest?
            Whatever is your goal, or the reason for you to spend a few hours together
            enjoying the Italian language and culture, your search has ended: this is the
            place for you.
            Through stories, games, activities, and laughs you will be acquiring the Italian
            language even if you don’t desire to.
          </h4>
          <h5 onClick={() => navigate("/contact")}>Check it out with Laura by booking a free consultation now!</h5>
        </div>

        <div className="course-info">
          <h2>ITALIAN FOR CORPORATE</h2>
          <h3>IN PERSON (LAS VEGAS AREA ONLY)</h3>
          <h4>Would you like to see your staff smiling again? Would you like to be
            welcomed by a friendly “Buongiorno!” instead of a bored “Hi”? Would you
            like your company to be international and you need your staff to know basic
            Italian for specific communicative purposes?
            This course, delivered on site according to the corporate needs and goals, is the
            course you are looking for.
          </h4>
          <h5 onClick={() => navigate("/contact")}>Contact us by booking a free consultation to discuss the company’s needs!</h5>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Italian;