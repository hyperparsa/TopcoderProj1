import React, { PropTypes } from 'react'

import { GoogleMap, withGoogleMap,  Polyline } from "react-google-maps";
import mapStyle from "./mapStyle.json";
import Ship from './Ship'
import Path from './Path'
import MouseHelper from './MouseHelper'
import WaypointSymbols from './WaypointSymbols'




const Map = withGoogleMap(props => {
  const selectedShipWaypoints = (props.waypointsByShip[props.selectedShipId]||[])
  const selectedShip = props.ships[props.selectedShipId]
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      defaultOptions={{ styles: mapStyle,disableDefaultUI:true,scaleControl:true}}
      onClick={props.onMapClick}>
      {// Render ships
        props.shipIds.map((id)=>{
          const ship=props.ships[id]
          return (<Ship key={id} ship={ship} waypoints={(props.waypointsByShip[id]||[])} onShipSelect={()=>props.onShipSelect(id)} selected={props.selectedShipId==id}></Ship>)
        })
      }
      {// Render ship route between waypoints
        props.selectedShipId && <Path path={[selectedShip,...selectedShipWaypoints]}/>
      }
      {// Render circle for waypoints
        props.selectedShipId && <WaypointSymbols waypoints={selectedShipWaypoints}/>
      }

    </GoogleMap>)
})

const TopGoogleMap = (props) => (
  <div>
    <Map containerElement={
            <div data-tip data-for='MouseHelper' style={{ height: `100%` }} />
          }
          mapElement={
            <div id="map_canvas" style={{ height: `100%` }} />
          }
          center={{ lat: -34.397, lng: 150.644 }}
          {...props}/>
        <MouseHelper/>
  </div>

)

export default TopGoogleMap
