import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/CustomPackage.css";
import email from "../Assets/email.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone.png";
import shape from "../Assets/shape.png";
import custi from "../Assets/custompackage.png";
import {useFormik} from "formik"

const ValidateForm=empData=>{
  const errors = {};

  if(!empData.name){
    errors.name = 'Please Enter Your Name';
  }
  else if(empData.name.length > 20){
    errors.name = 'Name Should Not Exeed 20 Characters'
  }

  if(!empData.phNo){
    errors.phNo = 'Please Enter Your Phone number';
  }
  else if(!/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(empData.phNo)){
    errors.phNo = 'Phone Number You Entered is invalid'
  }

  if(!empData.email){
    errors.email = 'Please Enter Your Email Adress';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
    errors.email = 'Email address you entered in invalid';
  }
  if(!empData.destination){
    errors.destination = "Please Enter your Destination"
  }
  if(!empData.budget){
    errors.budget = "Please Enter your Budget"
  }
  if(!empData.message){
    errors.message = "Please Enter your Message"
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
      name: '',
      phNo: '',
      email: '',
      budget: '',
      destination: '',
      message: ''
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
      <div className="heading-custom">
      <p>&nbsp;&nbsp;Custom Package&nbsp;&nbsp;</p>
        </div>
        <div className="contact-us-container">
          <span className="big-circle"></span>
          <img src={shape} className="square" alt=""></img>
          <div className="contact-us-form">
            <div className="contact-info">
              <div className = "funi">
              <h3>Where ever you wanna go tell us we will make it possible fo you </h3>
              </div>
              <img id = "yuiop" src = {custi}></img>
            </div>
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <form className="contact-us-main-form" onSubmit = {formik.handleSubmit}>
                <h3 className="contact-form-title">Let us know what you need...</h3>
                <div className="contact-form-input-container" style = {formik.errors.name ? {marginBottom: "0"} : null} >
                  <input type="text" name="name" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.name} />
                  <label className="contact-form-label" for="">
                    Name
                  </label>
                  <span>Name</span>
                </div>
                {formik.touched.name && formik.errors.name ? <p class = "errt" >{formik.errors.name}</p> : null}
                <div className="contact-form-input-container" style = {formik.errors.phNo ? {marginBottom: "0"} : null}>
                  <input type="text" name="phNo" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.phNo}/>
                  <label className="contact-form-label" for="">
                    Phone Number
                  </label>
                  <span>Phone Number</span>
                </div>
                {formik.touched.phNo && formik.errors.phNo ? <p class = "errt" >{formik.errors.phNo}</p> : null}
                <div className="contact-form-input-container" style = {formik.errors.email ? {marginBottom: "0"} : null}>
                  <input type="email" name="email" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.email} />
                  <label className="contact-form-label" for="">
                    Email
                  </label>
                  <span>Email</span>
                </div>
                {formik.touched.email && formik.errors.email ? <p class = "errt" >{formik.errors.email}</p> : null}
                <div className="contact-form-input-container" style = {formik.errors.destination ? {marginBottom: "0"} : null}>
                  <input type="text"  name="destination" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.destination}/>
                  <label className="contact-form-label" for="">
                    Destination
                  </label>
                  <span>Destination</span>
                </div>
                {formik.touched.destination && formik.errors.destination ? <p class = "errt" >{formik.errors.destination}</p> : null}
                <div className="contact-form-input-container" style = {formik.errors.budget ? {marginBottom: "0"} : null}>
                  <input type="text" name="budget" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.budget}/>
                  <label className="contact-form-label" for="">
                    Budget
                  </label>
                  <span>Budget</span>
                </div>
                {formik.touched.budget && formik.errors.budget ? <p class = "errt" >{formik.errors.budget}</p> : null}
                <div className="contact-form-input-container contact-textarea" style = {formik.errors.message ? {marginBottom: "0"} : null}>
                  <textarea name="message" cols="" rows="" className="contact-input"  onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.message} />
                  <label className="contact-form-label" for="">
                    Message
                  </label>
                  <span>Message</span>
                </div>
                {formik.touched.message && formik.errors.message ? <p class = "errt" >{formik.errors.message}</p> : null}
                <input
                  type="submit"
                  value="Submit"
                  className="contact-button"
                  style = {formik.errors.message ? {marginTop: "0"} : null}
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
