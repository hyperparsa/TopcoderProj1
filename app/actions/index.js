export const selectTool = (tool) => {
  return (dispatch,getState) => {
    dispatch({
      type: 'SELECT_TOOL',
      tool,
    })
    dispatch(uiSetShipDetailsEditing(false))
  }
}


export const uiSetShipDetailsEditing = (value) => ({
  type:"UI_SET_SHIP_DETAILS_EDITING",
  value
})

export * from './map'
export * from './ships'
export * from './waypoints'
export * from './selection'
export * from './messages'
export * from './timeline'
