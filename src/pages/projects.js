import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from 'framer-motion'

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    const FramerImage = motion(Image);

    return(
        <article className='w-full flex flex-col items-center justify-center
        rounded-2xl border border-solid border-dark bg-white relative rounded-br-2xl p-6
        dark:bg-dark dark:text-light dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] 
        bg-dark rounded-br-3xl dark:bg-light' />
            <div className='w-full flex flex-col lg:flex-row items-center justify-start'>
                <Link href={link ? link : github} target='_blank'
                className='w-full lg:w-auto cursor-pointer overflow-hidden rounded-lg mb-4 lg:mb-0'  // Added mb-4 for spacing on small and medium screens
                >
                    <FramerImage src={img} alt={title} className='w-full h-auto' 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw, 
                    (max-width: 1200px) 50vw, 
                    33vw'
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
            <meta name='description' content='Idan Hur - Backend Developer with 
            expertise in C#, Python, Java, and more. Experienced in Android/Linux 
            development, software integration, and web development. Explore my resume,
            projects, and professional journey.'/>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout>
                <AnimatedText className="!text-4xl lg:!text-6xl mb-8 md:mb-16 " text="Crafted with Passion: A Tour of My Technological Triumphs."/>
                <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-24 gap-x-6 md:gap-y-24 lg:gap-x-8 xl:gap-x-16'>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        <FeaturedProject 
                            title="Crypto Screener Application"
                            summary="Crypto Screener Application
                            A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="/"
                            img= {project1}
                            github="/"
                            type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        <FeaturedProject 
                                title="Crypto Screener Application"
                                summary="Crypto Screener Application
                                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency."
                                link="/"
                                img= {project1}
                                github="/"
                                type="Featured Project "
                            />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        Project-2
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        Featured Project
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        Project-3
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        Project-4
                    </div>
                </div>

            </Layout>
        </main>
    </>
  )
}

export default projects
