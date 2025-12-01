import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      className="relative w-full  items-stretch bg-[#0D0B16] text-white py-12 px-6 flex gap-4 md:gap-12 flex-col items-center font-[poppins]"
      id="contact"
    >
      <div className="contact-header mb-16 text-center">
        <h2 className="text-5xl text-[#7C3AED] font-bold mb-4 text-center">Get In Touch</h2>
        <p>"I’m always open to new opportunities and conversations. Let’s get in touch."</p>
      </div>

      <div className=" max-w-6xl  w-full grid md:grid-cols-[250px_1fr] gap-10">
        {/* Left Section with my contact + Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-6 order-2 md:order-1">

          {/* Contact Info */}
          <div className="myContact">
              <div className="space-y-2 flex flex-col">
            <p className="font-semibold">Email</p>
            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center gap-3 text-white/90 hover:underline"
            >
              <FiMail size={28} className="text-[#7C3AED]" />
              <span className="text-white/70">agclub31@gmail.com</span>
            </a>
          </div>

          <div className="space-y-2 flex flex-col">
            <p className="font-semibold">Phone</p>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-white/90 hover:underline"
            >
              <FiPhone size={28} className="text-[#7C3AED]" />
              <span className="text-white/70">+91 9179332054</span>
            </a>
          </div>
          </div>
          {/* social icons */}
          <div className="social-icon flex items-center gap-4 mt-2">
            <a
              href="https://github.com/Poonam-Vishwakarma31"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7C3AED] transition-colors"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/poonam-vish/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://www.instagram.com/pv_poonam31"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

        {/* Form Section */}
        <form className="form order-1 md:order-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#1A1824] p-4 rounded-xl shadow-lg">
          <input
            type="text"
            id="name"
            name="user-name"
            placeholder="Name"
            autoComplete="name"
            required
            className="p-3 rounded-md border w-full"
          />
          <input
            type="email"
            id="email"
            name="user-email"
            placeholder="Email"
            autoComplete="email"
            required
            className="p-3 rounded-md border w-full"
          />

          <textarea
            placeholder="Message"
            id="message"
            required
            className="p-3 rounded-md border w-full sm:col-span-2 h-28"
          />

          <button className="bg-black text-white px-5 py-3 rounded-lg sm:col-span-2 w-full">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
