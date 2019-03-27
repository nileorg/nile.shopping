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
import SectionCards from './Sections/SectionCards'
import SectionMedium from './Sections/SectionMedium'
import SectionTwitter from './Sections/SectionTwitter'
import SectionDiscord from './Sections/SectionDiscord'
import SectionVendor from './Sections/SectionVendor'
import SectionSupplier from './Sections/SectionSupplier'
import SectionCustomer from './Sections/SectionCustomer'
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
          <SectionCards />
          <SectionMedium articles={this.state.latest_article} />
          <SectionVendor />
          <SectionTwitter />
          <SectionSupplier />
          <SectionDiscord />
          <SectionCustomer />
          
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
