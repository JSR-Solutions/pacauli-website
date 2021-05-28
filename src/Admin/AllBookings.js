import React, { useState, useEffect } from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../Styles/AdminDashboard.css";
import { DataGrid } from "@material-ui/data-grid";
import firebase from "firebase";
import "../Styles/CustomRequests.css";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-booking-modal"
    >
      <Modal.Body>
        <Card className="admin-booking-card">
          <Row>
            <Col lg={4}>
              <img
                src={props.selectedBooking.packageData.imageUrl}
                alt={props.selectedBooking.packageData.name}
              />
            </Col>
            <Col lg={8}>
              <Row>
                <Col>
                  <p>
                    <strong>Customer Name :</strong>{" "}
                    {props.selectedBooking.userData.name}
                  </p>
                  <p>
                    <strong>Phone Number :</strong>{" "}
                    <a href={`tel:${props.selectedBooking.userData.phone}`}>
                      {props.selectedBooking.userData.phone}
                    </a>
                  </p>
                  <p>
                    <strong>Email :</strong>{" "}
                    <a href={`mailto:${props.selectedBooking.userData.email}`}>
                      {props.selectedBooking.userData.email}
                    </a>
                  </p>
                  <p>
                    <strong>Address :</strong>{" "}
                      {props.selectedBooking.userData.city}
                  </p>
                  <p>
                    <strong>Package Category :</strong>{" "}
                    {props.selectedBooking.bookingData.packageType}
                  </p>
                  <p>
                    <strong>Package Name :</strong>{" "}
                    {props.selectedBooking.packageData.name}
                  </p>
                  <p>
                    <strong>Booking Date :</strong>{" "}
                    {props.selectedBooking.bookingData.dateOfBooking.substring(
                      4,
                      props.selectedBooking.bookingData.dateOfBooking.length
                    )}
                  </p>
                  <p>
                    <strong>Travel Date :</strong>{" "}
                    {props.selectedBooking.bookingData.bookingDate}
                  </p>
                  <p>
                    <strong>Number Of Seats :</strong>{" "}
                    {props.selectedBooking.bookingData.numberOfSeats}
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>Total Cost :</strong>{" "}
                    {props.selectedBooking.bookingData.totalCost}
                  </p>
                  <p>
                    <strong>Total Paid :</strong>{" "}
                    {props.selectedBooking.bookingData.totalPaid}
                  </p>
                  <p>
                    <strong>Advance :</strong>{" "}
                    {props.selectedBooking.bookingData.totalAdvance}
                  </p>
                  <p>
                    <strong>GST Paid :</strong>{" "}
                    {props.selectedBooking.bookingData.gst}
                  </p>
                  <p>
                    <strong>Total Pending :</strong>{" "}
                    {props.selectedBooking.bookingData.totalCost -
                      props.selectedBooking.bookingData.totalAdvance} + GST @ 18%
                  </p>
                  <p>
                    <strong>Booking ID :</strong>{" "}
                    {props.selectedBooking.bookingData.bookingId}
                  </p>
                  <p>
                    <strong>Transaction ID :</strong>{" "}
                    {props.selectedBooking.bookingData.transactionId}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Modal.Body>
    </Modal>
  );
}

function AllBookings() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getEnquiries();
  }, []);

  const columns = [
    { field: "id", headerName: "Booking ID", width: 225 },
    { field: "bookingDate", headerName: "Date Of Booking", width: 240 },
    { field: "travelDate", headerName: "Date Of Travel", width: 240 },
    { field: "packageName", headerName: "Package Name", width: 240 },
    { field: "customerName", headerName: "Customer name", width: 240 },
    {
      field: "customerPhone",
      headerName: "Customer Number",
      sortable: true,
      width: 205,
    },
    { field: "noOfPeople", headerName: "Number Of People", width: 240 },
    {
      field: "amountPaid",
      headerName: "Amount Paid",
      type: "number",
      width: 240,
    },
    {
      field: "amountPending",
      headerName: "Amount Pending",
      type: "number",
      width: 250,
    },
  ];

  function getEnquiries() {
    const db = firebase.firestore();
    setBookings([]);
    setLoading(true);
    db.collection("Bookings")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          querySnapshot.docs.forEach((doc) => {
            const bookingData = doc.data();
            const packageId = bookingData.packageId;
            const packageType = bookingData.packageType;
            const userId = bookingData.userId;
            db.collection(packageType)
              .doc(packageId)
              .get()
              .then((snapshot) => {
                const packageData = snapshot.data();
                db.collection("Users")
                  .doc(userId)
                  .get()
                  .then((snap) => {
                    const userData = snap.data();
                    if (userData) {
                      setBookings((prev) => {
                        return [
                          ...prev,
                          {
                            bookingData: bookingData,
                            packageData: packageData,
                            userData: userData,
                          },
                        ];
                      });
                      setLoading(false);
                    }
                  });
              });
          });
        } else {
          setLoading(false);
        }
      });
  }

  const rows = bookings.map((booking) => {
    return {
      id: booking.bookingData.bookingId,
      customerName: booking.userData.name,
      packageName: booking.packageData.name,
      bookingDate: booking.bookingData.dateOfBooking.substring(
        4,
        booking.bookingData.dateOfBooking.length
      ),
      travelDate: booking.bookingData.bookingDate,
      amountPaid: booking.bookingData.totalPaid,
      noOfPeople: booking.bookingData.numberOfSeats,
      customerPhone: booking.userData.phone,
      amountPending:
        booking.bookingData.totalCost - booking.bookingData.totalAdvance,
      bookingData: booking.bookingData,
      userData: booking.userData,
      packageData: booking.packageData,
    };
  });

  const showBooking = (row) => {
    console.log(row.data);
    setSelectedBooking(row.data);
    setModalShow(true);
  };

  return (
    <div>
      <Row>
        <Col className="admin-dashboard-sidebar" lg={2} md={6}>
          <Sidebar />
        </Col>
        <Col className="admin-dashboard-content" lg={10} md={6}>
          <h3 className="admin-dashboard-title">All Bookings</h3>
          {bookings && (
            <div style={{ height: 600, width: "100%" }}>
              <DataGrid
                className="admin-dashboard-table"
                loading={isLoading}
                rowCount={bookings.length}
                rowsPerPageOptions={[5, 10, 15]}
                rows={rows}
                columns={columns}
                pageSize={10}
                onRowSelected={showBooking}
              />
              {selectedBooking && (
                <MyVerticallyCenteredModal
                  show={modalShow}
                  selectedBooking={selectedBooking}
                  onHide={() => setModalShow(false)}
                />
              )}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default AllBookings;
