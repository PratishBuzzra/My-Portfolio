import React from 'react'
import MenuItem from './MenuItem'

const Header = ({mode, setMode, openNav, setOpenNav}) => {
  return (
    <div className= {`${mode ? ' bg-[#f6d4b1] text-[#1A1A1A]' : 'bg-[#1A1A1A] text-[#f6d4b1]'} fixed top-0 w-full  px-6 py-3  shadow-lg`}>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div>
           <a href="#intro"><h2 className='font-bold text-xl sm:text-2xl md:text-3xl leading-tight'>Pratish <br className='sm:hidden'/> Bajracharya</h2></a> 
        </div>

       
            <div className='text-lg font-semibold'>
                <MenuItem mode={mode} setMode={setMode} openNav={openNav} setOpenNav={setOpenNav}/>
            </div>
      
      </div>
    </div>
  )
}

export default Header
