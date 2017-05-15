export const selectShip = (id) => {
  return (dispatch, getState) => {
        const state = getState()
        const currentTool = state.tool
        dispatch({type: 'SELECT_SHIP',shipId:id})
        if(currentTool=='addWaypoint' )dispatch(selectTool(null))
    }
}
