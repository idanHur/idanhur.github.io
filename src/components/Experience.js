import React, { useRef } from 'react'
import {useScroll, motion} from "framer-motion"
import LiIcon from './LiIcon'
import {experienceStrings, experienceMeggerStrings} from "../strings"

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
                position={`${experienceMeggerStrings.experienceMeggerPosition}`}
                company={`${experienceMeggerStrings.experienceMeggerCompany}`}
                time={`${experienceMeggerStrings.experienceMeggerTime}`}
                companyLink={`${experienceMeggerStrings.experienceMeggerCompanyLink}`}
                address={`${experienceMeggerStrings.experienceMeggerAddress}`}
                work={`${experienceMeggerStrings.experienceMeggerWork}`}
                />
                <Details 
                position={`${experienceStrings.experience1Position}`}
                company={`${experienceStrings.experience1Company}`}
                time={`${experienceStrings.experience1Time}`}
                companyLink={`${experienceStrings.experience1CompanyLink}`}
                address={`${experienceStrings.experience1Address}`}
                work={`${experienceStrings.experience1Work}`}
                />
            </ul>
      </div>
      
    </div>
  )
}

export default Experience
