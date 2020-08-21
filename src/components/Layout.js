import React from "react";
import Swiper from 'react-id-swiper';
// import { MapboxGLMap } from ".";
import 'swiper/swiper-bundle.css';
import './styles.css';
// import Nav from "./nav/nav";




const Layout = () => (
  <div>
    <Swiper>
      <div >
        <h1>West Dallas AR</h1>
        <br/>
        <h2>Beauty in the Barrio</h2>
      </div>
      <div >
        <h2>West Dallas Ar</h2>
        <p>Land Acknowledgement</p>
        <p>West Dallas Ar acknowledges the land this community is built upon the occupind/unceded and siezed territory of the Wichita, Caddo and Cherokee Tribes. Those tribes have steward this land throughout generations, and we pay respect to their elders, past and present.</p>
      </div>
      <div >directions</div>
    </Swiper>
    {/* <Nav />     */}
  </div>

);

export default Layout;
