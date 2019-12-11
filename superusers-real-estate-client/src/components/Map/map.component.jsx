import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 9.076479, lng: 7.398574 }} />
}


const WithWrapper = (withScriptjs(withGoogleMap)(Map))

class WrappedMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <WithWrapper
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1EQbT6to6kJrno6AIXyFdPZyFL_Tkoc&callback=initMap`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />} />

  }
}

export default WrappedMap
