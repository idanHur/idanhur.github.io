import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/Connect4.jpg"
import project2 from "../../public/images/projects/Trip-Management-Application.jpg"
import project3 from "../../public/images/projects/linux.jpg"
import project4 from "../../public/images/projects/ML-with-the-Titanic-Dataset.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'

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
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout>
                <AnimatedText className="!text-4xl lg:!text-6xl mb-8 md:mb-16 " text="Crafted with Passion: A Tour of My Technological Triumphs."/>
                <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-24 gap-x-6 md:gap-y-24 lg:gap-x-8 xl:gap-x-16'>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        <FeaturedProject 
                            title="Connect 4 Game"
                            summary="The Connect4Game project is a digital version of the classic Connect4, 
                            built using WPF for the client and ASP.NET Core for the server. The server handles game logic, 
                            player interactions, and AI strategies, while the client offers a dynamic game board and connects via a Web API. 
                            With a focus on best coding practices, the project employs MVC and MVVM patterns, ensuring an engaging and seamless gaming experience for Connect4 fans."
                            img= {project1}
                            github="https://github.com/idanHur/ConnectFour"
                            type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        <FeaturedProject 
                                title="Trip Management Application"
                                summary="An application that plans a traveling itinerary for the user based on his favorite places on Google maps!
                                Each route is calculated by the locations of the user's favorite places, and approximately by the time it will take to visit them.
                                Utilizing PostgreSQL for the relational dataset, RESTful API, CRUD, JUnit tests, and much more!"
                                img= {project2}
                                github="https://github.com/idanHur/Trip-Management-Application"
                                type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        <FeaturedProject 
                                title="Tv Show runtime"
                                summary="Linux application that gets a list of tv shows name and using an HTTP GET request and receives a JSON containing all the episodes of that show and calculates its runtime, 
                                the application uses parallel computing calls to get each tv show runtime faster and it returns the tv shows with the longest and shortest runtime."
                                img= {project3}
                                github="https://github.com/idanHur/tv-show-runtime"
                                type="Featured Project "
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-6'>
                        <FeaturedProject 
                                title="Titanic - Machine Learning from Disaster"
                                summary="The 'Titanic - Machine Learning from Disaster' project on Kaggle focused on predicting the survival of Titanic passengers. 
                                Utilizing Python, key libraries like Pandas and Sklearn were employed for data analysis and modeling. The data underwent rigorous preprocessing, 
                                which included addressing missing values, encoding categorical variables, and feature engineering techniques like extracting the 'Title' from passenger names. 
                                A heatmap was used to visualize correlations between features, providing insights for model optimization. The primary predictive model was Logistic Regression implemented with the SGD Classifier, 
                                which was fine-tuned to enhance its accuracy."
                                link="https://www.kaggle.com/competitions/titanic/data"
                                img= {project4}
                                github="https://github.com/idanHur/Titanic/blob/main/Titanic_1.ipynb"
                                type="Featured Project "
                        />
                    </div>
                    
                </div>

            </Layout>
        </main>
    </>
  )
}

export default projects
