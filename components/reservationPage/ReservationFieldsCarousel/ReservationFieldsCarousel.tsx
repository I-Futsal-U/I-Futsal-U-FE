"use client";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ReservationFieldsItem from "./ReservationFieldsItem";

export default function ReservationFieldsCarousel() {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <ReservationFieldsItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
