"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "heroBg1.jpg",
  },
  {
    color: "#d6d7dc",
    src: "project2.jpg",
  },
  {
    color: "#e3e3e3",
    src: "project3.jpg",
  },
  {
    color: "#21242b",
    src: "project1.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "about_img.jpg",
  },
  {
    color: "#e5e0e1",
    src: "about_img2.jpg",
  },
  {
    color: "#d7d4cf",
    src: "slider1.jpg",
  },
  {
    color: "#e1dad6",
    src: "heroBg1.jpg",
  },
];

export default function Gallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, 250]);
  const x2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      ref={container}
      className="hidden lg:flex flex-col items-center gap-[3vw] relative mt-32 bg-white z-10 overflow-hidden"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex relative gap-[3vw] w-[120vw] left-[-10vw]"
      >
        {slider1.map((image, index) => {
          return (
            <div
              key={index}
              className="w-1/4 h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: image.color }}
            >
              <div className="relative w-4/5 h-4/5">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${image.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex relative gap-[3vw] w-[120vw] left-[-10vw]"
      >
        {slider2.map((image, index) => {
          return (
            <div
              key={index}
              className="w-1/4 h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: image.color }}
            >
              <div key={index} className="relative w-4/5 h-4/5">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${image.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <div>
        <Link
          href="/gallery"
          className="group flex items-center gap-3 w-[150px] lg:w-[240px] text-center font-medium text-lg lg:text-2xl bg-black text-white px-4 py-2 lg:px-6 lg:py-3 my-8 rounded border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
        >
          Go to Gallery
          <FontAwesomeIcon
            icon={faArrowRight}
            color="white"
            width={20}
            height={20}
            className="group-hover:translate-x-1 group-hover:text-black transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
