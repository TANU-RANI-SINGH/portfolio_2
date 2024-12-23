import React from "react";
import { TbCodeCircle2Filled } from "react-icons/tb";

const Header = () => {
  return (
    <>
      <header className="bg-gray-100 py-6  flex justify-between items-center px-8 fixed top-0 z-10 w-full">
        <div className="flex gap-1 items-center">
          <div className="h-9 w-9 rounded-full bg-black"></div>
          <p className="font-bold text-md">Tanurani Singh</p>
        </div>
        <div className="flex gap-5 items-center font-semibold font-style text-[10px] text-gray-800">
          <div className="flex gap-14 items-center">
            <a  href="#Home"className=" hover:text-pink-600 cursor-pointer block">HOME</a>
            <a  href="#Project"className=" hover:text-pink-600 cursor-pointer block">PROJECTS</a>
            <a  href="#Resume"className=" hover:text-pink-600 cursor-pointer block">RESUME</a>
            <a  href="#Contact"className=" hover:text-pink-600 cursor-pointer block">CONTACTS</a>
            
            
          </div>
          <div className="items-center text-red-600 border-2 px-10 py-3 shadow-2xl rounded-xl border-white ">
            <button >BUY NOW</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
