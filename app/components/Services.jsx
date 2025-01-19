import { serviceData } from "@/assets/assets";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Services = ({ isDarkMode }) => {
  return (
    <>
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <h1 className="font-Ovo text-center text-lg mb-2">What I offer</h1>
        <h3 className="font-Ovo text-center text-5xl">My Services</h3>

        <p className="font-Ovo mx-auto max-w-2xl mt-5 mb-10 text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio saepe
          cumque iure quidem, animi atque autem eum. Iste voluptas atque minima.
        </p>

        <div className="grid grid-cols-auto gap-6 my-15 ">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-xl p-8 hover:-translate-y-1 hover:shadow-black cursor-pointer duration-500 hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="font-Ovo text-lg text-gray-700 my-4 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-1 dark:text-white/80">
                {description}
              </p>
              <a
                href={link}
                className="flex items-center text-sm font-Ovo mt-5 gap-2"
              >
                Read more
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
