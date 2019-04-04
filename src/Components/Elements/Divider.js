import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import divider from '../../assets/heros/divider_grey.svg'
import caret from '../../assets/icons/caret-down.svg'

export default props =>
  <div className="hero-divider">
    <Link
      to="#ecosystem"
      scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      className="scroll-down"
      style={{color: '#ffffff', textDecoration: 'none'}}
      >
        <span>Scroll down</span>
        <img alt="caret" src={caret} className="caret" />
    </Link>
    <img alt="divider" src={divider} className="divider"/>
  </div>
