import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../app/animations.css";
const Hero = () => {
  return (
    <section className="w-full lg:h-screen h-fit bg-whitesmoke relative px-[40px] py-10 max-xs:px-[20px]">
      <div className="max-w-7xl flex items-center justify-between h-hull mx-auto max-md:flex-col max-md:gap-10 max-md:text-center">
        {/* left */}
        <div className="flex flex-col gap-5 z-40 max-md:order-2">
          <div className="text-4xl lg:text-6xl">
            <h1 className="font-medium">Leave system</h1>
            <span className="text-bold text-cadetblue">Development</span>
            <h2>to T.Mori</h2>
            <p className="mt-5 text-xl">
              As your web development partner, we provide high-performance
              front-end solutions using TypeScript, React, and Next.js, along
              with a robust back-end leveraging AWS, Google Cloud, Hono,
              Express, Supabase, and PostgreSQL. Trust us to bring your vision
              to life. If you need any adjustments or further assistance, feel
              free to ask!
            </p>
          </div>
          <div className="flex gap-4 max-md:justify-center">
            <Link href={"#projects"}>
              <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointer lg:px-4">
                Development
              </button>
            </Link>
            <Link href={"#contact"}>
              <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointer lg:px-4">
                Contect
              </button>
            </Link>
          </div>
        </div>
        {/* right */}
        <Image
          src={"/assets/heroimage.png"}
          width={400}
          height={400}
          alt="heroImage"
          className="z-10 rounded-full"
        />
      </div>
      {/* animation */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Hero;
