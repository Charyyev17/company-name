"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { gallery } from "@/data";

const Gallery = () => {
  const [imageId, setImageId] = useState();

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="w-full h-[50vh] relative items-center justify-center">
        <Image
          src="/images/gallery_banner.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10 absolute flex flex-col items-center justify-center gap-2 font-bold top-0 bottom-0 left-0 right-0"
        >
          <h3 className="text-xl sm:text-2xl">Home /</h3>
          <h1 className="text-4xl sm:text-7xl uppercase">Gallery</h1>
        </motion.div>
      </div>

      <div className="container p-8 xl:px-40">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col sm:grid grid-rows-4 xl:grid-rows-3 grid-flow-col gap-4 my-5"
        >
          {gallery.map((image: any) => (
            <div
              key={image.id}
              onClick={() => {
                setOpen(!open);
                setImageId(image.id);
              }}
              className="relative group max-w-full h-[300px] rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Image
                src={`/images/${image.img}`}
                alt=""
                fill
                className="object-cover transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {open &&
        gallery.map(
          (image: any) =>
            image.id === imageId && (
              <div
                key={imageId}
                className="z-[9999] fixed w-full h-screen flex items-center justify-center top-0 left-0 backdrop-blur-md"
              >
                <motion.div
                  initial={{ y: -150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col gap-5 bg-white max-w-[900px] m-2 p-1 rounded-xl shadow-xl"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="#dc2626"
                    size="lg"
                    className="absolute top-0 right-0 m-6 cursor-pointer text-red-600 hover:text-red-400 transition-all"
                    onClick={() => setOpen(!open)}
                  />
                  <Image
                    src={`/images/${image.img}`}
                    alt=""
                    width={900}
                    height={900}
                    className="rounded object-cover"
                  />
                </motion.div>
              </div>
            )
        )}
      <Footer />
    </div>
  );
};

export default Gallery;
