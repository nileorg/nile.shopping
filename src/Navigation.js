import React from "react"
import { Menu } from 'element-react'

import './nav-overwrites.scss'

export default props =>
  <Menu theme="white" defaultActive="1" mode="horizontal">
    <Menu.Item href="#nile" index="1">
      <div className="logo"></div>
      <span>Nile</span>
    </Menu.Item>
    <div className="menu-wrapper">
      <Menu.Item href="#ecosystem" index="2">Ecosystem</Menu.Item>
      <Menu.Item href="#use_cases" index="3">Use cases</Menu.Item>
      <Menu.Item href="#info" index="4">Info</Menu.Item>
    </div>
  </Menu>
