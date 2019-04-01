import React from "react"
import { Layout } from 'element-react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import privacy from '../../assets/privacy.svg'
import feeless from '../../assets/feeless.svg'
import permissionless from '../../assets/permissionless.svg'

export default props =>
  <div className="section section__light" id="ecosystem">
    <div className="container">
      <Layout.Row type="flex" justify="center" style={{marginBottom: 50}}>
        <Layout.Col  span="12" className="center">
          <Fade top>
            <h2>Mission</h2>
            <p>Nile’s mission is to provide local economies with tools to compete
            with the global economy. Today, global monopolies are putting local
            economies at risk, by offering better and faster services.People are
            buying more from the same global seller instead of pursuing the ethical
            and sustainable choice of supporting local markets. It is time for Nile
            and those who share our mission to develop a plan to stand up for a new
            open and free set of tools to promote local economies.
            </p>
          </Fade>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row gutter="60" >
        <Layout.Col  span="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="privacy" src={privacy}/>
              <h3>Privacy</h3>
              <p>Data protection and user privacy is a huge topic today. The
              platform just saves the information which is needed and all users
              data is saved on the user’s devices.</p>
            </div>
          </Flip>
        </Layout.Col>
        <Layout.Col  span="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="feeless" src={feeless}/>
              <h3>Feeless</h3>
              <p>Nile does not have fees at any level - it is 100% commission-free.
              Nile will always be free. There won’t be any extra pay features nor
              a pro version. The complete code is open source and free to use.</p>
            </div>
          </Flip>
        </Layout.Col>
        <Layout.Col  span="8" className="center">
          <Flip left>
            <div className="card">
              <img alt="permissionless" src={permissionless}/>
              <h3>Permissionless</h3>
              <p>Everyone can join the system without any registration hurdles.
              Even when you are signed in your can interact anonymously with other
              people in your ecosystem.</p>
            </div>
          </Flip>
        </Layout.Col>
      </Layout.Row>
    </div>
  </div>
