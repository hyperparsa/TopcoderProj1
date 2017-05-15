import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import toJs from 'utils/toJs'
import { Field, reduxForm } from 'redux-form';

import {updateShip,selectTool,uiSetShipDetailsEditing} from 'actions/'

const ShipDetails = (props) => {
  const { ship,uiEditing,  uiSetEditing,selectWaypointTool,selectAddMessageTool,updateShip  ,handleSubmit } = props
  return (
    <div className="window window-form ShipDetails">
      <form className="top-form pure-form pure-form-stacked" onSubmit={handleSubmit((data)=>updateShip(ship.id,data))}>
            <h2>SHIP INFORMATION</h2>
            <hr/>
            <div className="pure-u-1">
              <label>SHIP NAME</label>
                {
                  uiEditing ?
                  (
                    <Field name="name" component="input" type="text" placeholder="Name"/>
                  ) : (
                    <span className="big">{ship.info.name}</span>
                  )
                }
            </div>
            <div className="pure-u-1-2">
              <div className="pad-right">
                <label>COURSE</label>
                  {
                    uiEditing ?
                    (
                      <Field name="course" component="input" type="text" placeholder="Course"/>
                    ) : (
                      <span className="big">{ship.info.course}</span>
                    )
                  }
              </div>
            </div>

            <div className="pure-u-1-2">
              <div className="pad-left">
                <label>SPEED</label>
                  {
                    uiEditing ?
                    (
                      <Field name="speed" component="input" type="text" placeholder="SPEED"/>
                    ) : (
                      <span className="big">{ship.info.speed}</span>
                    )
                  }
              </div>
            </div>
            <hr/>
            <div className="bottom-buttons">
              <div className="pure-u-1">
                {
                  uiEditing ?
                  (
                    <button key="saveButton" type="submit" className="pure-button pure-button-primary">SAVE</button>
                  ) :
                  (
                    <button key="editButton" type="button" onClick={uiSetEditing} className="pure-button pure-button-primary">EDIT</button>
                  )
                }
                <button key="WaypointButton" type="button"  onClick={selectWaypointTool} className="pure-button pure-button-primary float-right">WAYPOINT</button>
                <button type="AddMessageButton"  onClick={selectAddMessageTool} className="pure-button pure-button-primary float-right margin-right">AIS</button>
              </div>
            </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    uiEditing: state.ui.get('shipDetailsEditing')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectWaypointTool: () => {
      dispatch(selectTool('addWaypoint'))
    },
    selectAddMessageTool: () => {
      dispatch(selectTool('addMessage'))
    },
    uiSetEditing:() => {
      dispatch(uiSetShipDetailsEditing(true))
    },
    updateShip:(shipId,data)=>{
      dispatch(uiSetShipDetailsEditing(false))
      dispatch(updateShip(shipId,data))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(toJs(reduxForm({
  form: 'ShipDetailsForm'
})(ShipDetails)))
