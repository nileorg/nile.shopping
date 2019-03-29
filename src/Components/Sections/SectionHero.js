import React from "react"
import { Layout, Button } from 'element-react'
import { HashLink as Link } from 'react-router-hash-link';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import hero from '../../assets/nile-hero-bg.jpg'
import earth from '../../assets/earth.svg'
import divider from '../../assets/nile-hero-divider.svg'
import caret from '../../assets/caret-down.svg'

export default props =>
  <div className="section section--hero" id="hero" style={{backgroundImage: `url(${hero})`}}>
    <div className="container">
      <Layout.Row>
        <Layout.Col className="" span="12">
          <Fade left>
            <h1>Empowering local economies</h1>
            <p style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
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
