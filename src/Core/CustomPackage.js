import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/CustomPackage.css";
import email from "../Assets/email.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone.png";
import shape from "../Assets/shape.png";
import custi from "../Assets/custompackage.png";

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
        <div className="heading-custom">
          <p>&nbsp;&nbsp;Custom Package&nbsp;&nbsp;</p>
        </div>
        <div className="contact-us-container">
          <span className="big-circle"></span>
          <img src={shape} className="square" alt=""></img>
          <div className="contact-us-form">
            <div className="contact-info">
              <div className="funi">
                <h3 className="contact-info-title">Request A Custom Package</h3>
                <p className="contact-info-text">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia.
                </p>
              </div>
              <img id="yuiop" src={custi}></img>
            </div>
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <form className="contact-us-main-form" action="">
                <h3 className="contact-form-title">
                  Let us know what you need...
                </h3>
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
                <div className="contact-form-input-container">
                  <input
                    type="text"
                    name="destination"
                    className="contact-input"
                  />
                  <label className="contact-form-label" for="">
                    Destination
                  </label>
                  <span>Destination</span>
                </div>
                <div className="contact-form-input-container">
                  <input type="text" name="budget" className="contact-input" />
                  <label className="contact-form-label" for="">
                    Budget
                  </label>
                  <span>Budget</span>
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
