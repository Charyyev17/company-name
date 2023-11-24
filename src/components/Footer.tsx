import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col mt-14 p-8 xl:px-40 bottom-0 left-0 bg-black/80 text-white">
      <div className="w-full h-2/3 pb-8 border-b flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:w-2/3 gap-2">
          <Link href="/" className="font-bold text-white text-2xl">
            Why Us?
          </Link>
          <p className="w-full 2xl:w-[450px] text-sm md:text-base lg:pr-8 xl:pr-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            labore eum voluptatem quia assumenda cupiditate ducimus! Odit,
            eaque.
          </p>
        </div>

        <div className="flex flex-col lg:w-1/3 gap-2 mt-8 lg:mt-0">
          <h3 className="font-bold text-2xl">More</h3>
          <div className="flex text-sm md:text-base gap-3 xl:gap-5">
            <Link
              className="hover:translate-x-px border-white hover:border-b transition duration-300"
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:translate-x-px border-white hover:border-b transition duration-300"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="hover:translate-x-px border-white hover:border-b transition duration-300"
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="hover:translate-x-px border-white hover:border-b transition duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:items-end lg:w-1/3 gap-2 mt-8 lg:mt-0">
          <h3 className="font-bold text-2xl">Follow Us</h3>
          <div className="flex gap-5">
            <Link href="/about">
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                size="lg"
                className="hover:scale-125 hover:shadow-md transition-all duration-300"
              />
            </Link>
            <Link href="/about">
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                size="lg"
                className="hover:scale-125 hover:shadow-md transition-all duration-300"
              />
            </Link>
            <Link href="/about">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="white"
                size="lg"
                className="hover:scale-125 hover:shadow-md transition-all duration-300"
              />
            </Link>
            <Link href="/about">
              <FontAwesomeIcon
                icon={faYoutube}
                color="white"
                size="lg"
                className="hover:scale-125 hover:shadow-md transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-1/3 flex items-center justify-center mt-8">
        <p className="text-base md:text-lg">© SCH 2023. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
