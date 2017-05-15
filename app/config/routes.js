import React, { PropTypes } from 'react'
import {Router, Route , IndexRoute, hashHistory} from 'react-router'

import Layout from '../components/Layout'
import Home from '../components/Home'
import Scene from '../components/Scene/'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home}/>
      <Route path='/scene' component={Scene}/>
    </Route>
  </Router>
)

export default routes
