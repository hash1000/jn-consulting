"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  latitude: number;
  longitude: number;
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapComponent: React.FC<MapProps> = ({ latitude, longitude }) => {
  const center = { lat: latitude, lng: longitude };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
