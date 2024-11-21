import { projects } from "@/constants/projects";
import React, { useEffect } from "react";

const ProjectFilter = ({
  activeCategory,
  setActiveCategory,
  setFiltered,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  setFiltered: (filtered: typeof projects) => void;
}) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }
    const filterd = projects.filter((project) =>
      project.category.includes(activeCategory)
    );
    setFiltered(filterd);
  }, [activeCategory, setFiltered]);
  return (
    <div className="flex gap-5 my-10">
      <button
        className={
          activeCategory === "all"
            ? "bg-darkblue py-1 px-3 text-white rounded-lg"
            : ""
        }
        onClick={() => setActiveCategory("all")}
      >
        All
      </button>
      <button
        className={
          activeCategory === "react"
            ? "bg-darkblue py-1 px-3 text-white rounded-lg"
            : ""
        }
        onClick={() => setActiveCategory("react")}
      >
        React
      </button>
      <button
        className={
          activeCategory === "aws"
            ? "bg-darkblue py-1 px-3 text-white rounded-lg"
            : ""
        }
        onClick={() => setActiveCategory("aws")}
      >
        AWS
      </button>
      <button
        className={
          activeCategory === "wordpress"
            ? "bg-darkblue py-1 px-3 text-white rounded-lg"
            : ""
        }
        onClick={() => setActiveCategory("wordpress")}
      >
        WordPress
      </button>
    </div>
  );
};

export default ProjectFilter;
