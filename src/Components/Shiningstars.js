import React, { useEffect, useState } from "react";
import "../Styles/Shiningstars.css";
import team from "../helper/team";
import { Col, Row } from "react-bootstrap";
import $ from "jquery";

const Shiningstars = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  let member1;
  let member2;
  let member3;

  window.onload = function () {
    member1 = document.querySelector(".member1");
    member2 = document.querySelector(".member2");
    member3 = document.querySelector(".member3");

    document
      .querySelector(".member1")
      .addEventListener("mouseover", member1Active);

    document
      .querySelector(".member2")
      .addEventListener("mouseover", member2Active);

    document
      .querySelector(".member3")
      .addEventListener("mouseover", member3Active);
  };

  function member1Active() {
    console.log("Function 1 called");
    member1.classList.add("member-active");
    member2.classList.remove("member-active");
    console.log(member2);
    member3.classList.remove("member-active");
    setActiveIndex(0);
  }

  function member2Active() {
    console.log("Function 2 called");
    member1.classList.remove("member-active");
    member2.classList.add("member-active");
    console.log(member2);
    member3.classList.remove("member-active");
    setActiveIndex(1);
  }

  function member3Active() {
    console.log("Function 3 called");
    member1.classList.remove("member-active");
    member2.classList.remove("member-active");
    console.log(member2);
    member3.classList.add("member-active");
    setActiveIndex(2);
  }

  return (
    <div className="shiningstars-main">
      <Row>
        <Col lg={6}>
          <p className="member-name member1 member-active">Vivek Panwar</p>
          <p className="member-name member2">Pramod Panwar</p>
          <p className="member-name member3">Vandna Panwar</p>
          <img
            src={team[activeIndex].img}
            alt="member"
            className="member-image"
          />
        </Col>
        <Col lg={6}>
          <div>
            <Row>
              <Col>
                <div>
                  <p className="member-name member-active">
                    About {team[activeIndex].name}
                  </p>
                  <li className="member-list">{team[activeIndex].desc}</li>
                </div>
                <div>
                  <p className="member-name member-active">Achievements</p>
                  {team[activeIndex].achievements.map((achi) => {
                    return <li className="member-list">{achi}</li>;
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Shiningstars;
