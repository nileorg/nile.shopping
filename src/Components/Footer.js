import React from "react"
import { NavLink } from 'react-router-dom'

import '../styles/footer.scss'
import heart from '../assets/icons/heart.svg'

export default props =>

  <footer>
    <span>
      Created with
      <img alt="heart" src={heart} />
      by Nile
    </span>
    <NavLink
      to="/imprint"
      activeClassName="active"
    >Imprint
    </NavLink>
  </footer>
