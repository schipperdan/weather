import React from 'react';
import GoogleMapReact from 'google-map-react';

export default (props) => {
      return (
         <GoogleMapReact
          center={{ lat: props.lat, lng: props.lon }}
          zoom={12}
        >
        </GoogleMapReact>
      );
  }