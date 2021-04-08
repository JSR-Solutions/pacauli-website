import React from "react";
import "../Styles/dateupload.css";
import { useState,useEffect } from "react";
import { Form, Button,Col,Row } from "react-bootstrap";
import firebase from "firebase";
import Sidebar from "./Sidebar"
import { Redirect } from "react-router-dom";
import DatePicker from "react-date-picker";

function EditDate(props){

    const [dates, setDates] = useState([
        { sDate: "", seats: "" }
      ]);
      const [packageType, setPackageType] = useState("Skiing");
      const db = firebase.firestore();
      const packageId = props.match.params.packageId;
      const [finalDates, setFinalDates] = useState([]);
  const [added, setAdded] = useState(false);
  


      useEffect(()=>{
        getDates();
      },[]);

      function getDates(){
        setPackageType(props.match.params.packageType);
        db.collection(props.match.params.packageType)
          .doc(packageId)
          .collection("Dates")
          .doc("dates")
          .get()
          .then((snapshot) => {
            if (snapshot) {
                
                console.log(snapshot.data().dates);
      }
    });
};

function addDate() {
    setDates((prev) => {
      return [...prev, { sDate: "", seats: "" }];
    });
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
    if(finalDates != []) {
      db.collection(props.match.params.packageType)
      .doc(props.match.params.packageId)
      .collection("Dates")
      .doc("dates")
      .update({
         dates
      })
      .then(() => {
        setAdded(true);
      });
    }
  }
  return(
    <div>
    <Row>
        <Col className="admin-dashboard-sidebar" lg={2} md={6}>
          <Sidebar />
        </Col>
    <Col className="admin-dashboard-content" lg={10} md={6}>
    <div style={{height:"100vh"}}>
    <div className="add-package-form-section">
      {added ? <Redirect to={"/admin/dashboard"} /> : null}
      <h2 className="add-package-form-section-title"> Package Dates </h2>
      <hr />
      <Form className="form-add-package">
        {dates.map((date, index) => {
          return (
            <Form.Group
              className="add-package-form-group"
              controlId="package-dates"
            >
                <Form.Label>Old Date:{date.sDate}</Form.Label>
              <Form.Label className="add-package-form-label">
                Date {index + 1}
              </Form.Label>
              <br />
              <DatePicker
                onChange={(newDate) => {
                  const values = [...dates];
                  values[index].sDate = newDate;
                  setDates(values);
                }}
                value={date.sDate}
                name="sDate"
              />
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

              <Button onClick={addDate} className="inline-button">
                {" "}
                +{" "}
              </Button>
              <Button
                onClick={() => removeDate(index)}
                className="inline-button"
              >
                {" "}
                -{" "}
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
