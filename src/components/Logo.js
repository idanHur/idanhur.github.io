import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink 
        href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
        whileHover={{
            backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
            scale: 1.25, // This will scale the element by 10% when hovered
            transition: {
                backgroundColor: { duration: 1, repeat: Infinity }, // Only apply the infinite loop to the backgroundColor
                scale: { duration: 0.3 } // Separate transition for the scale effect
            }
        }}
        onClick={(e) => {
          if (window.location.pathname === '/') {
            e.preventDefault(); // Prevent the default link behavior
            window.location.reload(); // Reload the page
          }
        }}
      >
        IH
      </MotionLink>
    </div>
  )
}

export default Logo
