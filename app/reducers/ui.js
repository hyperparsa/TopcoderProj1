import { OrderedMap,fromJS } from 'immutable';

const initialState = OrderedMap({'shipDetailsEditing':false})


const ships = (state = initialState,action) => {
  switch (action.type) {
    case 'UI_SET_SHIP_DETAILS_EDITING':
      return state.set('shipDetailsEditing',action.value)
    default:
      return state
  }
}


export default ships
