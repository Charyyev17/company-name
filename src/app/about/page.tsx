"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const About = () => {
  const provides = [
    "First: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem natus aliquam nihil.",
    "Second: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem natus aliquam nihil.",
    "Third: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem natus aliquam nihil.",
    "Fourth: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem natus aliquam nihil.",
  ];

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full h-[50vh] relative items-center justify-center">
        <Image
          src="/images/about_banner.jpg"
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
          <Link href="/" className="text-xl sm:text-2xl">
            Home /
          </Link>
          <h1 className="text-4xl sm:text-7xl uppercase">About Us</h1>
        </motion.div>
      </div>

      <div className="w-full p-8 xl:px-40">
        <div className="lg:w-2/3 flex flex-col gap-4 my-10">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-3xl sm:text-4xl underline"
          >
            Who We Are?
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sm:text-lg text-left my-4"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            voluptate, odio alias aut illo tempore, voluptatibus tempora
            incidunt, eligendi laborum maiores ex nemo soluta. Itaque nostrum
            natus ad error tempore.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia
            deleniti aliquam consectetur cupiditate, sapiente dolore iste eius
            sequi exercitationem aperiam. Sit assumenda omnis dolorum
            voluptatibus, iste labore fugiat nobis.
          </motion.p>
        </div>
      </div>

      <div className="w-full h-[40vh] relative items-center justify-center overflow-hidden">
        <Image
          src="/images/about_img2.jpg"
          alt=""
          fill
          className="object-cover brightness-50"
        />
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10 absolute flex items-center justify-end p-8 xl:px-40 text-white font-bold top-0 bottom-0 left-0 right-0"
        >
          <h3 className="lg:w-2/3 text-sm sm:text-2xl text-left">
            {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            mollitia deleniti aliquam consectetur cupiditate, sapiente dolore
            iste eius sequi exercitationem aperiam. Sit assumenda omnis dolorum
            voluptatibus, iste labore fugiat nobis.
            {'"'}
          </h3>
        </motion.div>
      </div>

      <div className="w-full p-8 xl:px-40">
        <div className="lg:w-2/3 flex flex-col gap-4 my-10">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sm:text-lg text-left my-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dolorum culpa iste ex labore, minima ipsa veniam harum reprehenderit
            asperiores nisi. Veniam laborum ea deserunt nostrum velit
            consectetur est magni.
          </motion.p>
        </div>
      </div>

      <hr />

      <div className="w-full p-8 xl:px-40">
        <div className="lg:w-3/4 flex flex-col gap-4 my-10">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-3xl sm:text-4xl underline"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sm:text-lg text-left my-4"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            natus aliquam nihil, ratione ex aspernatur animi temporibus vero.
            Numquam obcaecati quod vel magni suscipit repudiandae harum maxime
            laudantium quasi illo.
          </motion.p>
          <div className="flex flex-col gap-4 w-full">
            {provides.map((provide) => (
              <motion.span
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                key={provide}
                className="flex gap-[6px] text-sm md:text-base"
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  color="#dc2626"
                  size="lg"
                  className="text-red-600 mt-[1.5px]"
                />
                {provide}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[40vh] relative items-center justify-center overflow-hidden">
        <Image
          src="/images/about_img.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10 absolute flex items-center justify-end p-8 xl:px-40 text-white font-bold top-0 bottom-0 left-0 right-0"
        >
          <h3 className="lg:w-2/3 text-sm sm:text-2xl text-left">
            {'"'}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque reprehenderit quia magnam eveniet vero! Exercitationem,
            nam nostrum ab magni, repellendus temporibus expedita praesentium
            eligendi consectetur, voluptas esse. Dolore, dolores pariatur.
            {'"'}
          </h3>
        </motion.div>
      </div>

      <div className="w-full p-8 xl:px-40">
        <div className="lg:w-2/3 flex flex-col gap-4 mt-10">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-3xl sm:text-4xl underline"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sm:text-lg text-left my-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, vero!
            Alias voluptatum dignissimos magnam nam illum vitae labore facilis
            illo exercitationem dolores? Nulla placeat iste minus nisi excepturi
            iusto qui.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero at
            ducimus consequuntur repellat odio amet esse, quisquam perferendis
            accusamus nemo commodi sequi, deleniti quidem soluta eveniet sunt
            enim officia? Neque.
          </motion.p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
