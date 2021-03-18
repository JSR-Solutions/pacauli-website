import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../Styles/AdminDashboard.css";
import { DataGrid } from "@material-ui/data-grid";
import firebase from "firebase";
import "../Styles/CustomRequests.css";

function GetInTouch() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests();
  }, []);

  const [isLoading, setLoading] = useState(false);

  const columns = [
    { field: "id", headerName: "Request ID", width: 225 },
    { field: "customerName", headerName: "Customer name", width: 250 },
    { field: "date", headerName: "Date", width: 250 },
    { field: "noOfPeople", headerName: "Number of people", width: 150, type: "number" },
    {
      field: "customerPhone",
      headerName: "Customer Number",
      sortable: true,
      width: 225,
    },
    {
      field: "email",
      headerName: "Customer Email",
      width: 250,
    },
  ];

  function getRequests() {
    const db = firebase.firestore();
    setRequests([]);
    setLoading(true);
    db.collection("GetInTouch")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          console.log(querySnapshot.docs.length !== 0);
          querySnapshot.docs.forEach((doc) => {
            console.log(doc.data());
            if (doc.data) {
              setRequests((prev) => {
                return [...prev, doc.data()];
              });
              setLoading(false);
            }
          });
        } else {
          setLoading(false);
        }
      });
  }

  const rows = requests.map((customRequest) => {
    return {
      id: customRequest.id,
      customerName: customRequest.name,
      date: customRequest.Date,
      noOfPeople: customRequest.noOfPeople,
      customerPhone: customRequest.phNo,
      email: customRequest.email,
    };
  });
  return (
    <div>
      <Row>
        <Col className="admin-dashboard-sidebar" lg={2} md={6}>
          <Sidebar />
        </Col>
        <Col className="admin-dashboard-content" lg={10} md={6}>
          <h3 className="admin-dashboard-title">Get In Touch Requests</h3>
          {requests && (
            <div style={{ height: 600, width: "100%" }}>
              <DataGrid
              className="admin-dashboard-table"
                loading={isLoading}
                rowCount={requests.length}
                rowsPerPageOptions={[5, 10, 15]}
                rows={rows}
                columns={columns}
                pageSize={10}
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default GetInTouch;
