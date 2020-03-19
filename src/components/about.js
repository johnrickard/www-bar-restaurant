import React from 'react'
import YAMLAbout from '../yaml/about.yaml'

const About = () => {
  return (
    <div className="container__about">
      <div className="anchor">
        <a id="about"> </a>
        <h1 className="about__header">{YAMLAbout.title}</h1>
      </div>
      <div className="about__subheader">{YAMLAbout.subheader}</div>
      <div className="about__text">
        {YAMLAbout.text}
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
