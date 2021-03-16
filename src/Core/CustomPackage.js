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
    errors.Phone = 'Phone Number You Entered is invalid'
  }

  if(!empData.Email){
    errors.Email = 'Please Enter Your Email Adress';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.Email)) {
    errors.Email = 'Email address you entered in invalid';
  }
  if(!empData.Destination){
    errors.Destination = "Please Enter your Destination"
  }
  if(!empData.Budget){
    errors.Budget = "Please Enter your Budget"
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
      Budget: '',
      Destination: '',
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
                <div className="contact-form-input-container" style = {formik.errors.Name ? {marginBottom: "0"} : null} >
                  <input type="text" id = "Name" name="Name" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.Name} />
                  <label className="contact-form-label" for="">
                    Name
                  </label>
                  <span>Name</span>
                </div>
                {formik.touched.Name && formik.errors.Name ? <p class = "errt" >{formik.errors.Name}</p> : null}
                <div className="contact-form-input-container" style = {formik.errors.Phone ? {marginBottom: "0"} : null}>
                  <input type="text" id = "Phone" name="Phone" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.Phone}/>
                  <label className="contact-form-label" for="">
                    Phone Number
                  </label>
                  <span>Phone Number</span>
                </div>
                {formik.touched.Phone && formik.errors.Phone ? <p class = "errt" >{formik.errors.Phone}</p> : null}
                <div className="contact-form-input-container" style = {formik.errors.Email ? {marginBottom: "0"} : null}>
                  <input type="email" name="Email" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.Email} />
                  <label className="contact-form-label" for="">
                    Email
                  </label>
                  <span>Email</span>
                </div>
                {formik.touched.Email && formik.errors.Email ? <p class = "errt" >{formik.errors.Email}</p> : null}
                <div className="contact-form-input-container" style = {formik.errors.Destination ? {marginBottom: "0"} : null}>
                  <input type="text" id = "Destination" name="Destination" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.Destination}/>
                  <label className="contact-form-label" for="">
                    Destination
                  </label>
                  <span>Destination</span>
                </div>
                {formik.touched.Destination && formik.errors.Destination ? <p class = "errt" >{formik.errors.Destination}</p> : null}
                <div className="contact-form-input-container" style = {formik.errors.Budget ? {marginBottom: "0"} : null}>
                  <input type="text" id = "Budget" name="Budget" className="contact-input" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.Budget}/>
                  <label className="contact-form-label" for="">
                    Budget
                  </label>
                  <span>Budget</span>
                </div>
                {formik.touched.Budget && formik.errors.Budget ? <p class = "errt" >{formik.errors.Budget}</p> : null}
                <div className="contact-form-input-container contact-textarea" style = {formik.errors.Message ? {marginBottom: "0"} : null}>
                  <textarea name="" cols="" rows="" className="contact-input" id = "Message" onChange = {formik.handleChange} onBlur = {formik.handleBlur}  value = {formik.values.Message} />
                  <label className="contact-form-label" for="">
                    Message
                  </label>
                  <span>Message</span>
                </div>
                {formik.touched.Message && formik.errors.Message ? <p class = "errt" >{formik.errors.Message}</p> : null}
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
