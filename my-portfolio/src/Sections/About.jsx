import React from "react";
import Aboutme from "../assets/aboutme.png";


const About = () => {
  return (
    <div className="about-section relative w-full min-h-screen flex flex-col md:flex-row px-6 md:px-16 py-12 gap-12 items-center justify-center">
      <div className="about-line absolute w-[85%] top-4  flex  items-center gap-2 p-2   ">
        <div className="style-circle bg-[#00AA33] w-2 h-2 rounded-full"></div>
         <div className="style-circle bg-[#00AA33] w-2 h-2 rounded-full"></div>
          <div className="style-line bg-[#00AA33] w-full h-1 mr-3 rounded-sm"></div>
      </div>
      <div className="about-body items-center justify-around flex flex-col-reverse md:flex-row gap-8 md:gap-10 w-full">
        
        <div className="about-description justify-between mt-6">
          <h2 className="text-5xl flex justify-center md:justify-start items-center font-bold mb-6 text-[#00AA33]">About Me</h2>
          <p className="text-gray-300 text-sm md:text-xl leading-relaxed mb-6 max-w-lg">
            Hello! I'm Poonam Vishwakarma, a passionate Full Stack Developer with expertise in React, Node.js, Express, and MongoDB. <br/><br/>
             I love creating dynamic and responsive web applications that provide seamless user experiences. My goal is to leverage my skills to build impactful web applications and contribute to innovative projects.</p>
        </div>
          <div className="about-image w-64 h-64 md:w-96 md:h-96 overflow-hidden ">
          <img src={Aboutme} alt="About Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
