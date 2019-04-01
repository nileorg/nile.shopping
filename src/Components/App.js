import React, { Component, Fragment } from 'react'
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
import SectionMission from './Sections/SectionMission'
import SectionNews from './Sections/SectionNews'
import SectionContact from './Sections/SectionContact'
import Footer from './Footer'

import Imprint from './Imprint'

import AppNavigation from './AppNavigation'

import VendorHome from './VendorHome'
import SupplierHome from './SupplierHome'
import CustomerHome from './CustomerHome'

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
