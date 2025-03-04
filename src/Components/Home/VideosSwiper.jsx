import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper';
export default function VideosSwiper() {

  const slides = [];

  for (let i = 0; i <= 17; i++) {
    slides.push(
      <SwiperSlide className="" key={`slide-${i}`}>
        <img className="w-[22vw] rounded-md h-[16vw] object-cover" src={`/Images/collab${i + 1}.jpeg`} alt="" />
      </SwiperSlide>
    );
  }
  return (
    <div>
      <div className="slides relative ">

        <Swiper
          className="w-[70%]"
          // install Swiper modules
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
        >
          {slides}



        </Swiper>
        <div className="slider-controler absolute h-full   top-0 w-full  ">
          <div className="swiper-button-prev slider-arrow border-2 p-8 rounded-full  scale-[.8] text-white font-extrabold btn btn-gradient-border btn-glow   ">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow border-2 p-8 rounded-full scale-[.8] text-white font-extrabold btn btn-gradient-border btn-glow  ">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}
