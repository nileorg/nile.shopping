import React, { Component, Fragment } from 'react'
import { Layout, Collapse } from 'element-react'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import '../../styles/sections/show-case.scss'

export default class extends Component {
  render () {
    console.log(this.props.sectionData);
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

    const imageElement =
      <Layout.Col md='16' lg='12' className={`${image_type}`}>
        <img
          alt={title}
          src={image_path}
          className={`mockup`}
        />
      </Layout.Col>

    return (
      <Fragment>
        <div
          id={id}
          className={`
            section
            section__${background}
            ${border ? 'section__border-top' : ''}
            section--show-case
            ${image_right ? 'image_right' : ''}
          `}
        >
          <div className="container-fluid">
            <Layout.Row>
              {image_right ? '' : imageElement}
              <Layout.Col md='16' lg='12' className="content-column">
                <div className="column-wrapper">
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
                </div>
              </Layout.Col>
              {image_right ? imageElement : ''}
            </Layout.Row>
          </div>
        </div>
      </Fragment>
    )
  }
}
