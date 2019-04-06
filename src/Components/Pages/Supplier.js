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
        <ShowCase sectionData={findPackagesData} />
        <ShowCase sectionData={pickupData} />
        <ShowCase sectionData={deliveryData} />
        <ShowCase sectionData={buddiesData} />
      </Fragment>
    )
  }
}

const heroSmallData = {
  id: 'supplier-hero',
  background_url: '../assets/heros/supplier_hero.jpg',
  avatar: true,
  avatar_url: '../assets/avatars/supplier-circled.jpg'
}
const videoPromoData = {
  id: 'supplier-promo',
  title: 'Supplier',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}
const dashboardData = {
  id: 'dashboard',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/supplier/dashboard_rewards.jpg',
  image_right: false,
  title: 'Dashboard',
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
const findPackagesData = {
  id: 'find_packages',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/supplier/delivery_target.jpg',
  image_right: true,
  title: 'Find packages in your near',
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
const pickupData = {
  id: 'pick_up',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/supplier/pick_up_package.jpg',
  image_right: false,
  title: 'Pick up packages from vendors',
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
  image_path: '../assets/mockups/supplier/delivery_target_selected.jpg',
  image_right: true,
  title: 'Guided delivery',
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
const buddiesData = {
  id: 'buddies',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/supplier/delivery_target_selected.jpg',
  image_right: false,
  title: 'Find buddies',
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
