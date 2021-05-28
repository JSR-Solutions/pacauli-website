import React,{useState,useEffect} from "react";
import {Row,Col,Button} from "react-bootstrap";
import "../Styles/BookingCard.css";
import Bg from "../Assets/bg-contactus.jpg";
import {Link} from "react-router-dom";
import firebase from "firebase";

const BookingCard=(props)=>{
    
    
     
    return(
        <div className="h_cardDivv" >
        <Row>
        <Col className="h_bookingCol" lg={4}>
        <img className="packImg" src={Bg}/>
        </Col>
        <Col className="h_bookingCol"lg={8}><h2>Details</h2>
        <br></br>
        <Row>
        <Col className="h_bookingdetail">
        <p>Package Name: Manali</p>
        <p>Booked for: 02 June 2021</p>
        <p>Booked On: 28 May 2021</p>
        <p>No. of seats: 4</p>
        <p>Booking Id: QFzYZfQpUJ2kGfC9cFoC</p>
        
        </Col>

        <Col className="h_bookingdetail">
        <p>Total Cost: 9000</p>
        <p>Total Advance: 4500</p>
        <p>Total Paid: 5500</p>
        <p>GST: 810</p>
        <p>Transaction Id: pay_HG7hMJNzcolZ8H</p>

        </Col>
        </Row>
        <br></br>
        <Link to="/packages/Skiing/icyhkcfO2fzMBPtQmu95"><Button className="bookingsButton"> Go to Package</Button></Link>
        </Col>
        </Row>
        
        </div>
    );
}
export default BookingCard;