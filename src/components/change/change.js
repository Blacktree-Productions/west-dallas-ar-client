import React, { useContext } from "react";
import Nav from "../nav/nav";
import Float from "../float/float";
import { SwipeContext } from "../App/App" ;


const Change = () => {
    const { slide } = useContext(SwipeContext);
    if (slide === 2 ) {
        return(
            <Nav/>
        )
    }else {
        return(
            <Float/>
        )
    }
}
export default Change;