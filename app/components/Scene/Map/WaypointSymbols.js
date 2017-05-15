import React, { PropTypes } from 'react'
import { Marker } from "react-google-maps";

const WaypointSymbols = ({waypoints}) => {
  if(waypoints.length==0)return null;
  return (
    <div>
      {
        waypoints.map(waypoint=>{
          return <Marker
                  key={waypoint.id}
                  position={waypoint.position}
                  options={{
                    icon: {path:google.maps.SymbolPath.CIRCLE,scale: 0.5,fillColor:'#202123',fillOpacity:1,strokeColor: 'white',strokeWeight: 10}
                  }}/>
        })
      }
    </div>
  )
}

export default WaypointSymbols
