import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/navigation/footer.scss'
import heart from '../assets/icons/heart.svg'

export default class extends Component {
  scrollTop () {
    console.log("Scroll top");
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <footer>
        <span>
          Created with
          <img alt="heart" src={heart} />
          by Nile
        </span>
        <NavLink
          to="/imprint"
          onClick={this.scrollTop}
          activeClassName="active"
        >Imprint
        </NavLink>
      </footer>

    )
  }
}
