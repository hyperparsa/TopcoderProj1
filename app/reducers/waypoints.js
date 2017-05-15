import { OrderedMap,fromJS } from 'immutable';

const initialState = OrderedMap()

const newWaypoint = (position,shipId,id) => fromJS({position,info:{speed:10},shipId,id})

const waypoints = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WAYPOINT':
      return state.set(action.newWaypointId,newWaypoint(action.position,action.shipId,action.newWaypointId))
    case 'UPDATE_WAYPOINT':
      return state.setIn([action.waypointId,'info'],action.info)
    case 'DELETE_WAYPOINT':
      return state.delete(action.waypointId)
    default:
      return state
  }
}

export default waypoints
