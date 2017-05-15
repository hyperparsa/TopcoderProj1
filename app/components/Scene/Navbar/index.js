import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {selectTool} from 'actions/'

const Navbar = (props) => {
  return (
    <nav className="header">
      <button className="pure-button" type="button" onClick={()=>props.selectTool('openTool')}> Open </button>
      <button className="pure-button" type="button" onClick={()=>props.selectTool('saveTool')}> Save </button>
    </nav>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectTool: (text) => {
      dispatch(selectTool(text))
    }
  }
}

export default connect(null,mapDispatchToProps)(Navbar)
