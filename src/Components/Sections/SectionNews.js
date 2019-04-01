import React, { Component } from "react"
import { Layout, Card } from 'element-react'
import Fade from 'react-reveal/Fade'

import medium from "../../assets/icons/medium.svg"
import twitter from "../../assets/icons/twitter.svg"

export default class extends Component {
  state = {
    latest_article: {},
    isLoading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/nile-shopping')
       .then((res) => res.json())
       .then((data) => {
         const res = data.items
         const _articles = res.filter(item => item.categories.length > 0)
         this.setState({
            latest_article: _articles[0],
            isLoading: false
          })
        })
    }

  render () {
    const article = this.state.latest_article
    return (
      <div className="section section__border-top" id="news">
        <div className="container">
          <Layout.Row type="flex" justify="center" style={{marginBottom: 50}}>
            <Layout.Col sm="18" md="12" lg="12" className="center">
              <Fade top>
                <h2>News</h2>
                <p style={{marginBottom: 30}}>Every week we post new insights about
                  our progress, team, ideas and evaluations on Medium and Twitter. Follow us to
                  stay up to date!
                </p>
              </Fade>
            </Layout.Col>
          </Layout.Row>

          <Layout.Row gutter="60" style={{marginBottom: 50}} className="mobile-align-center">
            <Layout.Col sm="18" md="12" lg="12" className="mobile-mb-50">
              <div className="sm-container">
                <Fade left>
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
                </Fade>
              </div>
            </Layout.Col>
            <Layout.Col sm="18" md="12" lg="12">
              <div className="sm-container">
                <Fade right>
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
                    width="100%"
                    className="twitter-timeline"
                    href="https://twitter.com/nile_org"
                    data-widget-id="0000000000"
                    data-tweet-limit="1">Latest tweet
                  </a>
                </Fade>
              </div>
            </Layout.Col>
          </Layout.Row>
        </div>

      </div>

    )
  }
}
