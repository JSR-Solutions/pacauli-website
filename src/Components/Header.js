import React, { useEffect, useState } from "react";
import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoWhatsapp,
    IoMdMail,
    IoIosPeople,
} from "react-icons/io";
import {
    AiFillInstagram,
    AiFillPhone,
    AiOutlineUserAdd,
    AiOutlinePhone,
    AiOutlineMail,
} from "react-icons/ai";
import { TiArrowRight } from "react-icons/ti";
import { VscDebugRestartFrame } from "react-icons/vsc";
import { IoCashOutline, IoLocationOutline } from "react-icons/io5";
import "../Styles/Header.css";
import { Link, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import firebase from "firebase";
import {useFormik} from "formik"

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: `yellow` };
    } else {
        return { color: "var(--white)" };
    }
};
const ValidateForm=empData=>{
    const errors = {};
  
    if(!empData.fullName){
      errors.fullName = 'Please Enter Your Name';
    }
    else if(empData.fullName.length > 20){
      errors.fullName = 'Name Should Not Exeed 20 Characters'
    }
  
    if(!empData.phNo){
      errors.phNo = 'Please Enter Your Phone number';
    }
    else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(empData.phNo)){
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
    if(!empData.requirements){
      errors.requirements = "Please Enter your Requiremets"
    }
    if(!empData.noOfPeople){
        errors.noOfPeople = "Please Enter The number of people"
      }
      
    return errors;
  }

