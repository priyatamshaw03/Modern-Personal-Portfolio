import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggle from './ThemeToggle'

const Navbar = ({theme, setTheme}) => {
    const [open, setOpen] = useState(false)
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 top-0 z-20 backdrop-blur-2xl sticky bg-white/50 dark:bg-gray-900/60'><a href="#">
        <img src={assets.logo} alt="logo" className='h-7 md:h-9'/>
    </a>
        <div className={`text-gray-800 dark:text-white sm:text-md ${!open ? 'max-sm:w-0 overflow-hidden': 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

            <img src={assets.close_icon} alt="close" className='w-4 absolute right-5 top-6 sm:hidden' onClick={()=> setOpen(false)}/>

            <a onClick={()=> setOpen(false)} href="#" className='sm:hover:text-primary'>Home</a>
            <a onClick={()=> setOpen(false)} href="#about" className='sm:hover:text-primary'>About</a>
            <a onClick={()=> setOpen(false)} href="#skills" className='sm:hover:text-primary'>Skills</a>
            <a onClick={()=> setOpen(false)} href="#profile" className='sm:hover:text-primary'>Profile</a>
            <a onClick={()=> setOpen(false)} href="#projects" className='sm:hover:text-primary'>Projects</a>
            <a onClick={()=> setOpen(false)} href="#contact" className='sm:hover:text-primary'>Contact</a>

        </div>

        <div className='flex items-center gap-2 sm:gap-4'>

            <ThemeToggle theme={theme} setTheme={setTheme}/>

            <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=> setOpen(true)} className='sm:hidden w-8'/>

            <a href="#contact" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Contact <img src={assets.arrow_icon} alt="" width={14} className='transition-transform duration-200 ease-in-out group-hover:translate-x-1 mt-0.5'/>
            </a>
        </div>

    </div>
  )
}

export default Navbar