import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import toJs from 'utils/toJs'


import ShipDetails from './ShipDetails'
import AddMessageWindow from './AddMessageWindow'
import ShipEntries from './ShipEntries/'
import OpenSave from './OpenSave/'

const Windows = ({selectedShipId,selectedShip,selectedTool}) => {
  return (
    <div className="windows">
      {
        (selectedShipId
         && selectedTool!='addWaypoint'
         && selectedTool!='addMessage' )    && <ShipDetails shipId={selectedShipId} ship={selectedShip} initialValues={selectedShip.info}/>
      }
      {
        (selectedTool=='addMessage') && <AddMessageWindow selectedShipId={selectedShipId}
                                                          selectedShip={selectedShip}/>
      }
      <ShipEntries/>
      {
        (selectedTool=='openTool' || selectedTool=='saveTool') && <OpenSave/>
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedTool: state.tool,
    selectedShipId: state.selectedShip,
    selectedShip: state.selectedShip && state.ships.get(state.selectedShip)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(toJs(Windows))
