import React from "react";
import Spinner from "react-bootstrap/Spinner";

import "../Styles/LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen-main">
      <h2 className="loading-screen-title">PACAULI</h2>
      <p>Please wait, your requested data is being loaded.</p>
      <div className="loading-screen-spinners-div">
        <Spinner className="loading-screen-spinner" animation="grow" />
        <Spinner className="loading-screen-spinner" animation="grow" />
        <Spinner className="loading-screen-spinner" animation="grow" />
      </div>
    </div>
  );
}

export default LoadingScreen;
