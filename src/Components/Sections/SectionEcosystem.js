import React from "react"
import { Layout } from 'element-react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import vendor from '../../assets/vendor.svg'
import supplier from '../../assets/supplier.svg'
import customer from '../../assets/customer.svg'

export default props =>
  <div className="section section__light" id="ecosystem">
    <div className="container">
      <Layout.Row type="flex" justify="center" style={{marginBottom: 50}}>
        <Layout.Col  span="12" className="center">
          <Fade top>
            <h2>Ecosystems</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Fade>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row gutter="60" >
        <Layout.Col  span="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="Vendor" src={vendor}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Flip>
        </Layout.Col>
        <Layout.Col  span="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="supplier" src={supplier}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Flip>
        </Layout.Col>
        <Layout.Col  span="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="Customer" src={customer}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Flip>
        </Layout.Col>
      </Layout.Row>
    </div>
  </div>
