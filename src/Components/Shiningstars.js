import React from "react";
import "../Styles/Shiningstars.css";
import { Row, Col, Container } from "react-bootstrap";
import ss1 from "../Assets/ss1.jpeg";
const Shiningstars = () => {
  return (
    <div className="shiningstars-main">
      <Container>
        <div className="headings-aks">
          <h1 class="soul regaltos">
            <span>Vivek Panwar</span>
          </h1>
        </div>
        <br />
        <Row>
          <Col >
            He is one the most natural and best snowboarder and skier India has
            ever produced.Started his journey from a very young age and later
            become the one of the best in india.Represted India at international
            level and dominated everyone at national level.He have officially
            retired from professional sking and snowboarding after years of
            dominance in the field ,now he is currently serving as Coach of
            Indian Snowboarding Team.
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col xs={12} md={6}>
           <h2><b>Achievements:</b></h2> 
            <br />
            <br />
            <div className="achievement-list-div">
            <ul>
              <li>
              <b><i>SKIING</i></b>
                <div>
                <ul>
                  <div className="achievement-listitem-div">
                  <li>
                    1996 Second Position in Auli National Winter Games Open
                    Skiing Championship 1997{" "}
                  </li>
                  </div>
                  <li>1997 Third Position in National Winter Games </li>
                  <li>
                    1998 Third Position in National Open Skiing Championship{" "}
                  </li>
                  <li>1999 First Position in Winter Sports Championship </li>
                  <li>2000-2004 Participate in National Winter Games</li>
                </ul>
                </div>
              </li>
              <br />
              <br />
              <li>
                <b><i>SNOWBOARDING</i></b>
                <ul>
                  <li>2008 First position (GS) in 5th National Winter Games</li>
                  <li>2008 First position (SL) in 5th National Winter Games</li>
                  <li>2008 International Snowboarding Competition - IRIAN</li>
                  <li>
                    2010 Second Position in National Snowboarding Championship
                  </li>
                  <li>
                    2012 First Position (GS) in National Open Skiing
                    Championship
                  </li>
                  <li>
                    2012 First Position (SL) in National Open Skiing
                    Championship
                  </li>
                  <li>
                    2012 Represent INDIA in International Skiing Federation
                    (FIS) meet in - BULGARIA
                  </li>
                </ul>
              </li>
            </ul>
          </div></Col>
          <Col xs={12} md={6}>
           <div className="ssimg"><img src={ss1}></img></div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shiningstars;
