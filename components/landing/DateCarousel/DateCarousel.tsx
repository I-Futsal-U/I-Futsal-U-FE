"use client";

import "swiper/swiper.min.css";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import DateItem from "./DateItem";
import { DAYS, useCreateDates } from "./hooks/useCreateDates";
// date.getDate() - 오늘 날짜
// date.getMonth() - 이번달 (0 ~ 11)
// date.getDay() - 오늘 요일 (0 ~ 6)

function DateCarousel() {
  const [loading, setLoading] = useState<boolean>(false);
  const [days] = useCreateDates(2); // 매개변수 weeks: `오늘`부터 {weeks}주 뒤까지의 날짜 정보 생성

  useEffect(() => {
    setLoading(true);
  }, []);

  const navigationNextRef = useRef<HTMLButtonElement | null>(null);
  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
  SwiperCore.use([Navigation]);
  return (
    <section className="max-w-7xl w-screen h-38 my-0 mx-auto">
      <div className="w-5/6 h-full p-4 m-auto">
        {!loading && (
          <div
            className="relative max-w-5xl h-full mx-auto py-8 bg-gray-100 rounded-2xl"
            aria-label="when loading is false"
          />
        )}
        {loading && (
          <div
            className="not-loading relative max-w-5xl h-full mx-auto py-8"
            aria-label="when loading is true"
          >
            <Swiper
              className="w-full h-full"
              slidesPerView={3}
              spaceBetween={5}
              breakpoints={{
                375: {
                  //iPhone SE
                  slidesPerView: 4,
                  spaceBetween: 8,
                },
                768: {
                  slidesPerView: 7,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                  // Override prevEl & nextEl now that refs are defined
                  if (swiper.navigation) {
                    if (
                      typeof swiper.params.navigation !== "boolean" &&
                      swiper.params.navigation
                    ) {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;
                    }
                  }
                  // Re-init navigation
                  if (swiper.navigation) {
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                });
              }}
              modules={[Navigation]}
            >
              {days &&
                days.map((e, i) => (
                  <SwiperSlide key={i} aria-label="carousel slide">
                    <DateItem date={e.date} day={DAYS[e.day]} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <button
              ref={navigationPrevRef}
              data-testid="prevBtn"
              className="absolute top-1/2 -left-8 -translate-y-1/2 bg-gray-400/50 w-7 h-7 rounded-full z-10 disabled:opacity-50"
            >
              <FaAngleLeft className="text-2xl text-stone-50 pl-1" />
            </button>
            <button
              ref={navigationNextRef}
              data-testid="nextBtn"
              className="absolute top-1/2 -right-8 -translate-y-1/2 bg-gray-400/50 w-7 h-7 rounded-full z-10 disabled:opacity-50"
            >
              <FaAngleRight className="text-2xl text-stone-50 pl-1.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default DateCarousel;
