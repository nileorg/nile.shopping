import React, { Component, Fragment } from 'react'
import { Layout, Collapse } from 'element-react'
import Fade from 'react-reveal/Fade'

import hero from '../assets/customer_hero.jpg'
import divider from '../assets/nile-hero-divider.svg'
import avatar from '../assets/customer-circled.jpg'

import dashboard from '../assets/mockups/dashboard.png'

export default class extends Component {
  render () {
    return (
      <Fragment>
        <Fade top>
          <div className={`section section--hero section--hero__sm`} style={{backgroundImage: `url(${hero})`}}>
            <div className="container">
              <div className="avatar-container">
                <img alt="vendor avatar" src={avatar}/>
              </div>
            </div>
            <div className="hero-divider">
              <img alt="divider" src={divider} className="divider"/>
            </div>
          </div>
        </Fade>
        <div className="section">
          <div className="container">
            <Layout.Row>
              <Layout.Col className="" span="12">
                <Fade top>
                  <h1>Customer</h1>
                  <p style={{marginBottom: 30}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="www.google.de" className="el-button el-button--primary">Try Prototype</a>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

      </Fragment>
    )
  }
}
