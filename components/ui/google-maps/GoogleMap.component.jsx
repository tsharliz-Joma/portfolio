import React, { memo } from "react";
import { cn } from "@/lib/utils";
import Box from "@mui/material/Box";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
};

const center = {
  lat: -37.8136, // Latitude for Melbourne, Victoria
  lng: 144.9631, // Longitude for Melbourne, Victoria
};

const GoogleMapComponent = ({ className, ...props }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  return isLoaded ? (
    <Box className={cn(className)}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </Box>
  ) : (
    <div>Loading...</div>
  );
};

export default memo(GoogleMapComponent);
