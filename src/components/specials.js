import React from 'react'
import SpecialsMenu from '../specialsmenu.pdf'

const Specials = () => {
  return (
    <div className="container__specials">
      <a href={SpecialsMenu} target="_blank" rel="noopener noreferrer">
        <div className="anchor">
          <a id="specials"> </a>
          <div className="specials__flex_header">
            <h1 className="specials__header">OUR SPECIALS</h1>
            <div className="specials__header_logo" />
          </div>
        </div>
        <div className="specials__subheader">Click to view our specials</div>
        <div className="specials__text">
          <div className="specials__icon">
            <i class="fas fa-utensils"></i>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Specials
