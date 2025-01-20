import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <div className="flex items-center justify-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          <span>amulsharma7369@gmail.com</span>
        </div>
      </div>

      <div
        className="text-center sm:flex  items-center justify-between border-t border-gray-400 mx-[10%] mt-12 
       py-6"
      >
        <p className="font-Ovo"> &#169; 2025 Amul Sharma. All right reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 ">
          <li>
            <a target="_blank" href="https://github.com/AmulSharma12">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/amulsharma12/">
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/amulxsharma67">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
