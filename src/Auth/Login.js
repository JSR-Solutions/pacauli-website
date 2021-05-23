import { Link, Redirect } from "react-router-dom";
import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import firebase from "firebase";
import { toast, ToastContainer } from "react-toastify";

import logo from "../Assets/logo.png";
import "./Login.css";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const auth = firebase.auth();
  const db = firebase.firestore();
  const [redirectHome, setRedirectHome] = useState(false);
  const [redirectRegistration, setRedirectRegistration] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function handleSignin(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user.emailVerified) {
          db.collection("Users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              if (snapshot.exists) {
                setRedirectHome(true);
              } else {
                setRedirectRegistration(true);
              }
            });
        } else {
          toast.error("Please verify your email");
        }
      })
      .catch((error) => {
        toast.error("ERROR : " + error.message);
      });
  }

  return (
    <div className="auth-main">
      <ToastContainer />
      {redirectRegistration ? <Redirect to="/user/register" /> : null}
      {redirectHome ? <Redirect to="/" /> : null}
      <img src={logo} className="logo-auth" alt="logo" />
      <div className="auth-card-div">
        <Card className="auth-card">
          <h3 className="auth-title">Login</h3>
          <Form className="auth-form">
            <Form.Group>
              <Form.Control
                className="auth-input"
                type="text"
                name="email"
                placeholder="Email Address"
                value={credentials.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="auth-input"
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button onClick={handleSignin} className="auth-button">
              Login
            </Button>
          </Form>
          <p className="auth-bottom-text">
            New here?{" "}
            <Link className="auth-link" to="/signup">
              Sign Up
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Login;
