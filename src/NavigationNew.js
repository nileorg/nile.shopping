import React from "react"

import './main-nav.scss'

export default props =>
  <nav className="main-nav">
    <div className="nav-item nav-item--logo">
      <div className="logo"></div>
      <span>Nile</span>
    </div>
    <div className="nav-menu">
      <div className="nav-item">
        <span>Ecosystem</span>
      </div>
      <div className="nav-item">
        <span>Use cases</span>
      </div>
      <div className="nav-item">
        <span>Info</span>
      </div>
    </div>
  </nav>
