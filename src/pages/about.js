import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import profilePic from '../../public/images/profile/home-img.jpg'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
import CustomImage from '@/components/CustomImage'
import {aboutStrings} from "../strings"

const about = () => {
  return (
    <>
        <Head>
            <title>Idan Hur | About Page</title>
            <meta name="description" content="Learn more about Idan Hur, a dedicated Backend Developer with a passion for innovation. Graduate from Afeka Tel Aviv Academic College of Engineering with expertise in C#, Python, Java, and more." />
            <meta name="keywords" content="Idan Hur, About, Backend Developer, Software Engineer, Afeka Tel Aviv Academic College, C#, Python, Java, Android, Linux, Machine Learning, AI" />
            <meta property="og:title" content="About Idan Hur - Backend Developer & Software Engineer" />
            <meta property="og:description" content="Discover the journey of Idan Hur, a dedicated Backend Developer with a rich background in software engineering, machine learning, and AI." />
            <meta property="og:url" content="https://www.idan-hur.com/about" />
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center
        dark:text-light 
        ">
            <Layout className="pt-4 md:pt-8 lg:pt-16 ">
                <AnimatedText text={`${aboutStrings.aboutAnimatedText}`} className="!text-5xl lg:!text-7xl mb-2 md:mb-16 xl:mb-20 2xl:mb-32"/>
                <div className="grid w-full grid-cols-1 xl:grid-cols-8 gap-16">
                    <div className="col-span-1 xl:col-span-3 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-lg font-bold uppercase 
                        text-dark/80 dark:text-light/80 " 
                        >About Me</h2>
                        <p className="font-medium mb-4">
                            {aboutStrings.aboutMeFirstParagraph}
                        </p>
                        <p className="font-medium">
                            {aboutStrings.aboutMeSecondParagraph}
                        </p>

                    </div>
                    <div className="col-span-1 xl:col-span-3 flex justify-center items-center">
                        <div className="relative h-max rounded-2xl border-2 border-solid
                        border-dark bg-light dark:bg-dark dark:border-light p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <CustomImage src={profilePic} sizes="(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            33vw"
                            alt="IdanHur"/>
                        </div>
                    </div>
                    

                    <div className="col-span-1 xl:col-span-2 flex flex-col items-center xl:items-end justify-between">
                        <div className="flex flex-col items-center xl:items-end justify-center pb-8">
                            <span className="inline-block text-2xl font-bold">
                                {aboutStrings.aboutImageSideHeading1}
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 ">
                                {aboutStrings.aboutImageSideSubHeading1}</h2>
                        </div>
                        <div className="flex flex-col items-center xl:items-end justify-center">
                            <span className="inline-block text-2xl font-bold">
                                {aboutStrings.aboutImageSideHeading2} 
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
