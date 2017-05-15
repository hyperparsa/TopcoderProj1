import { OrderedMap,fromJS } from 'immutable';

const initialState = fromJS({duration:1440,time:0})

const timeline = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIME':
      return state.set('time',action.newTime)
    case 'CHANGE_DURATION':
      return state.set('duration',action.newDuration)
    default:
      return state
  }
}

export default timeline
