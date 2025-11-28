import { useState } from "react";
import "../style/marquee.css"; // important
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiGithubcopilot,
  SiGithub,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export default function SkillsMarquee() {
  // manual pause (click) and hover pause combined
  const [paused, setPaused] = useState(false);
  

  const skills = [
    { name: "React", icon: <SiReact size={28} /> },
    { name: "JavaScript", icon: <SiJavascript size={28} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={28} /> },
    { name: "Node.js", icon: <SiNodedotjs size={28} /> },
    { name: "Express", icon: <SiExpress size={28} /> },
    { name: "MongoDB", icon: <SiMongodb size={28} /> },
    { name: "Redux", icon: <SiRedux size={28} /> },
    { name: "Github Copilot", icon: <SiGithubcopilot size={28} /> },
    { name: "Github", icon: <SiGithub size={28} /> },
    { name: "Html5", icon: <SiHtml5 size={28} /> },
    { name: "Css3", icon: <SiCss3 size={28} /> },
  ];

  return (
    <div
      className="skill-section items-center justify-center w-full min-h-[50vh] flex flex-col px-4 md:px-8 py-12 gap-12"
      id="skills"
    >
      <div className="skill-header text-5xl text-[#7C3AED] mb-6 font-bold">My Skills</div>

      <div className="scroll-skills w-full">
        <div
          className={`marquee-container ${paused ? "paused" : ""} item-center overflow-hidden whitespace-nowrap`}
          onClick={() => setPaused((p) => !p)}
        >
          <div className="marquee-track gap-8 whitespace-nowrap flex flex-nowrap">
            {/* render the same `skills` list twice in the DOM without creating a separate duplicated array */}
            {[0, 1].map((rep) =>
              skills.map((skill, i) => (
                <div
                  key={i + rep * skills.length}
                  className="flex flex-col w-[135px] h-[135px] justify-center items-center gap-6 px-6 py-2 text-lg font-medium"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
