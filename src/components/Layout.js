import React from "react";
import Swiper from 'react-id-swiper';
// import { MapboxGLMap } from ".";
import 'swiper/swiper-bundle.css';
import './styles.css';
// import Nav from "./nav/nav";


// in order to access swiper params react hooks TODO: not yet fuctional 
const swiperReference = useRef(null);

useLayoutEffect(() => {
  swiperReference.current = new Swiper(swiperContainerRef.current, {
    // parameters
  });
}, []);

console.log(swiperReference.current);   // access to the swiper instance


const Layout = () => (
  <div>
    <Swiper>
      <div id="1">
        <h1>West Dallas AR</h1>
        <br/>
        <h2>Beauty in the Barrio</h2>
      </div>
      <div id ="2">
        <h2>West Dallas Ar</h2>
        <p>Land Acknowledgement</p>
        <p>West Dallas Ar acknowledges the land this community is built upon the occupind/unceded and siezed territory of the Wichita, Caddo and Cherokee Tribes. Those tribes have steward this land throughout generations, and we pay respect to their elders, past and present.</p>
      </div >
      <div id="3">directions</div>
    </Swiper>
    {/* <Nav />     */}
  </div>

);

export default Layout;
