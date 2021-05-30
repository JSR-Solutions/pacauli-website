import React,{useState,useEffect} from "react";
import {Row,Col,Button} from "react-bootstrap";
import "../Styles/BookingCard.css";
import Bg from "../Assets/bg-contactus.jpg";
import {Link} from "react-router-dom";
import firebase from "firebase";
import pdfMake from "pdfmake/build/pdfmake";
import logo from "../Assets/logo.png";
import pdfFonts from "pdfmake/build/vfs_fonts";

const BookingCard=(props)=>{
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const createPdf = (booking) => {
    console.log("Creating pdf");
    toDataURL(logo, function (dataUrl) {
      var docDefinition = {
        content: [
          {
            image: dataUrl,
            width: 120,
            alignment: "center",
            margin: [5, 0, 5, 30],
          },
          {
            columns: [
              {
                // auto-sized columns have their widths based on their content
                width: "*",
                text: "INVOICE",
                fontSize: 36,
                color: "#29bb89",
                bold: true,
              },
              {
                // star-sized columns fill the remaining space
                // if there's more than one star-column, available width is divided equally
                width: "*",
                stack: [
                  {
                    columns: [
                      { width: "*", text: "Booking Date :", fontSize: 10 },
                      {
                        width: "*",
                        fontSize: 10,
                        text: booking.bookingData.dateOfBooking.substring(
                          4,
                          booking.bookingData.dateOfBooking.length
                        ),
                      },
                    ],
                  },
                  {
                    columns: [
                      { width: "*", text: "Booking ID :", fontSize: 10 },
                      {
                        width: "*",
                        text: booking.bookingData.bookingId,
                        fontSize: 10,
                      },
                    ],
                  },
                ],
              },
            ],
            margin: [0, 10],
          },
          {
            columns: [
              {
                // star-sized columns fill the remaining space
                // if there's more than one star-column, available width is divided equally
                width: "*",
                stack: [
                  {
                    text: booking.userData.name,
                    fontSize: 24,
                    bold: true,
                    margin: [0, 0, 0, 10],
                  },
                  {
                    columns: [
                      { width: "auto", text: "Phone : " },
                      {
                        width: "*",
                        text:  booking.userData.phone,
                        margin: [4, 0, 0, 0],
                      },
                    ],
                  },
                  {
                    columns: [
                      { width: "auto", text: "Address : " },
                      { width: "*", text:  booking.userData.city, margin: [4, 0, 0, 0] },
                    ],
                  },
                  {
                    columns: [
                      { width: "auto", text: "Email : " },
                      {
                        width: "*",
                        text: booking.userData.email,
                        margin: [4, 0, 0, 0],
                      },
                    ],
                  },
                ],
              },
              {
                // star-sized columns fill the remaining space
                // if there's more than one star-column, available width is divided equally
                width: "*",
                stack: [
                  {
                    text: "Booking Details",
                    fontSize: 20,
                    bold: true,
                  },
                  {
                    text: "----------------------------------------------------------------------------",
                    margin: [0, 0, 0, 14],
                  },
                  {
                    columns: [
                      { width: "*", text: "Travel Date :" },
                      { width: "*", text:  booking.bookingData.bookingDate },
                    ],
                  },
                  {
                    columns: [
                      { width: "*", text: "Transaction ID :" },
                      { width: "*", text:  booking.bookingData.transactionId },
                    ],
                  },
                ],
              },
            ],
            margin: [0, 10],
          },
          {
            stack: [
              {
                columns: [
                  {
                    columns: [
                      {
                        width: "*",
                        text: "Package Name",
                        fontSize: 12,
                        bold: true,
                      },
                      {
                        width: "*",
                        text: "Package Type",
                        fontSize: 12,
                        bold: true,
                      },
                      {
                        width: "*",
                        text: "Number Of Seats",
                        fontSize: 12,
                        bold: true,
                      },
                      {
                        width: "*",
                        text: "Cost Per Seat",
                        fontSize: 12,
                        bold: true,
                      },
                      {
                        width: "*",
                        text: "Advance Per Seat",
                        fontSize: 12,
                        bold: true,
                      },
                      {
                        width: "*",
                        text: "Total Advance",
                        fontSize: 12,
                        bold: true,
                      },
                    ],
                  },
                ],
              },
              {
                text: "-----------------------------------------------------------------------------------------------------------------------------------------------------------",
              },
              {
                columns: [
                  {
                    columns: [
                      {
                        width: "*",
                        text: booking.packageData.name,
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: booking.bookingData.pricingType,
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text:  booking.bookingData.numberOfSeats,
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: booking.bookingData.totalCost/booking.bookingData.numberOfSeats,
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text:  booking.bookingData.totalAdvance/booking.bookingData.numberOfSeats,
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: booking.bookingData.totalAdvance,
                        fontSize: 10,
                        bold: false,
                      },
                    ],
                  },
                ],
                margin: [0, 10],
              },
              {
                text: "-----------------------------------------------------------------------------------------------------------------------------------------------------------",
              },
              {
                columns: [
                  {
                    columns: [
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "Total Advance",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: `Rs. ${booking.bookingData.totalAdvance}`,
                        fontSize: 10,
                        bold: false,
                      },
                    ],
                  },
                ],
                margin: [0, 0],
              },
              {
                columns: [
                  {
                    columns: [
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "Total GST",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: `Rs. ${booking.bookingData.gst}`,
                        fontSize: 10,
                        bold: false,
                      },
                    ],
                  },
                ],
                margin: [0, 0],
              },
              {
                columns: [
                  {
                    columns: [
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "Donation",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: `Rs. ${booking.bookingData.donation}`,
                        fontSize: 10,
                        bold: false,
                      },
                    ],
                  },
                ],
                margin: [0, 0],
              },
              {
                text: "----------------------------------------------------",
                margin: [340, 0, 0, 0],
              },
              {
                columns: [
                  {
                    columns: [
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "Total Paid",
                        fontSize: 12,
                        bold: true,
                      },
                      {
                        width: "*",
                        text: `Rs. ${booking.bookingData.totalPaid}`,
                        fontSize: 12,
                        bold: true,
                      },
                    ],
                  },
                ],
                margin: [0, 0],
              },
              {
                columns: [
                  {
                    columns: [
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "",
                        fontSize: 10,
                        bold: false,
                      },
                      {
                        width: "*",
                        text: "Total Pending",
                        fontSize: 12,
                        bold: true,
                      },
                      {
                        width: "*",
                        text: `Rs. ${booking.bookingData.totalCost - booking.bookingData.totalAdvance} + GST @18%`,
                        fontSize: 12,
                        bold: 28000,
                      },
                    ],
                  },
                ],
                margin: [0, 0],
              },
              {
                text: "----------------------------------------------------",
                margin: [340, 0, 0, 0],
              },
            ],
            margin: [0, 30, 0, 0],
          },
        ],
      };
      pdfMake.createPdf(docDefinition).open();
    });
  };

  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }
    
    
     
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
        <Link to={`/packages/${props.packageType}/${props.packageId}`}><Button className="bookingsButton"> Go to Package</Button></Link>
        <Button onClick={(event) => {
            event.preventDefault();
            createPdf(props.booking);
          }} className="bookingsButton"> Download Invoice</Button>
        </Col>
        
        </Row>
        
        </div>
    );
}
export default BookingCard;