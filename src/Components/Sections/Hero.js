import React, { Component } from 'react'
import { Layout } from 'element-react'
import { HashLink as Link } from 'react-router-hash-link'
import Fade from 'react-reveal/Fade'

import heroImage from '../../assets/heros/home_hero.jpg'
import earthImage from '../../assets/heros/earth.svg'


import Divider from '../Elements/Divider'

export default class extends Component {
  render () {
    const sectionData = this.props.sectionData
    const id = sectionData.id
    const title = sectionData.title
    const description = sectionData.description
    const earth = sectionData.earth
    const button = sectionData.button
    const link_to = sectionData.link_to
    const button_text = sectionData.button_text

    let earthElement = ""
    if (earth === true) {
      earthElement =
        <div className="earth-wrapper animation-target">
          <img alt="earth" src={earthImage} className="earth rotating" />
        </div>
    }

    let buttonElement = ""
    if (button === true) {
      buttonElement =
      <Link
        to={link_to}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        className="el-button el-button--primary">{button_text}
      </Link>
    }

    return (
      <div className="section section--hero" id={id} style={{backgroundImage: `url(${heroImage})`}}>
        <div className="container">
          <Layout.Row>
            <Layout.Col xs="24" sm="12" md="12" lg="12">
              <Fade top>
                <h1>{title}</h1>
                <p style={{marginBottom: 30}}>
                  {description}
                </p>
                {buttonElement}
              </Fade>
            </Layout.Col>
          </Layout.Row>
        </div>
        {earthElement}
        <Divider />
      </div>
    )
  }
}
