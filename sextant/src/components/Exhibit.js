import React from "react";
import "./exhibit.css"
//props allow us to set different properties for this compennt
const Exhibit = (props) => {
    return (
        <div className = "Exhibit">
            <h2 className = "ExhibitHeading"> {props.exhibitText}</h2>
            <div className="ExhibitContent">
                    {props.children}
            </div>
        </div>
    )
} 
export default Exhibit;