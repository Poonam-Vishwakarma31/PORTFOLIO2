import React from "react";
import contactImg from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="relative contact-section w-full min-h-screen flex flex-col md:flex-row  py-10 gap-12 items-center justify-center">
      <div className="absolute contact-img w-64 h-64 md:w-96 md:h-96 flex overflow-hidden left-0 bottom-0">
        <img src={contactImg} alt="Contact Me" />
      </div>
    </div>
  );
};

export default Contact;
