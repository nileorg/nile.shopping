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

        <ShowCase sectionData={shopData} />
        <ShowCase sectionData={productData} />
        <ShowCase sectionData={cartData} />
        <ShowCase sectionData={paymentData} />
        <ShowCase sectionData={deliveryData} />
      </Fragment>
    )
  }
}

const heroSmallData = {
  id: 'customer-hero',
  background_url: '../assets/heros/customer_hero.jpg',
  avatar: true,
  avatar_url: '../assets/avatars/customer-circled.jpg'
}
const videoPromoData = {
  id: 'customer-promo',
  title: 'Customer',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}
const shopData = {
  id: 'shop',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/customer/shop_cart.jpg',
  image_right: true,
  title: 'Shop',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Highlight I',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight II',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight III',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight IV',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ]
}
const productData = {
  id: 'product',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/customer/product.jpg',
  image_right: false,
  title: 'Product',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Highlight I',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight II',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight III',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight IV',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ]
}
const cartData = {
  id: 'cart',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/customer/cart.jpg',
  image_right: true,
  title: 'Cart',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Highlight I',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight II',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight III',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight IV',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ]
}
const paymentData = {
  id: 'Payment',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/customer/payment.jpg',
  image_right: false,
  title: 'Payment',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Highlight I',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight II',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight III',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight IV',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ]
}
const deliveryData = {
  id: 'delivery',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/customer/confirm_delivery.jpg',
  image_right: true,
  title: 'Delivery',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Highlight I',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight II',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight III',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Highlight IV',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ]
}
