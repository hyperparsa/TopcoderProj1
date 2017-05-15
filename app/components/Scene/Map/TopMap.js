import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import toJs from 'utils/toJs'

import {mapClick,selectShip} from 'actions/'
import {getShips,getWaypointsByShip,getShipIds,getSelectedShipId} from 'selectors/'

import TopGoogleMap from './TopGoogleMap'

const mapStateToProps = (state, ownProps) => {
  return {
    ships: state.ships,
    waypointsByShip: getWaypointsByShip(state),
    shipIds: getShipIds(state),
    selectedShipId: state.selectedShip,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMapClick: ({latLng}) => {
      dispatch(mapClick(latLng))
    },
    onShipSelect: (id) => {
      dispatch(selectShip(id))
    }
  }
}

const TopMap = connect(mapStateToProps,mapDispatchToProps)(toJs(TopGoogleMap))

export default TopMap
