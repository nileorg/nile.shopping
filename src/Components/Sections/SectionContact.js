import React, { Component } from 'react'
import { Layout } from 'element-react'
import Fade from 'react-reveal/Fade'

import icon from '../../assets/icons/discord.svg'

export default class extends Component {
  render () {
    return (
      <div className="section section__border-top" id="contact">
        <div className="container">
          <Layout.Row type="flex" justify="center" >
            <Layout.Col sm="18" md="12" lg="12" className="center">
              <Fade top>
                <img className="sm-icon-bg" alt="Discord" src={icon} />
                <h2>Join our Discord</h2>
                <p style={{marginBottom: 30}}>
                  To get in touch with us please join our Discord Server. We
                  really don't like emails and hope you feel the same or don't
                  mind about it. See you there!
                </p>
                <a
                  href="https://discord.gg/Uw9sU6J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="el-button el-button--primary el-button--large"
                >Join now
                </a>
              </Fade>
            </Layout.Col>
          </Layout.Row>
        </div>

      </div>

    )
  }
}
