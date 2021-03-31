import React from "react";
import "../Styles/Shiningstars.css";
import { Col, Row } from "react-bootstrap";
import TeamMemberCard, {TeamMemberCard2, TeamMemberCard3} from "./TeamMemberCard";

const Shiningstars = () => {

  return (
    <div className="shiningstars-main">
      <Row>
        <Col lg={4}>
        <TeamMemberCard />
        </Col>
        <Col lg={4}>
        <TeamMemberCard2 />
        </Col>
        <Col lg={4}>
        <TeamMemberCard3 />
        </Col>
      </Row>
    </div>
  );
};

export default Shiningstars;
