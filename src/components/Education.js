import React, { useRef } from 'react'
import {useScroll, motion} from "framer-motion"
import LiIcon from './LiIcon'
import {educationStrings} from "../strings"

const Details =({type, time, place, info}) => {
        const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] md:w-[60%] mx-auto flex flex-col
        items-start justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
            className='ml-2 md:ml-0'
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-16 md:my-32 lg:my-48'>
      <h2 className='font-bold text-5xl md:text-8xl mb-16 md:mb-24 lg:mb-32 w-full text-center'>
        Education
      </h2>
      <div ref={ref} className='w-full md:w-[75%] mx-auto relative'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-black dark:bg-light origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details  
                    type={`${educationStrings.education1Type}`}  
                    place={`${educationStrings.education1Place}`} 
                    time={`${educationStrings.education1Time}`} 
                    info={`${educationStrings.education1Info}`} 
                />
                <Details  
                    type={`${educationStrings.education2Type}`}    
                    place={`${educationStrings.education2Place}`} 
                    time={`${educationStrings.education2Time}`} 
                />   
            </ul>
      </div>
      
    </div>
  )
}

export default Education
