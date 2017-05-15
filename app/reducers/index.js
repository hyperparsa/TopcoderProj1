import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import tool from './tool'
import selection from './selection'
import ships from './ships'
import waypoints from './waypoints'
import messages from './messages'
import timeline from './timeline'

import ui from './ui'

// const topReducer = combineReducers({
//   todos,
//   visibilityFilter
// })

const topReducer = combineReducers({
  tool,
  selectedShip:selection,
  ships,
  waypoints,
  messages,
  timeline,
  ui,
  form:formReducer
})

export default topReducer
