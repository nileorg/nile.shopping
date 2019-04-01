import React, { Component } from "react"
import { Layout, Collapse } from 'element-react'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'

import vendor from "../../assets/vendor-circled.jpg"
import supplier from "../../assets/supplier-circled.jpg"
import customer from "../../assets/customer-circled.jpg"

export default class extends Component {
  render () {
    return (
      <div className="section section--use-case section__border-top" id="use-cases">
        <div className="container">

          <Layout.Row gutter="60" style={{marginBottom: 100}}>
            <Layout.Col  span="12">
              <Fade top>
                <h2 style={{marginBottom: 10}}>Vendor</h2>
                <p style={{marginBottom: 30}}>
                  People willing to sell something. There are many different
                  businesses and people that are already selling products or
                  services, but many of them does not have the capacities nor the
                  money to conquer the web and there might also be even more
                  people that have the potential but not yet the platform to do so.
                </p>
              </Fade>
              <Fade left>
                <Collapse accordion value="0">
                  <Collapse.Item title={<span><span className="counter">1</span>Get started</span>} >
                    <div>Initially a vendor needs to create a digitial twin for his shop, define his product blueprints and the initial stocks.</div>
                  </Collapse.Item>
                  <Collapse.Item title={<span><span className="counter">2</span>Stock Management</span>}>
                    <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                  </Collapse.Item>
                  <Collapse.Item title={<span><span className="counter">3</span>Order Management</span>}>
                    <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                    <div>To prepare an order for delivery (make it accessable for the supplier) he needs to pack all the ordered products and an RFID card.</div>
                    <div>When a supplier arrives the vendor simply scans the supplier's code and hands over the package.</div>
                  </Collapse.Item>
                  <Collapse.Item title={<span><span className="counter">4</span>Cashier System</span>}>
                    <div>Most vendors also have customers on site. To keep the stocks updated they simply can use the cashier system.</div>
                  </Collapse.Item>
                </Collapse>
                <div style={{marginTop: 50}}>
                  <NavLink
                    to="/app/vendor"
                    className="el-button el-button--primary">
                    Discover more
                  </NavLink>
                  <button
                    className="el-button el-button">
                    Try Prototype
                  </button>
                </div>
              </Fade>
            </Layout.Col>
            <Layout.Col span="12" className="flex-end">
              <Flip left>
                <img alt="vendor" src={vendor} />
              </Flip>
            </Layout.Col>
          </Layout.Row>

          <hr style={{marginBottom: 100}}/>

          <Layout.Row gutter="60" style={{marginBottom: 100}}>
            <Layout.Col  span="12">
              <Flip right>
                <img alt="vendor" src={supplier} />
              </Flip>
            </Layout.Col>
            <Layout.Col  span="12">
              <Fade top>
                <h2 style={{marginBottom: 10}}>Supplier</h2>
                <p style={{marginBottom: 30}}>
                  People willing to ship something. Shipping products from one
                  place to another is mostly done by corporations right now.
                  Instead we could use the potential of usual people that drive
                  around every day. They simply could pick up packages on their
                  path and deliver it to the target location.
                </p>
              </Fade>
              <Fade right>
                <Collapse accordion value="0">
                  <Collapse.Item
                    title={<span><span className="counter">1</span>Pick up packages on your path</span>}>
                    <div>Whenever you drive from one place to another you can
                    enter your path and see where you can pickup packages</div>
                  </Collapse.Item>
                  <Collapse.Item
                    title={<span><span className="counter">2</span>Guided delivery</span>}>
                    <div>As soon as you picked up the packages you will be guided
                    to your target locations.</div>
                  </Collapse.Item>
                  <Collapse.Item
                    title={<span><span className="counter">3</span>Earn rewards</span>}>
                    <div>By delivering packages to customers you earn some money
                    for the delivery.</div>
                  </Collapse.Item>
                  <Collapse.Item
                    title={<span><span className="counter">4</span>Find buddies</span>}>
                    <div>Especially older generations rely on people that bring
                    their products right at their door. You can enter fixed
                    relationships with people to help them whenever they need
                    something.</div>
                  </Collapse.Item>
                </Collapse>
                <div style={{marginTop: 50}}>
                  <NavLink
                    to="/app/supplier"
                    className="el-button el-button--primary">
                    Discover more
                  </NavLink>
                  <button
                    className="el-button el-button">
                    Try Prototype
                  </button>
                </div>
              </Fade>
            </Layout.Col>
          </Layout.Row>

          <hr style={{marginBottom: 100}}/>

          <Layout.Row gutter="60">
            <Layout.Col span="12">
              <Fade top>
                <h2 style={{marginBottom: 10}}>Customer</h2>
                <p style={{marginBottom: 30}}>
                  More and more people get aware of the importance of local
                  economies. They see how many local businesses needs to close,
                  but do not want to be without the service quality of platforms
                  like amazon. Empowering people with a platform to have the same
                  service quality but supporting local products and services has the
                  potential to transform the awareness into real world action.
                </p>
              </Fade>
              <Fade left>
                <Collapse accordion value="0">
                  <Collapse.Item title={<span><span className="counter">1</span>Discover your neighborhood</span>} >
                    <div>You can find businesses and people offering products and
                    services right in your neighborhood.</div>
                  </Collapse.Item>
                  <Collapse.Item title={<span><span className="counter">2</span>Delivery at your home</span>}>
                    <div>Many local businesses that currently cannot offer delivery
                    services will be able to deal with delivery by using the Nile
                    platform.</div>
                  </Collapse.Item>
                  <Collapse.Item title={<span><span className="counter">3</span>Recurring orders</span>}>
                    <div>If you buy products frequently you can create recurring
                    orders. They will be delivered automatically right at your
                    door.</div>
                  </Collapse.Item>
                </Collapse>
                <div style={{marginTop: 50}}>
                  <NavLink
                    to="/app/customer"
                    className="el-button el-button--primary">
                    Discover more
                  </NavLink>
                  <button
                    className="el-button el-button">
                    Try Prototype
                  </button>
                </div>
              </Fade>
            </Layout.Col>
            <Layout.Col span="12" className="flex-end">
              <Flip left>
                <img alt="vendor" src={customer} />
              </Flip>
            </Layout.Col>
          </Layout.Row>
        </div>
      </div>
    )
  }
}
