import React, { PropTypes } from 'react'
import InfoBox from "react-google-maps/lib/addons/InfoBox";
import { Marker } from "react-google-maps";
import {connect} from 'react-redux'
import toJS from 'utils/toJs'

import calculatePosition from 'utils/calculatePosition'

import ShipIcon from 'img/IconShip.png'
import ShipIconSelected from 'img/IconShipSelected.png'


import './Ship.styl'

const MarkerOptions = selected => ({
  icon: {url:selected?ShipIconSelected:ShipIcon,anchor:new google.maps.Point(6, 29)}
})

const Ship = ({ship,onShipSelect,selected,waypoints,time}) => {
  const position=(calculatePosition([ship.position,...waypoints.map(x=>x.position)],time))
  return (
    <Marker
      position={position}
      onClick={onShipSelect}
      options={MarkerOptions(selected)}/>
  )
}

export default connect(state=>({time: state.timeline.get('time')/state.timeline.get('duration')}))(toJS(Ship))
