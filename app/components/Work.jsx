import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h1 className="font-Ovo text-center text-lg mb-2">Portfolio</h1>
      <h3 className="font-Ovo text-center text-5xl">My Latest Work</h3>

      <p className="font-Ovo mx-auto max-w-2xl mt-5 mb-10 text-center ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio saepe
        cumque iure quidem, animi atque autem eum. Iste voluptas atque minima.
      </p>

      <div className="grid grid-cols-auto my-10 gap-6">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-4 left-2 px-4 py-3 gap-5 flex iems-center justify-between -translate-x-1 group-hover:bottom-8 duration-500 ">
              <div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-gray-700 font-Ovo">{project.description}</p>
              </div>
              <div className="absolute right-2 bottom-7 border rounded-xl flex items-center justify-center border-black w-9  aspect-square shadow-[2px_2px_0_black] group-hover:bg-slate-400 transition">
                <Image src={assets.send_icon} alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/AmulSharma12"
        className="font-Ovo text-xl flex items-center justify-center border border-gray-700 gap-2 w-fit px-8 py-4 mx-auto my-20 rounded-full hover:bg-lightHover duration-500 cursor:pointer"
        target="_blank"
      >
        Show more <Image src={assets.right_arrow_bold} alt="" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
