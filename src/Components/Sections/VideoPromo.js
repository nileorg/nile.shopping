import React, { Component } from 'react'
import { Layout } from 'element-react'
import Fade from 'react-reveal/Fade'

export default class extends Component {
  render () {
    const sectionData = this.props.sectionData
    const id = sectionData.id
    const title = sectionData.title
    const description = sectionData.description

    return (
      <div className="section" id={id}>
        <div className="container">
          <Layout.Row>
            <Layout.Col sm="24" md="12" lg="12">
              <Fade top>
                <h1>{title}</h1>
                <p style={{marginBottom: 30}}>
                  {description}
                </p>
              </Fade>
            </Layout.Col>
          </Layout.Row>
        </div>
      </div>

    )
  }
}
