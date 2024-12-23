import React from "react";
import Image1 from "../assets/images/images2.png";
import Image2 from "../assets/images/images3.png";
import Image3 from "../assets/images/images4.png";
import Image4 from "../assets/images/images5.png";

const Project = () => {
  return (
    <>
      <section id="Project" className=" bg-gray-100 h-auto flex-col  flex justify-center ">
        <div className="flex justify-center flex-col items-center ">
          <p className=" font-semibold text-[60px]  drop-shadow-xl ">
            𝕄𝕐 𝕎<span className="text-pink-400">𝕆ℝ</span>𝕂𝕊
          </p>
          <p className="items-center w-[500px] pt-7 font-semibold text-[15px] tracking-[.15em] text-gray-500">
            I have a passion for front-end development. Recently, I have worked
            on several exciting projects including a front-end Amazon clone, a
            personal portfolio website, and a login page.
          </p>
        </div>
        <div className="h-[600px] flex justify-center pt-20 text-blue-900 font-sans">
          <article className="h-[400px] w-[300px] border-white border-r-[10px]  rounded-2xl bg-pink-200 shadow-xl shadow-pink-600">
            <img className="p-2 rounded-2xl pt-3" src={Image2} alt="" />
            <p className="pl-2 pt-2 font-semibold">Login Page Description:</p>
            <p className="p-2 flex items-center font-serif text-[11px]">
              Our login page is designed with a clean and modern aesthetic,
              providing users with a seamless and intuitive experience. Built
              using HTML for structure and CSS for styling, the page ensures a
              responsive layout that looks great on all devices, from desktops
              to mobile phones.
            </p>
            <p className="pl-2 pt-2 font-semibold">Minimalistic Design:</p>
            <p className="p-2 flex items-center font-serif text-[11px]">
              The login form is centered on the page, creating a focal point
              that directs users' attention immediately to the task at hand.
              This approach minimizes distractions and enhances user engagement.
            </p>
          </article>

          <article className="h-[400px] w-[300px]   border-r-[11px]  border-white rounded-2xl bg-pink-200 shadow-pink-600 shadow-xl">
            <img className="p-2 rounded-2xl pt-3" src={Image1} alt="" />
            <p className="pl-2 pt-2 font-semibold">Amazon Clone Description:</p>
            <p className="p-2 flex items-center font-serif text-[10px]">
              The Amazon clone project is an impressive front-end endeavor
              designed to emulate the look and feel of the popular e-commerce
              platform, Amazon. Utilizing HTML for structure and CSS for
              styling, this clone showcases various key elements and
              functionalities of the original site, offering a seamless and
              engaging user experience.
            </p>
            <p className="pl-2 pt-2 font-semibold">Responsive Layout:</p>
            <p className="p-2 flex items-center font-serif text-[10px]">
              The clone is built with a responsive design in mind, ensuring that
              it adapts beautifully across different devices and screen sizes,
              from desktops to mobile phones.
            </p>
          </article>
          <article className="h-[400px] w-[300px]   border-r-[10px]  border-white rounded-2xl bg-pink-200  shadow-pink-600 shadow-xl">
            <img
              className="p-2 rounded-2xl pt-2.5 h-[150px] w-[600px]"
              src={Image3}
              alt=""
            />
            <p className="pl-2 pt-2 font-semibold">Portfolio Description:</p>
            <p className="p-2 flex items-center font-serif text-[10px]">
              Welcome to my personal portfolio, a showcase of my skills,
              projects, and achievements as a web developer. This portfolio is
              meticulously crafted using HTML, CSS, and JavaScript to provide an
              engaging and interactive experience for visitors.
            </p>
            <p className="pl-2 pt-2 font-semibold">Responsive Design:</p>
            <p className="p-2 flex items-center font-serif text-[10px]">
              The portfolio is built with a responsive layout, ensuring that it
              looks great and functions well on all devices, from large desktop
              screens to mobile phones. CSS media queries are used to adapt the
              design to different screen sizes, providing a seamless user
              experience.
            </p>
          </article>
          <article className="h-[400px] w-[300px]   border-r-[10px]  border-white rounded-2xl bg-pink-200  shadow-pink-600 shadow-xl">
            <img className="p-2 rounded-2xl pt-3" src={Image4} alt="" />
            <p className="pl-2 pt-2 font-semibold">Portfolio Description:</p>
            <p className="p-2 flex items-center font-serif text-[10px]">
              Welcome to my personal portfolio, a showcase of my skills,
              projects, and achievements as a web developer. This portfolio is
              meticulously crafted using HTML, CSS, and JavaScript to provide an
              engaging and interactive experience for visitors.
            </p>
            <p className="pl-2 pt-2 font-semibold">Responsive Design:</p>
            <p className="p-2 flex items-center font-serif text-[10px]">
              The portfolio is built with a responsive layout, ensuring that it
              looks great and functions well on all devices, from large desktop
              screens to mobile phones. CSS media queries are used to adapt the
              design to different screen sizes, providing a seamless user
              experience.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Project;
