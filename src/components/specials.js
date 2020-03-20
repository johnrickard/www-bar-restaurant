import React from 'react'
import SpecialsMenu from '../specialsmenu.pdf'
import YAML from '../content.yaml'

const Specials = () => {
  return (
    <div className="container__specials">
      <a href={SpecialsMenu} target="_blank" rel="noopener noreferrer">
        <div className="anchor">
          <a id="specials"> </a>
          <div className="specials__flex_header">
            <h1 className="specials__header">{YAML.specialsTitle}</h1>
            <div className="specials__header_logo" />
          </div>
        </div>
        <div className="specials__subheader">{YAML.specialsSubheader}</div>
        <div className="specials__text">
          <div className="specials__icon">
            <i class={YAML.specialsIcon} />
          </div>
        </div>
      </a>
    </div>
  )
}

export default Specials
