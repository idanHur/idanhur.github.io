import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg
    dark:text-light dark:border-light
    '>
      <div className='w-[85%] mx-auto py-2 flex flex-col md:flex-row items-center 
      justify-between md:p-6'> 
        <span className='mb-2 md:mb-0'>
          {new Date().getFullYear()} &copy; All Rights Reserved
          </span>

        <div className='flex items-center mb-2 md:mb-0'>
          <p className='underline underline-offset-2'>
            Idan Hur
          </p>
        </div>
        
        <Link href="mailto:idan12060@gmail.com" target='_blank' className='underline underline-offset-2'>
          Say Hello
        </Link>
      </div>
    </footer>
  )
}

export default Footer
