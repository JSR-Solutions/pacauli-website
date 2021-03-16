import React from "react";
import "../Styles/catStrip.css"

function catStrip(props){
    let catStripCss={
        background:`url(${props.img})`,
        width: "100%",
        height: "400px",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center",
        paddingTop:"150px" 
    }
    return(
        <div style={catStripCss}>
            <h1>{props.Name}</h1>
        </div>

    );
}
export default catStrip;