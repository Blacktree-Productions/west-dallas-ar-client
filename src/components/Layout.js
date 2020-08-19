import React from "react";
import Swiper from 'react-id-swiper';
import { MapboxGLMap } from ".";

const Layout = () => (
  <Swiper>
    <div>Slide #1</div>
    <div>Slide #2</div>
    <div>Slide #3</div>
    <div><MapboxGLMap/></div>
    <div>Slide #5</div>
  </Swiper>
);

export default Layout;
