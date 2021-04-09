import React from "react";
import "../Styles/dateupload.css";
import { useState, useEffect } from "react";
import { Form, Button, Col, Row, Modal } from "react-bootstrap";
import firebase from "firebase";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import DatePicker from "react-date-picker";
import moment from "moment";

function EditDate(props) {
  const [i,setI]=useState(0);
  const datte = [{ sDate: "", seats: "" }];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dates, setDates] = useState([{ sDate: "", seats: "" }]);
  const [datess, setDatess] = useState([{ sDate: "", seats: "" }]);
  const [packageType, setPackageType] = useState("Skiing");
  const db = firebase.firestore();
  const packageId = props.match.params.packageId;
  const [finalDates, setFinalDates] = useState([]);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    getDates();
  }, []);

  function getDates() {
    setPackageType(props.match.params.packageType);
    db.collection(props.match.params.packageType)
      .doc(packageId)
      .collection("Dates")
      .doc("dates")
      .get()
      .then((snapshot) => {
        if (snapshot) {
          snapshot.data().dates.map((datee, index) => {
            datee.sDate = moment.unix(datee.sDate.seconds).format("DD-MM-YYYY");
            console.log(datee.sDate);

            datte[index] = datee;
          });

          setDates(datte);
          setDatess(datte);
        }
      });
  }

  /*   function dateArray(){
        
    dates.forEach((date,index) => {
        d[index]=moment.unix(date.sDate.seconds).format("DD-MM-YYYY");
    });
    };*/
  function editDate(index) {
    setShow(true);
    setI(index);
    console.log(index);
  }
  function removeDate(index) {
    const values = [...dates];
    console.log("Removing : " + index);
    values.splice(index, 1);
    setDates(values);
  }

  function handleDateChange(index, event) {
    const values = [...dates];
    if (event) {
      const { name, value } = event.target;
      if (name == "seats") {
        values[index].seats = value;
      }
    }

    setDates(values);
    console.log(dates);
  }

  function addMonth() {
    if (finalDates != []) {
      setDates(datess);
      db.collection(props.match.params.packageType)
        .doc(props.match.params.packageId)
        .collection("Dates")
        .doc("dates")
        .set({
          dates,
        })
        .then(() => {
          setAdded(true);
        });
    }
  }
  return (
    <div>
      <Row>
        <Col className="admin-dashboard-sidebar" lg={2} md={6}>
          <Sidebar />
        </Col>
        <Col className="admin-dashboard-content" lg={10} md={6}>
          <div style={{ height: "100vh" }}>
            <div className="add-package-form-section">
              {added ? <Redirect to={"/admin/dashboard"} /> : null}
              <h2 className="add-package-form-section-title">
                {" "}
                Package Dates{" "}
              </h2>
              <hr />
              <Form className="form-add-package">
                {dates.map((date, index) => {
                  return (
                    <Form.Group
                      className="add-package-form-group"
                      controlId="package-dates"
                    >
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Select New Date</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <DatePicker
                            onChange={(newDate) => {
                              const values = [...datess];
                              values[i].sDate = newDate;
                              setDatess(values);
                              handleClose();
                              console.log(i);
                            }}
                            name="sDate"
                          />
                          <br></br>
                          <br></br>
                          <Form.Control
                        onChange={(e) => {
                          handleDateChange(index, e);
                        }}
                        placeholder={"Seats"}
                        className="add-package-form-input date-input"
                        type="text"
                        name="seats"
                        value={date.seats}
                      />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <Form.Control
                        type="text"
                        value={date.sDate}
                        name="sDate"
                      ></Form.Control>
                      <Form.Label className="add-package-form-label">
                        Date {index + 1}
                      </Form.Label>
                      <br />

                      <Form.Control
                        onChange={(e) => {
                          handleDateChange(index, e);
                        }}
                        placeholder={"Seats"}
                        className="add-package-form-input date-input"
                        type="text"
                        name="seats"
                        value={date.seats}
                      />

                      <Button onClick={()=>{
                        editDate(index);
                      }} className="inline-button">
                        Edit date
                      </Button>
                    </Form.Group>
                  );
                })}
              </Form>
              <Button onClick={addMonth} variant="dark">
                Submit
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default EditDate;
