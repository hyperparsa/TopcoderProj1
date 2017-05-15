const tool = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_TOOL':
      if(state==action.tool)return ''
      return action.tool
    default:
      return state
  }
}

export default tool
