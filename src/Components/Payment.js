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
import logo from "../Assets/logo.png";

const Payment = (props) => {
  const [pckgCost, setPckgCost] = useState(0);
  const [totalcost, setTotalcost] = React.useState(pckgCost);

  useEffect(() => {
    console.log(props);
    setPckgCost(parseInt(props.pricing[props.priceIndex].receivableAmount));
    setTotalcost(() => {
      return (
        parseInt(props.pricing[props.priceIndex].receivableAmount) *
        props.numberOfSeats
      );
    });
  }, []);

  function handleadd() {
    if (props.numberOfSeats < props.seats[props.dateIndex].seats) {
      let value = props.numberOfSeats;
      value++;
      props.setNumberOfSeats(value);
      let fvalue = value * pckgCost;
      console.log(fvalue);
      setTotalcost(fvalue);
      props.setTotalCost(props.pricing[props.priceIndex].cost*value);
      props.setTotalPaid(fvalue);
    }
  }

  function handlesub() {
    if (props.numberOfSeats > 1) {
      let value = props.numberOfSeats;
      value--;
      props.setNumberOfSeats(value);
      let fvalue = value * pckgCost;
      console.log(fvalue);
      setTotalcost(fvalue);
      props.setTotalCost(props.pricing[props.priceIndex].cost*value);
      props.setTotalPaid(fvalue);
    }
  }

  const handleDateChange = (event, index) => {
    event.preventDefault();
    props.setDateIndex(index);
    setTotalcost(pckgCost);
    props.setNumberOfSeats(1);
  };

  const handlePricingChange = (event, index) => {
    event.preventDefault();
    props.setPriceIndex(index);
    props.setNumberOfSeats(1);
    setTotalcost(parseInt(props.pricing[index].receivableAmount));
    setPckgCost(parseInt(props.pricing[index].receivableAmount));
  };

  const handleBooking = (event) => {
    event.preventDefault();
    props.onHide();
    props.completeBooking();
  }

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
        <React.Fragment>
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
          <div className="no-of-seats">
            <Row>
              <Col md={6} lg={4} sm={4}>
                <h5>Please select the number of seats-</h5>
              </Col>
              <Col md={3} lg={4} sm={4} className="seats-col">
                <h5>Cost</h5>
              </Col>
              <Col md={3} lg={4} sm={4}>
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
          <div className="total-cost">
            <Row>
              <Col className="total-col">
                <h4>The total cost is:-</h4>
              </Col>
              <Col className="total-col">
                <h3>{totalcost}</h3>
              </Col>
            </Row>
          </div>
          <div className="payment-btn">
            <Button onClick={handleBooking} className="btn-payment">
              Pay
            </Button>
          </div>
        </React.Fragment>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-btn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Payment;
