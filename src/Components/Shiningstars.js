import React from "react";
import "../Styles/Shiningstars.css";
import { Col, Row } from "react-bootstrap";
import TeamMemberCard, {
  TeamMemberCard2,
  TeamMemberCard3,
} from "./TeamMemberCard";
import TeamSocials from "./TeamSocials";

const Shiningstars = () => {
  return (
    <div className="shiningstars-main">
      <Row className="shiningstars-row xtra">
        <Col lg={6}>
          <TeamMemberCard />
        </Col>
        <Col className="shiningstars-description" lg={6}>
          <h2 className="titlee-alt">Achievements:</h2>
          <p className="copyy-alt">
            <ul className="achi-list-founderr">
              <li>
                <b>SKIING</b>
                <ul className="achi-list-founderr">
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
                </ul>
              </li>
              <li>
                {" "}
                <b>SNOWBOARDING</b>
                <ul className="achi-list-founderr">
                  <li>
                    <b>2008</b> First position (SL) in 5th National Winter Games
                  </li>
                  <li>
                    <b>2008</b> First position (GS) in 5th National Winter Games
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
              </li>
            </ul>
          </p>
          <TeamSocials 
          facebook="https://m.facebook.com/profile.php?id=1184490462&ref=content_filter"
          instagram="https://instagram.com/traveller.monk?igshid=nc3bc0sx258f"
          />
        </Col>
      </Row>
      <Row className="shiningstars-row">
        <Col className="shiningstars-description" lg={6}>
          <h2 className="titlee-alt">Achievements:</h2>
          <p className="copyy-alt">
            <ul className="achi-list-founderr">
              <li>
                <b>2010</b> Second Position in National Snowboard Championship
                Auli
              </li>
              <li>
                <b>2012</b> Third Position in National Snowboarding Championship
                Gulmarg, J&K
              </li>

              <li>
                <b>2013</b> First Person to board down from The Urgam Valley
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
          </p>
          <TeamSocials
            facebook="https://www.facebook.com/parmod.panwar.90/?show_switched_toast=0"
            instagram="https://instagram.com/parmod.panwar.90?igshid=11z48elw5c6ko"
          />
        </Col>
        <Col lg={6}>
          <TeamMemberCard2 />
        </Col>
      </Row>
      <Row className="shiningstars-row">
        <Col lg={6}>
          <TeamMemberCard3 />
        </Col>
        <Col className="shiningstars-description" lg={6}>
          <h2 className="titlee-alt">Achievements:</h2>
          <p className="copyy-alt">
            <ul className="achi-list-founderr">
              <li>
                <b>1998</b> First Position National Skiing Championship Junior
                Auli
              </li>
              <li>
                <b>2000</b> First Position in Winter Sports Junior Championship
                Slalom Auli
              </li>
              <li>
                <b>2002</b> Second Position in National Sking Championship
              </li>
              <li>
                <b>2003</b> Second Position in National Winter Games Auli
              </li>
              <li>
                <b>2007</b> 3rd Position in National Senior Ski Championship
                Auli(slalom)
              </li>
              <li>
                <b>2007</b> 3rd Position in National Senior Ski Championship
                Auli(GS)
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
                <b>2011</b> Second Position in Auli Skiing Open Championship
              </li>
              <li>
                <b>2011</b> Third Position in 1st South Asian Games Auli,
                Uttarakhand
              </li>
              <li>
                <b>2012</b> Third Position in 1st Alpine Premier League Manali
              </li>
              <li>
                <b>2012</b> Second Position in Open Skiing Championship Auli
              </li>

              <li>
                <b>2013</b> First Position in National Senior Alpine Sking
                Championship(GS)
              </li>
              <li>
                <b>2013</b> Third Position in National Senior Alpine Skiing
                Championship (slalom)
              </li>
              <li>
                <b>2014</b> Third Position in National Championship
                Gulmarg(Slalom)
              </li>
            </ul>
          </p>
          <TeamSocials
            facebook="https://www.facebook.com/vandana.panwar.52/?show_switched_toast=0"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Shiningstars;
