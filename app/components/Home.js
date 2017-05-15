import React, { PropTypes } from 'react'
import {Link} from 'react-router'

import './Home.styl'

const Home = (props) => {
  return (
    <div className="home">
      <div className="top-form pure-form login window window-form">
        <div className="pure-g">
          <div className="pure-u-1">
            <label>Username:</label>
            <input type="text"></input>
          </div>
          <div className="pure-u-1">
            <label>Password:</label>
            <input type="password"></input>
          </div>
          <div className="pure-u-1">
            <Link className="pure-button" to='/scene'><label>Login</label></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
