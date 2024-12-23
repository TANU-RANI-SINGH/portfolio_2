import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="pt-20 bg-slate-100">
        <div className="h-6 bg-slate-700"></div>
        <div className="h-72 bg-slate-800 flex justify-evenly items-center">
            <div className="text-white">
                <ul >
                    <li className="font-semibold pb-7 text-blue-400">About</li>
                    <li>www.@manixys.com</li>
                </ul>
                </div>
                <div className="text-white">
                <ul>
                    <li className="font-semibold pb-7 text-blue-400"> contact us</li>
                    <li>xyz@gmail.com</li>
                    <li>+91 0000 890 000</li>
                </ul>
                </div>
            
        </div>
        <div className="h-10 bg-slate-700"></div>
      </footer>
    </>
  );
};

export default Footer;
