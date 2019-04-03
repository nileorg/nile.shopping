import React, { Component, Fragment } from 'react'
import { Layout, Collapse } from 'element-react'
import Fade from 'react-reveal/Fade'

import hero from '../../assets/heros/supplier_hero.jpg'
import divider from '../../assets/heros/divider.svg'
import avatar from '../../assets/avatars/supplier-circled.jpg'

import dashboard from '../../assets/mockups/supplier/dashboard_rewards.jpg'
import delivery_target from '../../assets/mockups/supplier/delivery_target.jpg'
import pick_up_package from '../../assets/mockups/supplier/pick_up_package.jpg'
import delivery_target_selected from '../../assets/mockups/supplier/delivery_target_selected.jpg'
import coming_soon from '../../assets/mockups/supplier/coming_soon.jpg'

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
                  <h1>Supplier</h1>
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

        <div className="section section--showcase mobile section__border-top">
          <div className="container">
            <Layout.Row>
              <Layout.Col sm="24" md="12" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade left>
                  <img alt="dashboard" src={dashboard} className="mockup mockup--mobile mockup--left"/>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="12" lg="12">
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
                    <Collapse.Item title={<h4><span className="counter">1</span>Highlight I</h4>} >
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Highlight II</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Highlight III</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Highlight IV</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                  </Collapse>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

        <div className="section section--showcase mobile section__border-top">
          <div className="container">
            <Layout.Row style={{display: 'flex'}} className="flex-reverse-mobile">
              <Layout.Col sm="24" md="12" lg="12">
                <Fade top>
                  <h2>Find packages in your near</h2>
                  <p style={{marginBottom: 30}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>
                <Fade left>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Highlight I</h4>} >
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Highlight II</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Highlight III</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Highlight IV</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                  </Collapse>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="12" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade right>
                  <img alt="dashboard" src={delivery_target} className="mockup mockup--mobile mockup--right"/>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

        <div className="section section--showcase mobile section__border-top">
          <div className="container">
            <Layout.Row>
              <Layout.Col sm="24" md="12" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade left>
                  <img alt="dashboard" src={pick_up_package} className="mockup mockup--mobile mockup--left"/>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="12" lg="12">
                <Fade top>
                  <h2>Pick up packages from vendors</h2>
                  <p style={{marginBottom: 30}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>
                <Fade right>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Highlight I</h4>} >
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Highlight II</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Highlight III</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Highlight IV</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                  </Collapse>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

        <div className="section section--showcase mobile section__border-top">
          <div className="container">
            <Layout.Row style={{display: 'flex'}} className="flex-reverse-mobile">
              <Layout.Col sm="24" md="12" lg="12">
                <Fade top>
                  <h2>Guided delivery</h2>
                  <p style={{marginBottom: 30}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>
                <Fade left>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Highlight I</h4>} >
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Highlight II</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Highlight III</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Highlight IV</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                  </Collapse>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="12" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade right>
                  <img alt="dashboard" src={delivery_target_selected} className="mockup mockup--mobile mockup--right"/>
                </Fade>
              </Layout.Col>
            </Layout.Row>
          </div>
        </div>

        <div className="section section--showcase mobile section__border-top">
          <div className="container">
            <Layout.Row>
              <Layout.Col sm="24" md="12" lg="12">
                <span style={{opacity: 0}}>a</span>
                <Fade left>
                  <img alt="dashboard" src={coming_soon} className="mockup mockup--mobile mockup--left"/>
                </Fade>
              </Layout.Col>
              <Layout.Col sm="24" md="12" lg="12">
                <Fade top>
                  <h2>Find buddies</h2>
                  <p style={{marginBottom: 30}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fade>
                <Fade right>
                  <Collapse accordion value="0">
                    <Collapse.Item title={<h4><span className="counter">1</span>Highlight I</h4>} >
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">2</span>Highlight II</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">3</span>Highlight III</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
                    </Collapse.Item>
                    <Collapse.Item title={<h4><span className="counter">4</span>Highlight IV</h4>}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</div>
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
