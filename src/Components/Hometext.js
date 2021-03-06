import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "../Styles/Hometext.css";
import { Link } from "react-router-dom";

const Hometext = (props) => {
  return (
    <div className="hometext-god">
      <Container>
        <div className="headd">
          <h1>
            <span>{props.mainheading}</span>
          </h1>
        </div>
        <br />
        <br />
        <Row>
          <Col sm={12} lg={6} xs={12}>
            <Row data-aos="fade-right">
              <div className="headings-aks">
                {" "}
                <div className="photuu">
                  <img src={props.src1} />
                </div>
              </div>
            </Row>

            {/* <Row>
              <div className="headings-aks">
                <h1 class="soul regaltos">
                  <span>{props.heading1}</span>
                </h1>
              </div>
            </Row>

            <Row>
              <div className="headings-aks">
                <div className="caption">{props.caption1}</div>
              </div>
            </Row> */}
          </Col>
          <Col sm={12} lg={6} xs={12}>
            <Row>
              <div className="headings-aks">
                <h1 class="soul regaltos">
                  <span>{props.heading2}</span>
                </h1>
              </div>
            </Row>
            <Row>
              <div className="headings-aks">
                <div className="caption">{props.caption2}</div>
              </div>
            </Row>
            <Row className="explore-btn0">
              <Link to={props.link} class="horizontal">
                <span class="text">Explore More</span>
              </Link>
            </Row>

            {/* <Row data-aos="fade-left">
              <div className="headings-aks">
                <div className="photuu">
                  <img src={props.src2} />
                </div>
              </div>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hometext;
