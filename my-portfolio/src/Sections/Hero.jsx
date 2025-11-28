import React from "react";
import profilePic from "../assets/pfp.jpg";

const Hero = () => {
  return (
   <section className="w-full min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center 
   px-6 md:px-16 py-12 gap-12">

  {/* LEFT SIDE IMAGE */}
  <div className="flex-1 flex justify-center md:justify-start">
    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
      <img
        src={profilePic}
        className="w-full h-full object-cover"
        alt="Profile"
      />
    </div>
  </div>

  {/* RIGHT SIDE CONTENT */}
  <div className="flex-1 text-center md:text-left">
    <h3 className="text-gray-300 font-semibold text-lg mb-2">Full Stack Developer</h3>

    <h1 className="text-5xl md:text-5xl font-bold text-white mb-4">
      Poonam Vishwakarma
    </h1>

    <p className="text-gray-300 text-sm md:text-xl max-w-lg mb-6 leading-relaxed">
     React | Node.js | Express | MongoDB
     Aspiring to leverage my skills to build impactful web applications and contribute to innovative projects.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <a href="/pvResume.pdf" download>
      <button className="px-6 py-3 border-2 border-[#7C3AED] text-[#7C3AED] rounded-full
       font-semibold cursor-pointer hover:bg-[#A78BFA] hover:text-black transition duration-300">
        Download CV
      </button>
      </a>

      <button className="px-6 py-3 bg-[#7C3AED] text-black rounded-full 
      font-semibold cursor-pointer hover:bg-[#A78BFA] transition duration-300">
        Contact
      </button>
    </div>

    
  </div>
</section>


  );
};

export default Hero;
