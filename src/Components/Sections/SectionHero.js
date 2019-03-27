import React from "react"
import { Layout, Button } from 'element-react'
import { HashLink as Link } from 'react-router-hash-link';

import hero from '../../assets/nile-hero-bg.jpg'
import earth from '../../assets/earth.svg'

export default props =>
  <div className="section section--hero" id="hero" style={{backgroundImage: `url(${hero})`}}>
    <div className="container">
      <Layout.Row>
        <Layout.Col className="" span="12">
          <h1 >Empowering local economies</h1>
          <p style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</p>
          <Link
            to="#ecosystem"
            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="el-button el-button--primary">Discover more
          </Link>
        </Layout.Col>
      </Layout.Row>
    </div>
    <div className="earth-wrapper animation-target">
      <img alt="earth" src={earth} className="earth rotating" />
    </div>
  </div>