const Header = ({ history }) => {
    const auth = firebase.auth();
  const [isLoggedIn, setLoggedIn] = useState(false);

    const changebackgroundd = () => {
        if (window.scrollY > 110) {
            const navlink = document.querySelector('.header-main2')
            const navlinkss = document.querySelector('.hamburger')
            const navlinks = document.querySelector('.header-main')
            const seconddiv = document.querySelector('.header-main3')
            if (navlinks && navlinkss && navlink) {
                navlinks.classList.add('header-main-exit')
                navlinkss.classList.add('hamburger-exit')
                navlink.classList.add("header-main2-exit");
                seconddiv.classList.add('header-main3-exit')
            }
        } if (window.scrollY <= 110) {
            const navlinkss = document.querySelector('.hamburger')
            const navlinks = document.querySelector('.header-main')
            const navlink = document.querySelector('.header-main2')
            const seconddiv = document.querySelector('.header-main3')
            if (navlink && navlinks && navlinkss) {
                navlink.classList.remove("header-main2-exit");
                navlinks.classList.remove("header-main-exit");
                navlinkss.classList.remove('hamburger-exit')
                seconddiv.classList.remove('header-main3-exit')
            }
        }
    }

    window.addEventListener("scroll", changebackgroundd);

    useEffect(() => {
        isSignedIn();
        const hamburger = document.querySelector(".hamburger");
        const navlinks = document.querySelector(".header-main33");

        hamburger.addEventListener("click", () => {
            navlinks.classList.toggle("open");
        });

        const concetp = document.querySelector(".quick-inq");
        const concetp1 = document.querySelector(".quick-inq2");
        concetp.addEventListener("click", () => {
            concetp1.classList.toggle("open-quick");
            concetp.classList.toggle("open-quick1");
        });
    }, []);

    const changeScreen = () => {
        const navlinks = document.querySelector(".header-main33");
        navlinks.classList.toggle("open");
    };

    const [quickEnquiry, setQuickEnquiry] = useState({
        fullName: "",
        email: "",
        phNo: "",
        requirements: "",
        budget: "",
        noOfPeople: "",
        destination: "",
    });

    const formik = useFormik({
        initialValues: {
          fullName: '',
          phNo: '',
          email: '',
          requirements: '',
          budget: '',
          noOfPeople: '',
          destination: ''
        },
        validate: ValidateForm,
        onSubmit: values => {
          alert(JSON.stringify(values))
        },
     
       });
     

    function handlechange(event) {
        const { name, value } = event.target;
        setQuickEnquiry((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function sendEmail() {
        emailjs
            .send(
                "service_wmmn1mc",
                "template_hi5n6h4",
                quickEnquiry,
                "user_kOM812vqGT0AINxPmaGol"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    toast.success("Mail Sent");
                    setQuickEnquiry({
                        fullName: "",
                        email: "",
                        phNo: "",
                        destination: "",
                        requirements: "",
                        budget: "",
                        noOfPeople: "",
                    });
                },
                function (err) {
                    console.log("FAILED...", err);
                    toast.error(
                        "There is an issue sending your request. Please try again later."
                    );
                }
            );
    }
    function isSignedIn() {
        auth.onAuthStateChanged((user) => {
          const uid = user.uid;
          if (uid) {
            setLoggedIn(true);
          } else {
            setLoggedIn(false);
          }
        });
      }

    return (
        <div style={{ width: "100%", overflowX: "hidden" }} className="header-main-main">
            <div className="header-main">
                <div className="header-main1">
                    <div className="header-main2">
                        <div className="header-main21">
                            <div className="header-main23">
                            </div>
                        </div>
                    </div>

                    <div className="header-main3">
                        <div className="header-main31">
                            <div className="header-main32">
                                <Link to="/" style={isActive(history, "/")}>
                                    <h3>PACAULI</h3>
                                </Link>
                            </div>
                            <div className="hamburger">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="header-main33">
                                <ul>
                                    <Link
                                        className="deconone"
                                        to="/"
                                        style={isActive(history, "/")}
                                        onClick={changeScreen}
                                    >
                                        <li>Home</li>
                                    </Link>

                                    <div className='dropdown-iinit'>
                                        <Link
                                            className="deconone"
                                            to="/categories"
                                            style={isActive(history, "/categories")}
                                            onClick={changeScreen}
                                        >
                                            <li>Categories</li>
                                        </Link>
                                        <div className='cat-dropdown'>
                                            <Link to={`/categories/0`} className="header-dropdown-link"><div className='cat-dropdown-child'>Sking</div></Link>
                                            <Link to={`/categories/1`} className="header-dropdown-link"><div className='cat-dropdown-child'>Trekking</div></Link>
                                            <Link to={`/categories/6`} className="header-dropdown-link"><div className='cat-dropdown-child'>Expedition</div></Link>
                                            <Link to={`/categories/2`} className="header-dropdown-link"><div className='cat-dropdown-child'>Rock Climbing</div></Link>
                                            <Link to={`/categories/4`} className="header-dropdown-link"><div className='cat-dropdown-child'>Camping</div></Link>
                                            <Link to={`/categories/3`} className="header-dropdown-link"><div className='cat-dropdown-child'>Cycling</div></Link>
                                            <Link to={`/categories/5`} className="header-dropdown-link"><div className='cat-dropdown-child'>Rafting</div></Link>
                                            <Link to={`/categories/7`} className="header-dropdown-link"><div className='cat-dropdown-child'>Chardham</div></Link>
                                        </div>
                                    </div>

                                    <Link
                                        className="deconone"
                                        to="/custompackage"
                                        style={isActive(history, "/custompackage")}
                                        onClick={changeScreen}
                                    >
                                        <li>Custom Package</li>
                                    </Link>
                                    <Link
                                        className="deconone"
                                        to="/contactus"
                                        style={isActive(history, "/contactus")}
                                        onClick={changeScreen}
                                    >
                                        <li>Contact Us</li>
                                    </Link>
                                    <Link
                                        className="deconone"
                                        to="/aboutus"
                                        style={isActive(history, "/aboutus")}
                                        onClick={changeScreen}
                                    >
                                        <li>About Us</li>
                                    </Link>
                                    {isLoggedIn ? (
                                        
                                          <Link
                                          className="deconone"
                                          to="/userdashboard"
                                          style={isActive(history, "/userdashboard")}
                                          onClick={changeScreen}
                                          ><li>My Account</li></Link>
                                    
                                      ) : (
                                        <Link
                                          className="deconone"
                                          to="/signup"
                                          style={isActive(history, "/signup")}
                                          onClick={changeScreen}
                                          ><li>Register</li></Link>
                                      )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="quick-inq">
                    <div className="quick-inq1">
                        <TiArrowRight style={{ marginLeft: "-10px" }} />
            Quick Enquiry
          </div>
                </div>
                <div className="quick-inq2" style = {formik.errors.email || formik.errors.fullName || formik.errors.phNo || formik.errors.requirements || formik.errors.budget || formik.errors.destination  ? {height: "570px"}: null}>
                    <div className="form-mainss">
                        <div className="form-mainss1">
                            <Form.Group>
                                <AiOutlineUserAdd className="icone-form" />
                                <Form.Control
                                    type="text"
                                    onChange={formik.handleChange}
                                    name="fullName"
                                    value={formik.values.fullName}
                                    placeholder="Name"
                                    onBlur = {formik.handleBlur}
                                />
                                {formik.touched.fullName && formik.errors.fullName ? <p className = "erryu">{formik.errors.fullName}</p>: null}
                            </Form.Group>
                            <Form.Group>
                                <AiOutlineMail className="icone-form" />
                                <Form.Control
                                    type="Email"
                                    onChange={formik.handleChange}
                                    name="email"
                                    value={formik.values.email}
                                    placeholder="Email"
                                    onBlur = {formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? <p className = "erryu">{formik.errors.email}</p>: null}
                            </Form.Group>
                            <Form.Group>
                                <AiOutlinePhone className="icone-form" />
                                <Form.Control
                                    type="number"
                                    onChange={formik.handleChange}
                                    name="phNo"
                                    value={formik.values.phNo}
                                    placeholder="Contact Number"
                                    onBlur = {formik.handleBlur}
                                />
                                {formik.touched.phNo && formik.errors.phNo ? <p className = "erryu">{formik.errors.phNo}</p>: null}
                            </Form.Group>
                            <Form.Group>
                                <IoLocationOutline className="icone-form" />
                                <Form.Control
                                    type="text"
                                    onChange={formik.handleChange}
                                    name="destination"
                                    value={formik.values.destination}
                                    placeholder="Destination"
                                    onBlur = {formik.handleBlur}
                                />
                                {formik.touched.destination && formik.errors.destination ? <p className = "erryu">{formik.errors.destination}</p>: null}
                            </Form.Group>
                            <Form.Group>
                                <VscDebugRestartFrame className="icone-form" />
                                <Form.Control
                                    as="textarea"
                                    placeholder="Requirement"
                                    rows={3}
                                    onChange={formik.handleChange}
                                    name="requirements"
                                    value={formik.values.requirements}
                                    className="nobb-form"
                                    onBlur = {formik.handleBlur}
                                />
                                {formik.touched.requirements && formik.errors.requirements ? <p className = "erryu">{formik.errors.requirements}</p>: null}
                            </Form.Group>
                            <Form.Group>
                                <IoCashOutline className="icone-form" />
                                <Form.Control
                                    type="text"
                                    placeholder="Budget"
                                    onChange={formik.handleChange}
                                    name="budget"
                                    value={formik.values.budget}
                                    onBlur = {formik.handleBlur}
                                />
                                {formik.touched.budget && formik.errors.budget ? <p className = "erryu">{formik.errors.budget}</p>: null}
                            </Form.Group>
                            <Form.Group>
                                <IoIosPeople className="icone-form" />
                                <Form.Control
                                    type="text"
                                    placeholder="No of People"
                                    onChange={formik.handleChange}
                                    name="noOfPeople"
                                    value={formik.values.noOfPeople}
                                    onBlur = {formik.handleBlur}
                                />
                                {formik.touched.noOfPeople && formik.errors.noOfPeople ? <p className = "erryu">{formik.errors.noOfPeople}</p>: null}
                            </Form.Group>
                        </div>
                        <button type = "submit" onSubmit={formik.handleSubmit} onClick={sendEmail}>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Header);
