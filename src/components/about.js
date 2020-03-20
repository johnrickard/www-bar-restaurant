import React from 'react'
import YAML from '../content.yaml'

const About = () => {
  return (
    <div className="container__about">
      <div className="anchor">
        <a id="about"> </a>
        <h1 className="about__header">{YAML.aboutTitle}</h1>
      </div>
      <div className="about__subheader">{YAML.aboutSubheader}</div>
      <div className="about__text">
        {YAML.aboutText}
        <div className="about__tags">
          <i class="fas fa-medal" /> Tripadvisor Certificate of Excellence
          Winner
          <br />
          <i class="fas fa-seedling" /> Vegetarian, vegan and gluten-free
          options
          <br />
          <i class="fas fa-wheelchair" /> Disabled access{' '}
          <i class="fas fa-wifi" /> Wi-Fi
        </div>
      </div>
    </div>
  )
}

export default About
