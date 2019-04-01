import React, { Component } from "react"
import { Layout, Card } from 'element-react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import medium from "../../assets/medium.svg"
import twitter from "../../assets/twitter.svg"

export default class extends Component {
  render () {
    const article = this.props.articles
    return (
      <div className="section" id="news">
        <div className="container">
          <Layout.Row type="flex" justify="center" style={{marginBottom: 50}}>
            <Layout.Col  span="12" className="center">
              <Fade top>
                <h2>News</h2>
                <p style={{marginBottom: 30}}>Every week we post new insights about
                  our progress, team, ideas and evaluations on Medium and Twitter. Follow us to
                  stay up to date!
                </p>
              </Fade>
            </Layout.Col>
          </Layout.Row>

          <Layout.Row gutter="60" style={{marginBottom: 50}}>
            <Layout.Col span="12">
              <div className="sm-container">
                <Flip left>
                  <img className="sm-icon-bg" alt="Medium" src={medium} />
                  <a
                    href="https://medium.com/nile-shopping"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="el-button el-button--primary el-button--large"
                    style={{marginBottom: 30}}
                  >Follow us
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={article.link} className="medium-card" style={{textDecoration: 'none'}} >
                    <Card bodyStyle={{ padding: 0 }}>
                      <img alt="medium cover" src={article.thumbnail} className="image" />
                      <div className="card-body" style={{ padding: 14 }}>
                        <h4>{article.title}</h4>
                        <time className="time">Published by {article.author}, on {article.pubDate}</time>
                      </div>
                    </Card>
                  </a>
                </Flip>
              </div>
            </Layout.Col>
            <Layout.Col span="12">
              <div className="sm-container">
                <Flip right>
                  <img className="sm-icon-bg" alt="Discord" src={twitter} />
                  <a
                    href="https://twitter.com/nile_org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="el-button el-button--primary el-button--large"
                    style={{marginBottom: 30}}
                  >Follow us
                  </a>
                  <a
                    data-height="20"
                    className="twitter-timeline"
                    href="https://twitter.com/nile_org"
                    data-widget-id="0000000000"
                    data-tweet-limit="1">Latest tweet
                  </a>
                </Flip>
              </div>
            </Layout.Col>
          </Layout.Row>

          <Layout.Row gutter="60">
            <Fade left>
              <Layout.Col  span="12">

              </Layout.Col>
            </Fade>
            <Fade right>
              <Layout.Col span="12">
              </Layout.Col>
            </Fade>

          </Layout.Row>
        </div>

      </div>

    )
  }
}
