import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {selectTool} from '../../../actions/'

import IconAddShip from '../../../img/IconAddShip.png'
import IconAIS from '../../../img/IconAIS.png'
import IconMap from '../../../img/IconMap.png'

import './tools.styl'

const Tools = (props) => {
  return (
    <ul className="tools window">
      <li className={props.currentTool=='addShip'?'active':''} onClick={() => props.selectTool('addShip')}><img  src={IconAddShip} className="pure-img"></img></li>
      <li className={props.currentTool=='addMessage'?'active':''} onClick={() => props.selectTool('addMessage')}><img  src={IconAIS} className="pure-img"></img></li>
      <li className={props.currentTool=='removeThis'?'active':''} onClick={() => props.selectTool('removeThis')}><img  src={IconMap} className="pure-img"></img></li>
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentTool: state.tool
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectTool: (text) => {
      dispatch(selectTool(text))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tools)
