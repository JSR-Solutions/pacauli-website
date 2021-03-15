import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/ContactUs.css";
import email from "../Assets/email.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone.png";
import shape from "../Assets/shape.png";
import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const [enquiry, setEnquiry] = useState({
    name: "",
    phNo: "",
    email: "",
    message: "",
  });

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

  const db = firebase.firestore();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEnquiry((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addEnquiry = (e) => {
    e.preventDefault();
    db.collection("Enquiries")
      .add( enquiry )
      .then((docRef) => {
        db.collection("Enquiries")
          .doc(docRef.id)
          .update({ id: docRef.id })
          .then(() => {
            toast.success("Your enquiry has reached us. We will get in touch with you shortly.");
            setEnquiry({
              name: "",
              phNo: "",
              email: "",
              message: "",
            });
          });
      });
  };

  return (
    <div>
      <Header />
      <ToastContainer />
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
                  <input type="text" name="name" className="contact-input" value={enquiry.name} onChange={handleChange}/>
                  <label className="contact-form-label" for="">
                    Name
                  </label>
                  <span>Name</span>
                </div>
                <div className="contact-form-input-container">
                  <input type="text" name="phNo" className="contact-input" value={enquiry.phNo} onChange={handleChange} />
                  <label className="contact-form-label" for="">
                    Phone Number
                  </label>
                  <span>Phone Number</span>
                </div>
                <div className="contact-form-input-container">
                  <input type="email" name="email" className="contact-input"  value={enquiry.email} onChange={handleChange}/>
                  <label className="contact-form-label" for="">
                    Email
                  </label>
                  <span>Email</span>
                </div>
                <div className="contact-form-input-container contact-textarea">
                  <textarea name="message" value={enquiry.message} onChange={handleChange} cols="" rows="" className="contact-input" />
                  <label className="contact-form-label" for="">
                    Message
                  </label>
                  <span>Message</span>
                </div>
                <input
                  type="button"
                  value="Submit"
                  onClick={addEnquiry}
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
