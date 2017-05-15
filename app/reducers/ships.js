import { OrderedMap,fromJS } from 'immutable';

const initialState = OrderedMap()

const newShip = (info = {
  name:'default',
  course:45,
  speed:32
},position,id) => fromJS({info,position,id})

const ships = (state = initialState,action) => {
  switch (action.type) {
    case 'ADD_SHIP':
      return state.set(action.newShipId,newShip(action.name,action.position,action.newShipId))
    case 'UPDATE_SHIP':
      return state.setIn([action.shipId,'info'],action.info)
    default:
      return state
  }
}


export default ships
