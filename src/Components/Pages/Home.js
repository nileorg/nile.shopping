import React, { Component, Fragment } from "react"

import Hero from '../Sections/Hero'
import Cards from '../Sections/Cards'
import UseCase from '../Sections/UseCase'
import SectionNews from '../Sections/SectionNews'
import SectionContact from '../Sections/SectionContact'

export default class extends Component {
  render () {
    return (
      <Fragment>
        <Hero sectionData={heroData} />
        <Cards sectionData={ecosystemData}/>
        <UseCase sectionData={vendorData} />
        <UseCase sectionData={supplierData} />
        <UseCase sectionData={customerData} />
        <Cards sectionData={missionData}/>
        <SectionNews />
        <SectionContact />
      </Fragment>
    )
  }
}

const heroData = {
  id: 'home',
  title: 'Empower local economies',
  description: "Nile is a decentralised and commission-free shopping platform to empower local economies. Nile is redefining the status quo of ecommerce, by not trying to build a giant corporation to rule the world, but instead trying to empower the communities and people to compete with those giants.",
  earth: true,
  button: true,
  link_to: '#ecosystem',
  button_text: 'Discover more',
}
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
      target: 'vendor',
      image: './assets/avatars/vendor-circled.jpg'
    },
    {
      title: 'Supplier',
      description: 'Think of people driving to work everyday. Suppliers can see which packages are easy to ship depending on their route. This way the delivery is not just very efficient since there are almost no extra miles, the supplier also get rewards on the fly.',
      target: 'supplier',
      image: './assets/avatars/supplier-circled.jpg'
    },
    {
      title: 'Customer',
      description: 'More and more people get aware of the importance of local economies. Empowering people with a platform to have a great service quality but supporting local people instead of giant cooperations has the potential to transform the awareness into action.',
      target: 'customer',
      image: './assets/avatars/customer-circled.jpg'
    }
  ]
}
const vendorData = {
  id: 'vendor',
  border: true,
  background: 'white',
  image_type: 'circle',
  image_path: './assets/avatars/vendor-circled.jpg',
  image_right: true,
  title: 'Vendor',
  description: "People willing to sell something. There are many different businesses and people that are already selling products or services, but many of them does not have the capacities nor the money to conquer the web and there might also be even more people that have the potential but not yet the platform to do so.",
  button: true,
  link_to: '/vendor',
  button_text: 'Discover the app',
  items: [
    {
      title: 'Get started',
      description: 'Initially a vendor needs to create a digitial twin for his shop, define his product blueprints and the initial stocks.'
    },
    {
      title: 'Stock Management',
      description: 'Everytime the vendor gets new deliveries or produces new products he needs to update his stock.'
    },
    {
      title: 'Order Management',
      description: 'Each time a customer buys a product that is supposed to be delivered to him, an order gets created. The order needs to be packed when the customer has payed and needs to be handed over when a supplier wants to pick it up.'
    },
    {
      title: 'Cashier System',
      description: 'Most vendors also have customers on site. To keep the stocks updated they simply can use the cashier system.'
    }
  ]
}
const supplierData = {
  id: 'supplier',
  border: true,
  background: 'white',
  image_type: 'circle',
  image_path: './assets/avatars/supplier-circled.jpg',
  image_right: false,
  title: 'Supplier',
  description: "People willing to ship something. Shipping products from one place to another is mostly done by corporations right now. Instead we could use the potential of usual people that drive around every day. They simply could pick up packages on their path and deliver it to the target location.",
  button: true,
  link_to: '/supplier',
  button_text: 'Discover the app',
  items: [
    {
      title: 'Pick up packages on your path',
      description: 'Whenever someone drive from one place to another he or she can enter their route and see where they can pickup packages',
    },
    {
      title: 'Guided delivery',
      description: 'As soon as a supplier picked up the packages he or she will be guided to the target locations.',
    },
    {
      title: 'Earn rewards',
      description: 'By delivering packages to customers suppliers earn real money for the delivery.',
    },
    {
      title: 'Find buddies',
      description: 'Especially older generations rely on people that bring their products right at their door. Suppliers can enter fixed relationships with people to help them whenever they need something.'
    }
  ]
}
const customerData = {
  id: 'customer',
  border: true,
  background: 'white',
  image_type: 'circle',
  image_path: './assets/avatars/customer-circled.jpg',
  image_right: true,
  title: 'Customer',
  description: "More and more people get aware of the importance of local economies. They see how many local businesses needs to close, but do not want to be without the service quality of platforms like amazon. Empowering people with a platform to have the same service quality but supporting local products and services has the potential to transform the awareness into real world action.",
  button: true,
  link_to: '/customer',
  button_text: 'Discover the app',
  items: [
    {
      title: 'Discover your neighborhood',
      description: 'Customers can find businesses and people offering products and services right in their neighborhood.'
    },
    {
      title: 'Delivery at your home',
      description: 'Many local businesses that currently cannot offer delivery services will be able to deal with delivery by using the Nile platform.'
    },
    {
      title: 'Recurring orders',
      description: 'If customers buy products frequently they can create recurring orders. They will be delivered automatically right at the customers door.'
    }
  ]
}
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
      image: './assets/illustrations/privacy.svg'
    },
    {
      title: 'Feeless',
      description: 'Nile does not have fees at any level - it is 100% commission-free. Nile will always be free. There won’t be any extra pay features nor a pro version. The complete code is open source and free to use.',
      target: null,
      image: './assets/illustrations/feeless.svg'
    },
    {
      title: 'Permissionless',
      description: 'Everyone can join the system without any registration hurdles. Even when you are signed in you can interact anonymously with other people in your ecosystem.',
      target: null,
      image: './assets/illustrations/permissionless.svg'
    }
  ]
}
