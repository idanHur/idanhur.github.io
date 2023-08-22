import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/home-img.JPG"
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-center w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="IdanHur" className='w-full h-auto'></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Engineering Software Excellence Through Precision and Innovation." className='!text-6xl !text-left'/>
              <p>
                As a dedicated Software Engineer, I harness a rich palette of programming languages, 
                frameworks, and tools to breathe life into visionary projects. 
                Dive into my extensive portfolio, which mirrors my adeptness in C#, Python, Java, and more. 
                Together, let's sculpt the future of software, one line of code at a time.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
