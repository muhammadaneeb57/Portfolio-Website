import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-slate-800 text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 flex flex-col md:flex-row gap-6 justify-start text-[16px] sm:text-[18px]">
          <div className="w-full">
            <p className="text-gray-600 leading-relaxed text-left">
              Hello, I'm M-Aneeb, a passionate Web Developer who discovered the
              fascinating world of web development through a YouTube tutorial on
              HTML and CSS. Since then, I have been dedicated to crafting
              engaging digital experiences and bringing innovative ideas to
              life. Currently pursuing a Bachelor's degree in Software
              Engineering, I combine theoretical knowledge with hands-on
              experience from various projects. My expertise lies in building
              modern, responsive, and user-friendly web applications with a
              strong emphasis on design and functionality. I'm always eager to
              learn, grow, and collaborate on exciting projects. Let's connect
              and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
