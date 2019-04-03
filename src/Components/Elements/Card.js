import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default class extends Component {
  render () {
    const card = this.props.card

    let button
    if (card.target === null) {
    } else {
      button =
        <Link
          to={`#${card.target}`}
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="el-button el-button--primary"
          style={{marginTop: 30}}>Read more
        </Link>
    }

    return (
      <div className="card active">
        <img alt={card.title} src={`${card.image}`}/>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        {button}
      </div>
    )
  }
}
