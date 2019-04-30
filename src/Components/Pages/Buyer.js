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

        <ShowCase sectionData={cityData} />
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
  id: 'buyer-hero',
  background_url: '../assets/heros/buyer_hero.jpg',
  avatar: true,
  avatar_url: '../assets/avatars/buyer-circled.jpg'
}
const videoPromoData = {
  id: 'buyer-promo',
  title: 'Buyer',
  description: 'More and more people get aware of the importance of local economies. Empowering people with a platform to have a great service quality but supporting local people instead of giant corporations has the potential to transform the awareness into action.'
}
const cityData = {
  id: 'city',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/buyer/city.png',
  image_right: false,
  title: 'Browse local shops',
  description: "This is the main view of Nile, here you see all the local shops. You can filter the shops specifying the category or the name of the product you are searching.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Filter shops',
      description: 'Use categories or type the name of the product you are searching to filter the shops you see. When you enter the name of a product, next to the shop you see also a small preview of the product you are searching.',
    },
    {
      title: 'Map view',
      description: 'Display the results on a map!',
    },
    {
      title: 'Nearby cities',
      description: 'If you can’t find your product in your city, you can decide to extend your search to nearby cities!',
    }
  ]
}
const shopData = {
  id: 'shop',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/buyer/shop_cart.jpg',
  image_right: true,
  title: 'Shop',
  description: "This is the shop page in Nile! Here you see all the products, you can filter them by category or name. You can find also information about the shop and the best offers!",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Products',
      description: 'First you get an overview of the discounts and best offers, then you get a list of all the products, you can filter it by name or category!',
    },
    {
      title: 'Shop information',
      description: 'You see all the shop information: location, description, opening time, social links and more. Just read more!',
    },
    {
      title: 'Pages',
      description: 'A seller can create useful pages to give you more information about the products or the store.',
    },
    {
      title: 'Shop App',
      description: 'If you like the shop and you always buys products from it, you can install the shop application in your device! Next time you don’t have to search to it into Nile!',
    }
  ]
}
const productData = {
  id: 'product',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/buyer/product.jpg',
  image_right: false,
  title: 'Product',
  description: 'Learn more about the product reading the description, the availability and other information.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Product details',
      description: 'You find all information which you need to know about the product.',
    },
    {
      title: 'Certifications',
      description: 'Every product can have certifications such as local ingredients, handicraft, bio: so you better know what you buy.',
    }
  ]
}
const cartData = {
  id: 'cart',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/buyer/cart.jpg',
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
  image_path: '../assets/mockups/buyer/payment.jpg',
  image_right: false,
  title: 'Flexible Payment System',
  description: 'You can choose to pay with the payment systems accepted by the store.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Tags',
      description: 'Each payment system is described by tags, green if good, red if bad. For example “feeless” that stands for a feeless payment system, or “fee 0.3%” that stands for a payment system that has fees).',
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
  image_path: '../assets/mockups/buyer/order_tracking.png',
  image_right: true,
  title: 'Boosted 🚀 Order Status',
  description: 'Nile offers powerful components that allows you to receive detailed information about your order. This information are updated in real time by the shop and the delivery person.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Feedback',
      description: 'Whenever your package moves, you can see it on the map. There are a lot of ways in which the seller can show information to you. You will receive a notification each time there is an update!',
    },
    {
      title: 'Confirm delivery',
      description: 'When the delivery person arrives, he will ask you to verify that the order was successful. You just scan the qr-code on his phone and the order gets completed. Also the seller receive a notification about the successful transaction.',
    }
  ]
}
