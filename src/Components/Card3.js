import React from "react";
import "../Styles/Card3.css";
import { MdLocationOn } from "react-icons/md";
import { AiFillStar, AiFillClockCircle } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

function Card3(props) {

  return (
    <div className="parent-card3">
      <Link to={`/package/${props.categoryName}/${props.package.packageId}`}>
        <div className="card3">
          <div
            className="card3-image"
            style={{ backgroundImage: `url(${props.imageUrl})` }}

          ></div>
          <div className="card3-text">
            <div className="tagyu">
              <p>Featured</p>
            </div>
            <h4>
              <MdLocationOn className="loci" />
              {props.packageName}
            </h4>
            <h6>
              <AiFillClockCircle id="clocki" />
              {props.duration} <BiRupee id="rpe" />
              {props.costing}
            </h6>
            <p className="rev-card3">
              <AiFillStar style={{ color: "gold" }} />{" "}
              {props.rating} (20 reviews)
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Card3;
