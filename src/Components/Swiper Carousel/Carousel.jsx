// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { Pagination } from "swiper/modules";
import ServiceBox from "../Service Box/ServiceBox";

export default function App(params) {
  const allObjects = params.service;

  return (
    <>
      <Swiper
        slidesPerView={3}
        breakpoints={
          {

            1000: {slidesPerView: 3},
            800: {slidesPerView: 2},
            300: {slidesPerView: 1}
          }
        }
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {allObjects.map((i) => (
          <SwiperSlide key={Math.floor(Math.random() * 10000)}>
            <ServiceBox
              key={i.id}
              title={i.title}
              icon={i.icon}
              desc={i.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
