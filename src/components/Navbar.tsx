"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Gallery", url: "/gallery" },
    { name: "Contact", url: "/contact" },
  ];

  const [navbarBg, setNavbarBg] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={
          navbarBg
            ? "z-40 w-full fixed top-0 left-0 bg-black text-white shadow-sm transition-all duration-150"
            : "z-40 w-full fixed top-0 left-0 py-2 backdrop-blur-sm shadow-sm transition-all duration-150"
        }
      >
        <div className="h-12 flex items-center justify-between p-8 xl:px-40 mx-auto">
          {/*LOGO */}
          <Link href="/" className="">
            <span className="font-extrabold text-2xl uppercase">
              LOGO
            </span>
          </Link>

          {/*LINKS */}
          <div className="hidden md:flex gap-4 items-center">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                className={
                  navbarBg
                    ? "text-white font-semibold text-lg hover:translate-x-px border-white hover:border-b transition duration-300"
                    : "font-semibold text-lg hover:translate-x-px border-black hover:border-b transition duration-300"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          <FontAwesomeIcon
            icon={faBars}
            color="white"
            size="lg"
            className={
              navbarBg
                ? "hover:text-red-300 cursor-pointer md:hidden transition-all duration-300"
                : "hover:text-red-600 cursor-pointer md:hidden transition-all duration-300"
            }
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      {open && (
        <div className="z-[9999] fixed w-full h-screen flex items-center justify-center top-0 left-0 backdrop-blur-md">
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white w-[350px] h-96 flex flex-col items-center justify-center gap-4 m-20 p-20 rounded-md shadow-xl"
          >
            <FontAwesomeIcon
              icon={faXmark}
              color="#dc2626"
              size="lg"
              className="absolute top-0 right-0 m-4 cursor-pointer hover:text-red-400 transition-all"
              onClick={() => setOpen(!open)}
            />
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                className="text-red-600 text-center font-medium text-lg border-red-600 hover:translate-x-3 transition duration-300"
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 w-[130px] lg:w-[140px] xl:w-[160px] bg-red-600 font-medium text-lg text-white px-6 py-2 rounded border border-red-600 hover:bg-transparent hover:border-red-600 hover:text-red-600 transition-all duration-300"
              onClick={() => setOpen(!open)}
            >
              Giriş yap
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
