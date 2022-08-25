import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 38.244923,
      lng: -122.626991
    },
    zoom: 11
  };



  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '50vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_yhEXoK1E3XGOQ0q6qMJdpV-x4pqZka4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
      </GoogleMapReact>


      
    </div>
  );
}

export default SimpleMap

// watch this video, should have all the info about getting autocomplete and directions up and running 

// https://www.youtube.com/watch?v=iP3DnhCUIsE