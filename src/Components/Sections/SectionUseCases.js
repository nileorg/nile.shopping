import React, { Component } from "react"
import { Layout, Collapse } from 'element-react'

import vendor from "../../assets/vendor-circled.jpg"
import supplier from "../../assets/supplier-circled.jpg"
import customer from "../../assets/customer-circled.jpg"

export default class extends Component {
  render () {
    return (
      <div className="section section--use-case" id="use-cases">
        <div className="container">
          <Layout.Row type="flex" justify="center" style={{marginBottom: 100}}>
            <Layout.Col  span="12" className="center">
              <h2>Use Cases</h2>
              <p>Each user group has different use cases.</p>
            </Layout.Col>
          </Layout.Row>

          <Layout.Row gutter="60" style={{marginBottom: 100}}>
            <Layout.Col  span="12">
              <h3 style={{marginBottom: 30}}>Vendor</h3>
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
            </Layout.Col>
            <Layout.Col span="12" className="flex-end">
              <img alt="vendor" src={vendor} />
            </Layout.Col>
          </Layout.Row>

          <hr style={{marginBottom: 100}}/>

          <Layout.Row gutter="60" style={{marginBottom: 100}}>
            <Layout.Col  span="12">
              <img alt="vendor" src={supplier} />
            </Layout.Col>
            <Layout.Col  span="12">
              <h3 style={{marginBottom: 30}}>Supplier</h3>
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
            </Layout.Col>
          </Layout.Row>

          <hr style={{marginBottom: 100}}/>

          <Layout.Row gutter="60">
            <Layout.Col span="12">
              <h3 style={{marginBottom: 30}}>Customer</h3>
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
            </Layout.Col>
            <Layout.Col span="12" className="flex-end">
              <img alt="vendor" src={customer} />
            </Layout.Col>
          </Layout.Row>
        </div>
      </div>
    )
  }
}
