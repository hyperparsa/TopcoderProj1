import { createSelector } from 'reselect'

const getShips = state => state.ships
const getWaypoints = state => state.waypoints
const getMessages = state => state.messages
const getSelectedShipId = state => state.selectShip

export const getWaypointsByShip = createSelector(
  [getWaypoints],
  (waypoints)=>waypoints.groupBy(w=>w.get('shipId')).map(g=>g.valueSeq())
)

export const getMessagesByShip = createSelector(
  [getMessages],
  (messages)=>messages.groupBy(w=>w.get('shipId')).map(g=>g.valueSeq())
)

export const getShipIds = createSelector(
  [getShips],
  (ships)=>ships.keySeq()
)
