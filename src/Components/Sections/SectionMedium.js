import React, { Component } from "react"
import { Layout, Card } from 'element-react'

import icon from "../../assets/medium.svg"

export default class extends Component {
  render () {
    const article = this.props.articles
    return (
      <div className="section section__dark" id="ecosystem">
        <div className="container">
          <Layout.Row gutter="60">
            <Layout.Col  span="12">
              <img className="sm-icon-bg" alt="Discord" src={icon} />
              <h2>Follow us on Medium</h2>
              <p style={{marginBottom: 30}}>Every week we post new insights about
                our progress, team, ideas and evaluations on Medium. Follow us to
                stay up to date!
              </p>
              <a
                href="https://medium.com/nile-shopping"
                className="el-button el-button--primary el-button--large"
              >Jump to Medium
              </a>
            </Layout.Col>
            <Layout.Col  span="12">
              <a target="_blank" rel="noopener noreferrer" href={article.link} style={{textDecoration: 'none'}} >
                <Card bodyStyle={{ padding: 0 }}>
                  <img alt="medium cover" src={article.thumbnail} className="image" />
                  <div className="card-body" style={{ padding: 14 }}>
                    <h4>{article.title}</h4>
                    <time className="time">Published by {article.author}, on {article.pubDate}</time>
                  </div>
                </Card>
              </a>
            </Layout.Col>
          </Layout.Row>
        </div>

      </div>

    )
  }
}
