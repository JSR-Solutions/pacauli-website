import React from "react";
import '../Styles/Iconholder.css'
const Iconholder = (props) => {
  return (
    <div className="iconholder-god">
      <div class="iconholder upar">{props.title}</div>
      <div class="iconholder andar" style={{ backgroundImage: `url(${props.icon})` }}></div>
    </div>
  );
};

export default Iconholder;
