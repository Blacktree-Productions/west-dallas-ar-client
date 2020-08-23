import React, { useEffect,useRef,useState } from "react";
import Swiper from 'swiper';
// import { MapboxGLMap } from ".";
import 'swiper/swiper-bundle.css';
import './styles.css';
// import Nav from "./nav/nav";




const Swipe = props => {
  const swiper = useRef(null);
  const [ swipeState] = useState(props);
  console.log(swipeState.slide); 
  useEffect(() =>{
    swiper.current=new Swiper('.swiper-container', {
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      }

    })
    swiper.current.on('slideChange', ()=>{
        console.log(swiper.current.activeIndex)
    })
    // add necessary parameters here
    

  },[]);

  useEffect(() => {
    swiper.current.update();

  },[])

  return(
    <div className="swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            <div className="swiper-slide">Slide 4</div>
        </div>
    </div>
  )
};

export default Swipe;
