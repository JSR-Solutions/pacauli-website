import React, { useEffect } from "react";
import "../Styles/Aboutus.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Shiningstars from "../Components/Shiningstars";
import Stars from "../Components/Stars";
import Iconholder from "../Components/Iconholder";
import $ from "jquery";
import staff from "../Assets/employees.png";
import price from "../Assets/dollar.png";
import placeholder from "../Assets/placeholder.png";
import experience from "../Assets/experience.png";

import TeamSocials from "../Components/TeamSocials";

import t1 from "../Assets/Team/t1.jpeg";
import t2 from "../Assets/Team/t2.jpeg";
import t3 from "../Assets/Team/t3.jpeg";
import t4 from "../Assets/Team/t4.jpeg";

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
        {/* <div className="heading-about">
          <p>&nbsp;&nbsp;About Us&nbsp;&nbsp;</p>
        </div> */}
        <div className="heading-alt">
          <h2>About Us</h2>
          <h2>About Us</h2>
        </div>
        <div className="about-us-god">
          <p className="about-us-quote">
            Now that you are about to embark on a new journey with us, it's only
            better if we get to know each other. You can read about our core
            team members, our journey, our vision and more about us here.
          </p>
          {/* <Row>
              <div className="hheadd">
                <h1>
                  <span>NAMASKAAR!</span>
                </h1>
              </div>
            </Row> */}
          {/* 
            <Row>
              <div className="hheadd">
                <h1>
                  <span>ABOUT THE FOUNDER!</span>
                </h1>
              </div>
            </Row>
            <Row style={{ marginTop: "80px" }}>
              <Stars />
            </Row>
            <Row>
              <Col className="sec1">
                Anshuman’s curiosity to endeavor the Himalayas started at a very
                young age. His passion for trekking and delving into one of the
                most famous adventure sports, ‘skiing,’ started when he was 10
                years old. How did this happen? What made him so inquisitive to
                explore this mountain range? Like any other adrenaline junkie,
                he went on different treks with his cousins and their trekking
                groups from India and people from other continents. One day when
                he went for his first peak summit of Mt Pangarchulla at the age
                of 12. This was a game-changing moment for him, and then he
                never looked back. He realized that his love for the mountains
                could not be replaced; hence he started his own trekking company
                at 16. Anshuman was a different person altogether; wanted to do
                something different and break the barriers. A rank holder in
                studies from India's renowned boarding school, ’ Doon
                International School,’ he wanted to take the road less traveled
                and embark on the thrilling journey. He has brought a lot of
                accolades in skiing and competed at the highest level. He still
                participates in skiing competitions due to his immense love for
                this sport. Apart from being adventurous, Anshuman is a
                fun-loving and welcoming person as he believes in the philosophy
                of ‘Vasudhaiva Katumbakam’ that every living being is a part of
                our family.
              </Col>
            </Row>
            <TeamSocials
              facebook="https://www.facebook.com/khtrr.balak"
              instagram="https://www.instagram.com/bisht.anshuman/?igshid=3a6jlv57iaqq"
            />
            <Row>
              <div className="hheadd">
                <h1>
                  <span>OUR SHINING STARS!</span>
                </h1>
              </div>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Shiningstars />
            </Row> */}

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#222222"
              fill-opacity="1"
              d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="founder-div">
            <Row className="founder-div-check">
              <Col className="image-col-team" lg={6} md={12} sm={12}>
                <img src={t4} alt="Anshuman Bisht" className="founder-image" />
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className='about-founder-baap'>
                  <div className="about-founder-div">
                    <h2 className="founder-name">ANSHUMAN BISHT</h2>
                    <h6>FOUNDER</h6>
                    <div className="divider-div">
                      <hr className="founder-divider" />
                    </div>

                    <p className="about-founder">
                      <em>
                        Anshuman’s curiosity to endeavor the Himalayas started at
                        a very young age. His passion for trekking and delving
                        into one of the most famous adventure sports, ‘skiing,’
                        started when he was 10 years old. How did this happen?
                        What made him so inquisitive to explore this mountain
                        range? Like any other adrenaline junkie, he went on
                        different treks with his cousins and their trekking groups
                        from India and people from other continents. One day when
                        he went for his first peak summit of Mt Pangarchulla at
                        the age of 12. This was a game-changing moment for him,
                        and then he never looked back. He realized that his love
                        for the mountains could not be replaced; hence he started
                        his own trekking company at 16. Anshuman was a different
                        person altogether; wanted to do something different and
                        break the barriers. A rank holder in studies from India's
                        renowned boarding school, ’ Doon International School,’ he
                        wanted to take the road less traveled and embark on the
                        thrilling journey. He has brought a lot of accolades in
                        skiing and competed at the highest level. He still
                        participates in skiing competitions due to his immense
                        love for this sport. Apart from being adventurous,
                        Anshuman is a fun-loving and welcoming person as he
                        believes in the philosophy of ‘Vasudhaiva Katumbakam’ that
                        every living being is a part of our family.
                    </em>
                    </p>
                  </div>

                  <div className="founder-achievements">
                    <h2>ACHIEVEMENTS</h2>
                    <hr className="achievements-divider" />
                    <ul className="achievements-list">
                      <li>
                        2013 First Position in Junior National Championship Auli
                    </li>
                      <li>
                        2014 Participation in National Skiing Championship Auli
                    </li>
                      <li>2018 First ever to cover the Winter Malari Trial</li>
                      <li>
                        2018 Youngest ever to board down from Pangarchulla base
                    </li>
                      <li>2019 Only skier to Ski down from Tungnath Temple.</li>
                      <li>
                        Founder of Cuddle the Himalaya Foundation (NGO that works
                        in field of Nature, Tradition, education and health in the
                        Himalayas)
                    </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="team-div-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#222222"
                fill-opacity="1"
                d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <Row>
              <Col lg={6} md={{ span: 12, order: 2 }}  sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
                <div className="about-founder-div">
                  <h2 className="founder-name">VIVEK PANWAR</h2>
                  <h6>TEAM MEMBER</h6>
                  <div className="divider-div">
                    <hr className="founder-divider" />
                  </div>

                  <p className="about-founder">
                    <em>
                      Anshuman’s curiosity to endeavor the Himalayas started at
                      a very young age. His passion for trekking and delving
                      into one of the most famous adventure sports, ‘skiing,’
                      started when he was 10 years old. How did this happen?
                      What made him so inquisitive to explore this mountain
                      range? Like any other adrenaline junkie, he went on
                      different treks with his cousins and their trekking groups
                      from India and people from other continents. One day when
                      he went for his first peak summit of Mt Pangarchulla at
                      the age of 12. This was a game-changing moment for him,
                      and then he never looked back. He realized that his love
                      for the mountains could not be replaced; hence he started
                      his own trekking company at 16. Anshuman was a different
                      person altogether; wanted to do something different and
                      break the barriers. A rank holder in studies from India's
                      renowned boarding school, ’ Doon International School,’ he
                      wanted to take the road less traveled and embark on the
                      thrilling journey. He has brought a lot of accolades in
                      skiing and competed at the highest level. He still
                      participates in skiing competitions due to his immense
                      love for this sport. Apart from being adventurous,
                      Anshuman is a fun-loving and welcoming person as he
                      believes in the philosophy of ‘Vasudhaiva Katumbakam’ that
                      every living being is a part of our family.
                    </em>
                  </p>
                </div>

                <div className="founder-achievements">
                  <h2>ACHIEVEMENTS</h2>
                  <hr className="achievements-divider" />
                  <ul className="achievements-list">
                    <li>
                      <b>1996</b> Second Position in Auli National Winter Games
                      Open Skiing Championship
                    </li>
                    <li>
                      <b>1997</b> Third Position in National Winter Games
                    </li>
                    <li>
                      <b>1998</b> Third Position in National Open Skiing
                      Championship
                    </li>
                    <li>
                      <b>1999</b> First Position in Winter Sports Championship
                    </li>
                    <li>
                      <b>2000-2004</b> Participate in National Winter Games
                    </li>
                    <li>
                      <b>2008</b> First position (SL) in 5th National Winter
                      Games
                    </li>
                    <li>
                      <b>2008</b> First position (GS) in 5th National Winter
                      Games
                    </li>
                    <li>
                      <b>2008</b> International Snowboarding Competition - IRIAN
                    </li>
                    <li>
                      <b>2010</b> Second Position in National Snowboarding
                      Championship
                    </li>
                    <li>
                      <b>2012</b> First Position (SL) in National Open Skiing
                      Championship
                    </li>
                    <li>
                      <b>2012</b> Represent INDIA in International Skiing
                      Federation (FIS) meet in - BULGARIA
                    </li>
                    <li>
                      <b>2012</b> First Position (GS) in National Open Skiing
                      Championship
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className="image-col-team" lg={6} sm={{ span: 12, order: 1 }} md={12}>
                <img src={t1} alt="Anshuman Bisht" className="founder-image" />
              </Col>
            </Row>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#222222"
              fill-opacity="1"
              d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="team-div-2">
            <Row>
              <Col className="image-col-team" lg={6} md={12} sm={12}>
                <img src={t2} alt="Anshuman Bisht" className="founder-image" />
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className="about-founder-div">
                  <h2 className="founder-name">PRAMOD PANWAR</h2>
                  <h6>TEAM MEMBER</h6>
                  <div className="divider-div">
                    <hr className="founder-divider" />
                  </div>

                  <p className="about-founder">
                    <em>
                      Anshuman’s curiosity to endeavor the Himalayas started at
                      a very young age. His passion for trekking and delving
                      into one of the most famous adventure sports, ‘skiing,’
                      started when he was 10 years old. How did this happen?
                      What made him so inquisitive to explore this mountain
                      range? Like any other adrenaline junkie, he went on
                      different treks with his cousins and their trekking groups
                      from India and people from other continents. One day when
                      he went for his first peak summit of Mt Pangarchulla at
                      the age of 12. This was a game-changing moment for him,
                      and then he never looked back. He realized that his love
                      for the mountains could not be replaced; hence he started
                      his own trekking company at 16. Anshuman was a different
                      person altogether; wanted to do something different and
                      break the barriers. A rank holder in studies from India's
                      renowned boarding school, ’ Doon International School,’ he
                      wanted to take the road less traveled and embark on the
                      thrilling journey. He has brought a lot of accolades in
                      skiing and competed at the highest level. He still
                      participates in skiing competitions due to his immense
                      love for this sport. Apart from being adventurous,
                      Anshuman is a fun-loving and welcoming person as he
                      believes in the philosophy of ‘Vasudhaiva Katumbakam’ that
                      every living being is a part of our family.
                    </em>
                  </p>
                </div>

                <div className="founder-achievements">
                  <h2>ACHIEVEMENTS</h2>
                  <hr className="achievements-divider" />
                  <ul className="achievements-list">
                    <li>
                      <b>2010</b> Second Position in National Snowboard
                      Championship Auli
                    </li>
                    <li>
                      <b>2012</b> Third Position in National Snowboarding
                      Championship Gulmarg, J&K
                    </li>

                    <li>
                      <b>2013</b> First Person to board down from The Urgam
                      Valley
                    </li>
                    <li>
                      <b>2015</b> Third Position in Auli Snowboarding Open
                      Championship
                    </li>
                    <li>
                      2018 Won the Guide of the Year and Excellence in Tourism
                      Industry Award
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>

          <div className="team-div-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#222222"
                fill-opacity="1"
                d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <Row>
              <Col lg={6} md={{ span: 12, order: 2 }}  sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
                <div className="about-founder-div">
                  <h2 className="founder-name">VANDANA PANWAR</h2>
                  <h6>TEAM MEMBER</h6>
                  <div className="divider-div">
                    <hr className="founder-divider" />
                  </div>

                  <p className="about-founder">
                    <em>
                      Anshuman’s curiosity to endeavor the Himalayas started at
                      a very young age. His passion for trekking and delving
                      into one of the most famous adventure sports, ‘skiing,’
                      started when he was 10 years old. How did this happen?
                      What made him so inquisitive to explore this mountain
                      range? Like any other adrenaline junkie, he went on
                      different treks with his cousins and their trekking groups
                      from India and people from other continents. One day when
                      he went for his first peak summit of Mt Pangarchulla at
                      the age of 12. This was a game-changing moment for him,
                      and then he never looked back. He realized that his love
                      for the mountains could not be replaced; hence he started
                      his own trekking company at 16. Anshuman was a different
                      person altogether; wanted to do something different and
                      break the barriers. A rank holder in studies from India's
                      renowned boarding school, ’ Doon International School,’ he
                      wanted to take the road less traveled and embark on the
                      thrilling journey. He has brought a lot of accolades in
                      skiing and competed at the highest level. He still
                      participates in skiing competitions due to his immense
                      love for this sport. Apart from being adventurous,
                      Anshuman is a fun-loving and welcoming person as he
                      believes in the philosophy of ‘Vasudhaiva Katumbakam’ that
                      every living being is a part of our family.
                    </em>
                  </p>
                </div>

                <div className="founder-achievements">
                  <h2>ACHIEVEMENTS</h2>
                  <hr className="achievements-divider" />
                  <ul className="achievements-list">
                    <li>
                      <b>1998</b> First Position National Skiing Championship
                      Junior Auli
                    </li>
                    <li>
                      <b>2000</b> First Position in Winter Sports Junior
                      Championship Slalom Auli
                    </li>
                    <li>
                      <b>2002</b> Second Position in National Sking Championship
                    </li>
                    <li>
                      <b>2003</b> Second Position in National Winter Games Auli
                    </li>
                    <li>
                      <b>2007</b> 3rd Position in National Senior Ski
                      Championship Auli(slalom)
                    </li>
                    <li>
                      <b>2007</b> 3rd Position in National Senior Ski
                      Championship Auli(GS)
                    </li>
                    <li>
                      <b>2008</b> First Position in 5th National Winter Games
                      Gulmarg(Kashmir)
                    </li>
                    <li>
                      <b>2010</b> Second Position in National Ski Championship
                      Manali(GS)
                    </li>
                    <li>
                      <b>2010</b> Third Position in WGAU Championship
                    </li>
                    <li>
                      <b>2010</b> Second Position in WGAU Championship
                    </li>
                    <li>
                      <b>2011</b> Second Position in Auli Skiing Open
                      Championship
                    </li>
                    <li>
                      <b>2011</b> Third Position in 1st South Asian Games Auli,
                      Uttarakhand
                    </li>
                    <li>
                      <b>2012</b> Third Position in 1st Alpine Premier League
                      Manali
                    </li>
                    <li>
                      <b>2012</b> Second Position in Open Skiing Championship
                      Auli
                    </li>

                    <li>
                      <b>2013</b> First Position in National Senior Alpine Sking
                      Championship(GS)
                    </li>
                    <li>
                      <b>2013</b> Third Position in National Senior Alpine
                      Skiing Championship (slalom)
                    </li>
                    <li>
                      <b>2014</b> Third Position in National Championship
                      Gulmarg(Slalom)
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className="image-col-team" lg={6} md={12} sm={12}>
                <img src={t3} alt="Anshuman Bisht" className="founder-image" />
              </Col>
            </Row>
          </div>

          <div className="heyy">
            <Row>
              <div className="hheadd">
                <h1>
                  <span>WHY ARE WE SPECIAL?</span>
                </h1>
              </div>
            </Row>
            <div class="image-container">
              <div class="image-box">
                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              </div>
              <div class="image-box">
                <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" />
              </div>
              <div class="image-box">
                <img src="https://images.unsplash.com/photo-1497501849790-78f74380d9d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              </div>
              <div class="image-box">
                <img src="https://images.unsplash.com/photo-1484264883846-eb04404af310?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80" />
              </div>
            </div>
            <div class="image-container">
              <div class="image-box">
                <img src="https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              </div>
              <div class="image-box">
                <img src="https://images.unsplash.com/photo-1524262947531-13165500f291?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              </div>
              <div class="image-box">
                <img src="https://images.unsplash.com/photo-1519719498756-2f0d81cdf13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1075&q=80" />
              </div>
              <div class="image-box">
                <img src="https://images.unsplash.com/photo-1525885270172-2b7c27278d8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              </div>
            </div>
            <Row>
              <Col className="sec1">
                The trekking scenario has changed over the years. It has
                affected the ethos of nature. The corporate and biggies have
                taken over, but we are still out here standing with this work's
                actual value and tradition. The rawness and ethereal beauty of
                trekking are lost. The original and traditional trekking culture
                is endangered now. We at Pac Auli can get you where you want to
                go and give our assurance and standard trips. Since its
                inception, trekking has been a family thing for us. Our company
                aims to discover uncharted routes , unmapped trails and harbor
                traditional trekking values. Our local knowledge ensures quality
                work and gives a touch of personal connection. Pac Auli is one
                of the oldest trekking companies aims to give a real Himalayan
                experience in terms of quality and services.
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
                well-experienced local Pahari guides who have done their basic
                and advanced mountaineering courses from India's best
                mountaineering institution, Skiers, snowboarders, kayakers,
                rafters, and paragliders, where you get to encounter the genuine
                Himalayan adventure better than anyone else. Our company is
                affiliated with the Uttrakhand Tourism and adventure association
                of Joshimath Garhwal.
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
            
          </div>
        </div>
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
