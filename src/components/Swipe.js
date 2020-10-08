import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { SwipeContext } from '../containers/App';

const Swipe = () => {
    const { setSlide } = useContext(SwipeContext);
    function update(props) {
      setSlide(props)
    };
    return (
        <Swiper
          style={{height: "300px", backgroundColor: "grey"}}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => update(swiper.activeIndex)}
          // onSwiper={(swiper) => console.log(swiper.activeIndex)}
        //   initialSlide={2}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>


        </Swiper>
      );
}

export default Swipe;