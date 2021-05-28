import React,{useState,useEffect} from "react";
import {Row,Col} from "react-bootstrap";
import "../Styles/BookingCard.css";
import firebase from "firebase";

const BookingCard=(props)=>{
    
    
     
    return(
        <div className="h_cardDiv" >
        <Row>
        <Col ClassName="h_bookingCol"><h1>{props.bookingId}</h1></Col>
        <Col ClassName="h_bookingCol"><h1>HEllo</h1></Col>
        </Row>
        
        </div>
    );
}
export default BookingCard;