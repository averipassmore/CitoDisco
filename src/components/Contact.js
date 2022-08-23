import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import NavBar from "./NavBar";
import Footer from "./Footer";


const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const handleRedirect = () => navigate('/');

  // let navigate = useNavigate();
  const sendEmail= (e) => {
    e.preventDefault();
    if(!window.confirm("Please confirm request")) return;
    emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_KEY, process.env.REACT_APP_EMAIL_JS_TEMPLATE_KEY, form.current, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
      .then((result) => {
        console.log(result);
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone-number');
        const message = document.getElementById('comments');
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
        alert('Your request was successfully submitted');
        handleRedirect();
      }, (error) => {
          console.log(error.text);
          alert("Your request failed... Please try again", error)
          return;
      }); 
  }

  return (
    <div className="Contact-wrapper">
      <NavBar />
      <div className="Contact">
        <h1>Contact Us</h1>
        <form className="Contact-form" ref={form} onSubmit={sendEmail}>
          <div className="Contact-form-basic-info">
            <label htmlFor="user_first_name"></label>
            <input type="text" name="user_first_name" placeholder="First name" id="first-name" required/>

            <label htmlFor="user_last_name"></label>
            <input type="text" name="user_last_name" placeholder="Last name" id="last-name"/>

            <label htmlFor="user_email"></label>
            <input type="text" name="user_email" placeholder="example@email.com" id="email" required/>

            <label htmlFor="user_phone_number"></label>
            <input type="text" name="user_phone_number" placeholder="(123)456-7890" id="phone-number" required/>
          </div>
          <h2>Reason For Contacting Us</h2>
          <div className="Contact-form-options">
            <input type="radio" name="user_reason" value="Lessons" required></input>
            <label htmlFor="lesson">Language Lessons</label>
            <input type="radio" name="user_reason" value="Events"></input>
            <label htmlFor="events">Events Info</label>
            <input type="radio" name="user_reason" value="other"></input>
            <label htmlFor="other">Other</label>
          </div>
          <h2>How may we contact you?</h2>
          <div className="Contact-form-options">
            <input type="radio" name="user_method_of_contact" value="email" required></input>
            <label for="email">Email</label>
            <input type="radio" name="user_method_of_contact" value="Text"></input>
            <label for="text">Text</label>
            <input type="radio" name="user_method_of_contact" value="Phone"></input>
            <label for="phone">Phone Call</label>
          </div>

          <h2>Comments</h2>
          <textarea name="user_comments" placeholder="Please include any additional information that may be helpful. Thanks!" id="comments"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="Contact-footer-wrapper">
        <Footer/>
      </div>
    </div>
  )
}

export default Contact;