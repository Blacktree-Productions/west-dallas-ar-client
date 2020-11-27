import React from "react";
import "./marker.css";
// import reactDOM from "react-dom"
// import Video from "../video/video";

const videoType = () => {
    console.log ( "video")
    return (
        <div>
          
        </div>
    );
}
    

const handleClick = () => {
    return(
    console.log("clicked"),
    videoType()
    )
}


const Marker = ({ id }) => (

  <div 
    id={`marker-${id}`} 
    onClick={handleClick} 
    className="marker" >


  </div>);


export default Marker;