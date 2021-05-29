import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import firebase from "firebase";

import "./Login.css";
import logo from "../Assets/logo.png";
import { Redirect } from "react-router-dom";

function UserRegistration() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "+91",
    city: "",
    email: "",
    age: "",
    gender: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
  const [registered, setRegistered] = useState(false);

  function handleProfileImageChange(event) {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProfileImage(selectedFile);
    } else {
      setProfileImage(null);
    }
  }

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const registerUser = (event) => {
    event.preventDefault();
    auth.onAuthStateChanged((userCredentials) => {
      const uid = userCredentials.uid;
      const uploadTask = storage.ref("Users/" + uid).put(profileImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (err) => {
          console.log(err.message);
        },
        () => {
          storage
            .ref("Users")
            .child(uid)
            .getDownloadURL()
            .then((imageUrl) => {
              db.collection("Users")
                .doc(uid)
                .set({
                  name: userDetails.name,
                  phone: userDetails.phone,
                  city: userDetails.city,
                  email: userDetails.email,
                  imageUrl: imageUrl,
                  age: userDetails.age,
                  gender: userDetails.gender
                })
                .then(() => {
                  setRegistered(true);
                });
            });
        }
      );
    });
  };

  return (
    <div className="auth-main">
      {registered && <Redirect to="/" />}
      <div className="auth-card-div">
        <Card className="auth-card">
          <h3 className="auth-title">Create Your Profile</h3>
          <Form className="auth-form">
            <Form.Group>
              <Form.Control
                className="auth-input"
                type="text"
                name="name"
                placeholder="Full Name"
                value={userDetails.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="auth-input"
                type="text"
                name="age"
                placeholder="Age"
                value={userDetails.age}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                onChange={handleChange}
                className="auth-input"
                as="select"
                name="gender"
                required
                value={userDetails.gender}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="auth-input"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={userDetails.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="auth-input"
                type="text"
                name="city"
                placeholder="Address"
                value={userDetails.city}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="auth-input"
                type="text"
                name="email"
                placeholder="Email Address"
                value={userDetails.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group style={{ textAlign: "left" }}>
              <Form.File
                id="userImage"
                label="Profile Picture"
                onChange={handleProfileImageChange}
              />
            </Form.Group>
            <Button onClick={registerUser} className="auth-button">
              Register
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default UserRegistration;
