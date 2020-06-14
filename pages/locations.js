import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: -37.813629,
  lng: 144.963058,
};

export default function Locations() {
  const [isMapLoaded, setisMapLoaded] = useState(false);

  const options = {
    zoomControlOptions: {
      center: {
        lat: -37.813629,
        lng: 144.963058,
      },
    },
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "<<your google map key>>", // ,
    // ...otherOptions
  });

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const mapOnLoadHandler = (m) => {
    console.log(`map loaded onLoad:  ${isMapLoaded}`);
    console.log(m);
    setisMapLoaded(true);
    setTimeout(null, 50000, null);
  };

  const centerChangedHandler = (position) => {
    console.log(`Center Changed : ${position}`);
    console.log("in center changed");
  };

  useEffect(() => {
    console.log(`map loaded useeffect:  ${isMapLoaded}`);
  }, [isMapLoaded]);

  const renderMap = () => {
    return (
      <div height="100vh">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={options.zoomControlOptions.center}
          onLoad={mapOnLoadHandler}
          zoom={9}
        >
          <Marker peosition={options.zoomControlOptions.center}></Marker>
        </GoogleMap>
      </div>
    );
  };
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? (
    <div>
      <h1>Loaded</h1> {renderMap()}
    </div>
  ) : (
    <h1>Waiting...</h1>
  );
}
