import React, { useContext } from "react";
import { SwipeContext } from "../../containers/App";
import Box from '@material-ui/core/Box';
// import "float.css";


const Float = () => {
    const { slide } = useContext(SwipeContext);

        if (slide === 0 ){
            return ( 
                <Box 
                  bgcolor="background.paper"
                  color="text.primary"
                  p={2}
                  position="absolute"
                  top={40}
                  left="40%"
                  zIndex="tooltip"

                >
                    <h1>ENTER</h1>
                    <p>and such and such...</p>
                </Box>
            )
        } else{
            return (
                <Box 
                  bgcolor="background.paper"
                  color="text.primary"
                  p={2}
                  position="absolute"
                  top={40}
                  left="40%"
                  zIndex="tooltip"

                >
                    <h2>something else</h2>
                    <p>more stuff</p>
                </Box>
            )    
        }
};

export default Float;