"use client";
import "swiper/swiper.min.css";

import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import LocalFieldsItem from "./LocalFieldsItem";
import items from "./mockData.json";

function LocalFieldsCarousel() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
  const navigationNextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section id="localFields" className="max-w-7xl w-screen h-96 py-8 mx-auto">
      <div className="w-5/6 h-full p-4 border-2 border-solid border-gray-800 rounded-xl m-auto">
        <h2 className="font-black text-xl mb-5">내 주변 풋살장</h2>
        {!loading && (
          <div className="relative w-11/12 h-4/5 mx-auto bg-gray-100 opacity-60 rounded-2xl" />
        )}
        {loading && (
          <div className="relative  w-11/12 h-4/5 mx-auto">
            <Swiper
              className="w-full h-full"
              slidesPerView={1}
              spaceBetween={20}
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
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1240: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation]}
            >
              {items.map((e) => (
                <SwiperSlide key={e.id} aria-label="carousel slide">
                  <LocalFieldsItem
                    fieldName={e.name}
                    img={e.img}
                    stars={e.stars}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              ref={navigationPrevRef}
              data-testid="prevBtn"
              className="prev-button absolute top-1/3 -left-9 w-10 h-10 rounded-full z-10 disabled:opacity-50"
            >
              <FaAngleLeft className="text-3xl text-gray-800 pl-1.5" />
            </button>
            <button
              ref={navigationNextRef}
              data-testid="nextBtn"
              className="next-button absolute top-1/3 -right-9 w-10 h-10 rounded-full z-10 disabled:opacity-50"
            >
              <FaAngleRight className="text-3xl text-gray-800 pl-3" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default LocalFieldsCarousel;

/**/
