import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return(
        <article className='w-full flex flex-col items-center justify-center
        rounded-2xl border border-solid border-dark bg-white relative p-6'>
            <div className='w-full flex flex-col lg:flex-row items-center justify-start'>
                <Link href={link ? link : github} target='_blank'
                className='w-full lg:w-auto cursor-pointer overflow-hidden rounded-lg mb-4 lg:mb-0'  // Added mb-4 for spacing on small and medium screens
                >
                    <Image src={img} alt={title} className='w-full h-auto max-w-[400px] max-h-[600px]' />
                </Link>
                <div className='w-full lg:w-auto flex flex-col items-start justify-between lg:pl-6'>
                    <span className='text-primary font-medium text-xl'>{type}</span>
                    <Link href={link ? link : github} target='_blank' 
                    className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                    </Link>
                </div>
            </div>

            <p className='my-2 font-medium text-dark'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                {link && <Link href={link} target='_blank' 
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
                >Visit project</Link>}
            </div>
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
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout>
                <AnimatedText className="!text-6xl mb-16" text="Crafted with Passion: A Tour of My Technological Triumphs."/>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-24'>
                    <div className='col-span-1 md:col-span-6'>
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
                    <div className='col-span-1 md:col-span-6'>
                        Project-1
                    </div>
                    <div className='col-span-1 md:col-span-6'>
                        Project-2
                    </div>
                    <div className='col-span-1 md:col-span-6'>
                        Featured Project
                    </div>
                    <div className='col-span-1 md:col-span-6'>
                        Project-3
                    </div>
                    <div className='col-span-1 md:col-span-6'>
                        Project-4
                    </div>
                </div>

            </Layout>
        </main>
    </>
  )
}

export default projects
