"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight, faGlobe } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "./sliderStyles.css";
import { slides } from "@/data";

export default function App() {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <Swiper
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full min-h-screen z-10 mx-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide className="w-full h-screen relative" key={slide.id}>
            <Image
              src={slide.img}
              alt=""
              fill
              className="w-full h-screen object-cover bg-center bg-cover pointer-events-none"
            />
            <div className="sm:w-[80%] lg:w-[70%] flex flex-col gap-6 absolute left-0 top-[25%] sm:top-[30%] p-8 xl:pl-40 transition-all">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-medium text-base md:text-lg xl:text-xl w-3/4"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/about"
                  className="group flex items-center gap-3 w-[115px] lg:w-[140px] xl:w-[160px] text-center font-medium lg:text-lg xl:text-2xl bg-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded border-2 border-black hover:bg-transparent hover:text-black transition-all"
                >
                  {slide.button}
                  <FontAwesomeIcon
                    icon={faGlobe}
                    color="white"
                    width={18}
                    height={18}
                    className="group-hover:text-black transition-all"
                  />
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
