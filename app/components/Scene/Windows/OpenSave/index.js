import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {selectTool} from 'actions/'

import './OpenSave.styl'



const OpenSave = ({selectTool,tool}) => {
  return (
    <div className="cover-screen">
      <div className="center-window window window-form">
            <i className="fa fa-times fa-2x" aria-hidden="true" onClick={selectTool}/>
        {
          tool=='openTool' ?
          (
            <form className="top-form pure-form pure-form-stacked open-window">
                    <h2>OPEN</h2>
                    <hr/>

                    <div className="pure-u-1">
                      <ul>
                        {[...Array(20).keys()].map(x=>(
                          <li key={x}>Scenerio {x+1} <span className="float-right">3/8/2017</span></li>
                        ))}
                      </ul>
                    </div>
                    <hr/>
                    <div className="bottom-buttons">
                      <div className="pure-u-1">
                        <button key="cancelButton" type="button" onClick={selectTool} className="pure-button pure-button-primary">CANCEL</button>
                        <button type="openButton"  type="button" onClick={selectTool} className="pure-button pure-button-primary float-right">OPEN</button>
                      </div>
                    </div>
              </form>
          ) :
          (
            <form className="top-form pure-form pure-form-stacked save-window">
                    <h2>SAVE</h2>
                    <hr/>

                    <div className="pure-u-1">
                      <input></input>
                    </div>
                    <hr/>
                    <div className="bottom-buttons">
                      <div className="pure-u-1">
                        <button key="cancelButton" type="button" onClick={selectTool} className="pure-button pure-button-primary">CANCEL</button>
                        <button type="openButton"  type="button" onClick={selectTool} className="pure-button pure-button-primary float-right">OPEN</button>
                      </div>
                    </div>
              </form>
          )
        }

      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    tool:state.tool
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectTool: () => {
      dispatch(selectTool(''))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OpenSave)
