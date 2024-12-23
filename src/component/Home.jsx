import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import images1 from "../assets/images/web.png";
import images2 from "../assets/images/pngegg.png";



const Home = () => {
  return (
    <>
      <section id="Home"className="bg-gray-100 flex  justify-center h-screen overflow-hidden pt-32">
        <div className="flex gap-40">
        <div className="w-[400px]">
          <div className="flex flex-col">
            <p className="font-light text-[10px] tracking-[.35em]">
              WELCOME TO MY WORLD
            </p>
            <p className="pt-4 text-3xl font-bold font-serif">
              𝐇𝐢,𝐈'𝐦 <span className="text-pink-600"> 𝐓𝐚𝐧𝐮𝐑𝐚𝐧𝐢 𝐒𝐢𝐧𝐠𝐡</span>
            </p>
            <p className=" pt-1 text-3xl font-bold font-serif"><span className="text-pink-600">𝐚 </span>𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫</p>
            <p className="pt-7 font-light text-[13px]">
              A web developer who loves creating beautiful, functional websites.
              With skills in HTML, CSS, and JavaScript, I build seamless user
              experiences and powerful web applications. Whether it's designing
              a responsive interface or developing data-driven solutions, I'm
              passionate about bringing your vision to life online. Let's
              collaborate and make something amazing
            </p>
          </div>
          <div className="flex justify-between pt-28">
            <div>
              <p className="font-style text-[12px] text-gray-800 font-semibold trac tracking-[.20em] ">
                FIND ME
              </p>
              <div className="flex gap-2 pt-3 text-xl">
                <div className="h-10 w-10 flex justify-center items-center shadow-xl rounded-xl border-white border-2">
                  <CiInstagram />
                </div>
                <div className="h-10 w-10  flex justify-center items-center shadow-xl rounded-xl border-white border-2">
                  <FiFacebook />
                </div>
                <div className="h-10 w-10  flex justify-center items-center shadow-xl rounded-xl border-white border-2">
                  <FiLinkedin />
                </div>
              </div>
            </div>
            <div>
              <p className="font-style text-[12px] text-gray-800 font-semibold trac tracking-[.20em] ">
                SITE USED
              </p>
              <div className="flex gap-2 pt-3 text-xl">
                <div className="h-10 w-10 flex justify-center items-center shadow-xl rounded-xl border-white border-2">
                  <FaReact />
                </div>
                <div className="h-10 w-10  flex justify-center items-center shadow-xl rounded-xl border-white border-2">
                  <TbBrandJavascript />
                </div>
                <div className="h-10 w-10  flex justify-center items-center shadow-xl rounded-xl border-white border-2">
                <TbBrandTailwind />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[400px] bg-transparent h-[400px]"><img src={images2} alt="" /></div>
        </div>
      </section>
    </>
  );
};

export default Home;
