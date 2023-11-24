"use client";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faArrowRightLong,
  faXmark,
  faCircleCheck,
  faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { services } from "@/data";

const Services = () => {
  const [open, setOpen] = useState(false);
  const [serviceId, setServiceId] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center mt-14 p-8 xl:px-40">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl xl:text-6xl font-extrabold mb-8 bg-clip-text text-transparent opacity-10 bg-gradient-to-b from-black to-white">
          Services
        </h1>
        <h2 className="text-3xl xl:text-4xl font-bold -translate-y-[50px]">
          Services
        </h2>
      </motion.div>

      <div className="w-full flex flex-col gap-12">
        <div className="">
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl lg:text-2xl xl:text-3xl font-bold"
          >
            What We Provide?
          </motion.h3>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-rows-4 sm:grid-rows-2 2xl:grid-rows-1 grid-flow-col gap-5"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full 2xl:w-[285px] flex flex-col items-start justify-center border border-b-[3px] border-b-black p-8 lg:p-10 xl:p-12 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 "
            >
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                color=""
                size="2xl"
                className="transition-all"
              />
              <h3 className="font-semibold text-lg mt-6 mb-2">
                {service.title}
              </h3>
              <button
                onClick={() => {
                  setOpen(!open);
                  setServiceId(service.id);
                }}
                className="group text-sm font-light cursor-pointer"
              >
                See More{" "}
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  color=""
                  width={18}
                  height={18}
                  className="group-hover:translate-x-1 transition-all"
                />
              </button>
            </div>
          ))}
        </motion.div>

        {open &&
          services.map(
            (service) =>
              service.id === serviceId && (
                <div
                  key={service.id}
                  className="z-[9999] fixed w-full h-screen flex items-center justify-center top-0 left-0 backdrop-blur-md"
                >
                  <motion.div
                    initial={{ y: -150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col gap-5 bg-white max-w-[600px] m-5 p-10 rounded-xl shadow-xl"
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      color="#dc2626"
                      size="lg"
                      className="absolute top-0 right-0 m-6 cursor-pointer text-red-600 hover:text-red-400 transition-all"
                      onClick={() => setOpen(!open)}
                    />
                    <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                    <h4 className="text-base sm:text-xl font-semibold">
                      What is {service.title}?
                    </h4>
                    <p className="text-sm sm:text-base">
                      {service.subtitle}
                    </p>
                    <h4 className="text-base sm:text-xl font-semibold">What We Provide?</h4>
                    <div className="flex flex-col gap-2">
                      {service.provide.map((provide) => (
                        <span
                          key={provide}
                          className="flex gap-[6px] text-sm sm:text-base"
                        >
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            color="#dc2626"
                            size="lg"
                            className="mt-[1.5px]"
                            onClick={() => setOpen(!open)}
                          />
                          {provide}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Services;
