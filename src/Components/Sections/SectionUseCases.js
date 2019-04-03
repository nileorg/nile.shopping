import React, { Component, Fragment } from 'react'

import UseCase from './UseCase'

export default class extends Component {
  render () {
    const vendorData = {
      id: 'vendor',
      border: true,
      background: 'white',
      image_type: 'circle',
      image_path: './assets/vendor-circled.jpg',
      image_right: true,
      title: 'Vendor',
      description: "People willing to sell something. There are many different businesses and people that are already selling products or services, but many of them does not have the capacities nor the money to conquer the web and there might also be even more people that have the potential but not yet the platform to do so.",
      button: true,
      link_to: '/app/vendor',
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
      image_path: './assets/supplier-circled.jpg',
      image_right: false,
      title: 'Supplier',
      description: "People willing to ship something. Shipping products from one place to another is mostly done by corporations right now. Instead we could use the potential of usual people that drive around every day. They simply could pick up packages on their path and deliver it to the target location.",
      button: true,
      link_to: '/app/supplier',
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
      image_path: './assets/customer-circled.jpg',
      image_right: true,
      title: 'Customer',
      description: "More and more people get aware of the importance of local economies. They see how many local businesses needs to close, but do not want to be without the service quality of platforms like amazon. Empowering people with a platform to have the same service quality but supporting local products and services has the potential to transform the awareness into real world action.",
      button: true,
      link_to: '/app/customer',
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

    return (
      <Fragment>
        <UseCase sectionData={vendorData} />
        <UseCase sectionData={supplierData} />
        <UseCase sectionData={customerData} />
      </Fragment>
    )
  }
}
