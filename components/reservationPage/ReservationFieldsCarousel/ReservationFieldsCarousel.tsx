"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useQuery } from "@tanstack/react-query";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ReservationFieldsItem from "./ReservationFieldsItem";

export default function ReservationFieldsCarousel() {
  async function getData() {
    const res = await fetch(`http://localhost:4000/Field`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  const { data } = useQuery(["Field"], getData, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <>
      <div className="flex flex-row justify-center items-center box-border">
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
