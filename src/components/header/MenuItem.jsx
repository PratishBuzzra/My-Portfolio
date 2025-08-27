import React, { useState } from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

import ResponsiveMenu from './ResponsiveMenu';
const MenuItem = ({mode, setMode, openNav, setOpenNav}) => {
   
  
    const changeMode =()=>{
        setMode(!mode)
    }
  return (
    <>
    <ul className='hidden md:flex gap-6 pt-3 items-center'>
        <li>
            <a href="#about" >
                <h3 className='hover:underline'>About</h3>
            </a>
        </li>
         <li>
            <a href="#projects">
                <h3 className='hover:underline'>Projects</h3>
            </a>
        </li>
         <li>
            <a href="#contact">
                <h3 className='hover:underline'>Contact</h3>
            </a>
        </li>
         <li>
            <a href="">
                <IoDocumentTextSharp className='text-2xl'/>
            </a>
        </li>
         <li>
            <button className={`${mode ? 'bg-[#1A1A1A] text-[#f6d4b1]'  : 'bg-[#f6d4b1] text-[#1A1A1A]'} px-6 py-2 rounded-3xl`} onClick={changeMode}>
                {mode ? <span className='flex items-center gap-2'>Light <MdLightMode /></span> : <span className='flex items-center gap-2'>Dark <FaMoon /></span>  }
            </button>
        </li>
    </ul>
    <div className='pt-2'>
        
             <IoMdMenu onClick={()=>setOpenNav(true)} className='text-3xl md:hidden'/>
        
      </div>

        <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} mode={mode} setMode={setMode} changeMode={changeMode}/>

    </>
  )
}

export default MenuItem
