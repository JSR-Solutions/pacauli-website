import React from 'react'
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../Styles/AdminDashboard.css";

function AddPackage() {
    return (
        <div>
      <Row>
        <Col className="admin-dashboard-sidebar" lg={2} md={6}>
          <Sidebar />
        </Col>
        <Col className="admin-dashboard-content" lg={10} md={6}>
          <h3>Add Package</h3>
        </Col>
      </Row>
    </div>
    )
}

export default AddPackage
