import React, { Component } from "react"
import { HashLink as Link } from 'react-router-hash-link';

import '../styles/main-nav.scss'

export default class extends Component {
  state = {
    activeClass: 'top'
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      let className = ''
       if(window.pageYOffset <= 50){
           className = 'top';
       }else{
           className = 'normal';
       }
       this.setState({
          activeClass: className
       })
    });
  }
  render () {
    console.log('activeClass: ', this.state.activeClass);
    return (
      <nav className={`main-nav ${this.state.activeClass}`}>
        <Link smooth to="#hero" className="nav-item nav-item--logo" activeClassName="active">
          <div className="logo"></div>
          <span>Nile</span>
        </Link>
        <div className="nav-menu">
          <Link smooth to="#ecosystem" className="nav-item" activeClassName="active">Ecosystem</Link>
          <Link smooth to="#vendor" className="nav-item" activeClassName="active">Vendor</Link>
          <Link smooth to="#supplier" className="nav-item" activeClassName="active">Supplier</Link>
          <Link smooth to="#customer" className="nav-item" activeClassName="active">Customer</Link>
        </div>
      </nav>

    )
  }
}
