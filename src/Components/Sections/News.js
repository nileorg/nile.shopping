import React, { Component } from 'react'
import { Layout, Card } from 'element-react'
import Fade from 'react-reveal/Fade'

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

    const sectionData = this.props.sectionData

    const id = sectionData.id
    const border = sectionData.border
    const background = sectionData.background
    const title = sectionData.title
    const description = sectionData.description
    const media_type = sectionData.media_type
    const post_right = sectionData.post_right

    const button = sectionData.button
    const link_to = sectionData.link_to
    const button_text = sectionData.button_text
    let buttonElement
    if (button === true) {
      buttonElement =
        <a
          href={link_to}
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.scrollTop}
          className="el-button el-button--primary">
          {button_text}
        </a>
    } else {
      buttonElement =
        <span></span>
    }

    const latestMedium =
      <Layout.Col sm="18" md="12" lg="12">
        <a target="_blank" rel="noopener noreferrer" href={article.link} className="medium-card" style={{textDecoration: 'none'}} >
          <Card bodyStyle={{ padding: 0 }}>
            <img alt="medium cover" src={article.thumbnail} className="image" />
            <div className="card-body" style={{ padding: 14 }}>
              <h4>{article.title}</h4>
              <time className="time">Published by {article.author}, on {article.pubDate}</time>
            </div>
          </Card>
        </a>
      </Layout.Col>

    const latestTwitter =
      <Layout.Col sm="18" md="12" lg="12">
        <a
          data-height="20"
          width="100%"
          className="twitter-timeline"
          href="https://twitter.com/nile_org"
          data-widget-id="0000000000"
          data-tweet-limit="1">Latest tweet
        </a>
      </Layout.Col>

    let latestPost
    if (media_type === "medium") {
      latestPost = latestMedium
    } else {
      latestPost = latestTwitter
    }

    return (
      <div
        id={id}
        className={`
          section
          section__${background}
          ${border ? 'section__border-top' : ''}
          ${post_right ? '' : 'reverse-mobile'}
          section__break_sm
        `}
      >
        <div className="container">
          <Layout.Row gutter="60">
            {post_right ? '' : latestPost}
            <Layout.Col sm="18" md="12" lg="12" style={{marginBottom: 50}}>
              <Fade top>
                <h2 style={{marginBottom: 10}}>{title}</h2>
                <p style={{marginBottom: 30}}>
                  {description}
                </p>
              </Fade>
              <Fade bottom>
                {buttonElement}
              </Fade>
            </Layout.Col>
            {post_right ? latestPost : ''}
          </Layout.Row>
        </div>
      </div>
    )
  }
}
