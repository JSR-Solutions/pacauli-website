import React from "react";
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
  const [date, setDate] = React.useState("SELECT DATE");
  const [pkgtype, setPkgtype] = React.useState("SELECT PACKAGE TYPE");
  const [val, setVal] = React.useState(1);
  let pckgCost = 1000;
  const [totalcost, setTotalcost] = React.useState(pckgCost);
 

  function handleadd() {
    if (val < 10) {
      let value = val;
      value++;
      setVal(value);
      let fvalue = value * pckgCost;
      console.log(fvalue);
      setTotalcost(fvalue);
    }
  }
  function handlesub() {
    if (val > 1) {
      let value = val;
      value--;
      setVal(value);
      let fvalue = value * pckgCost;
      console.log(fvalue);
      setTotalcost(fvalue);
    }
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
          Book This Package
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="img-pay">
          <img className="logo-pay" src={logo} alt="logo" />
        </div>

        <h4>Package Name</h4>
        <div className="dates-dropdown">
          <DropdownButton
            id="dropdown-basic-button"
            title={date}
            className="pay-btn"
          >
            <Dropdown.Item href="#/action-1">Date1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Date2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Date3</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="pkgtype-dropdown">
          <DropdownButton
            id="dropdown-basic-button"
            title={pkgtype}
            className="pay-btn"
          >
            <Dropdown.Item href="#/action-1">Type1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Type2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Type3</Dropdown.Item>
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
                <p>{val}</p>
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
          <Button className="btn-payment">Pay</Button>
        </div>
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
