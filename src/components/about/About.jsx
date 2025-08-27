import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
const About = ({mode}) => {
  return (
    <div className="px-4" id="about">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5">About Me</h1>
        <div className="flex flex-col sm:text-lg leading-relaxed text-center mb-5 max-w-4xl">
          <p>
            Hi my name is Pratish currently pursuing my Bachelors in{" "}
            <span className={`${mode ? 'bg-[#1A1A1A] text-[#f6d4b1]' : 'bg-[#f6d4b1] text-[#1A1A1A]'} px-2 py-1`}>Computer Science</span>
          </p>
          <br />
          <p>
            My interest in technology started early, and over the years, it has
            evolved into a deep curiosity for how things work behind the screen.
            I began learning web development a few years ago, starting with
            HTML, CSS, and JavaScript, and gradually moved into building small
            projects to apply what I learned. As I advanced, I focused on
            strengthening my JavaScript logic skills and exploring more complex
            challenges. I consistently pushed myself by learning, building, and
            sharing projects on GitHub.
          </p>
          <br />
          <p>
            My journey led me to React and eventually the MERN stack, where I’ve
            been diving deeper into full-stack development. Along the way, I’ve
            developed a strong habit of self-learning, problem-solving, and
            adapting to new tools and technologies.
          </p>
          <br />
          <p>
            As a dedicated learner, I'm always seeking opportunities to grow,
            face challenges, and contribute to meaningful projects. My goal is
            to continue evolving into a skilled software developer capable of
            solving real-world problems through clean, efficient, and
            user-focused solutions.
          </p>
        </div>
        <div className="w-full">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">My CurrenStack of <span className={`${mode ? 'bg-[#1A1A1A] text-[#f6d4b1]' : 'bg-[#f6d4b1] text-[#1A1A1A]'} px-2`}>languages/technologies</span></h3>
            <p className="flex flex-wrap items-center justify-center gap-6 text-4xl mb-10">
                <FaHtml5 title="HTML"/>
                <FaCss3Alt title="CSS"/>
                <FaJs title="JavaScript"/>
                <FaBootstrap title="Bootstrap"/>
                <FaSass title="SASS"/>
                <FaReact title="ReactJS"/>
                <RiTailwindCssFill title="Tailwind CSS"/>
                <DiMongodb title="MongoDB"/>
                <SiExpress title="ExpressJS"/>
                <FaNodeJs title="NodeJS"/>
                <SiMysql title="MySql"/>
                <FaGitAlt title="Git"/>
                <SiAdobephotoshop title="Photoshop"/>

            </p>
        </div>
        <div className="w-full">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Stack of <span className={`${mode ? 'bg-[#1A1A1A] text-[#f6d4b1]' : 'bg-[#f6d4b1] text-[#1A1A1A]'} px-2`}>languages/technologies</span> I plan to learn</h3>
            <p className="flex items-center justify-center gap-6 text-4xl mb-14">
                <RiNextjsFill title="NextJS"/>
                <FaJava title="Java"/>
                <SiDjango title="Django"/>
                <SiTypescript title="TypeScript"/>

            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
