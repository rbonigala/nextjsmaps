import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const center = {
  lat: -37.813629,
  lng: 144.963058,
};

const mapOnLoadHandler = (m) => {
  console.log("in map loader");
  console.log(m);
  setTimeout(null, 50000, null);
};

const centerChangedHandler = () => {
  console.log("in center changed");
};

export default function MyComponent() {
  const options = {
    zoomControlOptions: {
      center: {
        lat: -37.813629,
        lng: 144.963058,
      },
    },
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAEZ3QRAULYCdoF3C0gddKhaap7yZAv1Ms", // ,
    // ...otherOptions
  });

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    //const onLoad = React.useCallback(function onLoad(mapInstance) {
    // do something with map Instance
    //});
    return (
      <div height="100vh">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={options.zoomControlOptions.center}
          zoom={8}
        >
          {
            // ...Your map components
          }
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
