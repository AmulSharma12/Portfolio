import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <>
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col gap-4 justify-center items-center">
        <div>
          <Image
            src={assets.profile_img}
            alt=""
            className="rounded-full w-32"
          />
        </div>

        <h3 className="font-Ovo flex items-center justify-center gap-2 text-xl md:text-2xl mb-3">
          Hey folks Amul Sharma there
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>

        <h1 className="font-Ovo text-3xl sm:text-6xl lg:text-[66px]">
          Web Developer and DSA enthusiast
        </h1>

        <p className="max-w-2xl font-Ovo mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptatem a blanditiis est veniam autem quo quos? Omnis minima,
          ducimus repellat dolore doloribus ad culpa!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="font-Ovo flex items-center gap-2 border rounded-full  border-white  bg-black text-white px-10 py-3"
          >
            contact me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>

          <a
            href="/sample-resume.pdf"
            download
            className="font-Ovo flex items-center gap-2 border rounded-full border-gray-500 px-10  py-3"
          >
            My resume
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;