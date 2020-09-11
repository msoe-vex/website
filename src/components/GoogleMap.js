import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 43.048166, lng: -87.909275 }}
    defaultOptions={{mapTypeControl: false}}
  >
    <Marker position={{ lat: 43.048166, lng: -87.909275 }} />
  </GoogleMap>
))

export default MyMapComponent;