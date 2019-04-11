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
  id: 'delivery-hero',
  background_url: '../assets/heros/delivery_hero.jpg',
  avatar: true,
  avatar_url: '../assets/avatars/delivery-circled.jpg'
}
const videoPromoData = {
  id: 'delivery-promo',
  title: 'Delivery',
  description: 'Deliver products from one place to another is mostly done by corporations right now. Instead we want to use the potential of usual people that move around every day. Nile delivery system is based upon a community of people who simply pick up packages on their path and deliver it to the target location.'
}
const dashboardData = {
  id: 'dashboard',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/delivery/dashboard_rewards.jpg',
  image_right: false,
  title: 'Dashboard',
  description: 'From the dashboard the delivery person can view all the latest feedback and many charts which summarize his situation.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Charts',
      description: 'The delivery person can see charts about how many deliveries he made, how much money he earned or the average rating per day, and many more…',
    },
    {
      title: 'Feedback',
      description: 'The delivery person sees a list of all the latest ratings he has received.',
    }
  ]
}
const findPackagesData = {
  id: 'find_packages',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/delivery/delivery_target.jpg',
  image_right: true,
  title: 'Find packages next to you',
  description: 'The delivery person has an overview of all the packages next to him with an approximate position of the delivery, he can insert his route so the system knows where he’s headed, so Nile filters the packages.',
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Privacy',
      description: 'The delivery person can see the actual position of the package, but he doesn’t know where it needs to be delivered before accepting the delivery, he just sees the direction and the distance.s',
    },
    {
      title: 'Add your routine routes',
      description: 'If the delivery person adds his routine routes, Nile will send a notification to him every time a new package is on his route!',
    },
    {
      title: 'Delivery priority',
      description: 'Buyers can purchase food or set high priority to their orders. The delivery person sees the delivery priority, the highest is the priority the more he gets paid by the buyer.',
    }
  ]
}
const pickupData = {
  id: 'pick_up',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/delivery/pick_up_package.jpg',
  image_right: false,
  title: 'Pick up packages from sellers',
  description: 'When you enter the store, tell the seller that you need to pick up a package, the seller will load a qr-code on the screen or give you the package with the RFID card. Once you scan it, you get all the information about the delivery, and your delivery journey begins!',
  button: false,
  link_to: '',
  button_text: '',
  items: [

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
  image_path: '../assets/mockups/delivery/delivery_target_selected.jpg',
  image_right: true,
  title: 'Guided delivery',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Guided delivery',
      description: 'Once you get the delivery information, you just follow the path on your phone till the destination.',
    },
    {
      title: 'Route',
      description: 'The route will change according to your vehicle and the traffic. You can use the map inside the application or open the route with your favourite app!',
    },
    {
      title: 'Buyer feedback',
      description: 'You can contact the buyer directly in the application, ask her questions or send feedback like real-time location or warn about a possible delay.',
    }
  ]
}
const buddiesData = {
  id: 'rewards',
  border: true,
  background: 'white',
  image_type: 'mobile',
  image_path: '../assets/mockups/delivery/delivery_rewards.jpg',
  image_right: false,
  title: 'Earn rewards',
  description: "Receive rewards once you complete the delivery!",
  button: false,
  link_to: '',
  button_text: '',
  items: [
    {
      title: 'Real Money',
      description: 'You can decide to earn money: you set the price per km, the system will choose the delivery person with the feedback and $/km.',
    },
    {
      title: 'Coupons',
      description: 'If you prefer you can decide to get paid with coupons that you can use in the local shops: the longer is the path the more the reward will be interesting!.',
    }
  ]
}
