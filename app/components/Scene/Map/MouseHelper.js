import React, { PropTypes } from 'react'
import ReactTooltip from 'react-tooltip'
import {connect} from 'react-redux'

import ShipIcon from 'img/IconShip.png'
import CircleIcon from 'img/IconCircle.png'

const places = {
  'addShip':'top',
  'addWaypoint':'right'
}

const offsets ={
  'addShip':{'top':-20,'left':0},
  'addWaypoint':{'top':0,'left':0}
}


const MouseHelper = ({tool}) => {
  const Icon = () => {
    if(tool == 'addWaypoint')return <span>Choose Waypoint</span>
    else if(tool== 'addShip') return  <img src={ShipIcon}></img>
    else return null
  }
  return (
    <ReactTooltip disable={tool==''} id="MouseHelper" type="dark" className={tool=='addShip'?"MouseHelper":null} place={places[tool]} offset={offsets[tool]} getContent={[Icon,50]}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  ReactTooltip.rebuild()
  return {
    tool: state.tool
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MouseHelper)
