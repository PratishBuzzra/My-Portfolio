import React from 'react';
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const ResponsiveMenu = ({ openNav, setOpenNav, mode, changeMode }) => {
  return (
    <div className={`
  ${openNav ? 'translate-x-0' : '-translate-x-full'}
  fixed top-0 left-0 w-full  z-[999] h-screen
  flex flex-col items-center justify-center text-center
  ${mode ? 'bg-[#f6d4b1] text-[#1A1A1A]' : 'bg-[#1A1A1A] text-[#f6d4b1]'}
  transition-all duration-300 ease-in-out md:hidden
`}>
  <button 
  className="absolute top-6 right-6 text-3xl pointer-events-auto z-50"
  onClick={() => setOpenNav(false)}
  aria-label="Close menu"
>
  <IoClose />
</button>

      <ul className="flex flex-col gap-6 text-lg font-medium">
        <li>
          <a href="#about" onClick={() => setOpenNav(false)}>
            <h3 className="hover:underline">About</h3>
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setOpenNav(false)}>
            <h3 className="hover:underline">Projects</h3>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpenNav(false)}>
            <h3 className="hover:underline">Contact</h3>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setOpenNav(false)} className='flex items-center justify-center'>
            <IoDocumentTextSharp className="text-2xl" />
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              changeMode();
              setOpenNav(false);
            }}
            className={`
              ${mode ? 'bg-[#1A1A1A] text-[#f6d4b1]' : 'bg-[#f6d4b1] text-[#1A1A1A]'}
              px-6 py-2 rounded-3xl flex items-center gap-2
              transition-colors duration-200 hover:opacity-90
            `}
          >
            {mode ? (
              <>Light <MdLightMode /></>
            ) : (
              <>Dark <FaMoon /></>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
