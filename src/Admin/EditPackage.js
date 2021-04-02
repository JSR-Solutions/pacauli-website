import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../Styles/AdminDashboard.css";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

function EditPackage(props) {
  const [overviews, setOverviews] = useState([""]);
  const [histories, setHistories] = useState([""]);
  const [inclusions, setInclusions] = useState([""]);
  const [exclusions, setExclusions] = useState([""]);
  const [cancellation, setCancellation] = useState([""]);
  const [map, setMap] = useState("");
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [duration, setDuration] = useState("");
  const [grade, setgrade] = useState("");
  const [maxAltitude, setMaxAltitude] = useState("");
  const [trekDistance, setTrekDistance] = useState("");
  const [briefItinerary, setBriefItinerary] = useState([
    { day: "", title: "", desc: "" },
  ]);
  const [detailedItinerary, setDetailedItinerary] = useState([
    { day: "", title: "", desc: "" },
  ]);
  const [pricing, setPricing] = useState([{ type: "", cost: 0 }]);
  const [reviews, setReviews] = useState([
    { customerName: "", customerReview: "" },
  ]);
  const [packageImage, setPackageImage] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const [packageType, setPackageType] = useState("Skiing");
  const [added, setAdded] = useState(false);
  const packageId = props.match.params.packageId;

  const db = firebase.firestore();
  const storage = firebase.storage();

  useEffect(() => {
    getPackage();
  }, []);

  const getPackage = () => {
    setPackageType(props.match.params.packageType);
    db.collection(props.match.params.packageType)
      .doc(packageId)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          setOverviews(snapshot.data().overviews);
          setHistories(snapshot.data().histories);
          setInclusions(snapshot.data().inclusions);
          setExclusions(snapshot.data().exclusions);
          setCancellation(snapshot.data().cancellation);
          setExclusions(snapshot.data().exclusions);
          setCancellation(snapshot.data().cancellation);
          setMap(snapshot.data().map);
          setgrade(snapshot.data().grade);
          setName(snapshot.data().name);
          setMap(snapshot.data().map);
          setRegion(snapshot.data().region);
          setDuration(snapshot.data().duration);
          setMaxAltitude(snapshot.data().maxAltitude);
          setTrekDistance(snapshot.data().trekDistance);
          setBriefItinerary(snapshot.data().briefItinerary);
          setDetailedItinerary(snapshot.data().detailedItinerary);
          setPricing(snapshot.data().pricing);
          setReviews(snapshot.data().reviews);
        }
      });
  };

  //Basic handle change function
  const handleChange = (e) => {
    console.log("Inside handle change");
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "duration") {
      setDuration(value);
    } else if (name === "region") {
      setRegion(value);
    } else if (name === "grade") {
      setgrade(value);
    } else if (name === "maxAltitude") {
      setMaxAltitude(value);
    } else if (name === "trekDistance") {
      setTrekDistance(value);
    }
  };

  //Package Type change handle function
  function handleTypeChange(event) {
    setPackageType(event.target.value);
    console.log(event.target.value);
  }

  //Package image change handle function
  function handleImageChange(event) {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setPackageImage(selectedFile);
    } else {
      setPackageImage(null);
    }
  }

  //Overviews dynamic part
  const handleOverviewChange = (e, index) => {
    e.preventDefault();
    const values = [...overviews];
    values[index] = e.target.value;
    setOverviews(values);
  };

  const addOverview = (e) => {
    e.preventDefault();
    setOverviews((prev) => {
      return [...prev, ""];
    });
  };

  const removeOverview = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...overviews];
    values.splice(index, 1);
    console.log(values);
    setOverviews(values);
  };

  //Histories dynamic part
  const handleHistoryChange = (e, index) => {
    e.preventDefault();
    const values = [...histories];
    values[index] = e.target.value;
    setHistories(values);
  };

  const addHistory = (e) => {
    e.preventDefault();
    setHistories((prev) => {
      return [...prev, ""];
    });
  };

  const removeHistory = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...inclusions];
    values.splice(index, 1);
    console.log(values);
    setHistories(values);
  };

  //Inclusions dynamic part
  const handleInclusionsChange = (e, index) => {
    e.preventDefault();
    const values = [...inclusions];
    values[index] = e.target.value;
    setInclusions(values);
  };

  const addInclusions = (e) => {
    e.preventDefault();
    setInclusions((prev) => {
      return [...prev, ""];
    });
  };

  const removeInclusions = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...inclusions];
    values.splice(index, 1);
    console.log(values);
    setInclusions(values);
  };

  //Exclusions dynamic part
  const handleExclusionsChange = (e, index) => {
    e.preventDefault();
    const values = [...exclusions];
    values[index] = e.target.value;
    setExclusions(values);
  };

  const addExclusions = (e) => {
    e.preventDefault();
    setExclusions((prev) => {
      return [...prev, ""];
    });
  };

  const removeExclusions = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...exclusions];
    values.splice(index, 1);
    console.log(values);
    setExclusions(values);
  };

  //Cancellation dynamic part
  const handleCancellationChange = (e, index) => {
    e.preventDefault();
    const values = [...cancellation];
    values[index] = e.target.value;
    setCancellation(values);
  };

  const addCancellation = (e) => {
    e.preventDefault();
    setCancellation((prev) => {
      return [...prev, ""];
    });
  };

  const removeCancellation = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...cancellation];
    values.splice(index, 1);
    console.log(values);
    setCancellation(values);
  };

  //Brief Itinerary dynamic part
  const handleBriefItineraryChange = (e, index) => {
    e.preventDefault();
    const values = [...briefItinerary];
    const { name, value } = e.target;
    if (name === "day") {
      values[index].day = value;
    } else if (name === "title") {
      values[index].title = value;
    } else if (name === "desc") {
      values[index].desc = value;
    }
    setBriefItinerary(values);
  };

  const addBriefItinerary = (e) => {
    e.preventDefault();
    setBriefItinerary((prev) => {
      return [...prev, { day: "", title: "", desc: "" }];
    });
  };

  const removeBriefItinerary = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...detailedItinerary];
    values.splice(index, 1);
    console.log(values);
    setBriefItinerary(values);
  };

  //Detailed Itinerary dynamic part
  const handleDetailedItineraryChange = (e, index) => {
    e.preventDefault();
    const values = [...detailedItinerary];
    const { name, value } = e.target;
    if (name === "day") {
      values[index].day = value;
    } else if (name === "title") {
      values[index].title = value;
    } else if (name === "desc") {
      values[index].desc = value;
    }
    setDetailedItinerary(values);
  };

  const addDetailedItinerary = (e) => {
    e.preventDefault();
    setDetailedItinerary((prev) => {
      return [...prev, { day: "", title: "", desc: "" }];
    });
  };

  const removeDetailedItinerary = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...detailedItinerary];
    values.splice(index, 1);
    console.log(values);
    setDetailedItinerary(values);
  };

  // Map handle change function
  const handleMapChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setMap(value);
  };

  //Pricing dynamic part
  const handlePricingChange = (e, index) => {
    e.preventDefault();
    const values = [...pricing];
    const { name, value } = e.target;
    if (name === "type") {
      values[index].type = value;
    } else if (name === "cost") {
      values[index].cost = value;
    }
    setPricing(values);
  };

  const addPricing = (e) => {
    e.preventDefault();
    setPricing((prev) => {
      return [...prev, { type: "", cost: 0 }];
    });
  };

  const removePricing = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...pricing];
    values.splice(index, 1);
    console.log(values);
    setPricing(values);
  };

  //Reviews dynamic part
  const handleReviewsChange = (e, index) => {
    e.preventDefault();
    const values = [...reviews];
    const { name, value } = e.target;
    if (name === "customerName") {
      values[index].customerName = value;
    } else if (name === "customerReview") {
      values[index].customerReview = value;
    }
    setReviews(values);
  };

  const addReviews = (e) => {
    e.preventDefault();
    setReviews((prev) => {
      return [...prev, { day: "", title: "", desc: "" }];
    });
  };

  const removeReviews = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...reviews];
    values.splice(index, 1);
    console.log(values);
    setReviews(values);
  };

  //Add Package Function
  const updatePackage = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(packageType + "/" + packageImage.name)
      .put(packageImage);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        storage
          .ref(packageType)
          .child(packageImage.name)
          .getDownloadURL()
          .then((packageImageUrl) => {
            db.collection(packageType)
              .doc(packageId)
              .update({
                overviews: overviews,
                histories: histories,
                inclusions: inclusions,
                exclusions: exclusions,
                cancellation: cancellation,
                map: map,
                name: name,
                region: region,
                duration: duration,
                grade: grade,
                maxAltitude: maxAltitude,
                trekDistance: trekDistance,
                briefItinerary: briefItinerary,
                detailedItinerary: detailedItinerary,
                pricing: pricing,
                imageUrl: packageImageUrl,
                packageType: packageType,
              })
              .then((docRef) => {
                setAdded(true);
              });
          });
      }
    );
  };

  const deletePackage = (e) => {
    e.preventDefault();
    db.collection(packageType)
      .doc(packageId)
      .delete()
      .then(() => {
        setAdded(true);
      });
  };

  return (
    <div>
      {added ? <Redirect to={`/admin/dashboard`} /> : null}
      <Row>
        <Col className="admin-dashboard-sidebar" lg={2} md={6}>
          <Sidebar />
        </Col>
        <Col className="admin-dashboard-content" lg={10} md={6}>
          <h3 className="admin-dashboard-title">Edit Package</h3>
          <Form className="admin-dashboard-form">
            <h5 className="form-admin-title">Package Name</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    name="name"
                    required
                    value={name}
                    placeholder={"Package Name"}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h5 className="form-admin-title">Package Type</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    onChange={handleTypeChange}
                    className="add-package-form-input"
                    as="select"
                    required
                    name="package-type"
                    value={packageType}
                  >
                    <option>Skiing</option>
                    <option>Trekking</option>
                    <option>Expedition</option>
                    <option>Rock Climbing</option>
                    <option>Camping</option>
                    <option>Cycling</option>
                    <option>Rafting</option>
                    <option>Char Dham</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h5 className="form-admin-title">Package Duration</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    required
                    name="duration"
                    value={duration}
                    placeholder={"Package Duration"}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr />
            <h5 className="form-admin-title">Package Region</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    name="region"
                    value={region}
                    placeholder={"Package Region"}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr />
            <h5 className="form-admin-title">Package Grade</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    required
                    name="grade"
                    value={grade}
                    placeholder={"Package Grade"}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h5 className="form-admin-title">Package Max Altitude</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    required
                    name="maxAltitude"
                    value={maxAltitude}
                    placeholder={"Package Max Altitude"}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h5 className="form-admin-title">Package Trekking Distance</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    required
                    name="trekDistance"
                    value={trekDistance}
                    placeholder={"Package Trekking Distance"}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr />
            <h5 className="form-admin-title">Overview</h5>
            {overviews.map((overview, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          as="textarea"
                          required
                          name="overview"
                          value={overview}
                          placeholder={"Overview paragraph " + (index + 1)}
                          onChange={(event) => {
                            handleOverviewChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addOverview}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeOverview(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">History</h5>
            {histories.map((history, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          as="textarea"
                          required
                          name="history"
                          value={history}
                          placeholder={"History paragraph " + (index + 1)}
                          onChange={(event) => {
                            handleHistoryChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addHistory}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeHistory(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Brief Itinerary</h5>
            {briefItinerary.map((brief, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          required
                          className="admin-dashboard-form-input"
                          type="text"
                          name="day"
                          value={brief.day}
                          placeholder={"Day " + (index + 1)}
                          onChange={(event) => {
                            handleBriefItineraryChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          required
                          name="title"
                          value={brief.title}
                          placeholder={"Title " + (index + 1)}
                          onChange={(event) => {
                            handleBriefItineraryChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          required
                          name="desc"
                          value={brief.desc}
                          placeholder={"Description " + (index + 1)}
                          onChange={(event) => {
                            handleBriefItineraryChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addBriefItinerary}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeBriefItinerary(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Detailed Itinerary</h5>
            {detailedItinerary.map((detailed, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          required
                          name="day"
                          value={detailed.day}
                          placeholder={"Day " + (index + 1)}
                          onChange={(event) => {
                            handleDetailedItineraryChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="title"
                          required
                          value={detailed.title}
                          placeholder={"Title " + (index + 1)}
                          onChange={(event) => {
                            handleDetailedItineraryChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          as="textarea"
                          required
                          name="desc"
                          value={detailed.desc}
                          placeholder={"Description " + (index + 1)}
                          onChange={(event) => {
                            handleDetailedItineraryChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addDetailedItinerary}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeDetailedItinerary(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Pricing</h5>
            {pricing.map((price, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          required
                          className="admin-dashboard-form-input"
                          type="text"
                          name="type"
                          value={price.type}
                          placeholder={"Pricing Type " + (index + 1)}
                          onChange={(event) => {
                            handlePricingChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="number"
                          required
                          name="cost"
                          value={price.cost}
                          placeholder={"Cost " + (index + 1)}
                          onChange={(event) => {
                            handlePricingChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addPricing}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removePricing(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Inclusions</h5>
            {inclusions.map((inclusion, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          required
                          name="inclusion"
                          value={inclusion}
                          placeholder={"Inclusion " + (index + 1)}
                          onChange={(event) => {
                            handleInclusionsChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addInclusions}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeInclusions(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Exclusions</h5>
            {exclusions.map((exclusion, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          required
                          name="exclusion"
                          value={exclusion}
                          placeholder={"Exclusion " + (index + 1)}
                          onChange={(event) => {
                            handleExclusionsChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addExclusions}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeExclusions(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Cancellation Policy</h5>
            {cancellation.map((canc, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          required
                          name="cancellation"
                          value={canc}
                          placeholder={"Cancellation Term " + (index + 1)}
                          onChange={(event) => {
                            handleCancellationChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addCancellation}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeCancellation(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            {/* <h5 className="form-admin-title">Reviews</h5>
            {reviews.map((review, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          required
                          name="customerName"
                          value={review.customerName}
                          placeholder={"Customer Name"}
                          onChange={(event) => {
                            handleReviewsChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          required
                          name="customerReview"
                          value={review.customerReview}
                          placeholder={"Customer Review"}
                          onChange={(event) => {
                            handleReviewsChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addReviews}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeReviews(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr /> */}
            <h5 className="form-admin-title">Map</h5>
            <Row>
              <Col lg={10}>
                <Form.Group>
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    name="map"
                    required
                    value={map}
                    placeholder={"Map Location"}
                    onChange={(event) => {
                      handleMapChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h5 className="form-admin-title">Package Image</h5>
            <Row>
              <Col lg={10}>
                {" "}
                <Form.Group className="admin-dashboard-form-group">
                  <Form.File
                    id="form-image"
                    name="packageImage"
                    onChange={handleImageChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <Button
              onClick={updatePackage}
              className="admin-add-package-button"
            >
              Update Package
            </Button>
            <hr />
            <Button
              onClick={deletePackage}
              className="admin-add-package-button"
            >
              Delete Package
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default EditPackage;
