import React from 'react'
import ImgFb from '../images/fb.png'
import ImgTa from '../images/tripadvisor.png'
import YAMLFooter from '../yaml/footer.yaml'

const Footer = () => {
  return (
    <div className="container__footer">
      <div className="footer__address">
        Paseo Marítimo Rey de España 42 Local 0, 29640 Fuengriola, Málaga, Spain
      </div>
      <div className="anchor">
        <a id="contact"> </a>
        <div className="footer__phone">+34 123 45 67 89</div>
      </div>
      <div className="footer__flex">
        <div className="footer__flex_item">
          <a href="https://www.facebook.com/#">
            <img src={ImgFb} alt="Facebook logo" />
          </a>
        </div>
        <div className="footer__flex_item">
          <a href="https://www.tripadvisor.com/#">
            <img src={ImgTa} alt="Tripadvisor logo" />
          </a>
        </div>
      </div>
      <div className="footer__credit">
        {YAMLFooter.credit} <a href={YAMLFooter.url}>{YAMLFooter.name}</a>
      </div>
    </div>
  )
}

export default Footer
