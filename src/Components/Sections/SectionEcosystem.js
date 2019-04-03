import React, { Component } from 'react'

import Cards from './Cards'

export default class extends Component {
  render () {
    const ecosystemData = {
      id: 'ecosystem',
      border: false,
      background: 'light',
      title: 'Ecosystem',
      description: "Who needs to be empowered to let local economies flourish again? Its the people, the ones that want to sell something - called vendors, the ones that want to ship something - called suppliers and the ones that want to buy something - called customers. So to strengthen local economies we have three groups of people with different problems and requirements.",
      cards: [
        {
          title: 'Vendor',
          description: 'Think of small businesses like backeries, joineries and flower shops selling products. Or think of hair studios, doctors offices and repair shops selling services. We can even think of usual people selling art, honey and services they do hobby wise.',
          target: 'use-cases',
          image: './assets/vendor-circled.jpg'
        },
        {
          title: 'Supplier',
          description: 'Think of people driving to work everyday. Suppliers can see which packages are easy to ship depending on their route. This way the delivery is not just very efficient since there are almost no extra miles, the supplier also get rewards on the fly.',
          target: 'supplier',
          image: './assets/supplier-circled.jpg'
        },
        {
          title: 'Customer',
          description: 'More and more people get aware of the importance of local economies. Empowering people with a platform to have a great service quality but supporting local people instead of giant cooperations has the potential to transform the awareness into action.',
          target: 'customer',
          image: './assets/customer-circled.jpg'
        }
      ]
    }
    return (
      <Cards sectionData={ecosystemData}/>
    )
  }
}
