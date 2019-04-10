import React, { Component } from 'react'
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
import '../styles/sections/news.scss'

// N A V   C O M P O N E N T S
import Navigation from './Navigation'
import Footer from './Footer'

// P A G E S
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Supplier from './Pages/Supplier'
import Customer from './Pages/Customer'
import Imprint from './Pages/Imprint'


export default class extends Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route path='/' component={Navigation} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/shop' component={Shop} exact />
              <Route path='/supplier' component={Supplier} exact />
              <Route path='/customer' component={Customer} exact />
              <Route path='/imprint' component={Imprint} exact />
            </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
