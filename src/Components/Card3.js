import React, { useEffect } from "react";
import "../Styles/Card3.css";
import { MdLocationOn } from "react-icons/md";
import { AiFillStar, AiFillClockCircle } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

function Card3() {
  return (
    <div className="parent-card3">
      <Link to="/singlepackage">
        <div className="card3">
          <div
            className="card3-image"
            
          ></div>
          <div className="card3-text">
            <div className="tagyu">
              <p>Featured</p>
            </div>
            <h4>
              <MdLocationOn className="loci" />
              Pangarchulla Adventure & Camps
            </h4>
            <h6>
              <AiFillClockCircle id="clocki" />
              5N|6D <BiRupee id="rpe" />
              5000/-
            </h6>
            <p className="rev-card3">
              <AiFillStar style={{ color: "gold" }} />{" "}
              4.3 (20 reviews)
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Card3;
