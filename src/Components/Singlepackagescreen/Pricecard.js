import React, { useState } from "react";
import "./Form.css";
import Modal from "react-bootstrap/Modal";
import { Button, Card, Col, Row } from "react-bootstrap";
import call from "../../Assets/call.svg";
import whatsapp from "../../Assets/whatsapp.svg";
import { FaRupeeSign } from "react-icons/fa";

const Pricecard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(prps) {
    return (
      <Modal
        {...prps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Book your trip
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <a className="modal-link" href="tel:919557212758">
                <Card className="modal-card">
                  <Card.Body>
                    <img className="modal-card-img" src={call} alt="call" />
                    <p>Call</p>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col>
              <a
              className="modal-link"
                href={`https://api.whatsapp.com/send?phone=919557212758&text=I'm%20interested%20in%20your%20tourism%20package%20`}
                target="_blank"
              >
              <Card className="modal-card">
                <Card.Body>
                  <img
                    className="modal-card-img"
                    src={whatsapp}
                    alt="whatsapp"
                  />
                  <p>WhatsApp</p>
                </Card.Body>
              </Card></a>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button" onClick={prps.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="price-card-main">
      <div className="price-card">
        <div className="price-card1">
          <p>
            Starting from{" "}
            <span><FaRupeeSign/>{parseInt(props.price[0].cost) + 1000}</span>
          </p>
          <h2>
          <FaRupeeSign/>{props.price && props.price[0] && props.price[0].cost}{" "}
            <span>
              {parseInt((1000 / (parseInt(props.price[0].cost) + 1000)) * 100)}%
              Off
            </span>
          </h2>
          <h4>{props.price[0].type}</h4>
        </div>
        <hr />
        <div className="price-card2">
          <button onClick={() => setModalShow(true)}>Book Now</button>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};

export default Pricecard;
