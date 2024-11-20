import Image from "next/image";
import React from "react";
import { AiFillBulb } from "react-icons/ai";

const Skills = () => {
  return (
    <section
      className="w-full f-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        {/* section title */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
              LANGUAGES
            </span>
          </p>
        </div>
        {/* grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-xs:grid-cols-1 mt-10">
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/skills/html.png"}
              alt="html"
              width={100}
              height={100}
              className="mb-2"
            />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/skills/css.png"}
              alt="css"
              width={100}
              height={100}
              className="mb-2"
            />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/skills/js.png"}
              alt="javascript"
              width={100}
              height={100}
              className="mb-2"
            />
            <span>JAVASCRIPT</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/skills/react.png"}
              alt="react"
              width={100}
              height={100}
              className="mb-2"
            />
            <span>REACT</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/skills/tailwindcss.png"}
              alt="tailwindcss"
              width={100}
              height={100}
              className="mb-2"
            />
            <span>TAILWIND CSS</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/skills/mongo.png"}
              alt="mongodb"
              width={100}
              height={100}
              className="mb-2"
            />
            <span>MONGO DB</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/skills/git.png"}
              alt="git"
              width={100}
              height={100}
              className="mb-2"
            />
            <span>GIT</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={"/assets/skills/nextjs.png"}
              alt="next.js"
              width={100}
              height={100}
              className="mb-2"
            />
            <span>NEXT.JS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
