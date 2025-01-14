import React from "react";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
        <h1 className="font-Ovo text-center text-lg mb-2">Introduction</h1>
        <h3 className="font-Ovo text-center text-5xl">About me</h3>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="w-64 sm:w-80  rounded-3xl max-w-none">
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              accusamus fugit laudantium nulla id ab commodi velit itaque
              temporibus accusantium fugiat earum sequi doloremque explicabo,
              aliquid totam. Cupiditate, ex consequatur.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
                >
                  <Image src={icon} alt={title} className="w-7 mt-3 " />
                  <h3 className="my-4 font-semibold text-gray-700 font-Ovo">
                    {title}
                  </h3>
                  <span className="text-gray-600 font-Ovo text-sm">
                    {description}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="font-Ovo text-gray-700 py-5 ">Tools I use</h3>
            <ul className="flex gap-4 sm:gap-6 items-center">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border
                  border-gray-400 rounded-lg cursor pointer hover:-translate-y-1 duration-500"
                >
                  <Image src={tool} alt="Tool" className="w-10 sm:w-6" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
