"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/data";

const Projects = () => {
  const [projectId, setProjectId] = useState();

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-20 p-8 xl:px-40">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-5"
      >
        <h1 className="text-5xl xl:text-6xl font-extrabold mb-8 bg-clip-text text-transparent opacity-10 bg-gradient-to-b from-black to-white">
          Projects
        </h1>
        <h2 className="text-3xl xl:text-4xl font-bold -translate-y-[50px]">
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex flex-col items-center gap-12">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-5"
        >
          {projects.map((project: any) => (
            <div
              key={project.id}
              onClick={() => {
                setOpen(!open);
                setProjectId(project.id);
              }}
              className="relative group max-w-full h-[300px] rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="z-30 absolute bottom-0 left-0 m-5 text-white opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-bold text-xl">{project.title}</h3>
                <span className="text-sm font-light">{project.company}</span>
              </div>
              <Image
                src={`/images/${project.img}`}
                alt=""
                fill
                className="object-cover group-hover:brightness-50 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="group flex items-center gap-3 w-[155px] md:w-[175px] text-center font-medium text-lg md:text-xl bg-black text-white px-3 py-2 md:px-6 md:py-3 md:mt-5 rounded border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
          >
            See More
            <FontAwesomeIcon
              icon={faArrowRight}
              color="white"
              width={18}
              height={18}
              className="group-hover:translate-x-1 group-hover:text-black transition-all duration-300"
            />
          </Link>
        </motion.div>
      </div>
      {open &&
        projects.map(
          (project) =>
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
                  <h3 className="text-lg sm:text-2xl font-bold">
                    {project.title}
                  </h3>
                  <Image
                    src={`/images/${project.img}`}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded object-cover"
                  />
                  <p className="text-sm sm:text-base">{project.content}</p>
                </motion.div>
              </div>
            )
        )}
    </div>
  );
};

export default Projects;
