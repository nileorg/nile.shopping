import React, { Component } from 'react'
import { Layout, Collapse } from 'element-react'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

export default class extends Component {
  scrollTop () {
    console.log("Scroll top");
    window.scrollTo(0, 0)
  }
  render () {
    const sectionData = this.props.sectionData
    const id = sectionData.id
    const border = sectionData.border
    const background = sectionData.background

    const title = sectionData.title
    const description = sectionData.description


    const itemsData = sectionData.items
    const items = itemsData.map((item, i) =>
      <Collapse.Item key={i} title={<h4><span className="counter">{i + 1}</span>{item.title}</h4>} >
        <div>{item.description}</div>
      </Collapse.Item>
    )

    const button = sectionData.button
    const link_to = sectionData.link_to
    const button_text = sectionData.button_text
    let buttonElement
    if (button === true) {
      buttonElement =
        <NavLink
          to={link_to}
          onClick={this.scrollTop}
          className="el-button el-button--primary">
          {button_text}
        </NavLink>
    } else {
      buttonElement =
        <span></span>
    }

    const image_type = sectionData.image_type
    const image_path = sectionData.image_path
    const image_right = sectionData.image_right
    let imageElement
    if (image_type === 'circle') {
      imageElement =
        <Layout.Col sm="24" md="12" lg="12" className="flex-end just-center-mobile">
          <Fade top>
            <img alt={title} src={image_path} className="circle"/>
          </Fade>
        </Layout.Col>
    } else if (image_type === 'desktop') {
      imageElement =
        <Layout.Col sm="24" md="16" lg="12">
          <span style={{opacity: 0}}>a</span>
          <Fade top>
            <img
              alt={title}
              src={image_path}
              className={`mockup ${image_right ? 'mockup--right' : 'mockup--left'}`}
            />
          </Fade>
        </Layout.Col>
    }

    return (
      <div
        id={id}
        className={`
          section
          section--use-case section__${background}
          ${border ? 'section__border-top' : ''}
          ${image_type === 'desktop' ? 'section--showcase' : ''}
        `}
      >
        <div className="container">
          <Layout.Row
            gutter="60"
            style={{marginBottom: 100}}
            className={`mobile-align-center ${image_right ? 'flex-reverse-mobile' : ''}`}
          >
            {image_right ? '' :  imageElement}
            <Layout.Col xs="24" sm="16" md={image_type === 'desktop' ? '8' : '16'} lg="12">
              <Fade top>
                <h2 style={{marginBottom: 10}}>{title}</h2>
                <p style={{marginBottom: 30}}>
                  {description}
                </p>
              </Fade>
              <Fade bottom>
                <div>
                  <Collapse accordion value="0">
                    {items}
                  </Collapse>
                  {buttonElement}
                </div>
              </Fade>
            </Layout.Col>
            {image_right ? imageElement : ''}
          </Layout.Row>
        </div>
      </div>
    )
  }
}
