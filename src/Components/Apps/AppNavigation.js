import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import '../../styles/navigation/app-nav.scss'
import caret from '../../assets/icons/caret-left.svg'

export default class extends Component {
  render () {
    return (
      <Fade top>
        <nav className={`app-nav`}>
          <NavLink to="/" className="back-button">
            <img alt="caret left" src={caret} />
          </NavLink>
          <div className="app-menu">
            <NavLink
              to="/app/vendor"
              className="app-menu--item"
              activeClassName="active"
            >Vendor
            </NavLink>
            <NavLink
              to="/app/supplier"
              className="app-menu--item"
              activeClassName="active"
            >Supplier
            </NavLink>
            <NavLink
              to="/app/customer"
              className="app-menu--item"
              activeClassName="active"
            >Customer
            </NavLink>
          </div>
        </nav>
      </Fade>
    )
  }
}
