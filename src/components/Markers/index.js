import React from "react";
import "./marker.css";
// import reactDOM from "react-dom"
// import Video from "../video/video";

const videoType = (props) => {
    console.log (props)
    return (
        <div className="video">
      {props.description}
        </div>
    );
}
    

const handleClick = (props) => {
    return(
    console.log(props),
    videoType(props)
    )
}


const Marker = ({ id, description, video }) => {

  console.log(id, description, video)
  return(
  <div 
    id={id} 
    description={description}
    onClick={() => handleClick({description, video})} 
    className="marker" >
  </div>
  
  );
};


export default Marker;