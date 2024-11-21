import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

interface Project {
  name: string;
  githubUrl: string;
  image: string;
  projextUrl?: string;
  deployed?: boolean;
}

const ProjectCard = ({
  name,
  githubUrl,
  image,
  projextUrl,
  deployed,
}: Project) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 p-4 border border-gray-200 rounded-lg bg-whitesmoke shadow-md"
    >
      <img src={image} alt={`${name} Image`} />
      <h3>{name}</h3>
      <div>
        <a href={githubUrl} target="_blank">
          <AiFillGithub />
        </a>
        {deployed && (
          <a href={projextUrl}>
            <AiFillEye />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;