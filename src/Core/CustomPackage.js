import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/CustomPackage.css";
import shape from "../Assets/shape.png";
import custi from "../Assets/custompackage.png";
import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const [customPackage, setCustomPackage] = useState({
    name: "",
    phNo: "",
    email: "",
    destination: "",
    budget: "",
    message: "",
  });
  const db = firebase.firestore();

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

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCustomPackage((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addRequest = (e) => {
    e.preventDefault();
    db.collection("CustomPackages")
      .add(customPackage )
      .then((docRef) => {
        toast.success(
          "Your request has been successfully submitted, we will contact you shortly."
        );
        db.collection("CustomPackages")
          .doc(docRef.id)
          .update({ id: docRef.id })
          .then(() => {
            setCustomPackage({
              name: "",
              phNo: "",
              email: "",
              destination: "",
              budget: "",
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
              <img id="yuiop" src={custi} alt="custom"></img>
            </div>
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <form className="contact-us-main-form" action="">
                <h3 className="contact-form-title">
                  Let us know what you need...
                </h3>
                <div className="contact-form-input-container">
                  <input
                    type="text"
                    name="name"
                    className="contact-input"
                    value={customPackage.name}
                    onChange={handleChange}
                  />
                  <label className="contact-form-label" for="">
                    Name
                  </label>
                  <span>Name</span>
                </div>
                <div className="contact-form-input-container">
                  <input
                    type="text"
                    name="phNo"
                    className="contact-input"
                    value={customPackage.phNo}
                    onChange={handleChange}
                  />
                  <label className="contact-form-label" for="">
                    Phone Number
                  </label>
                  <span>Phone Number</span>
                </div>
                <div className="contact-form-input-container">
                  <input
                    type="email"
                    name="email"
                    className="contact-input"
                    value={customPackage.email}
                    onChange={handleChange}
                  />
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
                    value={customPackage.destination}
                    onChange={handleChange}
                  />
                  <label className="contact-form-label" for="">
                    Destination
                  </label>
                  <span>Destination</span>
                </div>
                <div className="contact-form-input-container">
                  <input
                    type="text"
                    name="budget"
                    className="contact-input"
                    value={customPackage.budget}
                    onChange={handleChange}
                  />
                  <label className="contact-form-label" for="">
                    Budget
                  </label>
                  <span>Budget</span>
                </div>

                <div className="contact-form-input-container contact-textarea">
                  <textarea
                    name="message"
                    cols=""
                    rows=""
                    className="contact-input"
                    value={customPackage.message}
                    onChange={handleChange}
                  />
                  <label className="contact-form-label" for="">
                    Message
                  </label>
                  <span>Message</span>
                </div>
                <input
                  type="button"
                  value="Submit"
                  onClick={addRequest}
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
