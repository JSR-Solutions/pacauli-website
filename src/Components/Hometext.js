import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const Hometext = (props) => {
  return (
    <div className="hometext-god">
      <Container>
        <Row>
          <Col>
            <Row>
              <img src={props.src1} />
            </Row>
            <Row>
              <div className="heading">{props.heading1}</div>
            </Row>
            <Row>
              <div className="caption">{props.caption1}</div>
            </Row>
          </Col>
          <Col>
            <Row>
              <div className="heading">{props.heading2}</div>
            </Row>
            <Row>
              <div className="caption">{props.caption2}</div>
            </Row>
            <Row>
              <img src={props.src2} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hometext;
