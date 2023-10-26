import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import carAuctionImg from "../../public/images/projects/carAuction.png"
import project1 from "../../public/images/projects/Connect4.jpg"
import project2 from "../../public/images/projects/song-db-management.jpg"
import project3 from "../../public/images/projects/ProtfolioWebsite.jpg"
import project4 from "../../public/images/projects/Real-Time-Demand-Forecasting-in-E-commerce.jpeg"
import project5 from "../../public/images/projects/Trip-Management-Application.jpg"
import project6 from "../../public/images/projects/linux.jpg"
import project7 from "../../public/images/projects/ML-with-the-Titanic-Dataset.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'
import {projectsStrings} from "../strings"

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    const [isLoading, setLoading] = useState(true);
    const FramerImage = motion(Image);

    return(
        <article className='w-full flex flex-grow flex-col items-center justify-center
        rounded-2xl border border-solid border-dark bg-white relative rounded-br-2xl p-6
        dark:bg-dark dark:text-light dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] 
        bg-dark rounded-br-3xl dark:bg-light' />
            <div className='w-full flex flex-col lg:flex-row items-center justify-start'>
                <Link href={link ? link : github} target='_blank'
                className='w-full lg:w-auto cursor-pointer overflow-hidden rounded-lg mb-4 lg:mb-0'  // Added mb-4 for spacing on small and medium screens
                >
                    <FramerImage src={img} alt={title} className={`w-full h-auto ${isLoading ? 'grayscale blur-2xl scale-110' :
                    'grayscale-0 blur-0 scale-100'}`}
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    priority
                    sizes='(max-width: 768px) 100vw, 
                    (max-width: 1200px) 50vw, 
                    33vw'
                    onLoadingComplete={() => setLoading(false)}
                    />
                </Link>
                <div className='w-full lg:w-auto flex flex-col items-start justify-between lg:pl-6'>
                    <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                    <Link href={link ? link : github} target='_blank' 
                    className='hover:underline underline-offset-2'>
                        <h2 className='my-1 lg:my-2 w-full text-left text-2xl lg:text-4xl font-bold dark:text-light'>{title}</h2>
                    </Link>
                </div>
            </div>

            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                {link && <Link href={link} target='_blank' 
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark'
                >Visit project</Link>}
            </div>
        <div/>
        </article>
    )
}


const projects = () => {
  return (
    <>
        <Head>
            <title>Idan Hur | Projects Page</title>
            <meta name="description" content="Explore Idan Hur's portfolio of technological projects, including the Connect4 Game, Trip Management Application, TV Show Runtime, and Titanic Machine Learning analysis. Dive into the details and discover the passion and expertise behind each creation." />
            <meta name="keywords" content="Idan Hur, Projects, Connect4 Game, Trip Management Application, TV Show Runtime, Titanic Machine Learning, Kaggle, Python, ASP.NET Core, PostgreSQL, Linux" />
            <meta property="og:title" content="Idan Hur's Projects - Showcasing Technological Triumphs" />
            <meta property="og:description" content="A collection of Idan Hur's innovative projects, reflecting a blend of software engineering skills, creativity, and dedication to excellence." />
            <meta property="og:url" content="https://www.idan-hur.com/projects" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout>
                <AnimatedText className="!text-4xl lg:!text-6xl mb-8 md:mb-16 " text="Crafted with Passion: A Tour of My Technological Triumphs."/>
                <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-24 gap-x-6 md:gap-y-24 lg:gap-x-8 xl:gap-x-16'>
                    
                    <div className='col-span-1 md:col-span-3 lg:col-span-6 flex flex-col'>
                        <FeaturedProject 
                            title={`${projectsStrings.carAuctionTitle}`}
                            summary={`${projectsStrings.carAuctionSummary}`}
                            img= {carAuctionImg}
                            github={`${projectsStrings.carAuctionGithub}`}
                            type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6 flex flex-col'>
                        <FeaturedProject 
                            title={`${projectsStrings.connect4Title}`}
                            summary={`${projectsStrings.connect4Summary}`}
                            img= {project1}
                            github={`${projectsStrings.connect4Github}`}
                            type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6 flex flex-col'>
                        <FeaturedProject 
                                title={`${projectsStrings.songDatabaseTitle}`}
                                summary={`${projectsStrings.songDatabaseSummary}`}
                                img= {project2}
                                github={`${projectsStrings.songDatabaseGithub}`}
                                type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6 flex flex-col'>
                        <FeaturedProject 
                                title={`${projectsStrings.portfolioWebsiteTitle}`}
                                summary={`${projectsStrings.portfolioWebsiteSummary}`}
                                link={`${projectsStrings.portfolioWebsiteLink}`}
                                img= {project3}
                                github={`${projectsStrings.portfolioWebsiteGithub}`}
                                type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6 flex flex-col'>
                        <FeaturedProject 
                                title={`${projectsStrings.demandForecastingTitle}`}
                                summary={`${projectsStrings.demandForecastingSummary}`}
                                link={`${projectsStrings.demandForecastingLink}`}
                                img= {project4}
                                github={`${projectsStrings.demandForecastingGithub}`}
                                type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6 flex flex-col'>
                        <FeaturedProject 
                                title={`${projectsStrings.tripManagementTitle}`}
                                summary={`${projectsStrings.tripManagementSummary}`}
                                img= {project5}
                                github={`${projectsStrings.tripManagementGithub}`}
                                type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6 flex flex-col'>
                        <FeaturedProject 
                                title={`${projectsStrings.showRuntimeTitle}`}
                                summary={`${projectsStrings.showRuntimeSummary}`}
                                img= {project6}
                                github={`${projectsStrings.showRuntimeGithub}`}
                                type="Featured Project "
                        />
                    </div>
                    
                    <div className='col-span-1 md:col-span-3 lg:col-span-6 flex flex-col'>
                        <FeaturedProject 
                                title={`${projectsStrings.titanicTitle}`}
                                summary={`${projectsStrings.titanicSummary}`}
                                link={`${projectsStrings.titanicLink}`}
                                img= {project7}
                                github={`${projectsStrings.titanicGithub}`}
                                type="Featured Project "
                        />
                    </div>

                    <div className='col-span-1 md:col-span-6 lg:col-span-12'>
                    </div>

                    <div className='col-span-1 md:col-span-6 lg:col-span-12'>
                        <AnimatedText className="!text-4xl lg:!text-6xl mb-8 md:mb-16 " text="More projects will be uploaded soon!"/>
                    </div>
                </div>

            </Layout>
        </main>
    </>
  )
}

export default projects
