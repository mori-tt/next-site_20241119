"use client";
import React, { useState } from "react";
import { AiFillBulb } from "react-icons/ai";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projects";
import ProjectFilter from "./ProjectFilter";
import { AnimatePresence } from "motion/react";

const Projects = () => {
  // filter
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filtered, setFiltered] = useState<typeof projects>([]);
  const [visibleProjects, setVisibleProjects] = useState(9);
  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };

  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* section title */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            DEVELOPEMENT
          </p>
        </div>
        {/* filter */}
        <ProjectFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setFiltered={setFiltered}
        />
        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.slice(0, visibleProjects).map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                githubUrl={project.githubUrl}
                image={project.image}
                projextUrl={project.projextUrl}
                deployed={project.deployed}
              />
            ))}
          </AnimatePresence>
        </div>
        {/* more */}
        {visibleProjects < filtered.length && (
          <div className="text-center mt-4">
            <button
              className="bg-cadetblue text-white px-2 rounded-md py-1 hover:bg-cadetblue/75"
              onClick={loadMoreProjects}
            >
              MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
