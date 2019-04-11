import React, { Component, Fragment } from "react"

import Hero from '../Sections/Hero'
import Cards from '../Sections/Cards'
import UseCase from '../Sections/UseCase'
import News from '../Sections/News'
import SectionContact from '../Sections/SectionContact'

export default class extends Component {
  render () {
    return (
      <Fragment>
        <Hero sectionData={heroData} />
        <Cards sectionData={ecosystemData}/>
        <UseCase sectionData={shopData} />
        <UseCase sectionData={deliveryData} />
        <UseCase sectionData={buyerData} />
        <Cards sectionData={missionData}/>
        <News sectionData={mediumData}/>
        <News sectionData={twitterData}/>
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
  description: "Who needs to be empowered to let local economies flourish again? Its the people, the ones that want to sell something - called vendors, the ones that want to ship something - called delivery and the ones that want to buy something - called buyers. So to strengthen local economies we have three groups of people with different problems and requirements.",
  cards: [
    {
      title: 'Shop',
      description: 'Think of small businesses like bakeries, joineries and flower shops selling products. Or think of hair studios, doctors offices and repair shops selling services. We can even think of usual people selling art, honey and services they do hobby wise.',
      target: 'shop',
      image: './assets/avatars/shop-circled.jpg'
    },
    {
      title: 'Delivery',
      description: 'Nile offers a delivery platform for local orders; every certified user will be able to deliver goods in exchange for discounts or money. An algorithm calculates the best and cheapest route to deliver your goods.',
      target: 'delivery',
      image: './assets/avatars/delivery-circled.jpg'
    },
    {
      title: 'Buyer',
      description: 'More and more people get aware of the importance of local economies. Empowering people with a platform to have a great service quality but supporting local people instead of giant cooperations has the potential to transform the awareness into action.',
      target: 'buyer',
      image: './assets/avatars/buyer-circled.jpg'
    }
  ]
}
const shopData = {
  id: 'shop',
  border: true,
  background: 'white',
  image_type: 'circle',
  image_path: './assets/avatars/shop-circled.jpg',
  image_right: true,
  title: 'Shop',
  description: "There are many different businesses and people that are already selling products or services, but many of them does not have the capacities nor the money to conquer the web and there might also be even more people that have the potential but not yet the platform to do so.",
  button: true,
  link_to: '/shop',
  button_text: 'Discover the app',
  items: [
    {
      title: 'Get started',
      description: 'Initially a shop owner needs to create a digital twin for the shop, so he defines his products blueprints and the initial inventory. Later he decides how to get paid from a list of existing payment system and how to deliver his products.'
    },
    {
      title: 'Inventory Management',
      description: 'Everytime the shop owner gets new supplies or produces new products he needs to update his inventory.'
    },
    {
      title: 'Boosted 🚀 order management',
      description: 'Each time a buyer buys a product an order gets created. The show owner can manage information about the order and send various feedback to the buyer such as timers (so the buyer know how long it will take to receive the order) and the location of the product.'
    },
    {
      title: 'Cashier System',
      description: 'Most shop owners also have buyers on site. To keep the inventory updated they simply can use the cashier system.'
    }
  ]
}
const deliveryData = {
  id: 'delivery',
  border: true,
  background: 'white',
  image_type: 'circle',
  image_path: './assets/avatars/delivery-circled.jpg',
  image_right: false,
  title: 'Delivery',
  description: "People willing to deliver something. Deliver products from one place to another is mostly done by corporations right now. Instead we use the potential of usual people that move around every day. They simply could pick up packages on their path and deliver it to the target location.",
  button: true,
  link_to: '/delivery',
  button_text: 'Discover the app',
  items: [
    {
      title: 'Pick up packages on your path',
      description: 'Whenever you drive from one place to another you can enter your route and see where you can pick up packages. If you have a routine path, just add it to Nile and you will receive notifications when there are packages on your path.',
    },
    {
      title: 'Guided delivery',
      description: 'As soon as you pick up the packages you will be guided to the target locations.',
    },
    {
      title: 'Earn rewards 🏆',
      description: 'By delivering packages to people, you can earn real money or coupons that you can spend in the shops.',
    }
  ]
}
const buyerData = {
  id: 'buyer',
  border: true,
  background: 'white',
  image_type: 'circle',
  image_path: './assets/avatars/buyer-circled.jpg',
  image_right: true,
  title: 'Buyer',
  description: "More and more people become aware of the importance of local economies. They see how many local businesses need to close, but do not want to be without the service quality of platforms like Amazon. Empowering people with a platform to have the same service quality but supporting local products and services has the potential to transform awareness into real-world action.",
  button: true,
  link_to: '/buyer',
  button_text: 'Discover the app',
  items: [
    {
      title: 'Discover your neighborhood',
      description: 'Buyers can find businesses and people offering products and services right in their neighborhood. On Nile you can also find products like fresh food and services like transportation within your city.'
    },
    {
      title: 'Send an order',
      description: 'Buy a product and receive real-time feedback from the seller with the location of your package and estimated delivery time.'
    },
    {
      title: 'Instant ⚡ Delivery',
      description: 'Because products are local, the delivery community can deliver your package in less than an hour.'
    }
  ]
}
const missionData = {
  id: 'mission',
  border: true,
  background: 'light',
  title: 'Mission',
  description: "Nile’s mission is to provide local economies with tools to compete with global giants. Today, global monopolies are putting local economies at risk, by offering better and faster services. People are buying almost everything from some global giants instead of supporting local markets. We deeply believe that this can and has to be changed by ourselves, the usual people. It is time for Nile and those who share our mission to design a better way of commerce for a better tomorrow. We invite everybody out there that shares our mission and believes to stand up for an open and free set of tools to promote local economies.",
  cards: [
    {
      title: 'Privacy',
      description: 'Data protection and user privacy is a huge topic today. The public information is published on decentralized storage and all users private data is just saved on the user’s devices. A buyer shares the required information only with the people involved in the order.',
      target: null,
      image: './assets/illustrations/privacy.svg'
    },
    {
      title: '100% Free - Forever!',
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
const mediumData = {
  id: 'medium',
  border: 'true',
  background: 'white',
  title: 'Medium',
  description: 'Every week we post new insights about our progress, team, ideas and evaluations on Medium and Twitter. Follow us to stay up to date!',
  button: true,
  link_to: 'https://medium.com/nile-shopping',
  button_text: 'Follow us',
  media_type: 'medium',
  post_right: true
}
const twitterData = {
  id: 'twitter',
  border: 'true',
  background: 'light',
  title: 'Twitter',
  description: 'Every week we post new insights about our progress, team, ideas and evaluations on Medium and Twitter. Follow us to stay up to date!',
  button: true,
  link_to: 'https://twitter.com/nile_org',
  button_text: 'Follow us',
  media_type: 'twitter',
  post_right: false
}
