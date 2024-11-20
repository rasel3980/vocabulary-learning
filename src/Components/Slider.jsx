import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import image from "./../assets/homework-8533767_1920.png";
import image2 from "./../assets/online-spanish.jpg";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-10 w-full md:w-11/12 h-80 md:h-[400px]"
        loop={true}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Homework image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={image2}
              alt="Online Spanish learning"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
