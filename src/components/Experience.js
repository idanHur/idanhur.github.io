import React from 'react'

const Details =({position, company, companyLink, time, address, work}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>
                {position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary capitalize'
                >@{company}</a> </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div className='w-[75%] mx-auto relative'>
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
