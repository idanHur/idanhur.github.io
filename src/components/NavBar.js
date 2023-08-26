import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[1px] inline-block bg-dark 
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-light`}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }
  return(
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}

      <span className={`h-[1px] inline-block bg-light
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-dark`}>&nbsp;</span>
    </button>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);
  

  const handleClick = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <header
    className='w-full px-4 md:px-8 lg:px-32 py-10 lg:py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10
    '>

      <button className='flex flex-col justify-center items-center lg:hidden' onClick={handleClick}>
          <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'}`} style={{transformOrigin: 'top'}}></span>
          <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${isOpen ? '-rotate-45 translate-y-[-1px]' : 'translate-y-0.5'}`} style={{transformOrigin: 'bottom'}}></span>
      </button>


      <div className='w-full justify-between items-center hidden lg:flex'>
        <nav>
          <CustomLink href='/' title="Home" className='md:mr-4'/>
          <CustomLink href='/about' title="About" className='mx-4'/>
          <CustomLink href='/projects' title="Projects" className='md:ml-4'/>
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href='https://www.linkedin.com/in/idan-hur/' target={"_blank"}
          className='w-6 mr-3'
          whileHover={{y:-2 }}
          whileTap={{scale:0.9}}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a href='https://github.com/idanHur' target={"_blank"} className='w-6 ml-3'
          whileHover={{y:-2 }}
          whileTap={{scale:0.9}}
          >
            <GithubIcon />
          </motion.a>

          <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {
              mode === "dark" ?
              <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </div>

      {
        isOpen ?
        <motion.div 
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg
      backdrop-blur-md py-32'>
        <nav className='flex items-center flex-col justify-center'>
          <CustomMobileLink href='/' title="Home" className='' toggle={handleClick}/>
          <CustomMobileLink href='/about' title="About" className='' toggle={handleClick}/>
          <CustomMobileLink href='/projects' title="Projects" className='' toggle={handleClick}/>
        </nav>

        <nav className='flex items-center justify-center flex-wrap mt-2'>
          <motion.a href='https://www.linkedin.com/in/idan-hur/' target={"_blank"}
          className='w-6 mr-3'
          whileHover={{y:-2 }}
          whileTap={{scale:0.9}}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a href='https://github.com/idanHur' target={"_blank"} className='w-6 ml-3 bg-light rounded-full dark:bg-dark'
          whileHover={{y:-2 }}
          whileTap={{scale:0.9}}
          >
            <GithubIcon />
          </motion.a>

          <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 max-w-6 max-h-8
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {
              mode === "dark" ?
              <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </motion.div>

        :null
      }

      <div className='absolute left-[50%] top-2 -translate-x-[25%] md:translate-x-[50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
