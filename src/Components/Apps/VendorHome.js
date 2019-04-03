import React, { Component, Fragment } from 'react'
import { Layout, Collapse } from 'element-react'
import Fade from 'react-reveal/Fade'

import hero from '../../assets/heros/vendor_hero.jpg'
import divider from '../../assets/heros/divider.svg'
import avatar from '../../assets/avatars/vendor-circled.jpg'

import dashboard from '../../assets/mockups/vendor/dashboard.jpg'
import product from '../../assets/mockups/vendor/product.jpg'
import order from '../../assets/mockups/vendor/order.jpg'
import cashier from '../../assets/mockups/vendor/cashier.jpg'
import settings from '../../assets/mockups/vendor/settings.jpg'

export default class extends Component {
  render () {
    return (
      <Fragment>
        <Fade top>
          <div className={`section section--hero section--hero__sm`} style={{backgroundImage: `url(${hero})`}}>
            <div className="container">
              <div className="avatar-container">
                <img alt="vendor avatar" src={avatar}/>
              </div>
            </div>
            <div className="hero-divider">
              <img alt="divider" src={divider} className="divider"/>
            </div>
          </div>
        </Fade>
        <div className="section">
          <div className="container">
            <Layout.Row>
              <Layout.Col sm="24" md="12" lg="12">
                <Fade top>
                  <h1>Vendor</h1>
                  <p style={{marginBottom: 30}}>
                    Vendors are the people selling products and services. They
                    differentiate alot in terms of size, management and requirements
                    to a platform like nile. Still most of the vendors need a tool
                    to manage their products, services, orders, stock, cashier,
                    team and last but not least their store.
                  </p>
                  <a href="www.google.de" className="el-button el-button--primary">Try Prototype</a>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

        <div className="section section--showcase section__border-top">
          <div className="container">
            <Layout.Row>
              <Layout.Col sm="24" md="16" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade left>
                  <img alt="dashboard" src={dashboard} className="mockup mockup--left"/>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="8" lg="12">
                <Fade top>
                  <h2>Dashboard</h2>
                  <p style={{marginBottom: 30}}>
                    The dashboard shows the overall performance of the store.
                    It gives vendors a tool to analyse their strengths and
                    weeknesses in order to continuously adapt their strategy to
                    the needs of their customers.
                  </p>
                </Fade>
                <Fade right>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Turnover</h4>} >
                      <div>The most important information for the stores success
                      is their turnover and revenue rate. By reflecting on ups
                      and downs vendors can rapidly come up with counter measures.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Compare Categories</h4>}>
                      <div>By comparing product categories to each other vendors
                      can easily indicate the importance of their categories to
                      their business.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Rankings</h4>}>
                      <div>Here vendors can see their top 10 of almost anything.
                      Product sales in terms of quantity, turnover and revenue,
                      Customers, Staff, Suppliers and many more.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Agglomeration</h4>}>
                      <div>The agglomaration chart indicates where the most turnover
                      comes from geographically.</div>
                    </Collapse.Item>
                  </Collapse>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

        <div className="section section--showcase section__border-top">
          <div className="container">
            <Layout.Row style={{display: 'flex'}} className="flex-reverse-mobile">
              <Layout.Col sm="24" md="8" lg="12">
                <Fade top>
                  <h2>Product Management</h2>
                  <p style={{marginBottom: 30}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>
                <Fade left>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Create Blueprints</h4>} >
                      <div>Initially a vendor needs to create a digitial twin for his shop, define his product blueprints and the initial stocks.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>History</h4>}>
                      <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Stock</h4>}>
                      <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Preview</h4>}>
                      <div>Most vendors also have customers on site. To keep the stocks updated they simply can use the cashier system.</div>
                    </Collapse.Item>
                  </Collapse>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="16" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade right>
                  <img alt="dashboard" src={product} className="mockup mockup--right"/>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

        <div className="section section--showcase section__border-top">
          <div className="container">
            <Layout.Row>
              <Layout.Col sm="24" md="16" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade left>
                  <img alt="dashboard" src={order} className="mockup mockup--left"/>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="8" lg="12">
                <Fade top>
                  <h2>Order Management</h2>
                  <p style={{marginBottom: 30}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>
                <Fade right>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Quick overview</h4>}>
                      <div>Initially a vendor needs to create a digitial twin for his shop, define his product blueprints and the initial stocks.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Packaging process</h4>}>
                      <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Handover process</h4>}>
                      <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>History</h4>}>
                      <div>Most vendors also have customers on site. To keep the stocks updated they simply can use the cashier system.</div>
                    </Collapse.Item>
                  </Collapse>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

        <div className="section section--showcase section__border-top">
          <div className="container">
            <Layout.Row style={{display: 'flex'}} className="flex-reverse-mobile">
              <Layout.Col sm="24" md="8" lg="12">
                <Fade top>
                  <h2>Cashier System</h2>
                  <p style={{marginBottom: 30}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>
                <Fade left>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Fast and easy</h4>} >
                      <div>Initially a vendor needs to create a digitial twin for his shop, define his product blueprints and the initial stocks.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Cart display for customers</h4>}>
                      <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Commission-free payments</h4>}>
                      <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                    </Collapse.Item>
                  </Collapse>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="16" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade right>
                  <img alt="cashier" src={cashier} className="mockup mockup--right"/>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

        <div className="section section--showcase section__border-top">
          <div className="container">
            <Layout.Row>
              <Layout.Col sm="24" md="16" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade left>
                  <img alt="dashboard" src={settings} className="mockup mockup--left"/>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="8" lg="12">
                <Fade top>
                  <h2>Settings</h2>
                  <p style={{marginBottom: 30}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>
                <Fade right>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Get started</h4>} >
                      <div>Initially a vendor needs to create a digitial twin for his shop, define his product blueprints and the initial stocks.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Customize your shop</h4>}>
                      <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Manage categories</h4>}>
                      <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Manage your team</h4>}>
                      <div>Most vendors also have customers on site. To keep the stocks updated they simply can use the cashier system.</div>
                    </Collapse.Item>
                  </Collapse>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>
      </Fragment>
    )
  }
}
