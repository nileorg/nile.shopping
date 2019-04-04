import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import divider from '../../assets/heros/divider.svg'

export default class extends Component {
  render () {
    const sectionData = this.props.sectionData
    const id = sectionData.id
    const background_url = sectionData.background_url
    const avatar = sectionData.avatar
    const avatar_url = sectionData.avatar_url

    let avatarElement = ''
    if (avatar === true) {
      avatarElement =
        <div className="container">
          <div className="avatar-container">
            <img alt="vendor avatar" src={avatar_url}/>
          </div>
        </div>
    }
    
    return (
      <Fade top>
        <div id={id} className={`section section--hero section--hero__sm`} style={{backgroundImage: `url(${background_url})`}}>
          {avatarElement}
          <div className="hero-divider">
            <img alt="divider" src={divider} className="divider"/>
          </div>
        </div>
      </Fade>
    )
  }
}
