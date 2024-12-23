import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Resume = () => {
  return (
    <>
      <section id="Resume" className="flex  justify-around h-auto bg-gray-100 pt-20 flex-col items-center">
        <div className="text-[50px] text-gray-700 pb-9">
          𝐑𝐄𝐒𝐔<span className="text-pink-300">𝐌𝐄</span>
        </div>
        <div className="bg-gray-200 shadow-2xl shadow-pink-700 h-[1200px] w-[800px] flex-col flex items-center ">
          <div className=" text-[30px] pt-10">𝐓𝐀𝐍𝐔𝐑𝐀𝐍𝐈 𝐒𝐈𝐍𝐆𝐇 𝐌</div>
          <div className="flex whitespace-break-spaces text-blue-900 pt-6">
            <p className="pr-8 flex">
              <CiLinkedin className="text-[25px] " />
              Linkedin
            </p>
            |
            <p className="pr-8 pl-8 flex">
              <FaGithub className="text-[25px] " />
              Github
            </p>
            |
            <p className="pr-8 pl-8 flex">
              <MdOutlinePhoneIphone className="text-[25px] " />
              Email
            </p>
            |
            <p className="pl-8 flex">
              <MdEmail className="text-[25px] " />
              Contact
            </p>
          </div>
          <div className="pt-8 flex flex-col m-10 ">
            <p className="text-[25px] h-4 "> Summary </p>
            <p className="">
              ___________________________________________________________________________________________________________
            </p>
            <p className="pt-4 text-[12px]">
              Highly motivated and results-oriented web developer with a strong
              foundation in front-end technologies (HTML, CSS, JavaScript) and
              basic proficiency in back-end languages (Java, Python). Possesses
              a passion for creating visually appealing and responsive user
              interfaces that adapt seamlessly across various devices. Eager to
              leverage skills and gain experience in a fast-paced development
              environment.
            </p>
          </div>
          <div className="flex flex-col ml-10 mr-10 ">
            <p className="text-[25px] h-4 "> Skills </p>
            <p className="">
              ___________________________________________________________________________________________________________
            </p>
            <div className="pt-4 text-[12px]">
              <div className="flex">
                •Front-end
                <p className="pl-10">HTML,CSS,Java script.</p>
              </div>
              <p>•Java</p>
              <div className="flex">
                •Python
                <p className="pl-14">
                  Basic problem solving coding in python
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-10 mr-10 pt-7">
            <p className="text-[25px] h-4 "> Projects</p>
            <p className="">
              ___________________________________________________________________________________________________________
            </p>
            <div className="pt-4 text-[12px]">
              <p className="text-[17px]">Project:</p>
              <p>
                •Developed a visually appealing and responsive clone of the
                Amazon homepage and log in page using HTML and CSS.
              </p>
              <p>
                •Implemented a user-friendly layout that adapts to different
                screen sizes and devices.
              </p>
              <p>•Focused on creating an attractive UI.</p>
              <p className="text-[17px] pt-3">Key Skills Demonstrated:</p>
              <p>•HTML Structure and Semantics.</p>
              <p>•CSS Styling and Design Principles.</p>
              <p>•Responsive Web Design (RWD) Techniques.</p>
            </div>
          </div>
          <div className="flex flex-col ml-10 mr-10 pt-7">
            <p className="text-[25px] h-4 "> Education </p>
            <p className="">
              ___________________________________________________________________________________________________________
            </p>
            <div className="pt-4 text-[12px]">
              <div className="flex">
                2021- 2025
                <p className="pl-12">
                  BE.CSE at Mahendra College of Engineering
                </p>
                <p className="pl-32">(CGPA:7.81)</p>
              </div>
              <div className="flex">
                2021 <p className="pl-20">Class 12th Central Board</p>
                <p className="pl-56">(Percentage:83.6)</p>
              </div>
              <div className="flex">
                2019
                <p className="pl-[80px]">Class 10th Central Board</p>
                <p className="pl-56"> (Percentage:76.83)</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-10 mr-10 pt-7">
            <p className="text-[25px] h-4 "> Achivements </p>
            <p className="">
              ___________________________________________________________________________________________________________
            </p>
            <div className="pt-4 text-[12px]">
              <span className="font-semibold">Hackathon</span> (Livewire):{" "}
              <p> 5th place in livewire hackathon</p>
            </div>
          </div>
          <div className="flex flex-col ml-10 mr-10 pt-7">
            <p className="text-[25px] h-4 ">  Hobbies </p>
            <p className="">
              ___________________________________________________________________________________________________________
            </p>
            <div className=" flex pt-4 text-[12px]">
            •Anime
            <p className="pl-20"> (Designing characters)</p>
            </div>
            <div className=" flex text-[12px]">
            •Art and craft 
            <p className="pl-11"> (paper craft)</p>
            </div>
            <p className="text-[12px]"> •Chess</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
