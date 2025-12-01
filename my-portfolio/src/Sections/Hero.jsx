import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
   <section className=" w-full min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center 
  px-6 md:px-8 py-12 gap-12 md:gap-46"
  id="home">

  {/* LEFT SIDE IMAGE */}
  <div className=" flex flex-col justify-center md:justify-end">
    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
      <img
        src="/images/profile/pfp.webp"
        loading="lazy"
        className="w-full h-full object-cover"
        alt="Profile"
      />
    </div>
    {/* {/* social icons */}
    <div className="social-icon hidden md:flex justify-center flex items-center gap-8 mt-12"> 
                <a
                  href="https://github.com/Poonam-Vishwakarma31"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#7C3AED] transition-colors"
                >
                  <FaGithub size={32} />
                </a>
    
                <a
                  href="https://www.linkedin.com/in/poonam-vish/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#0A66C2] transition-colors"
                >
                  <FaLinkedin size={32} />
                </a>
    
                <a
                  href="https://www.instagram.com/pv_poonam31"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 transition-colors"
                >
                  <FaInstagram size={32} />
                </a>
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
      font-semibold cursor-pointer hover:bg-[#A78BFA] transition duration-300"
      onClick={() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }}>
        Contact
      </button>
      
      
    </div>

    
  </div>
</section>


  );
};

export default Hero;
