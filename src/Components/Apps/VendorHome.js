import React, { Component, Fragment } from 'react'
import { Layout, Collapse } from 'element-react'
import Fade from 'react-reveal/Fade'

import hero from '../../assets/heros/vendor_hero.jpg'
import divider from '../../assets/heros/divider.svg'
import avatar from '../../assets/avatars/vendor-circled.jpg'

import dashboard from '../../assets/mockups/dashboard.png'
import product from '../../assets/mockups/product.png'
import order from '../../assets/mockups/order.png'
import cashier from '../../assets/mockups/cashier.png'
import settings from '../../assets/mockups/settings.png'

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
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
                    <Collapse.Item title={<h4><span className="counter">2</span>Stock Management</h4>}>
                      <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Order Management</h4>}>
                      <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                      <div>To prepare an order for delivery (make it accessable for the supplier) he needs to pack all the ordered products and an RFID card.</div>
                      <div>When a supplier arrives the vendor simply scans the supplier's code and hands over the package.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Cashier System</h4>}>
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
                    <Collapse.Item title={<h4><span className="counter">1</span>Get started</h4>} >
                      <div>Initially a vendor needs to create a digitial twin for his shop, define his product blueprints and the initial stocks.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Stock Management</h4>}>
                      <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Order Management</h4>}>
                      <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                      <div>To prepare an order for delivery (make it accessable for the supplier) he needs to pack all the ordered products and an RFID card.</div>
                      <div>When a supplier arrives the vendor simply scans the supplier's code and hands over the package.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Cashier System</h4>}>
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
                    <Collapse.Item title={<h4><span className="counter">1</span>Get started</h4>} >
                      <div>Initially a vendor needs to create a digitial twin for his shop, define his product blueprints and the initial stocks.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Stock Management</h4>}>
                      <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Order Management</h4>}>
                      <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                      <div>To prepare an order for delivery (make it accessable for the supplier) he needs to pack all the ordered products and an RFID card.</div>
                      <div>When a supplier arrives the vendor simply scans the supplier's code and hands over the package.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Cashier System</h4>}>
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
                    <Collapse.Item title={<h4><span className="counter">1</span>Get started</h4>} >
                      <div>Initially a vendor needs to create a digitial twin for his shop, define his product blueprints and the initial stocks.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Stock Management</h4>}>
                      <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Order Management</h4>}>
                      <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                      <div>To prepare an order for delivery (make it accessable for the supplier) he needs to pack all the ordered products and an RFID card.</div>
                      <div>When a supplier arrives the vendor simply scans the supplier's code and hands over the package.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Cashier System</h4>}>
                      <div>Most vendors also have customers on site. To keep the stocks updated they simply can use the cashier system.</div>
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
                    <Collapse.Item title={<h4><span className="counter">2</span>Stock Management</h4>}>
                      <div>Everytime the vendor gets new deliveries or produces new products he needs to update his stock.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Order Management</h4>}>
                      <div>The vendor gets notified as soon as a new order arrives. He can see all orders and their status in the orders list.</div>
                      <div>To prepare an order for delivery (make it accessable for the supplier) he needs to pack all the ordered products and an RFID card.</div>
                      <div>When a supplier arrives the vendor simply scans the supplier's code and hands over the package.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Cashier System</h4>}>
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
