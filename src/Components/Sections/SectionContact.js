import React, { Component } from "react"
import { Layout } from 'element-react'

import icon from "../../assets/discord_dark.svg"

export default class extends Component {
  render () {
    return (
      <div className="section" id="contact">
        <div className="container">
          <Layout.Row type="flex" justify="center" >
            <Layout.Col span="12" className="center">
              <img className="sm-icon-bg" alt="Discord" src={icon} />
              <h2>Join our Discord</h2>
              <p style={{marginBottom: 30}}>
                To get in touch with us please join our Discord Server. We
                really don't like emails and hope you feel the same or don't
                mind about it. See you there!
              </p>
              <a
                href="https://twitter.com/nile_org"
                target="_blank"
                rel="noopener noreferrer"
                className="el-button el-button--primary el-button--large"
              >Join now
              </a>
            </Layout.Col>
          </Layout.Row>
        </div>

      </div>

    )
  }
}
