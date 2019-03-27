import React, { Component } from "react"
import { Layout } from 'element-react'

import icon from "../../assets/twitter.svg"

export default class extends Component {
  render () {
    return (
      <div className="section section__dark" id="ecosystem">
        <div className="container">
          <Layout.Row gutter="60">
            <Layout.Col span="12">
              <a data-height="20" className="twitter-timeline" href="https://twitter.com/nile_org" data-widget-id="0000000000" data-tweet-limit="1" >Latest tweet</a>
            </Layout.Col>
            <Layout.Col  span="12">
              <img className="sm-icon-bg" alt="Discord" src={icon} />
              <h2>Follow us on Twitter</h2>
              <p style={{marginBottom: 30}}>Every week we post new insights about
                our progress, team, ideas and evaluations on Medium. Follow us to
                stay up to date!
              </p>
              <a
                href="https://twitter.com/nile_org"
                className="el-button el-button--primary el-button--large"
              >Jump to Twitter
              </a>
            </Layout.Col>
          </Layout.Row>
        </div>

      </div>

    )
  }
}
