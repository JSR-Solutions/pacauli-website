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
        <img className="packImg" src={props.packImg}/>
        </Col>
        <Col className="h_bookingCol"lg={8}><h2>Details</h2>
        <br></br>
        <Row>
        <Col className="h_bookingdetail">
        <p>Package Name: {props.packName}</p>
        <p>Booked for: {props.bookedFor}</p>
        <p>Booked On: {props.bookedOn}</p>
        <p>No. of seats: {props.noOfSeats}</p>
        <p>Booking Id: {props.bookingId}</p>
        
        </Col>

        <Col className="h_bookingdetail">
        <p>Total Cost: {props.totalCost}</p>
        <p>Total Advance: {props.totalAdv}</p>
        <p>Total Paid: {props.totalPaid}</p>
        <p>GST: {props.gst}</p>
        <p>Transaction Id: {props.transId}</p>

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