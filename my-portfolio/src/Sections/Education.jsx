import React from "react";
import educationImg from "../assets/education.png";

const Education = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row px-4 md:px-2 py-10 gap-12 items-center justify-center">
      <div className="education-body items-center justify-around w-full flex gap-8 md:gap-10 w-full">
         <div className="education-img w-64 h-64 md:w-xl md:h-96 hidden md:flex overflow-hidden left-0">
            <img src={educationImg} alt="Education" />
         </div>

         <div className="education-list pr-4 pl-4 md:pr-[100px]">
            <h2 className="text-5xl flex justify-center md:justify-start items-center font-bold mb-10 text-[#00AA33]">Education</h2>
            <div className="detail-card bg-[#111111] py-6 px-6 md:px-25 mb-6 rounded-lg shadow-lg">
                <h6>2021-2025</h6>
                <h4 className="font-semibold">Bachelor of Science (Hons) in Mathematics</h4>
                <p>Dyal Singh College, Delhi University, India</p>
            </div>
            <div className="detail-card bg-[#111111] py-6 px-6 md:px-25 mb-6 rounded-lg shadow-lg">
                <h6>2017-2019</h6>
                <h4 className="font-semibold">Higher Secondary</h4>
                <p>Jawahar Navodaya Vidyalaya, Vidisha</p>
            </div>
            <div className="detail-card bg-[#111111] py-6 px-6 md:px-25 mb-6 rounded-lg shadow-lg">
                <h6>2012-2017</h6>
                <h4 className="font-semibold">High School</h4>
                <p>Jawahar Navodaya Vidyalaya, Vidisha</p>
            </div>
         </div>
        
      </div>
    </div>
  );
};

export default Education;
