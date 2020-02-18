import React, { useState } from 'react'
import { Link } from 'gatsby'
import SpecialsMenu from '../specialsmenu.pdf'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className="container__navbar">
        <div className="container__navbar_logo" />
        <div className="container__navbar_burger">
          <div
            onClick={e => {
              e.preventDefault()
              setShowMenu(!showMenu)
            }}
          >
            <i class="fas fa-bars" style={{ fontSize: '50px' }}></i>
          </div>
        </div>
      </div>
      <div
        className="container__navbar_pop"
        style={showMenu ? null : { display: 'none' }}
      >
        <div className="navbar__wrapper">
          <ul>
            <Link
              to="#home"
              onClick={e => {
                if (showMenu) setShowMenu(!showMenu)
              }}
            >
              <li>HOME</li>
            </Link>
            <Link
              to="#about"
              onClick={e => {
                if (showMenu) setShowMenu(!showMenu)
              }}
            >
              <li>ABOUT</li>
            </Link>
            <Link
              to="#find-us"
              onClick={e => {
                if (showMenu) setShowMenu(!showMenu)
              }}
            >
              <li>FIND US</li>
            </Link>
            <Link
              to="#reservation"
              onClick={e => {
                if (showMenu) setShowMenu(!showMenu)
              }}
            >
              <li>RESERVATION</li>
            </Link>
            <a
              href={SpecialsMenu}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => {
                if (showMenu) setShowMenu(!showMenu)
              }}
            >
              <li>OUR SPECIALS</li>
            </a>
            <Link
              to="#contact"
              onClick={e => {
                if (showMenu) setShowMenu(!showMenu)
              }}
            >
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
