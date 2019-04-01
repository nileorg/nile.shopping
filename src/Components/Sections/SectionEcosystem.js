import React from "react"
import { Layout } from 'element-react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import vendor from '../../assets/vendor-circled.jpg'
import supplier from '../../assets/supplier-circled.jpg'
import customer from '../../assets/customer-circled.jpg'

export default props =>
  <div className="section section__light" id="ecosystem">
    <div className="container">
      <Layout.Row type="flex" justify="center" style={{ marginBottom: 50 }}>
        <Layout.Col span="12" className="center">
          <Fade top>
            <h2>Ecosystem</h2>
            <p>
              Who needs to be empowered to let local economies flourish again?
              To strengthen local economies we have basically three groups of
              people to empower.
            </p>
          </Fade>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row gutter="60" >
        <Layout.Col span="8" className="center">
          <Flip left>
            <div className="card active">
              <img alt="Vendor" src={vendor}/>
              <h3>Vendor</h3>
              <p>
                People willing to sell something. There are many different
                businesses and people that are already selling products or
                services, but many of them does not have the capacities nor the
                money to conquer the web and there might also be even more
                people that have the potential but not yet the platform to do so.
              </p>
              <button
                style={{marginTop: 30}}
                className="el-button el-button--primary">
                Read more
              </button>
            </div>
          </Flip>
        </Layout.Col>
        <Layout.Col span="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="supplier" src={supplier}/>
              <h3>Supplier</h3>
              <p>
                 People willing to ship something. Shipping products from one
                place to another is mostly done by corporations right now.
                Instead we could use the potential of usual people that drive
                around every day. They simply could pick up packages on their
                path and deliver it to the target location.
              </p>
              <button
                style={{marginTop: 30}}
                className="el-button el-button--primary">
                Read more
              </button>
            </div>
          </Flip>
        </Layout.Col>
        <Layout.Col span="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="Customer" src={customer}/>
              <h3>Customer</h3>
              <p>
                More and more people get aware of the importance of local
                economies. They see how many local businesses needs to close,
                but do not want to be without the service quality of platforms
                like amazon. Empowering people with a platform to have the same
                service quality but supporting local products and services has the
                potential to transform the awareness into real world action.
              </p>
              <button
                style={{marginTop: 30}}
                className="el-button el-button--primary">
                Read more
              </button>
            </div>
          </Flip>
        </Layout.Col>
      </Layout.Row>
    </div>
  </div>
