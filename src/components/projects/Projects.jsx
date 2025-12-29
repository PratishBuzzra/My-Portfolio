import React from 'react'
import Pomodoro from "/images/Pomodoro.png"
import lifestyleblog from "/images/LifestyleBlog.png"
import SMMS from "/images/SMS.png"
import gogl from "/images/gogl.png"
import shopbuzz from "/images/shopbuzz.png"
import Zobly from "/images/Zobly.png"
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
const allProjects = [
    {
        id: 1,
        projectImg: lifestyleblog,
        projectName: "Lifestyle Blog Website",
        projectDesc: "Built a responsive lifestyle blog website using React, inspired by a WebWave template design. Focused on converting a rich UI into reusable components while maintaining clean layouts, consistent styling, and responsiveness across devices for modern browsers.",
        projectLanguages: ["reactjs", "css"],
        projectLiveLink : "https://lifestyle-blog-website-react.vercel.app/",
        projectGithub: "https://github.com/PratishBuzzra/Lifestyle-Blog-Website-React-.git"
    },
      {
        id: 2,
        projectImg: Pomodoro,
        projectName: "Pomodoro Web App",
        projectDesc: "Developed a productivity-focused Pomodoro web application using HTML, CSS, and JavaScript. The app includes Pomodoro, short break, and long break modes, helping users manage focus sessions through a clean, minimal, and responsive interface.",
        projectLanguages: ["html", "css", "javascript"],
        projectLiveLink : "https://pratishbuzzra.github.io/Pomodoro_Timer/",
        projectGithub: "https://github.com/PratishBuzzra/Pomodoro_Timer.git"
    },
    {
        id: 3,
        projectImg: SMMS,
        projectName: "Student Management System",
        projectDesc: "Created a full-stack student management system using the MERN stack. The application supports adding, viewing, updating, deleting, and searching student records through a responsive UI, demonstrating efficient CRUD operations and RESTful API integration.",
        projectLanguages: ["MongoDb", "reactjs", "expressJs", "NodeJS", "TailwindCss"],
        projectLiveLink : "https://mern-sms.vercel.app/",
        projectGithub: "https://github.com/PratishBuzzra/MERN-SMS.git"
    },
    {
        id: 4,
        projectImg: gogl,
        projectName: "Goggl React",
        projectDesc: "Built a search engine application using React and the Google Custom Search API. The app supports text, image, and YouTube searches via RapidAPI and manages global state efficiently using the React Context API for smooth user experience.",
        projectLanguages: ["reactjs", "tailwindcss", "API"],
        projectLiveLink : "https://goggl-react-two.vercel.app/",
        projectGithub: "https://github.com/PratishBuzzra/Goggl-React.git"
    },
    {
        id: 5,
        projectImg: shopbuzz,
        projectName: "ShopBuzzra Ecommmerce Site",
        projectDesc: "Developed a full-stack MERN e-commerce platform featuring product management, role-based user authentication, and secure checkout with Esewa payment integration. The application uses React Router, Context API, and Reducer for efficient state management.",
        projectLanguages: ["MERN", "tailwindcss"],
        projectLiveLink : "",
        projectGithub: "https://github.com/PratishBuzzra/ShopBuzzra-EcommerceSite.git"
    },
    {
    id: 6,
    projectImg: Zobly,
    projectName: "Zobly-Job Portal Platform",
    projectDesc: "Built a full-stack job portal where employers can post and manage jobs and job seekers can apply with resumes. Implemented role-based authentication, secure JWT cookie, Cloudinary file uploads, application tracking, and a responsive UI.",
    projectLanguages: ["Reactjs", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS"],
    projectLiveLink: "",
    projectGithub: "https://github.com/PratishBuzzra/Zobly-PERN.git"
}

]
const Projects = ({mode}) => {
    
  return (
    <div className='flex flex-col max-w-7xl mx-auto px-4' id='projects'>
      <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center'>My Projects</h1>
      <div className='py-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {allProjects.map((proj)=>(
                <div key={proj.id} className='border rounded-lg p-4 shadow-lg flex flex-col h-full'>
                    <img src={proj.projectImg} alt={proj.projectName} className='w-full h-[30vh] object-fit rounded-md' />
                    <div className='mt-4 flex flex-col flex-1'>
                        <div>
                        <h3 className='text-center text-xl sm:text-2xl font-bold mb-3 '>{proj.projectName}</h3>
                        <p className='text-center text-sm sm:text-base leading-6"'>{proj.projectDesc}</p>
</div>
                       <div className='mt-auto'>
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">

                        
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
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
