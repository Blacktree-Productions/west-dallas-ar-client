import React from "react";
import Swiper from 'react-id-swiper';
import { MapboxGLMap } from ".";
import 'swiper/swiper-bundle.css';
import './styles.css';
// import MapboxGLMap from "./MapboxGLMap";


const Layout = () => (
  <Swiper>
    <div ><h1>West Dallas AR</h1></div>
    <div >Land Acknowledgement</div>
    <div ><MapboxGLMap/></div>
  </Swiper>
);

export default Layout;
