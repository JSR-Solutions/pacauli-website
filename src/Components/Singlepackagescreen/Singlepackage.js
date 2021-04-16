import React, { useEffect, useState } from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import "./Singlepackage.css";
import Pricecard from "./Pricecard";
import Formcomp from "./Form";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineSafetyCertificate, AiOutlineFieldTime } from "react-icons/ai";
import { RiPinDistanceFill, RiCheckboxCircleFill } from "react-icons/ri";
import { IoLocateSharp, IoAlertCircleSharp } from "react-icons/io5";
import { FaTimesCircle } from 'react-icons/fa';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import firebase from "firebase";
import { StickyContainer, Sticky } from "react-sticky";
import "react-alice-carousel/lib/alice-carousel.css";
import Imagess from "./imageGallery";
import $ from "jquery";
import SingleReview from "../SingleReview";
import { Button, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const Singlepackage = (props) => {
  const [pack, setpack] = useState('');
  const [mapi, setmap] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newreview, setNewreview] = React.useState("");
  const [reviewsFetched, setReviewsFetched] = useState(false);
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [seatavail, seatavailablity] = useState([])

  // useEffect(() => {
  //   $(document).ready(function () {
  //     $(this).scrollTop(0);
  //   });
  // }, []);

  const db = firebase.firestore();
  const auth = firebase.auth();

  const getReviews = () => {
    setReviews([]);
    db.collection(props.match.params.categoryName)
      .doc(props.match.params.packageId)
      .collection("Reviews")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          const reviewData = doc.data();
          db.collection("Users")
            .doc(reviewData.userId)
            .get()
            .then((snap) => {
              const userData = snap.data();
              setReviews((prev) => {
                return [
                  ...prev,
                  {
                    userId: reviewData.userId,
                    review: reviewData.review,
                    userName: userData.name,
                    userImage: userData.imageUrl,
                  },
                ];
              });
            })
            .then(() => {
              setReviewsFetched(true);
            });
        });
      });
  }

  useEffect(() => {
    db.collection(props.match.params.categoryName)
      .doc(props.match.params.packageId)
      .get()
      .then((ress) => {
        if (ress.data()) {
          console.log(ress.data())
          setpack(ress.data());
          getReviews();
          if (ress.data().map == "") {
            setmap("https://maps.google.com/maps?q=India&output=embed");
            // console.log(mapi);
          } else {
            setmap(ress.data().map);
          }
        } else {
          setpack('')
        }
      });
  }, [])


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

  function handleNewreview(event) {
    setNewreview(event.target.value);
  }

  function addNewreview(event) {
    event.preventDefault();
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        if (uid) {
          db.collection(props.match.params.categoryName)
            .doc(props.match.params.packageId)
            .collection("Reviews")
            .add({
              userId: uid,
              review: newreview,
            })
            .then(() => {
              setNewreview("");
              getReviews();
            });
        }
      } else {
        setRedirectLogin(true);
      }
    });
  }

  useEffect(() => {
    seatavailablity([])
    db.collection(props.match.params.categoryName)
      .doc(props.match.params.packageId)
      .collection("Dates")
      .doc("dates")
      .get()
      .then((ress) => {
        if (ress.data()) {
          seatavailablity(ress.data().dates)
        } else {
          seatavailablity([])
        }
      });
  }, [])

  return (
    <div className="single-package-main">
      {redirectLogin && <Redirect to="/signin" />}
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
        {pack &&
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

                  <div className="sngl-pack-short-itn">
                    <div className="single-pck-2-row">
                      <div className="single-pack-side-design"></div>
                      <h4>Quote</h4>
                      <hr />
                      <p>
                        {pack.quote && pack.quote}
                      </p>
                    </div>
                  </div>


                  <div className="sngl-pack-short-itn">
                    <div className="single-pck-2-row">
                      <div className="single-pack-side-design"></div>
                      <h4>Seat Availability</h4>
                      <hr />
                      {seatavail &&
                        seatavail.map((l, k) => (
                          <div key={k} className="sng-prc-tag">
                            <Row>
                              <Col lg={6}>
                                <div className="sng-prc-tag1">
                                  <h5>
                                    {l.sDate && l.sDate.seconds && new Date(l.sDate.seconds * 1000).toDateString()}
                                  </h5>
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="sng-prc-tag2">
                                  <h5>

                                    {
                                      l.seats > 4 ? <span className='seat-availablity1'><RiCheckboxCircleFill style={{ color: 'green', fontSize: '19px' }} /> Seats Availabe</span> : null
                                    }
                                    {
                                      l.seats < 3 ? <span className='seat-availablity2'> <IoAlertCircleSharp style={{ color: 'yellow', fontSize: '20px' }} /> Seats Filling</span> : null
                                    }
                                    {
                                      l.seats < 1 ? <span className='seat-availablity3'><FaTimesCircle style={{ color: 'red', fontSize: '17px' }} /> Seats Full</span> : null
                                    }

                                  </h5>
                                </div>
                              </Col>
                            </Row>
                          </div>
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
                              <p>Detailed_Itinerary</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item">
                            <a href="#briefItinerary">
                              <p>Brief_Itinerary</p>
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
                              <Row>
                                <Col lg={6}>
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
                                </Col>
                                <Col lg={6}>
                                  <div className="sng-prc-tag2">
                                    <h6>Rs {parseInt(l.cost) + 1000}</h6>
                                    <h5>
                                      Rs {l.cost} <span>{l.type}</span>
                                    </h5>
                                  </div>
                                </Col>
                              </Row>
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

                        <Row>
                          {reviewsFetched &&
                            reviews.map((review, index) => {
                              return (
                                <Col lg={6} md={6} sm={12}>
                                  <SingleReview
                                    img={review.userImage}
                                    name={review.userName}
                                    text={review.review}
                                    key={index}
                                  />
                                </Col>
                              );
                            })}
                        </Row>
                        <Form>
                          <Form.Group controlId="add-review-text">
                            <Form.Label>Enter your review</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={5}
                              value={newreview}
                              onChange={handleNewreview}
                            />
                          </Form.Group>
                        </Form>

                        <Button onClick={addNewreview} className="modal-button">
                          Add Review
                        </Button>
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
                            src={mapi}
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
        }
      </div>

      <Footer />
    </div>
  );
};

export default Singlepackage;