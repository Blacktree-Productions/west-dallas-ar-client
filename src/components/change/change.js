import React, { useContext } from "react";
import Nav from "../nav/nav";
import Float from "../float/float";
import { SwipeContext } from "../../containers/App" ;


const Change = () => {
    const { slide } = useContext(SwipeContext);
    console.log(slide);
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