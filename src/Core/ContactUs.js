import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/ContactUs.css";
import email from "../Assets/email.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone.png";
import shape from "../Assets/shape.png";
import {useFormik} from "formik"

const ValidateForm=empData=>{
  const errors = {};

  if(!empData.Name){
    errors.Name = 'Please Enter Your Name';
  }
  else if(empData.Name.length > 20){
    errors.Name = 'Name Should Not Exeed 20 Characters'
  }

  if(!empData.Phone){
    errors.Phone = 'Please Enter Your Phone number';
  }
  else if(!/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(empData.Phone)){
    errors.Phone = 'Phone Number you entered is invalid'
  }

  if(!empData.Email){
    errors.Email = 'Please Enter Your Email Adress';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.Email)) {
    errors.Email = 'Email address you entered in invalid';
  }
  if(!empData.Message){
    errors.Message = "Please Enter your Message"
  }
  return errors;
}


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

  const formik = useFormik({
   initialValues: {
     Name: '',
     Phone: '',
     Email: '',
     Message: ''
   },
   validate: ValidateForm,
   onSubmit: values => {
     alert(JSON.stringify(values))
   },

  });

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
              <form className="contact-us-main-form" onSubmit = {formik.handleSubmit}>
                <h3 className="contact-form-title">Contact Us</h3>
                <div className="contact-form-input-container" style = {formik.errors.Name ? {marginBottom: "0"} : null}>
                  <input id = "Name" type="text" name="Name" className="contact-input" onBlur = {formik.handleBlur} onChange = {formik.handleChange} value = {formik.values.Name} />
                  <label className="contact-form-label" for="">
                    Name
                  </label>
                  <span>Name</span>
                </div>
                {formik.touched.Name && formik.errors.Name ? <p style = {{color: "red"}}>{formik.errors.Name}</p> : null}
                <div className="contact-form-input-container" style = {formik.errors.Phone  ? {marginBottom: "0"} : null}>
                  <input id = "Phone" type="text" name="Phone" className="contact-input" onBlur = {formik.handleBlur}  onChange = {formik.handleChange} value = {formik.values.Phone}/>
                  <label className="contact-form-label" for="">
                    Phone Number
                  </label>
                  <span>Phone Number</span>
                </div>
                {formik.touched.Phone && formik.errors.Phone ? <p style = {{color: "red"}}>{formik.errors.Phone}</p> : null}
                
                <div className="contact-form-input-container" style = {formik.errors.Email ? {marginBottom: "0"} : null}>
                  <input id = "Email" type="email" name="Email" className="contact-input" onBlur = {formik.handleBlur} onChange = {formik.handleChange} value = {formik.values.Email} />
                  <label className="contact-form-label" for="">
                    Email
                  </label>
                  <span>Email</span>
                </div>
                {formik.touched.Email && formik.errors.Email ? <p style = {{color: "red"}}>{formik.errors.Email}</p> : null}
                
                <div className="contact-form-input-container contact-textarea" style = {formik.errors.Message ? {marginBottom: "0"} : null}>
                  <textarea id = "Messsage" name="Message" cols="" rows="" className="contact-input" onBlur = {formik.handleBlur} onChange = {formik.handleChange} value = {formik.values.Message} />
                  <label className="contact-form-label" for="">
                    Message
                  </label>
                  <span>Message</span>
                </div>
                {formik.touched.Message && formik.errors.Message ? <p style = {{color: "red"}}>{formik.errors.Message}</p> : null}
                
                <input
                  type="submit"
                  value="Submit"
                  className="contact-button"
                  style = {formik.errors.Message ? {marginTop: "0"} : null}
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
