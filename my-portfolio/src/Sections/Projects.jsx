import React from 'react'
import { ProjectCard } from '../Components/ProjectCard'


const Projects = () => {
  const project = [
    {
        title: "NGO Website",
        description: "A website for a non-profit organization to showcase their work and accept donations.",
        techStack: ["React", "Tailwind", "React Router"],
        image: "/images/project/ngo.webp",
        githubLink: "https://github.com/Poonam-Vishwakarma31/NGOAPP"
    },
    {
        title: "To-Do App",
        description: "A simple to-do list application to manage daily tasks.",
        techStack: ["React", "Tailwind", "Redux"],
        image: "/images/project/todo.webp",
        githubLink: "https://github.com/Poonam-Vishwakarma31/ToDo-Redux"
    },
    {
        title: "Currency Converter",
        description: "An app to convert currencies using real-time exchange rates.",
        techStack: ["HTML", "CSS", "JavaScript", "API Integration"],
        image: "/images/project/currency.webp",
        githubLink: "https://github.com/Poonam-Vishwakarma31/currency-converter"
    }
]
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center
    px-6 md:px-16 py-12 gap-12  " id="projects">
      <h2 className="text-5xl font-bold text-[#7C3AED] mb-8">Projects</h2>  
      <div className="flex flex-wrap justify-center gap-16">
        {project.map((proj, index)=>(
            <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  )
}

export default Projects
