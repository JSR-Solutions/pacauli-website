import React,{useEffect, useState} from "react";
import Bookingcardd from "./BookingCard";
import {Row,Col,Button} from "react-bootstrap"; 
import {Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/bookingPage.css";
import firebase from "firebase";

function Bookings(props){
    const [userIdd,setUserIdd]=useState(props.match.params.userId);
    const db=firebase.firestore();
    const [bookings,setBookings]=useState([]);
    const [isLoading, setLoading] = useState(false);
   
    useEffect(()=>{
        
        getEnquiries();
        
    },[]);
    

    

    function getEnquiries() {
        console.log(userIdd);
        const db = firebase.firestore();
        setBookings([]);
        setLoading(true);
        db.collection("Bookings")
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.docs.length) {
              querySnapshot.docs.forEach((doc) => {
                const bookingData = doc.data();
                const packageId = bookingData.packageId;
                const packageType = bookingData.packageType;
                const userId = bookingData.userId;
                if(userId==userIdd){
                db.collection(packageType)
                  .doc(packageId)
                  .get()
                  .then((snapshot) => {
                    const packageData = snapshot.data();
                    db.collection("Users")
                      .doc(userId)
                      .get()
                      .then((snap) => {
                        const userData = snap.data();
                        if (userData) {
                          setBookings((prev) => {
                            return [
                              ...prev,
                              {
                                bookingData: bookingData,
                                packageData: packageData,
                                userData: userData,
                              },
                            ];
                          });
                          setLoading(false);
                        }
                      });
                  });}
              });
            } else {
              setLoading(false);
            }
          });
          console.log(bookings);
      }
    

     
    
    

    return(
        <div>
        <Header/>
        <div className="heading-alt-4">
            <h2>Your Bookings</h2>
            <h2>Your Bookings</h2>
          </div>
          {bookings.length==0 && 
            (<div className="firstTrip">
            <div className="firstTripDiv">
                Book your first Trip<br></br>
                <Link to="/categories"><Button className="bookingsButton">Book here</Button></Link>
                </div>
             </div>   
                )
            }
        <div className="cardDiv1">
        {!isLoading && bookings &&bookings.map((booking)=>{
            <Bookingcardd />
        })
        }
        <Bookingcardd />
        </div>
        
        
        <Footer/>
        </div>
    );
}
export default Bookings;