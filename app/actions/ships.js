export const addShip = (newShipId,position,info) => ({
  type : 'ADD_SHIP',
  newShipId,
  position,
  info
})

export const updateShip = (shipId,info) => ({
  type : 'UPDATE_SHIP',
  shipId,
  info
})
