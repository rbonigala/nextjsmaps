import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function StationsMap() {
  const center = {
    lat: -37.813629,
    lng: 144.963058,
  };

  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAEZ3QRAULYCdoF3C0gddKhaap7yZAv1Ms">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: -37.813629,
          lng: 144.963058,
        }}
        zoom={10}
      >
        <></>
        {/* <Marker position={{ lat: -37.813629, lng: 144.963058 }}></Marker> */}
      </GoogleMap>
    </LoadScript>
  );
}
