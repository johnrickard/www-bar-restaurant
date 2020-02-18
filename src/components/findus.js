import React from 'react'

const Findus = () => {
  return (
    <div className="container__findus">
      <div className="anchor">
        <a id="find-us"> </a>
        <h1 className="findus__header">FIND US</h1>
      </div>
      <div className="findus__subheader">
        Euismod lacinia at quis risus sed vulputate.
      </div>
      <div className="findus__text">
        Pharetra et ultrices neque ornare aenean. Ultrices sagittis orci a
        scelerisque purus semper eget. Fames ac turpis egestas maecenas
        pharetra.
      </div>
      <div className="findus__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.3709367245297!2d-4.620210085069404!3d36.54516808000195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e243c81ed36b%3A0xf92429eb80fc3ed3!2sPaseo%20Mar%C3%ADtimo%20Rey%20de%20Espa%C3%B1a%2C%2042%2C%2029640%20Fuengirola%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2sse!4v1582038047000!5m2!1sen!2sse"
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
