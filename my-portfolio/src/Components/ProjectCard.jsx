import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";

export function ProjectCard({
  title = "Untitled",
  description = "",
  techStack = [],
  image = "",
  githubLink = "",
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imgRef.current && !imgVisible) {
          setImgVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [imgVisible]);

  return (
    <div ref={imgRef} className="border-2 border-[#2D2540] bg-[#1A1625] rounded-lg p-4 w-80 hover:scale-105 transition-transform duration-300">
      <div className="w-full h-40 rounded-md mb-4 relative overflow-hidden bg-gray-800">
        {imgVisible && !imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-gradient-to-r from-[#111014] via-[#1a1625] to-[#111014]"></div>
        )}
        <img
          src={imgVisible ? image : ""}
          alt={title}
          className={`w-full h-40 object-cover rounded-md transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      </div>

      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="mb-4 flex gap-2 mt-3 flex-wrap">
        {(Array.isArray(techStack) ? techStack : []).map((t, index) => (
          <span
            key={`${t}-${index}`}
            className="text-xs bg-[#2A2138] py-1 px-2 rounded-md text-purple-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-black"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
