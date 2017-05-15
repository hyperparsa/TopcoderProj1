import React, { PropTypes } from 'react'
import { Polyline } from "react-google-maps";

var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          strokeWeight: 1,
          strokeColor: '#d92c34',
          scale: 2
        };

const Path = ({path}) => {
  return (
    <Polyline path={path.map(waypoint=>waypoint.position)}
              options={{geodesic:true,
                        strokeOpacity: 0,
                        icons: [{
                                  icon: lineSymbol,
                                  offset: '0',
                                  repeat: '20px'
                                }]}}
                                />
  )
}

export default Path
