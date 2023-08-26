import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import ParticlesContainer from '@/components/ParticlesContainer'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} relative font-mont bg-light dark:bg-dark w-full min-h-screen flex flex-col`}>
        <div className='relative z-50'>
          <NavBar />
        </div>
        <ParticlesContainer />
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
