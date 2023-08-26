import React, { useRef } from 'react'
import {useScroll, motion} from "framer-motion"
import LiIcon from './LiIcon'

const Details =({position, company, companyLink, time, address, work}) => {
        const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] md:w-[60%] mx-auto flex flex-col
        items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
            className='ml-2 md:ml-0'
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;<a href={companyLink}
                    target='_blank'
                    className='text-primary dark:text-primaryDark capitalize'
                    >@{company}</a> </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-16 md:my-32 lg:my-48'>
      <h2 className='font-bold text-5xl md:text-8xl mb-16 md:mb-24 lg:mb-32  w-full text-center'>
        Experience
      </h2>
      <div ref={ref} className='w-full md:w-[75%] mx-auto relative'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                position="Junior Android/Linux developer"
                company="HTVet"
                time="01/2023 - 05/2023"
                companyLink="https://www.ht-vet.com/"
                address="Hod HaSharon, Israel"
                work="As the lead developer, I developed an Android app integrating UVC cameras and controlling microcontrollers. 
                I adapted our software for Arch Linux tablets, involving debugging, code adjustments, and creating automation scripts. 
                I enhanced system performance with automation scripts, managed various packages, and introduced Linux services. 
                I implemented real-time WebRTC communication in Python for live camera feeds. I also set up a communication framework with microcontrollers via USB. 
                On the management side, I organized tasks using Monday.com and managed code with GitLab, showcasing my ability to work independently and efficiently."
                />

            </ul>
      </div>
      
    </div>
  )
}

export default Experience
