"use client";
import { sideMenuLinks } from "@/constants/sideMenuLinks";
import { useMenuStore } from "@/store/useMenuStore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

const SideMenu = () => {
  const { isOpen, closeMobileMenu } = useMenuStore();
  const [activeLink, setActiveLink] = useState(sideMenuLinks[0]);
  const handleLinkClick = (link: (typeof sideMenuLinks)[0]) => {
    setActiveLink(link);
    closeMobileMenu();
  };
  const handleScroll = () => {
    const sections = sideMenuLinks.map((link) =>
      document.getElementById(link.sectionId)
    );
    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section) {
        if (section.offsetTop <= scrollPosition + 150) {
          setActiveLink(sideMenuLinks[i]);
          break;
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);
  return (
    <section
      className={`fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col justify-between py-10 px-[40px] lg:px-[120px] max-lg:max-w-[146px] bg-white border-r
     ${isOpen ? "max-lg:block" : "max-md:hidden"}`}
    >
      <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center">
        {/* Up */}
        <div className="flex gap-2 justify-center items-center flex-col">
          <Image
            src={"/assets/logo.png"}
            width={100}
            height={100}
            alt="morimoli Image"
          />
          <p className="font-bold text-darkblue">morimoli</p>
        </div>
        {/* Intermediate */}
        <div>
          {sideMenuLinks.map((link) => {
            const isActive = activeLink === link;
            return (
              <a
                key={link.label}
                href={link.route}
                className={`relative flex justify-center rounded-lg p-3 ${
                  isActive ? "bg-cadetblue text-white" : ""
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Down */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-3">
            <a
              href=""
              target="_blank"
              className="bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white"
            >
              <AiFillGithub />
            </a>
            <a
              href=""
              target="_blank"
              className="bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white"
            >
              <AiFillLinkedin />
            </a>
            <a
              href=""
              target="_blank"
              className="bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white"
            >
              <FaDev />
            </a>
          </div>
          <p className="max-lg:hidden">@2024 morimoli</p>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
