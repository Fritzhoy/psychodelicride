import React from 'react';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay } from "swiper";

import imag1 from "../assets/Nfts/download_95.png"
import imag2 from "../assets/Nfts/download_96.png"
import imag3 from "../assets/Nfts/download_97.png"
import imag4 from "../assets/Nfts/download_98.png"
import imag5 from "../assets/Nfts/download_110.png"
import imag6 from "../assets/Nfts/download_111.png"
import imag7 from "../assets/Nfts/download_112.png"
import imag8 from "../assets/Nfts/download_113.png"
import imag9 from "../assets/Nfts/download_125.png"
import imag11 from "../assets/Nfts/download_126.png"
import imag12 from "../assets/Nfts/download_127.png"
import imag13 from "../assets/Nfts/download_128.png"
import imag14 from "../assets/Nfts/download_140.png"
import imag15 from "../assets/Nfts/download_141.png"
import imag16 from "../assets/Nfts/download_142.png"
import imag17 from "../assets/Nfts/download_143.png"

const Container = styled.div`
width: 25vw;
height: 70vh;

img {
  width: 100px;
  height: auto;
}

.swiper{
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: calc((100% - 30px) / 4) !important;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const Carousel = () => {
  return (
    <Container>
      <Swiper
         autoplay={{
         delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        grid={{
          rows:4,
        }}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={imag1} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag5} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag9} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag14} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag2} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag6} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag11} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag15} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag3} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag7} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag12} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag16} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag4} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag8} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag13} alt="The Gaze" ></img></SwiperSlide>
        <SwiperSlide><img src={imag17} alt="The Gaze" ></img></SwiperSlide>
      </Swiper>
    </Container>
  )
}
export default Carousel;
