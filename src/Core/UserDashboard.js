import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import email from "../Assets/email.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone.png";
import shape from "../Assets/shape.png";
import "../Styles/userDashboard.css";

import { Row, Col, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

function UserDashboard() {
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [user, setUser] = useState({});
  const [Name, setName] = useState("");

  const [PhoneNo, setPhoneNo] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    auth.onAuthStateChanged((user) => {
      db.collection("Users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          const userData = doc.data();
          if (userData) {
            setName(userData.name);
            setAddress(userData.city);
            setPhoneNo(userData.phone);
            setEmail(userData.email);
            setImgUrl(userData.imageUrl);
            setUser((prev) => {
              return { ...prev, userData };
            });
          }
        });
    });
  }
  const signouttt = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedOut(true);
      });
  };

  return (
    <div>
      {loggedOut ? <Redirect to="/" /> : null}
      <Header />

      <div className="contact-us-main">
        <div className="heading-dashboard">
          <p>&nbsp;&nbsp;Your Profile&nbsp;&nbsp;</p>
        </div>
        <div className="contact-us-container">
          <span className="big-circle"></span>
          <img src={shape} className="square" alt=""></img>
          <div className="contact-us-form1">
            <div className="contact-info1">
              <h2 className="contact-info-title-h2">Your Details</h2>
              <br></br>
              <h3 className="contact-info-title-h3 ">Name:&nbsp; {Name}</h3>
              <br></br>
              <br></br>
              <h3 className="contact-info-title-h3">City: &nbsp; {Address}</h3>
              <br></br>
              <br></br>
              <h3 className="contact-info-title-h3">Email: &nbsp; {Email}</h3>
              <br></br>
              <br></br>
              <h3 className="contact-info-title-h3">
                Phone No:&nbsp; {PhoneNo}
              </h3>
              <br></br> <br></br>
              <div className="user_buttons">
                <Row>
                  <Col>
                    <Link to="/edituserdetails">
                      {" "}
                      <Button className="user_button">Edit Details</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Button onClick={signouttt} className="user_button">
                      Sign Out
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="contact-form345">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <div className="user_image_div">
                <img className="user_image" src={imgUrl} alt={Name}/>
                
              </div>
              <br></br>
              <div className="user_buttons1">
                <Link to="/edituserdetails">
                  <Button className="user_button1">Edit Details</Button>
                </Link>
              </div>
              <div className="user_buttons1">
                <Button onClick={signouttt} className="user_button1">
                  Sign Out
                </Button>
              </div>
              <div className="user_buttons2"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserDashboard;
