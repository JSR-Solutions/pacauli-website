import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: "AIzaSyApHvFt9EwcSYzHRXU7JavdsH3o3_KVGrQ",
  authDomain: "pacauli.firebaseapp.com",
  projectId: "pacauli",
  storageBucket: "pacauli.appspot.com",
  messagingSenderId: "117290840208",
  appId: "1:117290840208:web:2ffb6e791b89c9d1326815",
  measurementId: "G-LT84K7S052"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
    <App />,
  document.getElementById('root')
);