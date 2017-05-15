import {randId} from './utils'
import {addShip} from './ships'
import {addWaypoint} from './waypoints'
import {selectShip} from './selection'
import {selectTool} from './index'

const addShipFromMap = (position,dispatch) => {
  const newShipId=randId()
  dispatch(addShip(newShipId,position,'Default-'+newShipId))
  dispatch(selectTool(null))
  dispatch(selectShip(newShipId))
}

const addWaypointFromMap = (position,shipId,dispatch) => {
  dispatch(addWaypoint(shipId,position))
}

export const mapClick = (position) => {
  return (dispatch, getState) => {
        const state = getState()
        const currentTool = state.tool
        switch (currentTool) {
          case 'addShip':
            addShipFromMap(position,dispatch)
            break
          case 'addWaypoint':
            if(!!state.selectedShip)addWaypointFromMap(position,state.selectedShip,dispatch)
            else dispatch(selectTool(null))
            break
          default:
            dispatch(selectShip(null))
        }

    }
}
