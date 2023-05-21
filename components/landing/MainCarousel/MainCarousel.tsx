"use client";
import "swiper/css";

import { useRef } from "react";
import type { IconType } from "react-icons";
import { FaAngleLeft, FaAngleRight, FaMapMarkedAlt } from "react-icons/fa";
import { MdSportsSoccer } from "react-icons/md";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import MainItem from "./MainItem";

function MainCarousel() {
  const navigationNextRef = useRef<HTMLButtonElement | null>(null);
  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);

  const bgColors = ["bg-blue-700", "bg-red-200"];
  const icons: IconType[] = [MdSportsSoccer, FaMapMarkedAlt];
  const texts = ["우리 모두 페어플레이해요!", "주변 풋살장을 찾아보세요."];

  return (
    <div className="w-screen h-52 sm:h-64 md:h-96 bg-gray-200 py-5">
      <div className="relative max-w-4xl h-full mx-auto">
        <Swiper
          className="w-full h-full"
          slidesPerView={1}
          // autoplay={{ delay: 2000, disableOnInteraction: false }}
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
              data-testid={texts[i]}
              key={e}
            >
              <h2 className="absolute top-1/2 w-full text-center -translate-y-1/2 text-stone-50">
                {texts[i]}
              </h2>
              <MainItem icon={icons[i]} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={navigationPrevRef}
          data-testid="prevBtn"
          className="hidden lg:block absolute top-1/2 -left-12 -translate-y-1/2 bg-gray-400/50 w-10 h-10 rounded-full z-10"
        >
          <FaAngleLeft className="text-3xl text-stone-50 pl-1.5" />
        </button>
        <button
          ref={navigationNextRef}
          data-testid="nextBtn"
          className="hidden lg:block absolute top-1/2 -right-12 -translate-y-1/2 bg-gray-400/50 w-10 h-10 rounded-full z-10"
        >
          <FaAngleRight className="text-3xl text-stone-50 pl-3" />
        </button>
      </div>
    </div>
  );
}

export default MainCarousel;
