import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../Styles/AdminDashboard.css";
import { DataGrid } from "@material-ui/data-grid";
import firebase from "firebase";
import "../Styles/CustomRequests.css";

function SinglePackageReviews(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const [isLoading, setLoading] = useState(false);

  const columns = [
    { field: "id", headerName: "Review ID", width: 225 },
    { field: "userId", headerName: "User ID", width: 225 },
    { field: "userName", headerName: "Customer Name", width: 250 },
    { field: "review", headerName: "Review", width: 250 },
  ];

  function getReviews() {
    const db = firebase.firestore();
    setReviews([]);
    setLoading(true);
    db.collection(props.match.params.packageType)
      .doc(props.match.params.packageId)
      .collection("Reviews")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          console.log(querySnapshot.docs.length !== 0);
          querySnapshot.docs.forEach((doc) => {
            console.log(doc.data());
            if (doc.data()) {
              const uid = doc.data().userId;
              db.collection("Users")
                .doc(uid)
                .get()
                .then((user) => {
                  const userData = user.data();
                  console.log("USER DATA");
                  console.log(userData);
                  setReviews((prev) => {
                    return [
                      ...prev,
                      {
                        id: doc.id,
                        userId: uid,
                        review: doc.data().review,
                        userName: userData.name,
                      },
                    ];
                  });
                  setLoading(false);
                });
            }
          });
        } else {
          setLoading(false);
        }
      });
  }

  const rows = reviews.map((rev) => {
    return {
      id: rev.id,
      userId: rev.userId,
      userName: rev.userName,
      review: rev.review,
    };
  });

  return (
    <div>
      <Row>
        <Col className="admin-dashboard-sidebar" lg={2} md={6}>
          <Sidebar />
        </Col>
        <Col className="admin-dashboard-content" lg={10} md={6}>
          <h3 className="admin-dashboard-title">Package Reviews</h3>
          {reviews && (
            <div style={{ height: 600, width: "100%" }}>
              <DataGrid
                className="admin-dashboard-table"
                loading={isLoading}
                rowCount={reviews.length}
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

export default SinglePackageReviews;
