import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import YAMLThanks from '../yaml/thanks.yaml'

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
        <h1 className="thanks__header">{YAMLThanks.title}</h1>
        <div className="thanks__subheader">{YAMLThanks.subheader}</div>
        <Link to="/">
          <div className="thanks__text">
            <i class={YAMLThanks.icon}></i> {YAMLThanks.iconText}
          </div>
        </Link>
      </div>
    )
  }
}
