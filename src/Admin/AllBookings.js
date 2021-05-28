import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../Styles/AdminDashboard.css";
import { DataGrid } from "@material-ui/data-grid";
import firebase from "firebase";
import "../Styles/CustomRequests.css";

function AllBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getEnquiries();
  }, []);

  const [isLoading, setLoading] = useState(false);

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
      console.log(bookings);
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
      packageData: booking.packageDataF,
    };
  });

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
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default AllBookings;
