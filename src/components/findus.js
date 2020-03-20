import React from 'react'
import YAML from '../content.yaml'

const Findus = () => {
  return (
    <div className="container__findus">
      <div className="anchor">
        <a id="find-us"> </a>
        <h1 className="findus__header">{YAML.findusTitle}</h1>
      </div>
      <div className="findus__subheader">{YAML.findusSubheader}</div>
      <div className="findus__text">{YAML.findusText}</div>
      <div className="findus__marker">
        <i class="fas fa-map" aria-hidden="true" />
      </div>
      <div className="findus__map">
        <iframe
          src={YAML.findusMapSrc}
          width="100%"
          height="300"
          frameborder="0"
          style={{ border: '0' }}
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  )
}

export default Findus
