import React, { useEffect, useState } from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import "./Singlepackage.css";
import Pricecard from "./Pricecard";
import Formcomp from "./Form";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineSafetyCertificate, AiOutlineFieldTime } from "react-icons/ai";
import { RiPinDistanceFill } from "react-icons/ri";
import { IoLocateSharp } from "react-icons/io5";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import firebase from "firebase";
import { StickyContainer, Sticky } from "react-sticky";
import "react-alice-carousel/lib/alice-carousel.css";
import Imagess from "./imageGallery";
import $ from "jquery";
import SingleReview from "../SingleReview";

const Singlepackage = (props) => {

const [pack, setpack] = useState();
const [mapi, setmap] = useState("");
 

  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

  const db = firebase.firestore();

  useEffect(() => {
    db.collection(props.match.params.categoryName)
      .doc(props.match.params.packageId)
      .get()
      .then((res) => {
        console.log(res.data());
        if (res.data()) {
          setpack(res.data());
          if (res.data().map == ''){
            setmap("https://maps.google.com/maps?q=India&output=embed")
            console.log(mapi)
            
          }
          else{
            setmap(res.data().map)
          }
        
        }
      });
  }, []);

  useEffect(() => {
    var header = document.getElementById("sing-pack-nav");
    if (header) {
      var btns = header.getElementsByClassName("single-pack-nav-item");
      if (btns) {
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("nav-time-active");
            current[0].className = current[0].className.replace(
              " nav-time-active",
              ""
            );
            this.className += " nav-time-active";
          });
        }
      }
    }
    
  }, []);

  return (
    <div className="single-package-main">
      <Header />

      <div className="img-carou">
        <div className="single-package-upper">
          <Carousel>
            {pack &&
              pack.imgUrl.map((l, k) => (
                <Carousel.Item>
                  <img style={{ height: "700px" }} src={l} alt="sk" />
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </div>

      <div className="single-package-lower">
        {pack && (
          <Container>
            <Row className="sngl-pack-row">
              <Col md={8}>
                <div className="single-package-left">
                  <div className="singel-pack-name">
                    <div className="single-pck-1-row">
                      <div className="single-pack-side-design"></div>
                      <h3>{pack.name}</h3>
                      <hr />
                      <h5>
                        <GiNetworkBars className="single-pck-1-row-icon" />
                        Level - {pack.grade}
                      </h5>
                      <h5>
                        <RiPinDistanceFill className="single-pck-1-row-icon" />
                        Distance - {pack.trekDistance} km
                      </h5>
                      <h5>
                        <AiOutlineSafetyCertificate className="single-pck-1-row-icon" />
                        Package Type - {pack.packageType}
                      </h5>
                      <h5>
                        <AiOutlineFieldTime className="single-pck-1-row-icon" />
                        Duration - {pack.duration}
                      </h5>
                      <hr />
                    </div>
                  </div>

                  <div className="sngl-pack-short-itn">
                    <div className="single-pck-2-row">
                      <div className="single-pack-side-design"></div>
                      <h4>Histories</h4>
                      <hr />
                      {pack &&
                        pack.histories.map((l, k) => (
                          <p key={k}>
                            <IoLocateSharp className="single-pck-2-row-icon" />
                            {l}
                          </p>
                        ))}
                    </div>
                  </div>

                  <StickyContainer>
                    <Sticky topOffset={50}>
                      {({ style, isSticky }) => (
                        <div
                          style={{
                            ...style,
                            marginTop: isSticky ? "66px" : "0px",
                          }}
                          className="single-package-navbar"
                          id="sing-pack-nav"
                        >
                          <div className="single-pack-nav-item">
                            <a href="#overview">
                              <p>Overview</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item nav-time-active">
                            <a href="#detailedItinerary">
                              <p>Detailed Itinerary</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item">
                            <a href="#briefItinerary">
                              <p>Brief Itinerary</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item">
                            <a href="#inclusion">
                              <p>Inclusions</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item ">
                            <a href="#exclusion">
                              <p>Exclusions</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item">
                            <a href="#map">
                              <p>Map</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item">
                            <a href="#reviews">
                              <p>Reviews</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item">
                            <a href="#cancellation">
                              <p>Policies</p>
                            </a>
                          </div>
                        </div>
                      )}
                    </Sticky>

                    <div className="sngl-pack-short-itn">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Package Options</h4>
                        <hr />
                        {pack &&
                          pack.pricing.map((l, k) => (
                            <div key={k} className="sng-prc-tag">
                              <div className="sng-prc-tag1">
                                <h5>
                                  {k + 1}
                                  <sup>st</sup> Option
                                </h5>
                                <h6>
                                  <AiOutlineFieldTime
                                    style={{ fontSize: "21px" }}
                                  />{" "}
                                  {pack.duration}
                                </h6>
                              </div>
                              <div className="sng-prc-tag2">
                                <h6>Rs {parseInt(l.cost) + 1000}</h6>
                                <h5>
                                  Rs {l.cost} <span>{l.type}</span>
                                </h5>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="sngl-pack-short-itn" id="overview">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Overviews</h4>
                        <hr />
                        {pack &&
                          pack.overviews.map((l, k) => (
                            <p key={k}>
                              <IoLocateSharp className="single-pck-2-row-icon" />
                              {l}
                            </p>
                          ))}
                      </div>
                    </div>

                    <div className="sngl-pack-short-itn" id="briefItinerary">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Brief Itinerary</h4>
                        <hr />
                        {pack &&
                          pack.briefItinerary.map((l, k) => (
                            <div key={k} className="single-pack-itn">
                              <h5>{l.day}</h5>
                              <h6>
                                <IoLocateSharp className="single-pck-2-row-icon" />
                                {l.title}
                              </h6>
                              <p>{l.desc}</p>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="sngl-pack-short-itn" id="detailedItinerary">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Detailed Itinerary</h4>
                        <hr />
                        {pack &&
                          pack.detailedItinerary.map((l, k) => (
                            <div key={k} className="single-pack-itn">
                              <h5>{l.day}</h5>
                              <h6>
                                <IoLocateSharp className="single-pck-2-row-icon" />
                                {l.title}
                              </h6>
                              <p>{l.desc}</p>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="sngl-pack-short-itn" id="inclusion">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Inclusions</h4>
                        <hr />
                        {pack &&
                          pack.inclusions.map((l, k) => (
                            <p key={k}>
                              <IoLocateSharp className="single-pck-2-row-icon" />
                              {l}
                            </p>
                          ))}
                      </div>
                    </div>

                    <div className="sngl-pack-short-itn" id="exclusion">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Exclusions</h4>
                        <hr />
                        {pack &&
                          pack.exclusions.map((l, k) => (
                            <p key={k}>
                              <IoLocateSharp className="single-pck-2-row-icon" />
                              {l}
                            </p>
                          ))}
                      </div>
                    </div>

                    <div className="sngl-pack-short-itn" id="reviews">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Reviews</h4>
                        <hr />
                        
                          {pack &&
                            pack.reviews.map((l, k) => (
                              <SingleReview
                                img={l.customerImage}
                                name={l.customerName}
                                text={l.customerReview}
                                key={k}
                              />
                            ))}
                        
                      </div>
                    </div>
                    <div className="sngl-pack-short-itn" id="gallery">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Gallery</h4>
                        <hr />

                        {pack && pack.imgUrl && (
                          <Imagess imgUrl={pack.imgUrl} />
                        )}
                      </div>
                    </div>

                    <div className="sngl-pack-short-itn" id="map">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Location</h4>
                        <hr />
                        {pack && mapi && (
                          
                          <iframe
                            src= {mapi}
                            width="100%"
                            height="450"
                            frameborder="0"
                            allowfullscreen
                          ></iframe>
                        )}
                      </div>
                    </div>

                    <div className="sngl-pack-short-itn" id="cancellation">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Cancellation</h4>
                        <hr />
                        {pack &&
                          pack.cancellation.map((l, k) => (
                            <p key={k}>
                              <IoLocateSharp className="single-pck-2-row-icon" />
                              {l}
                            </p>
                          ))}
                      </div>
                    </div>
                  </StickyContainer>
                </div>
              </Col>
              <Col md={4}>
                <div className="single-package-right">
                  <Pricecard price={pack.pricing} />
                  <Formcomp />
                  <div className="skska">
                    <StickyContainer>
                      <Sticky topOffset={50}>
                        {({ style, isSticky }) => (
                          <div
                            style={{
                              ...style,
                              marginTop: isSticky ? "66px" : "0px",
                            }}
                          >
                            <Pricecard price={pack.pricing} />
                          </div>
                        )}
                      </Sticky>
                      <div className="sksks"></div>
                    </StickyContainer>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Singlepackage;

// <h5><AiOutlineFieldTime className='single-pck-1-row-icon' />Max Altitude - {pack.maxAltitude} km</h5>
// <h5><AiOutlineFieldTime className='single-pck-1-row-icon' />Region - {pack.region}</h5>

// <div className='img-carou'>
// <div className='single-package-upper'>
//     {
//         pack && pack.imgUrl && pack.imgUrl[0] &&
//         <img src={pack.imgUrl[4]} alt='sk' />
//     }
// </div>
// <div className='img-carou1'>
//     {
//         pack && pack.imgUrl && pack.imgUrl[0] &&
//         <img src={pack.imgUrl[0]} alt='sk' />
//     }
//     {
//         pack && pack.imgUrl && pack.imgUrl[0] &&
//         <img src={pack.imgUrl[1]} alt='sk' />
//     }
// </div>
// <div className='img-carou2'>
//     {
//         pack && pack.imgUrl && pack.imgUrl[0] &&
//         <img src={pack.imgUrl[2]} alt='sk' />
//     }
//     {
//         pack && pack.imgUrl && pack.imgUrl[0] &&
//         <img src={pack.imgUrl[5]} alt='sk' />
//     }
// </div>
// </div>
