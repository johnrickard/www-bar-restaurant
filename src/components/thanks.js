import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

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
        <h1 className="thanks__header">RESERVATION SENT</h1>
        <div className="thanks__subheader">Thank you.</div>
        <Link to="/">
          <div className="thanks__text">
            <i class="fas fa-arrow-circle-left"></i> Click here to go back to
            the website
          </div>
        </Link>
      </div>
    )
  }
}
