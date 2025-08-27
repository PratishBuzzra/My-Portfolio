import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = ({mode}) => {
  return (
    <>
    <footer className='mt-10'>
        <div>
            <hr/>
            <h2 className='text-xl sm:text-2xl font-bold text-center pt-6 pb-4'>Connect With Me</h2>
            <ul className='flex flex-wrap items-center justify-center gap-5 text-3xl sm:text-4xl'>
  <li>
    <a href="https://github.com/PratishBuzzra" target="_blank" >
      <FaGithub className={`border-2 rounded-3xl p-2 w-10 h-10 md:rounded-3xl md:p-2 md:w-12 md:h-12 ${mode ? 'hover:bg-[#1A1A1A] hover:text-[#f6d4b1]' : 'hover:bg-[#f6d4b1] hover:text-[#1A1A1A]'} transition`} />
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/pratish-bajracharya-886933283/" target="_blank" >
      <FaLinkedin className={`border-2 rounded-3xl p-2 w-10 h-10 md:rounded-3xl md:p-2 md:w-12 md:h-12 ${mode ? 'hover:bg-[#1A1A1A] hover:text-[#f6d4b1]' : 'hover:bg-[#f6d4b1] hover:text-[#1A1A1A]'} transition`} />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/pratish_bajracharya/" target="_blank">
      <FaInstagram className={`border-2 rounded-3xl p-2 w-10 h-10 md:rounded-3xl md:p-2 md:w-12 md:h-12 ${mode ? 'hover:bg-[#1A1A1A] hover:text-[#f6d4b1]' : 'hover:bg-[#f6d4b1] hover:text-[#1A1A1A]'} transition`} />
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/pratishbajracharya.pratishbajracharya/" target="_blank" >
      <FaFacebook className={`border-2 rounded-3xl p-2 w-10 h-10 md:rounded-3xl md:p-2 md:w-12 md:h-12 ${mode ? 'hover:bg-[#1A1A1A] hover:text-[#f6d4b1]' : 'hover:bg-[#f6d4b1] hover:text-[#1A1A1A]'} transition`} />
    </a>
  </li>
</ul>

           
            <p className='text-sm md:text-[16px] text-center pt-6 pb-4 font-semibold'>Designed and Built by {' '} <span className={`${mode ? 'bg-[#1A1A1A] text-[#f6d4b1]' : 'bg-[#f6d4b1] text-[#1A1A1A]'} px-2`}>Pratish Bajracharya</span> {' '} &copy; 2025</p>
        </div>
    </footer>
    
    </>
  )
}

export default Footer
