import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Styles/Footer.css";
import Socials from "../Components/Socials";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineMail,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer-main-div">
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-about-section">
              <h3 className="footer-section-title">About Us</h3>
              <div className="footer-section-content-div">
                <p className="footer-section-content">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-quick-links-section">
              <h3 className="footer-section-title">Quick Links</h3>
              <div className="footer-section-content-div">
                <Link to="/categories">
                  <p className="footer-section-content">All Categories</p>
                </Link>
                <Link to="/custompackage">
                  <p className="footer-section-content">Custom Package</p>
                </Link>
                <Link to="/contactus">
                  <p className="footer-section-content">Contact Us</p>
                </Link>
                <Link to="/aboutus">
                  <p className="footer-section-content">About Us</p>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-top-packages-section">
              <h3 className="footer-section-title">Package Types</h3>
              <div className="footer-section-content-div">
                <Row>
                  <Col>
                    <Link to="/categories/0">
                      <p className="footer-section-content">Skiing</p>
                    </Link>
                    <Link to="/categories/1">
                      <p className="footer-section-content">Trekking</p>
                    </Link>
                    <Link to="/categories/6">
                      <p className="footer-section-content">Expedition</p>
                    </Link>
                    <Link to="/categories/4">
                      <p className="footer-section-content">Camping</p>
                    </Link>
                    <Link to="/categories/5">
                      <p className="footer-section-content">Rafting</p>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/categories/2">
                      <p className="footer-section-content">Rock Climbing</p>
                    </Link>
                    <Link to="/categories/3">
                      <p className="footer-section-content">Cycling</p>
                    </Link>
                    <Link to="/categories/7">
                      <p className="footer-section-content">Char Dham</p>
                    </Link>
                    <Link to="/categories/8">
                      <p className="footer-section-content">Snow Boarding</p>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-contact-section">
              <h3 className="footer-section-title">Connect With Us</h3>
              <div className="footer-section-content-div">
                <a href="tel:+919557212758">
                  <p className="footer-section-content">
                    Phone : +91-9557212758
                  </p>
                </a>
                <a href="mailto:info@pacauli.com">
                  <p className="footer-section-content">
                    Email : info@pacauli.com
                  </p>
                </a>
                <p className="footer-section-content">
                  Address : PAC (Pangarchulla Adventure Camps),Auli (403.54 km)
                  246443 Auli, Norway
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <div className="footer-socials">
          <a href="https://www.instagram.com/pac_auli/?hl=en">
            <AiFillInstagram className="footer-social-icon" />
          </a>
          <a href="https://www.facebook.com/Pacauli/">
            <AiFillFacebook className="footer-social-icon" />
          </a>
          <a href="mailto:info@pacauli.com">
            <AiOutlineMail className="footer-social-icon" />
          </a>
          <a href="https://www.google.com/search?q=pacauli&rlz=1C1CHBF_enIN863IN863&oq=pacauli+&aqs=chrome..69i57j69i59j69i60l6.1995j0j4&sourceid=chrome&ie=UTF-8#lrd=0x39a79dae40b6daf7:0x6564e03ad73a0fbf,1,,,">
            <AiFillGoogleCircle className="footer-social-icon" />
          </a>
        </div>
        <div className="footer-last">
          <p className="footer-copyright-content">
            Copyright © 2021 PacAuli. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
