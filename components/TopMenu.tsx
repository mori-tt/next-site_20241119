"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useMenuStore } from "@/store/useMenuStore";

const TopMenu = () => {
  const { isOpen, openMobileMenu, closeMobileMenu } = useMenuStore();
  return (
    <section className="px-[40px] bg-whitesmoke py-4 z-10 max-xs:px5" id="home">
      <div className="max-w-7xl max-auto flex flex-col justify-between items-center gap-5">
        {/* UP */}
        <div className="flex justify-between items-center w-full md:hidden">
          <Link href={"/"}>
            <h1 className="font-bold text-3xl text-cadetblue">
              PORTFOLIO of T.Mori
            </h1>
          </Link>
          {/* TOGGLE */}
          <div
            className="text-2xl z-50 cursor-pointer"
            onClick={openMobileMenu}
          >
            {isOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
          </div>
        </div>
        {/* DOWN */}
        <div className="flex justify-between items-center w-full max-xs:flex-col max-xs:items-start max-xs:gap-2">
          <div className="flex flex-row gap-2 items-center text-lg font-bold">
            <MdEmail />
            <span className="text-darkblue text-xl pb-1">email</span>
          </div>
          <button className="bg-darkblue text-white px-4 py-1 rounded-md hover:bg-darkblue/75">
            Download Documents
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopMenu;
