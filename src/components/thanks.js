import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import YAML from '../content.yaml'

import '../styles/global.sass'
import '../fonts/fontawesome/css/all.min.css'

export default class extends React.Component {
  render() {
    return (
      <div className="container__thanks">
        <Helmet>
          <style>
            {'body { background-image: none; background-color: #341817; }'}
          </style>
        </Helmet>
        <h1 className="thanks__header">{YAML.thanksTitle}</h1>
        <div className="thanks__subheader">{YAML.thanksSubheader}</div>
        <Link to="/">
          <div className="thanks__text">
            <i class={YAML.thanksIcon}></i> {YAML.thanksIconText}
          </div>
        </Link>
      </div>
    )
  }
}
