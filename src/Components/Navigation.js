import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Slide from 'react-reveal/Slide'

import '../styles/navigation/navigation.scss'
import logo from '../assets/nile_logo.svg'
import nile_typo from '../assets/nile_typo.svg'

export default class extends Component {
  state = {
    activeClass: 'normal',
    navActive: false
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      let className = ''
      if (window.pageYOffset <= 50) {
         // className = 'top';
      } else {
         className = 'normal';
      }
      this.setState({
        activeClass: className
      })
    });
  }

  toggleNav = () => {
    this.setState(prevState => ({
      navActive: !prevState.navActive
    }))
  }

  render () {
    return (
      <Slide top>
        <nav className={`main-nav ${this.state.activeClass} ${this.state.navActive ? 'open' : ''}`} >
          <Link smooth to="/" className={`${this.props.location.pathname === '/' ? 'active' : ''} nav-item nav-item--logo`}>
            <div className="logo-wrapper">
              <img alt="nile" className="logo logo-rotation-1" src={logo} />
              <img alt="nile" className="logo logo-rotation-2" src={logo} />
              <img alt="nile" className="logo logo-rotation-3" src={logo} />
              <img alt="nile" className="logo logo-rotation-4" src={logo} />
            </div>
            <img alt="nile typo" className="nile-typo" src={nile_typo}/>
          </Link>
          <div className={`${this.state.navActive ? 'open' : ''} ${this.state.activeClass} menu-btn-container`} onClick={this.toggleNav}>
            <div className="menu-btn">
              <span className="top"></span>
              <span className="center"></span>
              <span className="bottom"></span>
            </div>
          </div>
          <div onClick={this.toggleNav} className={`${this.state.navActive ? 'open' : ''} ${this.state.activeClass} nav-menu`}>
            <Link
              to="/shop"
              className={`${this.props.location.pathname === '/shop' ? 'active' : ''} nav-item`}
            >Shop
            </Link>
            <Link
              to="/delivery"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={`${this.props.location.pathname === '/delivery' ? 'active' : ''} nav-item`}
            >Delivery
            </Link>
            <Link
              to="/buyer"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={`${this.props.location.pathname === '/buyer' ? 'active' : ''} nav-item`}
            >Buyer
            </Link>
          </div>
        </nav>
      </Slide>
    )
  }
}
