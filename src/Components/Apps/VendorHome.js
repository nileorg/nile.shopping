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
                    As one of the first steps a vendor needs to define all the
                    product blueprints. A product blueprint is not the actual
                    product, it is just a template. A real product gets created
                    each time the stock gets increased.
                  </p>
                </Fade>
                <Fade left>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Create Blueprints</h4>} >
                      <div>The product blueprint includes information like name,
                      description, bullet points, categories, price, stock limits
                      and images.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Change History</h4>}>
                      <div>Each time someone changes the blueprint information
                      the application keeps track of what has when been changed
                      by whom.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Stock</h4>}>
                      <div>Besides the change history of blueprint information,
                      there is also an information panel about the current stock
                      including a change history for all increases and decreases.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Preview</h4>}>
                      <div>In order to optimize the appearence of online
                      store products, vendors can see a preview that demonstrates
                      the look for their customers.</div>
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
                    Each time a customer buys a product that is supposed to be
                    delivered to him, an order gets created. As soon as the order
                    gets paid by the customer, the vendor needs to pack it. Next
                    it needs to be handed over to a supplier and last but not
                    least delivered to the target location.
                  </p>
                </Fade>
                <Fade right>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Quick overview</h4>}>
                      <div>In two situations the vendor needs to interact with
                      the order, first when it is payed and second when a
                      supplier is ready to pick it up. The overview is designed
                      to highlight those two use cases.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Packaging process</h4>}>
                      <div>By selecting a payed order the vendor sees a todo
                      list of the products he need to pack and can confirm packaging
                      as soon as he has finished.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Handover process</h4>}>
                      <div>When a supplier scans an order the vendor gets notified
                      and needs to confirm the handing over process.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Change History</h4>}>
                      <div>The order lifecycle has it's own change history to
                      create trust for all parties. It keeps track of every
                      status change.</div>
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
                    Many businesses rely on a cashier system, but if a business
                    has an online store it is even more important since the stock
                    needs to be synchronised all the time.
                  </p>
                </Fade>
                <Fade left>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Fast and easy</h4>} >
                      <div>The cashier application is designed to be as fast and
                      easy as possible. It is also possible to use that application
                      with any given device, desktop, tablet or smartphone.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Cart display for customers</h4>}>
                      <div>Vendors can also position another screen just for their
                      customers to make purchases their transparent in real time.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Commission-free payments</h4>}>
                      <div>Thanks to Nile and the underlying technology IOTA,
                      there are zero commission-rates nor fees for the payments.</div>
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
                    Store management includes information, customisation, category
                    management as well as team management.
                  </p>
                </Fade>
                <Fade right>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Get started</h4>} >
                      <div>Initially a vendor needs to create a digitial twin for
                      his store with basic information like the name, description,
                      location and some links.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Customisation</h4>}>
                      <div>Vendors can customize their shop with their logo and
                      the primary colour.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Categories Management</h4>}>
                      <div>Some businesses have only a few categories others might
                      even need subcategories. All product blueprints get at
                      least one category.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Team Management</h4>}>
                      <div>Managing a team is quite simple, for each team member
                      the vendor can define the access to each application like
                      the dashboard, products, orders, cashier system and store
                      settings.</div>
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
