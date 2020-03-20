import React from 'react'
import ImgFb from '../images/fb.png'
import ImgTa from '../images/tripadvisor.png'
import YAML from '../content.yaml'

const Footer = () => {
  return (
    <div className="container__footer">
      <div className="footer__address">{YAML.footerAddress}</div>
      <div className="anchor">
        <a id="contact"> </a>
        <div className="footer__phone">{YAML.footerPhoneNumber}</div>
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
        {YAML.footerCredit} <a href={YAML.footerUrl}>{YAML.footerName}</a>
      </div>
    </div>
  )
}

export default Footer
