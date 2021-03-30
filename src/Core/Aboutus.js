import React, { useEffect } from "react";
import "../Styles/Aboutus.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Shiningstars from "../Components/Shiningstars";
import Iconholder from "../Components/Iconholder";
import $ from "jquery";
import staff from "../Assets/employees.png";
import price from "../Assets/dollar.png";
import placeholder from "../Assets/placeholder.png";
import experience from "../Assets/experience.png";

const Aboutus = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

  return (
    <div>
      <Header />
      {/* <div class="main-heading">
        <h1>Heading</h1>
      </div> */}

      <div>
      <div className="heading-about">
        <p>&nbsp;&nbsp;About Us&nbsp;&nbsp;</p>
      </div>
      <Container>
        <div className="about-us-god">
        <Row>
          <div className="hheadd">
            <h1>
              <span>NAMASKAAR!</span>
            </h1>
          </div>
        </Row>
        <Row>
          <Col className="sec1">
            Anshuman’s curiosity to endeavor the Himalayas started at a very
            young age. His passion for trekking and delving into one of the most
            famous adventure sports, ‘skiing,’ started when he was 10 years old.
            How did this happen? What made him so inquisitive to explore this
            mountain range? Like any other adrenaline junkie, he went on
            different treks with his cousins and their trekking groups from
            India and people from other continents. One day when he went for his
            first peak summit of Mt Pangarchulla at the age of 12. This was a
            game-changing moment for him, and then he never looked back. He
            realized that his love for the mountains could not be replaced;
            hence he started his own trekking company at 16. Anshuman was a
            different person altogether; wanted to do something different and
            break the barriers. A rank holder in studies from India's renowned
            boarding school, ’ Doon International School,’ he wanted to take the
            road less traveled and embark on the thrilling journey. He has
            brought a lot of accolades in skiing and competed at the highest
            level. He still participates in skiing competitions due to his
            immense love for this sport. Apart from being adventurous, Anshuman
            is a fun-loving and welcoming person as he believes in the
            philosophy of ‘Vasudhaiva Katumbakam’ that every living being is a
            part of our family.
          </Col>
        </Row>
        <div className="heyy">
          <Row>
            <div className="hheadd">
              <h1>
                <span>WHY ARE WE SPECIAL?</span>
              </h1>
            </div>
          </Row>
          <Row>
            <Col className="sec1">
              The trekking scenario has changed over the years. It has affected
              the ethos of nature. The corporate and biggies have taken over,
              but we are still out here standing with this work's actual value
              and tradition. The rawness and ethereal beauty of trekking are
              lost. The original and traditional trekking culture is endangered
              now. We at Pac Auli can get you where you want to go and give our
              assurance and standard trips. Since its inception, trekking has
              been a family thing for us. Our company aims to discover uncharted
              routes , unmapped trails and harbor traditional trekking values.
              Our local knowledge ensures quality work and gives a touch of
              personal connection. Pac Auli is one of the oldest trekking
              companies aims to give a real Himalayan experience in terms of
              quality and services.
            </Col>
          </Row>
          <Row>
            <Col className="sec1">
              The Himalayas have an intriguing history dated back thousands of
              years ago. Each pass is unique and has some fascinating stories
              related to Indian Philosophy and Mahabharata. Our ancestors and
              descendants of Garhwali Shepherds have explored these Himalayan
              and Tibetan mountain passes.
            </Col>
          </Row>
          <Row>
            <Col className="sec1">
              Trained mountain staff, the technical and medical team holds a
              vital backbone of our company. Our team consists of
              well-experienced local Pahari guides who have done their basic and
              advanced mountaineering courses from India's best mountaineering
              institution, Skiers, snowboarders, kayakers, rafters, and
              paragliders, where you get to encounter the genuine Himalayan
              adventure better than anyone else. Our company is affiliated with
              the Uttrakhand Tourism and adventure association of Joshimath
              Garhwal.
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Iconholder icon={staff} title="EXPERT LOCAL KNOWLEDGE" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Iconholder icon={price} title="VALUE FOR MONEY" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Iconholder icon={placeholder} title="PRIME LOCATIONS" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Iconholder icon={experience} title="EXPERIENCED STAFF" />
            </Col>
          </Row>
          <Row>
            <div className="hheadd">
              <h1>
                <span>OUR SHINING STARS!</span>
              </h1>
            </div>
          </Row>
          <br />
          <br />
          <Row>
            <Shiningstars />
          </Row>
        </div>
      </div>

      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#222222"
          fill-opacity="1"
          d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
