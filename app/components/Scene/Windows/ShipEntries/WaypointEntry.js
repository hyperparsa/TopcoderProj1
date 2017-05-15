import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import toJs from 'utils/toJs'
import { Field, reduxForm } from 'redux-form';


const WaypointEntry = (props) => {
  const {update,deleteWaypoint,handleSubmit} = props
  return (
      <form className="pure-form pure-form-stacked top-form"  onSubmit={handleSubmit(update)}>
            <div className="pure-u-1 pad-bottom">
              <label>SPEED</label>
              <Field name="speed" component="input" type="text" placeholder="Speed" />
            </div>
            <div className="pure-u-1">
              <button key="updateButton" type="submit" className="pure-button margin-right">UPDATE</button>
              <button key="deleteButton" onClick={deleteWaypoint} type="submit" className="pure-button red-button">DELETE</button>
            </div>
      </form>
  )
}

export default reduxForm()(WaypointEntry)
