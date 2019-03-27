import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Slide from 'react-reveal/Slide';

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
      <Slide top>

        <nav className={`main-nav ${this.state.activeClass}`}>
          <Link smooth to="#hero" className="nav-item nav-item--logo" activeClassName="active">
            <div className="logo"></div>
            <span>Nile</span>
          </Link>
          <div className="nav-menu">
            <Link
              to="#ecosystem"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="nav-item"
              activeClassName="active"
              >Ecosystem
            </Link>
            <Link
              to="#use-cases"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="nav-item"
              activeClassName="active">Use Cases
            </Link>
            <Link
              to="#news"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="nav-item"
              activeClassName="active">News
            </Link>
            <Link
              to="#contact"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="nav-item"
              activeClassName="active">Discord
            </Link>
          </div>
        </nav>
      </Slide>
    )
  }
}
