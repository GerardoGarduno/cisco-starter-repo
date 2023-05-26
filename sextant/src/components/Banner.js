import React from "react";
import "./banner.css"

const Banner = () => {
    return(
        <div className="Banner">
            <h1 className="Banner">Sextant Header</h1>
        </div>
    )  
};
export default Banner;


//This is Class Component  this is different from a function component
//We can tell by declration of class 
//more feature rich
// class Banner extends Component (){
//     render(){
//         return(
//             <div className="banner-text">
//                 {this.props.bannerText}
//             </div>
//         );
//     }
// }