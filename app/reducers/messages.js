import { OrderedMap,fromJS } from 'immutable';

const initialState = OrderedMap()

const newMessage = (shipId,position,info,id) => fromJS({position,info,shipId,id})

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.set(action.newMessageId,newMessage(action.shipId,action.position,action.info,action.newMessageId))
    case 'UPDATE_MESSAGE':
      return state.setIn([action.messageId,'info'],action.info)
    case 'DELETE_MESSAGE':
      return state.delete(action.messageId)
    default:
      return state
  }
}

export default messages
