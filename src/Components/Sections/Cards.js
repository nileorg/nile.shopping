import React, { Component } from 'react'
import { Layout } from 'element-react'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'

import Card from '../Elements/Card'

export default class extends Component {
  render () {
    const sectionData = this.props.sectionData
    const id = sectionData.id
    const border = sectionData.border
    const background = sectionData.background
    const title = sectionData.title
    const description = sectionData.description
    const cardsData = sectionData.cards
    const cards = cardsData.map((card, i) =>
      <Layout.Col sm="18" md="8" lg="8" className="center" key={i}>
        <Flip left>
          <Card card={card}/>
        </Flip>
      </Layout.Col>
    )

    return (
      <div className={`section section__${background} ${border ? 'section__border-top' : ''}`} id={id}>
        <div className="container">
          <Layout.Row type="flex" justify="center" style={{ marginBottom: 50 }}>
            <Layout.Col sm="18" md="12" lg="12" className="center">
              <Fade top>
                <h2>{title}</h2>
                <p>{description}</p>
              </Fade>
            </Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="60" className="mobile-align-center">
            {cards}
          </Layout.Row>
        </div>
      </div>
    )
  }
}
