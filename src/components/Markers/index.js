import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
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
    

const handleOpen = (props) => {
    // setOpen(true);
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
    onClick={() => handleOpen({description, video})} 
    className="marker" >
  </div>

  
  );
};


export default Marker;