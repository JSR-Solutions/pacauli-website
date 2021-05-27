import React,{useEffect, useState} from "react";
import BookingCard from "./BookingCard"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import firebase from "firebase";

function Bookings(props){
    const [userId,setUserId]=useState(props.match.params.userId);
    const db=firebase.firestore();
    const [bookings,setBooking]=useState([]);


    useEffect(()=>{
        getBookings();
        console.log(userId);
    },[])

    const getBookings=()=>{
        db.collection("Users")
        .doc(userId)
        .get()
        .then((querySnapshot)=>{
            console.log(querySnapshot.data());
        })
        
    }

    return(
        <div>
        <Header/>
        <BookingCard/>
        <Footer/>
        </div>
    );
}
export default Bookings;