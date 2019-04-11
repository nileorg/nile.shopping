import React, { Component, Fragment } from 'react'

import HeroSmall from '../Sections/HeroSmall'
import VideoPromo from '../Sections/VideoPromo'
import ShowCase from '../Sections/ShowCase'

export default class extends Component {
  render () {
    return (
      <Fragment>
        <HeroSmall sectionData={heroSmallData} />
        <VideoPromo sectionData={videoPromoData} />

        <ShowCase sectionData={dashboardData} />
        <ShowCase sectionData={productData} />
        <ShowCase sectionData={orderData} />
        <ShowCase sectionData={cashierData} />
        <ShowCase sectionData={settingsData} />
      </Fragment>
    )
  }
}


const heroSmallData = {
  id: 'shop-hero',
  background_url: '../assets/heros/shop_hero.jpg',
  avatar: true,
  avatar_url: '../assets/avatars/shop-circled.jpg'
}
const videoPromoData = {
  id: 'shop-promo',
  title: 'Shop',
  description: 'The shop application allows any shopkeeper to take her business to the next level, for free! The shop application offers analysis tools, inventory management, user feedback and a lot more! Every time a new shop is created, Nile automatically creates an app for you, that you can install on both iOS and Android directly from the browser!'
}
const dashboardData = {
  id: 'dashboard',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/shop/dashboard.jpg',
  image_right: false,
  title: 'Dashboard',
  description: 'The dashboard shows the overall performance of the store. It gives sellers a tool to analyse their strengths and weaknesses in order to continuously adapt their strategy to the needs of their customers.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Revenue',
      description: 'The most important information for the stores success is their and revenue rate. By reflecting on ups and downs vendors can rapidly come up with counter measures. '
    },
    {
      title: 'Compare Categories',
      description: 'By comparing product categories to each other sellers can easily indicate the importance of their categories to their business.'
    },
    {
      title: 'Rankings',
      description: 'Here vendors can see their top 10 of almost anything. Product sales in terms of quantity and revenue, Customers, Staff, delivery and many more.'
    }
  ]
}
const productData = {
  id: 'product',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/shop/product.jpg',
  image_right: true,
  title: 'Product Management',
  description: 'The seller needs to define all of the products in the store, the user interface helps him duplicating existing products, handling variations and create banners for discount products.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Create Products',
      description: 'The product includes information like name, description, bullet points, categories, price, inventory limits, images and custom fields!'
    },
    {
      title: 'Change History',
      description: 'Each time someone changes a product information the application keeps track of what has when been changed by whom.'
    },
    {
      title: 'Preview',
      description: 'In order to optimize the appearance of online store products, sellers can see a preview that demonstrates the look for their customers.'
    }
  ]
}
const orderData = {
  id: 'order',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/shop/order.jpg',
  image_right: false,
  title: 'Order Management',
  description: 'Each time a customer buys a product, an order gets created. As soon as the order gets paid by the customer, the vendor needs to pack it. Next the seller and the buyer can interact with each other using powerful components such as location and timers. Finally the package needs to be handed over to a delivery method, it can also be a collection on the spot.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Powerful feedback system',
      description: 'The seller can interact with the buyer in various way, like set timers or the package location so the buyer knows the status of its order or simply ask for feedback (“Do you want ketchup in your burger 🍔 ?”).',
    },
    {
      title: 'Packaging process',
      description: 'By selecting a paid order the seller gets displayed a simple list of the products which have to packed into a package. Once the packaging is done, the seller can submit that the the package is ready to pick up.',
    },
    {
      title: 'Handover process',
      description: 'When a delivery person scans an order the vendor gets notified and needs to confirm the handing over process. The components are now updated by the delivery person, so, for example, the user can see the real-time location of its order.',
    },
    {
      title: 'Change History',
      description: "The order lifecycle has its own change history to create trust for all parties. It keeps track of every status change without private information in a Distributed Ledger, so all entries are immutable.",
    }
  ]
}
const cashierData = {
  id: 'cashier',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/shop/cashier.jpg',
  image_right: true,
  title: 'Cashier System',
  description: 'Many businesses rely on a cashier system, but if a business has an online store it is even more important since the stock needs to be synchronised all the time.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Fast and easy',
      description: 'The cashier application is designed to be as fast and easy as possible. It is also possible to use that application with any given device, desktop, tablet or smartphone.',
    },
    {
      title: 'Cart display for customers',
      description: 'Vendors can also position another screen just for their customers to make purchases their transparent in real time.',
    },
    {
      title: 'Flexible payment system',
      description: 'The seller can receive payments from a broad variety of payment system: centralized payment gateways like paypal or stripe, decentralized cryptocurrencies like bitcoins or IOTA, or simply cash.',
    }
  ]
}
const settingsData = {
  id: 'settings',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/shop/settings.jpg',
  image_right: false,
  title: 'Settings',
  description: 'Store management includes information, customisation, category management as well as team management.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Get started',
      description: 'Initially a vendor needs to create a digital twin for his store with basic information like the name, description, location and some links.',
    },
    {
      title: 'Customisation',
      description: 'Vendors can customize their shop with their logo and the primary colour.',
    },
    {
      title: 'Categories Management',
      description: 'Some businesses have only a few categories others might even need subcategories. All product get at least one category.',
    },
    {
      title: 'Team Management',
      description: 'Managing a team is quite simple, for each team member the shopkeeper can define the access to each application like the dashboard, products, orders, cashier system and store settings.',
    }
  ]
}
