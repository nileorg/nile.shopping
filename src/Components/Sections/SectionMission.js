import React, { Component } from 'react'

import Cards from './Cards'

export default class extends Component {
  render () {
    const missionData = {
      id: 'mission',
      border: true,
      background: 'light',
      title: 'Mission',
      description: "Nile’s mission is to provide local economies with tools to compete with global giants. Today, global monopolies are putting local economies at risk, by offering better and faster services. People are buying almost everything from some global giants instead of supporting local markets. We deply believe that this can and has to be changed by ourselves, the usual people. It is time for Nile and those who share our mission to design a better way of commerce for a better tomorrow. We invite everybody out there that shares our mission and believes to stand up for an open and free set of tools to promote local economies.",
      cards: [
        {
          title: 'Privacy',
          description: 'Data protection and user privacy is a huge topic today. The platform just saves the information which is needed and all users data is saved on the user’s devices.',
          target: null,
          image: './assets/privacy.svg'
        },
        {
          title: 'Feeless',
          description: 'Nile does not have fees at any level - it is 100% commission-free. Nile will always be free. There won’t be any extra pay features nor a pro version. The complete code is open source and free to use.',
          target: null,
          image: './assets/feeless.svg'
        },
        {
          title: 'Permissionless',
          description: 'Everyone can join the system without any registration hurdles. Even when you are signed in you can interact anonymously with other people in your ecosystem.',
          target: null,
          image: './assets/permissionless.svg'
        }
      ]
    }
    return (
      <Cards sectionData={missionData}/>
    )
  }
}
