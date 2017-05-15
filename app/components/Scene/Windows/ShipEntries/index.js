import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import toJs from 'utils/toJs'
import { Field, reduxForm } from 'redux-form';
import Collapsible from 'react-collapsible';

import WaypointEntry from './WaypointEntry'
import MessageEntry from './MessageEntry'

import {updateWaypoint,updateMessage,deleteWaypoint,deleteMessage} from 'actions/'
import {getWaypointsByShip,getMessagesByShip} from 'selectors/'

import './ShipEntries.styl'

const WaypointForm = ({waypoint,update,deleteFunction}) => <WaypointEntry form={'waypoint-'+waypoint.id} deleteWaypoint={()=>deleteFunction(waypoint.id)} update={(data) => update(waypoint.id,data)} initialValues={waypoint.info}/>
const MessageForm = ({message,ship,update,deleteFunction}) => <MessageEntry form={'message-'+message.id} deleteMessage={()=>deleteFunction(message.id)} update={(data) => update(message.id,data)} initialValues={message.info} ship={ship}/>

const ShipEntries = (props) => {
  const { shipId,ship,waypoints,messages, updateWaypointWithData,updateMessageWithData,deleteWaypointWithId,deleteMessageWithId} = props
  return (
    <div className="window top-form ShipEntries">
      <div className="ShipEntriesInner">
      {shipId ?
        (
          <div>
            <Collapsible trigger="Waypoints" open={true} >
                {(waypoints||[]).map((waypoint,i)=>(
                  <Collapsible key={waypoint.id} trigger={''+i} triggerOpenedClassName="entry-trigger" triggerClassName="entry-trigger" contentInnerClassName="entry-inner">
                    <WaypointForm waypoint={waypoint} update={updateWaypointWithData} deleteFunction={deleteWaypointWithId}/>
                  </Collapsible>
                ))}
            </Collapsible>
            <Collapsible trigger="Messages" open={true} >
                {(messages||[]).map(message=>(
                  <Collapsible key={message.id} trigger={message.info.mmsi} triggerOpenedClassName="entry-trigger" triggerClassName="entry-trigger" contentInnerClassName="entry-inner">
                    <MessageForm message={message} ship={ship} update={updateMessageWithData} deleteFunction={deleteMessageWithId}/>
                  </Collapsible>
                ))}
            </Collapsible>
          </div>
        ) :
        (
          <div className="centerLabel">
            <h2>Select a ship</h2>
          </div>
        )
      }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    shipId: state.selectedShip,
    ship: state.ships.get(state.selectedShip),
    waypoints: getWaypointsByShip(state).get(state.selectedShip),
    messages: getMessagesByShip(state).get(state.selectedShip),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateWaypointWithData: (waypointId,data) => {
      dispatch(updateWaypoint(waypointId,data))
    },
    updateMessageWithData: (messageId,data) => {
      dispatch(updateMessage(messageId,data))
    },
    deleteWaypointWithId: (waypointId)=>{
      dispatch(deleteWaypoint(waypointId))
    },
    deleteMessageWithId: (messageId)=>{
      dispatch(deleteMessage(messageId))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(toJs(ShipEntries))
