import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Courses = () => {
  const navigate = useNavigate();
  const handleContact = () => navigate('/contact');
  
  return (
    <div>
      <NavBar />
      <div className="Courses">
        <div className="Courses-info">
          <h1 id='Courses-title'>Overview</h1>
          <p>Our courses will expose you to world languages in different
            interactive ways, such as reading, listening, activities, conversation,
            games, quizzes, etc. You will be able to respond and converse in
            your target language of interest with simple sentences and phrases
            from the very first meeting. As the course progresses, learning
            increases in sentence structures, vocabulary, conversation skills,
            within an authentic and cultural context.
          </p>
          <h1>Our Method</h1>
          <p>The method used in every course is the natural approach. You will be
            provided with texts and links to different audio-visual materials for
            comprehension and immediate understanding without any need for
            translation. The texts have intelligible sentences per se because the
            meaning or function of all new words and forms is made clear in
            context or through illustrations and guidance from the instructors.
            You will be encouraged to think independently about sentence
            structures and grammar directly from the text to develop
            comprehension to speak in the targeted language in the fastest,
            efficient, yet simple and natural way.
          </p>
          <h1>Courses</h1>
          <h2>Italian for Adults – Online or Face-to-face option</h2>
          <p>This course is customized according to the needs and interests of every learner.
            Learning goals and commitments will be discussed with the instructor during the first
            session.
          </p>
          <h2>Italian for Children and Youth – Online or Face-to-face option</h2>
          <p>This course focus on visual, auditory, and kinesthetic language learning in a fun and engaging way.</p>
          <h2>Italian for Small Groups</h2>
          <p>This is a face-to-face course, customized according to the needs of the specific group
            filled with fun, interactive and engaging activities.
          </p>
          <h2>Italian for Corporate</h2>
          <p>This is a face-to-face course delivered on site according to the corporate needs and goals.</p>
          <h2>Japanese</h2>
          <p>Coming soon!</p>
          <h2>Latin</h2>
          <p>Coming soon!</p>
        </div>
        <div onClick={handleContact} className="Courses-button-wrapper"><button>Book your free consultation!</button></div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses;