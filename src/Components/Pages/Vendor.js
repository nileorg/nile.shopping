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
  id: 'vendor-hero',
  background_url: '../assets/heros/vendor_hero.jpg',
  avatar: true,
  avatar_url: '../assets/avatars/vendor-circled.jpg'
}
const videoPromoData = {
  id: 'vendor-promo',
  title: 'Vendor',
  description: 'Vendors are the people selling products and services. They differentiate alot in terms of size, management and requirements to a platform like nile. Still most of the vendors need a tool to manage their products, services, orders, stock, cashier, team and last but not least their store.'
}
const dashboardData = {
  id: 'dashboard',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/vendor/dashboard.jpg',
  image_right: false,
  title: 'Dashboard',
  description: "The dashboard shows the overall performance of the store. It gives vendors a tool to analyse their strengths and weeknesses in order to continuously adapt their strategy to the needs of their customers.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Turnover',
      description: 'The most important information for the stores success is their turnover and revenue rate. By reflecting on ups and downs vendors can rapidly come up with counter measures.'
    },
    {
      title: 'Compare Categories',
      description: 'By comparing product categories to each other vendors can easily indicate the importance of their categories to their business.'
    },
    {
      title: 'Rankings',
      description: 'Here vendors can see their top 10 of almost anything. Product sales in terms of quantity, turnover and revenue, Customers, Staff, Suppliers and many more.'
    },
    {
      title: 'Agglomeration',
      description: 'The agglomaration chart indicates where the most turnover comes from geographically.'
    }
  ]
}
const productData = {
  id: 'product',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/vendor/product.jpg',
  image_right: true,
  title: 'Product Management',
  description: "As one of the first steps a vendor needs to define all the product blueprints. A product blueprint is not the actual product, it is just a template. A real product gets created each time the stock gets increased.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Create Blueprints',
      description: 'The product blueprint includes information like name, description, bullet points, categories, price, stock limits and images.'
    },
    {
      title: 'Change History',
      description: 'Each time someone changes the blueprint information the application keeps track of what has when been changed by whom.'
    },
    {
      title: 'Stock',
      description: 'Besides the change history of blueprint information, there is also an information panel about the current stock including a change history for all increases and decreases.'
    },
    {
      title: 'Preview',
      description: 'In order to optimize the appearence of online store products, vendors can see a preview that demonstrates the look for their customers.'
    }
  ]
}
const orderData = {
  id: 'order',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/vendor/order.jpg',
  image_right: false,
  title: 'Order Management',
  description: "Each time a customer buys a product that is supposed to be delivered to him, an order gets created. As soon as the order gets paid by the customer, the vendor needs to pack it. Next it needs to be handed over to a supplier and last but not least delivered to the target location.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Quick overview',
      description: 'In two situations the vendor needs to interact with the order, first when it is payed and second when a supplier is ready to pick it up. The overview is designed to highlight those two use cases.',
    },
    {
      title: 'Packaging process',
      description: 'By selecting a payed order the vendor sees a todo list of the products he need to pack and can confirm packaging as soon as he has finished.',
    },
    {
      title: 'Handover process',
      description: 'When a supplier scans an order the vendor gets notified and needs to confirm the handing over process.',
    },
    {
      title: 'Change History',
      description: "The order lifecycle has it's own change history to create trust for all parties. It keeps track of every status change.",
    }
  ]
}
const cashierData = {
  id: 'cashier',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/vendor/cashier.jpg',
  image_right: true,
  title: 'Cashier System',
  description: "Many businesses rely on a cashier system, but if a business has an online store it is even more important since the stock needs to be synchronised all the time.",
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
      title: 'Commission-free payments',
      description: 'Thanks to Nile and the underlying technology IOTA, there are zero commission-rates nor fees for the payments.',
    }
  ]
}
const settingsData = {
  id: 'settings',
  border: true,
  background: 'white',
  image_type: 'desktop',
  image_path: '../assets/mockups/vendor/settings.jpg',
  image_right: false,
  title: 'Settings',
  description: "Store management includes information, customisation, category management as well as team management.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Get started',
      description: 'Initially a vendor needs to create a digitial twin for his store with basic information like the name, description, location and some links.',
    },
    {
      title: 'Customisation',
      description: 'Vendors can customize their shop with their logo and the primary colour.',
    },
    {
      title: 'Categories Management',
      description: 'Some businesses have only a few categories others might even need subcategories. All product blueprints get at least one category.',
    },
    {
      title: 'Team Management',
      description: 'Managing a team is quite simple, for each team member the vendor can define the access to each application like the dashboard, products, orders, cashier system and store settings.',
    }
  ]
}
