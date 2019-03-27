import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import '../styles/variables.scss'
import '../styles/helpers.scss'
import '../styles/app.scss'
import '../styles/buttons.scss'
import '../styles/sections.scss'
import '../styles/card.scss'

import Navigation from './Navigation'
import SectionHero from './Sections/SectionHero'
import SectionEcosystem from './Sections/SectionEcosystem'
import SectionUseCases from './Sections/SectionUseCases'
import SectionNews from './Sections/SectionNews'
import SectionContact from './Sections/SectionContact'
import Footer from './Footer'

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

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigation />

          <SectionHero />
          <SectionEcosystem />
          <SectionUseCases />
          <SectionNews articles={this.state.latest_article} />
          <SectionContact />

          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
