import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block p-6 z-0 md:p-32 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
