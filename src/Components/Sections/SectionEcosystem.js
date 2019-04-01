import React from "react"
import { Layout } from 'element-react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import vendor from '../../assets/avatars/vendor-circled.jpg'
import supplier from '../../assets/avatars/supplier-circled.jpg'
import customer from '../../assets/avatars/customer-circled.jpg'

export default props =>
  <div className="section section__light" id="ecosystem">
    <div className="container">
      <Layout.Row type="flex" justify="center" style={{ marginBottom: 50 }}>
        <Layout.Col sm="18" md="12" lg="12" className="center">
          <Fade top>
            <h2>Ecosystem</h2>
            <p>
              Who needs to be empowered to let local economies flourish again?
              It's the people, the ones that want to sell something - called
              vendors, the ones that want to ship something - called suppliers
              and the ones that want to buy something - called customers.
              So to strengthen local economies we have three groups of
              people with different problems and requirements.
            </p>
          </Fade>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row gutter="60" className="mobile-align-center">
        <Layout.Col sm="18" md="8" lg="8" className="center">
          <Flip left>
            <div className="card active">
              <img alt="Vendor" src={vendor}/>
              <h3>Vendor</h3>
              <p>
                Think of small businesses like backeries, joineries and
                flower shops selling products. Or think of hair studios,
                doctors offices and repair shops selling services. We can even
                think of usual people selling art, honey and services they do
                hobby wise.
              </p>
              <button
                style={{marginTop: 30}}
                className="el-button el-button--primary">
                Read more
              </button>
            </div>
          </Flip>
        </Layout.Col>
        <Layout.Col sm="18" md="8" lg="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="supplier" src={supplier}/>
              <h3>Supplier</h3>
              <p>
                Think of people driving to work everyday. Suppliers can see
                which packages are easy to ship depending on their route. This
                way the delivery is not just very efficient since there are
                almost no extra miles, the supplier also get rewards on the fly.
              </p>
              <button
                style={{marginTop: 30}}
                className="el-button el-button--primary">
                Read more
              </button>
            </div>
          </Flip>
        </Layout.Col>
        <Layout.Col sm="18" md="8" lg="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="Customer" src={customer}/>
              <h3>Customer</h3>
              <p>
                More and more people get aware of the importance of local
                economies. Empowering people with a platform to have a great
                service quality but supporting local people instead of giant
                cooperations has the potential to transform the awareness into
                action.
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
