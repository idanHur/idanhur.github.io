import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/images/profile/home-img.JPG'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
const about = () => {
  return (
    <>
        <Head>
            <title>Idan Hur | About Page</title>
            <meta name='description' content='Idan Hur - Backend Developer with 
            expertise in C#, Python, Java, and more. Experienced in Android/Linux 
            development, software integration, and web development. Explore my resume,
            projects, and professional journey.'/>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center
        dark:text-light 
        '>
            <Layout className='pt-4 md:pt-8 lg:pt-16 '>
                <AnimatedText text="Passion Fuels Purpose! " className='!text-5xl lg:!text-7xl mb-2 md:mb-16 xl:mb-20 2xl:mb-32'/>
                <div className='grid w-full grid-cols-1 xl:grid-cols-8 gap-16'>
                    <div className='col-span-1 xl:col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase 
                        text-dark/80 dark:text-light/80 ' 
                        >About Me</h2>
                        <p className='font-medium mb-4'>
                            Hello, I'm Idan Hur, a dedicated Backend Developer with a passion for innovation. I graduated Cum Laude from Afeka Tel Aviv Academic College of Engineering, earning a B.Sc. in Software Engineering with a focus on Machine Learning and AI. My expertise encompasses a range of programming languages, including C#, Python, and Java, and I've further honed my skills in APIs, databases, and data structures.
                        </p>
                        <p className='font-medium'>
                            During my time at HtVet, I led development and integration for Android and Linux systems, deepening my understanding of embedded systems. I'm not just technically proficient; I'm a quick learner with a drive to contribute to groundbreaking backend projects. As the tech industry continues to evolve, I'm eager to collaborate with forward-thinking companies and make a lasting impact.
                        </p>
                    </div>
                    <div className='col-span-1 xl:col-span-3 flex justify-center items-center'>
                        <div className='relative h-max rounded-2xl border-2 border-solid
                        border-dark bg-light dark:bg-dark dark:border-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt='IdanHur' className='w-full h-auto rounded-2xl'
                            priority
                            sizes='(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            33vw'
                            />
                        </div>
                    </div>
                    

                    <div className='col-span-1 xl:col-span-2 flex flex-col items-center xl:items-end justify-between'>
                        <div className='flex flex-col items-center xl:items-end justify-center pb-8'>
                            <span className='inline-block text-2xl font-bold'>
                                Software Engineering Graduate 
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 '>
                                GPA 88</h2>
                        </div>
                        <div className='flex flex-col items-center xl:items-end justify-center'>
                            <span className='inline-block text-2xl font-bold'>
                                SmartUp program for honor students 
                            </span>
                            
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>

    </>
  )
}

export default about
