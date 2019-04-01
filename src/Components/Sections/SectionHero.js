import React from "react"
import { Layout } from 'element-react'
import { HashLink as Link } from 'react-router-hash-link'
import Fade from 'react-reveal/Fade'

import hero from '../../assets/nile-hero-bg.jpg'
import earth from '../../assets/earth.svg'
import divider from '../../assets/nile-hero-divider__grey.svg'
import caret from '../../assets/caret-down.svg'

export default props =>
  <div className="section section--hero" id="hero" style={{backgroundImage: `url(${hero})`}}>
    <div className="container">
      <Layout.Row>
        <Layout.Col className="" span="12">
          <Fade top>
            <h1>Empowering local economies</h1>
            <p style={{marginBottom: 30}}>
              Nile is a decentralised and commission-free shopping platform to
              empower local economies. Nile is redefining the status quo of
              ecommerce, by not trying to build a giant corporation to rule the
              world, but instead trying to empower the communities and people to
              compete with those giants.
            </p>
            <Link
              to="#ecosystem"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="el-button el-button--primary">Discover more
            </Link>
          </Fade>
        </Layout.Col>
      </Layout.Row>
    </div>
    <div className="earth-wrapper animation-target">
      <img alt="earth" src={earth} className="earth rotating" />
    </div>
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
  </div>
