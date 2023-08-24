import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block p-6 z-0 md:px-8 lg:px-16 xl:px-22 2xl:px-32 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
