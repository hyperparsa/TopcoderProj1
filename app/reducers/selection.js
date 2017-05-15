const selection = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_SHIP':
      if(state==action.shipId)return null
      return action.shipId
    default:
      return state
  }
}

export default selection
