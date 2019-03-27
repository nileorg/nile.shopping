import React from "react"
import { Layout, Button } from 'element-react'

import vendor from './assets/vendor.svg'
import supplier from './assets/supplier.svg'
import customer from './assets/customer.svg'

export default props =>
  <div className="section" id="ecosystem">
    <div className="container">
      <Layout.Row type="flex" justify="center">
        <Layout.Col  span="12" className="center">
          <h2>Ecosystems</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" justify="center">
        <Layout.Col  span="8" className="center">
          <img alt="Vendor" src={vendor}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Layout.Col>
        <Layout.Col  span="8" className="center">
          <img alt="supplier" src={supplier}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Layout.Col>
        <Layout.Col  span="8" className="center">
          <img alt="Customer" src={customer}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Layout.Col>
      </Layout.Row>
    </div>
  </div>
