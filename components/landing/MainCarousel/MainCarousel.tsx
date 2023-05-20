"use client";
import "swiper/css";

import {
  faChevronLeft,
  faChevronRight,
  faFutbol,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import MainItem from "./MainItem";

function MainFieldCarousel() {
  const navigationNextRef = useRef<HTMLButtonElement | null>(null);
  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);

  const bgColors = ["bg-blue-700", "bg-red-200"];
  const icons = [faFutbol, faMapLocation];
  const texts = ["우리 모두 페어플레이해요!", "내 주변 구장을 찾아보세요."];

  return (
    <div className="w-screen h-52 sm:h-64 md:h-96 bg-gray-200 py-5">
      <div className="relative max-w-4xl h-full mx-auto">
        <Swiper
          className="w-full h-full"
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          speed={700}
          modules={[Autoplay, Navigation]}
        >
          {bgColors.map((e, i) => (
            <SwiperSlide
              className={`rounded-2xl text-xl sm:text-3xl md:text-5xl font-bold ${e}`}
              key={e}
            >
              <h2 className="absolute top-1/2 w-full text-center -translate-y-1/2">
                {texts[i]}
              </h2>
              <MainItem icon={icons[i]} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={navigationPrevRef}
          className="hidden lg:block absolute top-1/2 -left-12 -translate-y-1/2 bg-gray-400/50 w-10 h-10 rounded-full z-10"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
        </button>
        <button
          ref={navigationNextRef}
          className="hidden lg:block absolute top-1/2 -right-12 -translate-y-1/2 bg-gray-400/50 w-10 h-10 rounded-full z-10"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default MainFieldCarousel;
