import {randId} from './utils'

export const addWaypoint = (shipId,position)=>{
  const newWaypointId=randId()
  return ({
    type:'ADD_WAYPOINT',
    newWaypointId,
    position,
    shipId
  })
}


export const updateWaypoint = (waypointId,info) =>({
  type : "UPDATE_WAYPOINT",
  waypointId,
  info
})

export const deleteWaypoint = (waypointId) => ({
  type: "DELETE_WAYPOINT",
  waypointId
})
