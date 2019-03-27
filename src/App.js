import React, { Component } from 'react'
import { Layout, Card, Button } from 'element-react'

import './app.scss'
import logo from './assets/nile_logo.svg'

import Navigation from './Navigation'
import NavigationNew from './NavigationNew'
import SectionHero from './SectionHero'
import SectionCards from './SectionCards'

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
         // Fillter the array
         const res = data.items //This is an array with the content. No feed, no info about author etc..
         const _articles = res.filter(item => item.categories.length > 0)
         this.setState({
            latest_article: _articles[0],
            isLoading: false
          })
        })
    }

  render() {
    return (
      <div className="app">
        <NavigationNew />
        <SectionHero />
        <SectionCards />
        <div id="use_cases">
          <h1>Use cases</h1>
          <p>empowering local economies</p>
        </div>
        <div id="info">
          <Layout.Row>
            <h1>Info</h1>
            <Layout.Col span="12">
              <p>Twitter</p>
              <a className="twitter-timeline" href="https://twitter.com/nile_org" data-widget-id="0000000000" data-tweet-limit="1">Latest tweet</a>
            </Layout.Col>
            <Layout.Col span="12">
              <p>Medium</p>
              <p>Stories by <a href="https://medium.com/nile-shopping">nile-shopping</a></p>
              <a target="_blank" href={this.state.latest_article.link}>
               <Card bodyStyle={{ padding: 0 }}>
                 <img src={this.state.latest_article.thumbnail} className="image" />
                 <div style={{ padding: 14 }}>
                   <span>{this.state.latest_article.title}, by {this.state.latest_article.author}</span>
                   <div className="bottom clearfix">
                     <time className="time">{this.state.latest_article.pubDate}</time>
                     <Button type="text" className="button">Read More!</Button>
                   </div>
                 </div>
               </Card>
               </a>
            </Layout.Col>
          </Layout.Row>
        </div>
        <div id="footer">
          <h1>Footer</h1>
          <a href="https://twitter.com/Nile_org?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @Nile_org</a>
        </div>
      </div>
    )
  }
}
