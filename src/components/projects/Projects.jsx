import React from 'react'
import Pomodoro from "/images/Pomodoro.png"
import lifestyleblog from "/images/LifestyleBlog.png"
import SMMS from "/images/SMS.png"
import gogl from "/images/gogl.png"
import shopbuzz from "/images/shopbuzz.png"
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
const allProjects = [
    {
        id: 1,
        projectImg: lifestyleblog,
        projectName: "Lifestyle Blog Website",
        projectDesc: "Built responsive React website recreating a lifestyle blog design from WebWave Templates, built to practice converting a rich UI into a functional React app",
        projectLanguages: ["reactjs", "css"],
        projectLiveLink : "https://lifestyle-blog-website-react.vercel.app/",
        projectGithub: "https://github.com/PratishBuzzra/Lifestyle-Blog-Website-React-.git"
    },
      {
        id: 2,
        projectImg: Pomodoro,
        projectName: "Pomodoro Web App",
        projectDesc: "Built responsive Pomodoro web app built with HTML, CSS, and JavaScript featuring a timer with Pomodoro, Short Break, and Long Break modes to enhance focus and productivity.",
        projectLanguages: ["html", "css", "javascript"],
        projectLiveLink : "https://pratishbuzzra.github.io/Pomodoro_Timer/",
        projectGithub: "https://github.com/PratishBuzzra/Pomodoro_Timer.git"
    },
    {
        id: 3,
        projectImg: SMMS,
        projectName: "Student Management System",
        projectDesc: "Built SMS MERN stack web app for managing student records, offering features to add, view, update, delete, and search data through a clean and responsive UI",
        projectLanguages: ["MongoDb", "reactjs", "expressJs", "NodeJS", "TailwindCss"],
        projectLiveLink : "https://mern-sms.vercel.app/",
        projectGithub: "https://github.com/PratishBuzzra/MERN-SMS.git"
    },
    {
        id: 4,
        projectImg: gogl,
        projectName: "Goggl React",
        projectDesc: "Built Search Engine App Built with React and Google Custom Search API, supporting text, image, and YouTube search via RapidAPI, with global state managed through Context API",
        projectLanguages: ["reactjs", "tailwindcss", "API"],
        projectLiveLink : "https://goggl-react-two.vercel.app/",
        projectGithub: "https://github.com/PratishBuzzra/Goggl-React.git"
    },
    {
        id: 5,
        projectImg: shopbuzz,
        projectName: "ShopBuzzra Ecommmerce Site",
        projectDesc: "Built E-Commerce Platform Full-stack MERN app with product management, role-based user authentication, secure checkout with Esewa payment integration, and state management using React Router, Context API, and Reducer.",
        projectLanguages: ["MERN", "tailwindcss"],
        projectLiveLink : "",
        projectGithub: ""
    }
]
const Projects = ({mode}) => {
    
  return (
    <div className='flex flex-col max-w-7xl mx-auto px-4' id='projects'>
      <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center'>My Projects</h1>
      <div className='py-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {allProjects.map((proj)=>(
                <div key={proj.id} className='border rounded-lg p-4 shadow-lg flex flex-col justify-between'>
                    <img src={proj.projectImg} alt={proj.projectName} className='w-full h-[30vh] object-cover rounded-md' />
                    <div className='mt-4 flex-1 flex-col justify-between'>
                        <div>
                        <h3 className='text-center text-xl sm:text-2xl font-bold mb-3'>{proj.projectName}</h3>
                        <p className='text-center text-sm sm:text-base leading-6'>{proj.projectDesc}</p>
</div>
                       <div className='flex flex-wrap  items-center justify-center gap-2 mt-5'>
                         {proj.projectLanguages.map((lang, index)=>(
                            <span key={index} className={`${mode ? 'bg-[#1A1A1A] text-[#f6d4b1]' : 'bg-[#f6d4b1] text-[#1A1A1A]'} px-2 py-1 text-sm`}>{lang}</span>
                        ))}
                       </div>
                        <div className='flex gap-4 text-xl justify-end mt-3'>
                            <a href={proj.projectLiveLink} target='_blank'><PiLinkSimpleBold /></a>
                            <a href={proj.projectGithub} target='_blank'><FaGithub /></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
