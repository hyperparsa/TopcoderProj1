import React, { PropTypes } from 'react'

import Navbar from './Navbar/'
import TopMap from './Map/TopMap'
import Tools from './windows/Tools'
import Windows from './windows/'
import Timeline from './Timeline/'

import './Scene.styl'

const Scene = (props) => {
  return (
    <div>
      <Navbar/>
      <div className="map">
        <TopMap/>
        <Tools/>
        <Windows/>
      </div>
      <Timeline/>
    </div>
  )
}

export default Scene
