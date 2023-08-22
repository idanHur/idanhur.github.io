import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg
    '>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          <p className='underline
          underline-offset-2'>
            Idan Hur
            </p>
        </div>
        <Link href="mailto:idan12060@gmail.com" target='_blank' className='underline
          underline-offset-2'>
            Say Hello
            </Link>
      </Layout>
    </footer>
  )
}

export default Footer
