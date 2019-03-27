import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Slide from 'react-reveal/Slide';

import '../styles/main-nav.scss'
import logo from '../assets/logo_1.svg'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeClass: 'top'
    }
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
    console.log(this.props.location.hash);
    return (
      <Slide top>

        <nav className={`main-nav ${this.state.activeClass}`}>
          <Link smooth to="#hero" className={`${this.props.location.hash === '#hero' ? 'active' : ''} nav-item nav-item--logo`} activeClassName="active">
            <div className="logo-wrapper">
              <img alt="nile" className="logo logo-rotation-1" src={logo} />
              <img alt="nile" className="logo logo-rotation-2" src={logo} />
              <img alt="nile" className="logo logo-rotation-3" src={logo} />
              <img alt="nile" className="logo logo-rotation-4" src={logo} />
            </div>
            <span>Nile</span>
          </Link>
          <div className="nav-menu">
            <Link
              to="#ecosystem"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={`${this.props.location.hash === '#ecosystem' ? 'active' : ''} nav-item`}
            >Ecosystem
            </Link>
            <Link
              to="#use-cases"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={`${this.props.location.hash === '#use-cases' ? 'active' : ''} nav-item`}
            >Use Cases
            </Link>
            <Link
              to="#news"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={`${this.props.location.hash === '#news' ? 'active' : ''} nav-item`}
            >News
            </Link>
            <Link
              to="#contact"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={`${this.props.location.hash === '#contact' ? 'active' : ''} nav-item`}
            >Discord
            </Link>
          </div>
        </nav>
      </Slide>
    )
  }
}
