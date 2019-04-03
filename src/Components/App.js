import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// D E F A U L T S
import '../styles/defaults/variables.scss'
import '../styles/defaults/typography.scss'
import '../styles/defaults/helpers.scss'
import '../styles/defaults/animations.scss'
import '../styles/defaults/layout.scss'

// E L E M E N T S
import '../styles/elements/scrollbar.scss'
import '../styles/elements/buttons.scss'
import '../styles/elements/card.scss'
import '../styles/elements/accordion.scss'

// S E C T I O N S
import '../styles/sections/sections.scss'
import '../styles/sections/hero.scss'
import '../styles/sections/showcase.scss'
import '../styles/sections/use-case.scss'
import '../styles/sections/news.scss'

import Navigation from './Navigation'
import SectionHero from './Sections/SectionHero'

import SectionEcosystem from './Sections/SectionEcosystem'
import SectionUseCases from './Sections/SectionUseCases'
import SectionMission from './Sections/SectionMission'
import SectionNews from './Sections/SectionNews'
import SectionContact from './Sections/SectionContact'
import Footer from './Footer'

import Imprint from './Imprint'

import AppNavigation from './Apps/AppNavigation'

import VendorHome from './Apps/VendorHome'
import SupplierHome from './Apps/SupplierHome'
import CustomerHome from './Apps/CustomerHome'

class App extends Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact
              path='/'
              component={HomeContainer}
            />
            <Route path='/app' component={AppContainer} />
            <Route path='/app/vendor' component={VendorHome} exact />
            <Route path='/imprint' component={ImprintContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const HomeContainer = (props) => (
  <Fragment>
    <Route path='/' component={Navigation} />

    <SectionHero />
    <SectionEcosystem />
    <SectionUseCases />
    <SectionMission />
    <SectionNews />
    <SectionContact />

    <Footer />
  </Fragment>
)

const AppContainer = (props) => (
  <Fragment>
    <Route path='/app' component={AppNavigation} />
    <Route path='/app/vendor' component={VendorHome} exact />
    <Route path='/app/supplier' component={SupplierHome} exact />
    <Route path='/app/customer' component={CustomerHome} exact />
  </Fragment>
)

const ImprintContainer = (props) => (
  <Fragment>
    <Route path='/imprint' component={Imprint} exact />
  </Fragment>
)

export default App
