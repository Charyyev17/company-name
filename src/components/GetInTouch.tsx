"use client"

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GetInTouch = () => {
  return (
    <div className="hidden sm:block w-full mt-6 lg:mt-12 p-8 lg:px-40">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full shadow-md p-10 xl:px-16 2xl:px-28 rounded-lg border flex items-center justify-between gap-8 xl:gap-10"
      >
        <div className="flex flex-col gap-2 uppercase">
          <h4 className="text-xl md:text-xl 2xl:text-2xl font-semibold opacity-80">Lets Talk</h4>
          <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold opacity-80">About Your</h3>
          <h2 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-7xl font-extrabold bg-clip-text text-transparent opacity-80 bg-gradient-to-b from-black to-white">
            Next Project
          </h2>
        </div>
        <div>
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-3 w-full lg:w-[240px] text-center font-medium text-lg lg:text-2xl bg-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
          >
            Be In Touch
            <FontAwesomeIcon
              icon={faPaperPlane}
              color="white"
              width={20}
              height={20}
              className="group-hover:text-black transition-all duration-300"
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
