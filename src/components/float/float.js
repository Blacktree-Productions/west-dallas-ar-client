import React, { useContext } from "react";
import { SwipeContext } from "../../containers/App";
// import "float.css";


const Float = () => {
    const { slide } = useContext(SwipeContext);

        if (slide === 0 ){
            return ( 
                <div className="float">
                    <h1>ENTER</h1>
                    <p>and such and such...</p>
                </div>
            )
        } else{
            return (
                <div className="float">
                    <h2>something else</h2>
                    <p>more stuff</p>
                </div>
            )    
        }
};

export default Float;