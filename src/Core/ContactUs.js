import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Contactus.css";
import email from "../Assets/email.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone.png";
import shape from "../Assets/shape.png";

const ContactUs = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".contact-input");

    if (inputs) {
      inputs.forEach((input) => {
        input.addEventListener("focus", () => {
          input.parentNode.classList.add("focus");
          console.log("Adding focus");
        });
        input.addEventListener("blur", () => {
          if (input.value === "") {
            input.parentNode.classList.remove("focus");
            console.log("Removing focus");
          }
        });
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="contact-us-main">
        <div className="heading-contact">
          <p>&nbsp;&nbsp;Contact Us&nbsp;&nbsp;</p>
        </div>
        <div className="contact-us-container">
          <span className="big-circle"></span>
          <img src={shape} className="square" alt=""></img>
          <div className="contact-us-form">
            <div className="contact-info">
              <h3 className="contact-info-title">Let's get in touch</h3>
              <p className="contact-info-text">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia.
              </p>
              <div className="info">
                <div className="information">
                  <img
                    src={location}
                    alt="Location"
                    className="contact-info-icon"
                  />
                  <p>Lorem ipsum dolor sit amet, officia excepteur.</p>
                </div>
              </div>
              <div className="info">
                <div className="information">
                  <img
                    src={email}
                    alt="Location"
                    className="contact-info-icon"
                  />
                  <p>lorem@ipsum.com</p>
                </div>
              </div>
              <div className="info">
                <div className="information">
                  <img
                    src={phone}
                    alt="Location"
                    className="contact-info-icon"
                  />
                  <p>+91-987-654-3210</p>
                </div>
              </div>
              <div className="social-media">
                <p>Connect with us:</p>
                <div className="social-icons">
                  <a href="www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="www.linkedin.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <form className="contact-us-main-form" action="">
                <h3 className="contact-form-title">Contact Us</h3>
                <div className="contact-form-input-container">
                  <input type="text" name="name" className="contact-input" />
                  <label className="contact-form-label" for="">
                    Name
                  </label>
                  <span>Name</span>
                </div>
                <div className="contact-form-input-container">
                  <input type="text" name="phone" className="contact-input" />
                  <label className="contact-form-label" for="">
                    Phone Number
                  </label>
                  <span>Phone Number</span>
                </div>
                <div className="contact-form-input-container">
                  <input type="email" name="email" className="contact-input" />
                  <label className="contact-form-label" for="">
                    Email
                  </label>
                  <span>Email</span>
                </div>
                <div className="contact-form-input-container contact-textarea">
                  <textarea name="" cols="" rows="" className="contact-input" />
                  <label className="contact-form-label" for="">
                    Message
                  </label>
                  <span>Message</span>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="contact-button"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
