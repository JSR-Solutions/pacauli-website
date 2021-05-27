import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import "../Styles/Payment.css";
import Booked from "../Assets/booked.svg";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Payment = (props) => {
  const [pckgCost, setPckgCost] = useState(0);
  const [totalcost, setTotalcost] = React.useState(pckgCost);
  const [finalpayable, setFinalpayable] = React.useState(0);
  const [gstadd, setGstadd] = React.useState(0);
  const [availability, setAvailability] = useState(false);

  //Use effect function
  useEffect(() => {
    console.log(props);
    checkAvailability();
    setPckgCost(parseInt(props.pricing[props.priceIndex].receivableAmount));
    setGstadd(
      0.18 *
        (parseInt(props.pricing[props.priceIndex].receivableAmount) *
          props.numberOfSeats)
    );
    setTotalcost(() => {
      return (
        parseInt(props.pricing[props.priceIndex].receivableAmount) *
        props.numberOfSeats
      );
    });
    setFinalpayable(
      1.18 *
        (parseInt(props.pricing[props.priceIndex].receivableAmount) *
          props.numberOfSeats)
    );
  }, []);

  //Function to increase seat
  function handleadd() {
    if (props.numberOfSeats < props.seats[props.dateIndex].seats) {
      let value = props.numberOfSeats;
      value++;
      props.setNumberOfSeats(value);
      let fvalue = value * pckgCost;
      console.log(fvalue);
      setTotalcost(fvalue);
      setGstadd(0.18 * fvalue);
      setFinalpayable(1.18 * fvalue);
      props.setTotalCost(props.pricing[props.priceIndex].cost * value);
      props.setTotalPaid(1.18 * fvalue);
    }
  }

  //Function to decrease seat
  function handlesub() {
    if (props.numberOfSeats > 1) {
      let value = props.numberOfSeats;
      value--;
      props.setNumberOfSeats(value);
      let fvalue = value * pckgCost;
      console.log(fvalue);
      setTotalcost(fvalue);
      setFinalpayable(1.18 * fvalue);
      setGstadd(0.18 * fvalue);
      props.setTotalCost(props.pricing[props.priceIndex].cost * value);
      props.setTotalPaid(1.18 * fvalue);
    }
  }

  //Function to handle date change
  const handleDateChange = (event, index) => {
    event.preventDefault();
    props.setDateIndex(index);
    resetValues(props.priceIndex);
  };

  //Function to handle price type change
  const handlePricingChange = (event, index) => {
    event.preventDefault();
    props.setPriceIndex(index);
    resetValues(index);
  };

  //Function to check availability, if any
  const checkAvailability = () => {
    let found = false;
    props.seats.forEach((seat, index) => {
      if (!found) {
        if (seat.seats > 0) {
          setAvailability(true);
          found = true;
          props.setDateIndex(index);
          resetValues(0)
        }
      }
    });
  };

  //Function to reset values
  const resetValues = (priceIndex) => {
    props.setNumberOfSeats(1);
    props.setTotalCost(parseInt(props.pricing[priceIndex].cost));
    setGstadd(0.18 * parseInt(props.pricing[priceIndex].receivableAmount));
    setFinalpayable(
      1.18 * parseInt(props.pricing[priceIndex].receivableAmount)
    );
    setTotalcost(parseInt(props.pricing[priceIndex].receivableAmount));
    setPckgCost(parseInt(props.pricing[priceIndex].receivableAmount));
    props.setTotalPaid(1.18*parseInt(props.pricing[priceIndex].receivableAmount))
  };

  //Function to complete booking
  const handleBooking = (event) => {
    event.preventDefault();
    props.onHide();
    props.completeBooking();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="img-pay">
            <img className="logo-pay" src={logo} alt="logo" />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {availability ? (
          <React.Fragment>
            <h4 className="pay-pckg-title">Package Name</h4>
            <Row md={12} className="main-row">
              <Col
                xl={{ span: 4, order: 1 }}
                lg={{ span: 4, order: 1 }}
                md={{ span: 6, order: 1 }}
                sm={{ span: 6, order: 1 }}
                xs={{ span: 6, order: 1 }}
                className="col-col dates"
              >
                Dates
              </Col>
              <Col
                xl={{ span: 4, order: 2 }}
                lg={{ span: 4, order: 2 }}
                md={{ span: 6, order: 3 }}
                sm={{ span: 6, order: 3 }}
                xs={{ span: 6, order: 3 }}
                className="col-col dates"
              >
                Package Type
              </Col>
              <Col
                xl={{ span: 4, order: 3 }}
                lg={{ span: 4, order: 3 }}
                md={{ span: 6, order: 5 }}
                sm={{ span: 6, order: 5 }}
                xs={{ span: 6, order: 5 }}
                className="col-col dates"
              >
                Number Of Seats
              </Col>
              <Col
                xl={{ span: 4, order: 4 }}
                lg={{ span: 4, order: 4 }}
                md={{ span: 6, order: 2 }}
                sm={{ span: 6, order: 2 }}
                xs={{ span: 6, order: 2 }}
                className="col-col dates"
              >
                <div className="dates-dropdown">
                  {props.seats && (
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={props.seats && props.seats[props.dateIndex].sDate}
                      className="pay-btn"
                    >
                      {props.seats &&
                        props.seats.map((seat, index) => {
                          if (seat.seats > 0) {
                            return (
                              <Dropdown.Item
                                onClick={(e) => {
                                  handleDateChange(e, index);
                                }}
                              >
                                {seat.sDate}
                              </Dropdown.Item>
                            );
                          }
                        })}
                    </DropdownButton>
                  )}
                </div>
              </Col>
              <Col
                xl={{ span: 4, order: 5 }}
                lg={{ span: 4, order: 5 }}
                md={{ span: 6, order: 4 }}
                sm={{ span: 6, order: 4 }}
                xs={{ span: 6, order: 4 }}
                className="col-col dates"
              >
                <div className="pkgtype-dropdown">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={props.pricing[props.priceIndex].type}
                    className="pay-btn"
                  >
                    {props.pricing &&
                      props.pricing.map((price, index) => {
                        return (
                          <Dropdown.Item
                            onClick={(e) => {
                              handlePricingChange(e, index);
                            }}
                          >
                            {price.type}
                          </Dropdown.Item>
                        );
                      })}
                  </DropdownButton>
                </div>
              </Col>
              <Col
                xl={{ span: 4, order: 6 }}
                lg={{ span: 4, order: 6 }}
                md={{ span: 6, order: 6 }}
                sm={{ span: 6, order: 6 }}
                xs={{ span: 6, order: 6 }}
                className="col-col dates"
              >
                <div className="no-of-seats">
                  <Row>
                    <Col md={12} lg={12} sm={12}>
                      <div className="plus-minus">
                        <BsPlus
                          className="pm"
                          onClick={() => {
                            handleadd();
                          }}
                        />
                        <p>{props.numberOfSeats}</p>
                        <BiMinus
                          className="pm"
                          onClick={() => {
                            handlesub();
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <div className="total-cost">
              <Row>
                <Col className="total-col">
                  <h5>Total Cost</h5>
                </Col>
                <Col className="total-col1">
                  <h5>{props.totalCost}</h5>
                </Col>
              </Row>
              <Row>
                <Col className="total-col">
                  <h5>Advance Payment</h5>
                </Col>
                <Col className="total-col1">
                  <h5>{totalcost}</h5>
                </Col>
              </Row>
              <Row>
                <Col className="total-col">
                  <h5>GST @ 18%</h5>
                </Col>
                <Col className="total-col1">
                  <h5>{gstadd}</h5>
                </Col>
              </Row>
              <hr className="line"></hr>
              <Row>
                <Col className="total-col">
                  <h5>Total Payable At The Time Of Booking</h5>
                </Col>
                <Col className="total-col1">
                  <h5>{finalpayable}</h5>
                </Col>
              </Row>
            </div>
            {/* <div className="payment-btn">
            <Button onClick={handleBooking} className="btn-payment">
              Pay
            </Button>
          </div> */}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="booked-div">
              <img src={Booked} alt="booked" />
              <h4>Oops! All the batches are already full!</h4>
              <p>
                But we have many more packages waiting for you to{" "}
                <Link className="booked-link" to="/categories">explore</Link> them!
              </p>
            </div>
          </React.Fragment>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleBooking} className="btn-payment">
          Pay
        </Button>
        <Button className="close-btn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Payment;
