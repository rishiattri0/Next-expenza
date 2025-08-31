"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

interface CarouselItem {
  highlight: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  items,
  autoplayDelay = 2000,
  showPagination = true,
  showNavigation = true,
}) => {
  return (
    <section className="py-16">
      {/* --- Swiper Carousel --- */}
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2,
        }}
        pagination={showPagination}
        navigation={showNavigation}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="max-w-5xl"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="max-w-xs">
            <div className="relative group rounded-2xl p-6 bg-neutral-900 text-white shadow-lg overflow-hidden border border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40">
              {/* Glow Layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 -z-0" />

              {/* Card Content */}
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-wide text-blue-400 mb-2">
                  {item.highlight}
                </p>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
