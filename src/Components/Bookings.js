import React,{useEffect, useState} from "react";
import Bookingcardd from "./BookingCard";
import {Row,Col,Button} from "react-bootstrap"; 
import {Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/bookingPage.css";
import firebase from "firebase";

function Bookings(props){
    const [userId,setUserId]=useState(props.match.params.userId);
    const db=firebase.firestore();
    const [bookings,setBookings]=useState([]);

    const bookingId="TiO64qalgPXJSu4Lh6qV";
    useEffect(()=>{
        console.log(userId);
        getBookings();
        
    },[]);

    const getBookings=()=>{
        db.collection("Users")
        .doc(userId)
        .get()
        .then((querySnapshot)=>{
            console.log(querySnapshot.data().bookings);
            setBookings(querySnapshot.data().bookings);
            
        });
        
    }
    

    return(
        <div>
        <Header/>
        <div className="heading-alt-4">
            <h2>Your Bookings</h2>
            <h2>Your Bookings</h2>
          </div>
        <div>
         <Bookingcardd bookingId={bookings[0]}/>
        </div>
        
        {!bookings &&
        (<div className="firstTrip">
        <div className="firstTripDiv">
            Book your first Trip<br></br>
            <Link to="/categories"><Button className="bookingsButton">Book here</Button></Link>
            </div>
         </div>   
            )
        }
        <Footer/>
        </div>
    );
}
export default Bookings;