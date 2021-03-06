import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import toJs from 'utils/toJs'
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)

const MessageEntry = (props) => {
  const {update,deleteMessage,handleSubmit,ship,initialValues} = props
  console.log(ship)
  return (
        <form className="pure-form pure-form-stacked top-form"  onSubmit={handleSubmit(data=>update(data))}>
          <div className="pure-u-1-2">
            <div className="pad-right">
              <label>LATITUDE</label>
              <Field name="lat" component={renderField} type="number" placeholder="ex. 74.465..."/>
            </div>
          </div>
          <div className="pure-u-1-2">
            <div className="pad-right">
              <label>LATITUDE</label>
              <Field name="lng" component={renderField} type="number" placeholder="ex. 74.465..."/>
            </div>
          </div>

          <hr/>

          <div className="pure-u-1">
            <label>SHIP NAME</label>
            <span className="big"></span>
          </div>

          <div className="pure-u-1">
            <label>MMSI/ID NUMBER</label>
            <input type="text" value={initialValues.mmsi} readOnly></input>
          </div>
          <div className="pure-u-1">
            <label>CHANNEL</label>
            <Field name="channel" component="select">
              <option value="manual">MANUAL</option>
              <option value="automatic">AUTOMATIC</option>
            </Field>
          </div>

          <hr/>

          <div className="pure-u-1-2">
            <div className="pad-right pad-bottom">
              <label>NAVIGATIONAL STATUS</label>
              <Field name="navigational_status" component="select">
                {
                  [...Array(15).keys()].map(x=>{
                    return <option key={x} value={x+1}>{x+1}</option>
                  })
                }
              </Field>
            </div>

            <div className="pad-right pad-bottom">
              <label>SOG</label>
              <Field name="sog" component={renderField} type="number" placeholder="SOG"/>
            </div>

            <div className="pad-right pad-bottom">
              <label>COG</label>
              <Field name="cog" component={renderField} type="number" placeholder="COG"/>
            </div>
          </div>

          <div className="pure-u-1-2">
            <div className="pad-left pad-bottom">
              <label>POSITION ACCURACY</label>
              <Field name="position_accuracy" component="select">
                <option value={0}>0 (Low)</option>
                <option value={1}>1 (high)</option>
              </Field>
            </div>

            <div className="pad-left pad-bottom">
              <label>RATE OF TURN</label>
              <Field name="rate_of_turn" component={renderField} type="number" placeholder="Course"/>
            </div>

            <div className="pad-left pad-bottom">
              <label>TRUE HEADING</label>
              <Field name="true_heading" component={renderField} type="number" placeholder="Course"/>
            </div>
          </div>
          <div className="pure-u-1">
            <button key="updateButton" type="submit" className="pure-button margin-right">UPDATE</button>
            <button key="deleteButton" onClick={deleteMessage} type="submit" className="pure-button red-button">DELETE</button>
          </div>
        </form>
  )
}

const validate = ({lat,lng,channel,navigational_status,sog,cog,position_accuracy,rate_of_turn,true_heading}) => {
  const errors = {}
  if(!lat)errors.lat='REQUIRED'
  if(!lng)errors.lng='REQUIRED'
  if(!sog)errors.sog='REQUIRED'
  if(!cog)errors.cog='REQUIRED'
  if(!channel)errors.position_accuracy='REQUIRED'
  if(!navigational_status)errors.position_accuracy='REQUIRED'
  if(!position_accuracy)errors.position_accuracy='REQUIRED'
  if(!rate_of_turn)errors.rate_of_turn='REQUIRED'
  if(!true_heading)errors.true_heading='REQUIRED'
  return errors
}


export default reduxForm({validate})(MessageEntry)
