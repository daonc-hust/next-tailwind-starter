import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
