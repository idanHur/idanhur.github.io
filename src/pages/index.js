import Layout from '@/components/Layout'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Idan Hur</title>
        <meta name="description" content="Idan Hur, a dedicated Software Engineer specializing in backend development. Proficient in C#, Python, Java, and more. Explore my portfolio and get in touch for collaboration." />
        <meta name="keywords" content="Idan Hur, Software Engineer, Backend Developer, C#, Python, Java, .NET, OOP, Spring, MVC, MySQL, PostgreSQL, WebRTC, Android, Linux, Machine Learning, AI" />
        <meta property="og:title" content="Idan Hur - Backend Developer & Software Engineer" />
        <meta property="og:description" content="Idan Hur, a dedicated Software Engineer specializing in backend development. Dive into my extensive portfolio and let's sculpt the future of software together." />
        <meta property="og:url" content="https://www.idan-hur.com" /> 
      </Head>
      
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen
      dark:text-light z-10
      ">
        <Layout className="pt-0">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            
            <div className="w-full px-4 lg:px-0 lg:w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Engineering Software Excellence Through Precision and Innovation." 
              className="!text-3xl !text-center md:!text-5xl lg:!text-6xl"/>
              <p className="my-4 text-base font-medium text-center ">
                  As a dedicated Software Engineer, I harness a rich palette of programming languages, 
                  frameworks, and tools to breathe life into visionary projects. 
                  Dive into my extensive portfolio, which mirrors my adeptness in C#, Python, Java, and more. 
                  Together, let&apos;s sculpt the future of software, one line of code at a time.
              </p>
              <div className="flex items-center self-center mt-2">
                <Link href="/Idan Hur Backend Engineer.pdf" target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark
                hover:dark:text-light hover:dark:border-light
                "
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:idan12060@gmail.com" target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark 
                underline dark:text-light"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="absolute right-8 bottom-8 lg:inline-block w-24 hidden">
          <Image src={lightBulb} alt="IdanHur" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
