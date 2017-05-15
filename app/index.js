import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import { createStore , applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import topReducer from './reducers'

import './styles/main.styl'
import './styles/rc-slider.styl'
import './styles/collapsible.styl'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(topReducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>
,document.getElementById('app'));
