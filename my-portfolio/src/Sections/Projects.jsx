import React from "react";
import { ProjectCard } from "../Components/ProjectCard";

const Projects = () => {
  const project = [
    {
      title: "NGO Website",
      description:
        "A website for a non-profit organization to showcase their work and accept donations.",
      techStack: ["React", "Tailwind", "React Router"],
      image: "/images/project/ngo.webp",
      loading: "lazy",
      githubLink: "https://github.com/Poonam-Vishwakarma31/NGOAPP",
    },
    {
      title: "To-Do App",
      description: "A simple to-do list application to manage daily tasks.",
      techStack: ["React", "Tailwind", "Redux"],
      image: "/images/project/todo.webp",
      loading: "lazy",
      githubLink: "https://github.com/Poonam-Vishwakarma31/ToDo-Redux",
    },
    {
      title: "Human Resource Management System",
      description:
        "Manages employee records, user roles, and HR operations with secure access control and structured workflows.",
      techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "React"],
      image: "/images/project/hrmsimg.webp",
      loading: "lazy",
      githubLink: "https://github.com/Poonam-Vishwakarma31/HRMS",
    },
  ];
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center
    px-6 md:px-16 py-12 gap-12  "
      id="projects"
    >
      <h2 className="text-5xl font-bold text-[#7C3AED] mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {project.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
