import React from 'react'
import Navbar from './navbar'
import Carousel from './carousel'
import About from './about'
import Findus from './findus'
import Reservation from './reservation'
import Footer from './footer'
import Specials from './specials'

import '../styles/global.sass'
import '../fonts/fontawesome/css/all.min.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container__body">
        <div className="container__flex">
          <About />
          <Findus />
          <Reservation />
          <Specials />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
