import React from 'react'
import YAMLFindus from '../yaml/findus.yaml'

const Findus = () => {
  return (
    <div className="container__findus">
      <div className="anchor">
        <a id="find-us"> </a>
        <h1 className="findus__header">{YAMLFindus.title}</h1>
      </div>
      <div className="findus__subheader">{YAMLFindus.subheader}</div>
      <div className="findus__text">{YAMLFindus.text}</div>
      <div className="findus__marker">
        <i class="fas fa-map" aria-hidden="true" />
      </div>
      <div className="findus__map">
        <iframe
          src={YAMLFindus.mapSrc}
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
