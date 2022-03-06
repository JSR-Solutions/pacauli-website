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
    { field: "timestamp", headerName: "Date & Time", width: 355 },
    { field: "customerName", headerName: "Customer name", width: 200 },
    {
      field: "noOfPeople",
      headerName: "Number of people",
      width: 200,
      type: "number",
    },
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
    {
      field: "Delete",
      headerName: "Delete",
      width: 200,
      renderCell: (params) => {
        return (
          <div onClick={() => {
            firebase.firestore().collection("GetInTouch").doc(params.row.id)
              .delete()
              .then((res) => {
                getRequests()
              })
          }} style={{
            height: '30px', backgroundColor: 'tomato', cursor: 'pointer',
            lineHeight: '30px', padding: '0 5px', borderRadius: '5px', color: 'white'
          }} >Delete</div>
        )
      }
    }
  ];

  function getRequests() {
    const db = firebase.firestore();
    setRequests([]);
    setLoading(true);
    db.collection("GetInTouch")
      .orderBy("timeStamp", "desc")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          querySnapshot.docs.forEach((doc) => {
            if (doc.data) {
              setRequests((prev) => {
                return [...prev, { data: doc.data(), id: doc.id }];
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
      timestamp: customRequest.data && customRequest.data.timeStamp && new Date(JSON.stringify(customRequest.data.timeStamp).slice(3, 13)).toDateString(),
      customerName: customRequest.data.name,
      noOfPeople: customRequest.data.noOfPeople,
      customerPhone: customRequest.data.phNo,
      email: customRequest.data.email,
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
