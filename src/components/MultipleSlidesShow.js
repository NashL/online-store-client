import React from "react";
// import Swiper core and required components
import SwiperCore, { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import slide1 from "../images/multiple-slides-carousel/slide1.jpg";
import slide2 from "../images/multiple-slides-carousel/slide2.jpg";
import slide3 from "../images/multiple-slides-carousel/slide3.jpg";
import slide4 from "../images/multiple-slides-carousel/slide4.jpg";
import slide5 from "../images/multiple-slides-carousel/slide5.jpg";
import slide6 from "../images/multiple-slides-carousel/slide6.jpg";
import slide7 from "../images/multiple-slides-carousel/slide7.jpg";
import slide8 from "../images/multiple-slides-carousel/slide8.jpg";
import slide9 from "../images/multiple-slides-carousel/slide9.jpg";
import slide10 from "../images/multiple-slides-carousel/slide10.jpg";
import slide11 from "../images/multiple-slides-carousel/slide11.jpg";
import slide12 from "../images/multiple-slides-carousel/slide12.jpg";

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
];

// install Swiper components
SwiperCore.use([Navigation, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      slidesPerGroup={4}
      speed={500}
      navigation
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {slides.map((slide, index) => 
        <SwiperSlide key={`MSS-${index}`}>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            alt={"slide" + index}
            src={slide}
          />
        </SwiperSlide>
      )}
    </Swiper>
  );
};
