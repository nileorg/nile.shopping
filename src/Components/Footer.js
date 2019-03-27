import React from "react"
import { Layout } from 'element-react'

import '../styles/footer.scss'
import heart from '../assets/heart.svg'

export default props =>

  <footer>
    <span>
      Created with
      <img alt="heart" src={heart} />
      by Nile
    </span>
    <span>Imprint</span>
  </footer>
