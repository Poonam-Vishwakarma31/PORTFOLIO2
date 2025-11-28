import { FaGithub } from "react-icons/fa";

export function ProjectCard({
  title,
  description,
  techStack,
  image,
  githubLink,
}) {
  // Placeholder for project data

  return (
    <div className="border-2 border-[#2D2540] bg-[#1A1625] rounded-lg p-4 w-80 hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        loading="lazy"
          decoding="async"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="mb-4 flex gap-2 mt-3 flex-wrap">
        {techStack.map((t, index) => (
          <span
            key={index}
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
