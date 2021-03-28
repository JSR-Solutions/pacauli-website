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
                <a href="">
                  <p className="footer-section-content">Our Packages</p>
                </a>
                <a href="">
                  <p className="footer-section-content">Contact Us</p>
                </a>
                <a href="">
                  <p className="footer-section-content">Our Packages</p>
                </a>
                <a href="">
                  <p className="footer-section-content">Contact Us</p>
                </a>
                
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-top-packages-section">
              <h3 className="footer-section-title">Top Packages</h3>
              <div className="footer-section-content-div">
                <a href="">
                  <p className="footer-section-content">This Package</p>
                </a>
                <a href="">
                  <p className="footer-section-content">That Package</p>
                </a>
                <a href="">
                  <p className="footer-section-content">This Package</p>
                </a>
                <a href="">
                  <p className="footer-section-content">That Package</p>
                </a>
                
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-contact-section">
              <h3 className="footer-section-title">Connect With Us</h3>
              <div className="footer-section-content-div">
                <a href="">
                  <p className="footer-section-content">
                    Phone : +91-987xxxxxx4
                  </p>
                </a>
                <a href="">
                  <p className="footer-section-content">
                    Email : username@example.com
                  </p>
                </a>
                <a href="">
                  <p className="footer-section-content">
                    Address : PAC (Pangarchulla Adventure Camps),Auli (403.54
                    km) 246443 Auli, Norway
                  </p>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
         <div className="footer-socials">
          <AiFillInstagram className="footer-social-icon" />
          <AiFillFacebook className="footer-social-icon" />
          <AiOutlineMail className="footer-social-icon" />
          <AiFillGoogleCircle className="footer-social-icon" />
        </div>
        <div className="footer-last">
          <p className="footer-copyright-content">Copyright © 2021 PacAuli. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
