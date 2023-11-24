"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:4asmakinaotomasyon@gmail.com?subject=${formData.subject}&body=${formData.message}. ${formData.name} (${formData.email})`;
  };
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="w-full h-[50vh] relative items-center justify-center">
        <Image
          src="/images/contact_banner.jpg"
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

          <h1 className="text-4xl sm:text-7xl uppercase">Contact</h1>
        </motion.div>
      </div>

      <div className="w-full p-8 xl:px-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-14">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3 flex flex-col gap-4"
          >
            <h2 className="font-bold text-3xl sm:text-4xl underline">
              Be In Touch With Us.
            </h2>
            <p className="sm:text-lg text-left my-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium reiciendis sit explicabo voluptatem corporis sunt.
              Soluta esse tempore inventore dicta deserunt dignissimos iusto
              dolor atque. Earum ipsam error odio veritatis explicabo voluptatem
              corporis!
            </p>
            <div className="flex flex-col gap-10">
              <div className="flex gap-3 items-center hover:translate-x-4 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faLocation}
                  color="#dc2626"
                  size="xl"
                  className="text-white bg-black py-4 px-5 rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold sm:text-xl">Address</h3>
                  <p className="">600 Pennsylvania Avenue NW, Washington, DC</p>
                </div>
              </div>
              <div className="flex gap-3 items-center hover:translate-x-4 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faPhone}
                  color="#dc2626"
                  size="xl"
                  className="text-white bg-black py-4 px-5 rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold sm:text-xl">Phone Number</h3>
                  <p className="">+0123456879</p>
                </div>
              </div>
              <div className="flex gap-3 items-center hover:translate-x-4 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#dc2626"
                  size="xl"
                  className="text-white bg-black py-4 px-5 rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold sm:text-xl">Email Address</h3>
                  <p className="">example@mail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 h-full shadow-md p-4 rounded-md border"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="flex flex-col justify-center gap-6"
            >
              <input
                type="text"
                {...register("name")}
                placeholder="Your Name"
                className="border-b-2 p-3 rounded-md hover:border-black transition-all duration-300"
              />
              <input
                type="email"
                {...register("email")}
                placeholder="Your Email"
                className="border-b-2 p-3 rounded-md hover:border-black transition-all duration-300"
              />
              <input
                type="text"
                {...register("subject")}
                placeholder="Subject"
                className="border-b-2 p-3 rounded-md hover:border-black transition-all duration-300"
              />
              <textarea
                {...register("message")}
                placeholder="Your Message"
                className="border-b-2 p-3 rounded-md h-40 hover:border-black transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-black font-medium text-xl text-center text-white py-3 rounded border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
