"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/data";

const Projects = () => {
  const provides = [
    "Nulla itaque deleniti rerum hic dignissimos beatae repudiandae commodi minima cupiditate.",
    "Nulla itaque deleniti rerum hic dignissimos beatae repudiandae commodi minima cupiditate.",
    "Nulla itaque deleniti rerum hic dignissimos beatae repudiandae commodi minima cupiditate.",
  ];
  const [projectId, setProjectId] = useState();

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="w-full h-[50vh] relative items-center justify-center">
        <Image
          src="/images/projects_banner.jpg"
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

          <h1 className="text-4xl sm:text-7xl uppercase">Projects</h1>
        </motion.div>
      </div>

      <div className="w-full p-8 xl:px-40">
        <div className="lg:w-3/4 flex flex-col gap-4 my-10">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-3xl sm:text-4xl underline"
          >
            About Our Projects
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sm:text-lg text-left my-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            itaque deleniti rerum hic dignissimos beatae repudiandae commodi
            minima cupiditate? Ut aliquid reprehenderit ex tenetur quaerat est
            nulla exercitationem nobis fugit:
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
                  onClick={() => setOpen(!open)}
                />
                {provide}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sm:text-lg text-left mt-4"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            laudantium quo repellendus expedita molestias. Suscipit asperiores
            repellat, voluptatum maxime est nam. Vitae sint repellat porro ad,
            aspernatur itaque autem voluptatum.
          </motion.p>
        </div>

        <hr />

        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl sm:text-4xl underline mt-10"
        >
          All Projects
        </motion.h2>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col sm:grid grid-rows-3 xl:grid-rows-3 grid-flow-col gap-8 my-10"
        >
          {projects.map((project: any) => (
            <div
              key={project.id}
              onClick={() => {
                setOpen(!open);
                setProjectId(project.id);
              }}
              className="relative group max-w-full h-[300px] rounded-lg shadow-md overflow-hidden cursor-pointer border-b-4 border-black hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="z-30 absolute bottom-0 left-0 m-5 text-white transition-all duration-300">
                <h3 className="font-extrabold sm:text-3xl">{project.title}</h3>
                <span className="sm:text-lg font-light">{project.company}</span>
              </div>
              <Image
                src={`/images/${project.img}`}
                alt=""
                fill
                className="object-cover brightness-50 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {open &&
        projects.map(
          (project: any) =>
            project.id === projectId && (
              <div
                key={projectId}
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
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <Image
                    src={`/images/${project.img}`}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded object-cover"
                  />
                  <p>{project.content}</p>
                </motion.div>
              </div>
            )
        )}
      <Footer />
    </div>
  );
};

export default Projects;
