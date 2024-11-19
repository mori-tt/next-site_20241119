import React from "react";
import { AiFillBulb } from "react-icons/ai";

const About = () => {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            SELF-INTRODUCTION
          </p>
        </div>
      </div>
      <div>
        {/* Main Statement */}
        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-9">
            In back-end development, we primarily use Express and Hono to build
            robust and scalable back-end systems. By leveraging Supabase and
            Firebase, we streamline data management, and our PostgreSQL database
            design ensures high reliability. If you need any further
            modifications or assistance, just let me know!
          </p>
        </div>
        {/* Achievements */}
        <div className="mt-10">
          <div className="w-full">
            <ul className="flex justify-between gap-10 flex-col md:flex-row">
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">
                    900+
                  </h3>
                  <span>TOUTUBE</span>
                </div>
              </li>
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">40+</h3>
                  <span>ROJECTS</span>
                </div>
              </li>
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">3+</h3>
                  <span>YEARS</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
