import React from "react";
import "../Styles/Card3.css";
import { MdLocationOn } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

function Card3(props) {

  var redirect = ""

  if (props.categoryName) {
    if (props.categoryName == 'Rafting' || props.categoryName == 'Skiing' || props.categoryName == 'Camping' || props.categoryName == 'Snow Boarding' || props.categoryName == 'Rock Climbing') {
      redirect = `/packages/${props.categoryName}/${props.package.packageId}`
    }
    else {
      redirect = `/package/${props.categoryName}/${props.package.packageId}`
    }
  }

  return (
    <div className="parent-card3">
      <Link to={`${redirect}`}>
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
              {props.duration != "" && <AiFillClockCircle id="clocki" />}
              {props.duration} <BiRupee id="rpe" />
              {props.costing}
            </h6>
            {/* <p className="rev-card3">
              <AiFillStar style={{ color: "gold" }} />{" "}
              {props.rating} (20 reviews)
            </p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Card3;
