"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import mockdata from "../mockdata.json";
import ReservationFieldsItem from "./ReservationFieldsItem";

export default function ReservationFieldsCarousel() {
  const data = mockdata.Field;

  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-10/12 md:w-9/12 lg:w-7/12 h-96 bg-gray-200"
        >
          {data?.img?.map((item: string) => {
            return (
              <SwiperSlide
                key={item.split("/media")[1]}
                className="bg-white flex items-center justify-center "
              >
                <ReservationFieldsItem image={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
