import React, { useCallback } from "react";
import { GoogleMap, useJsApiLoader, TrafficLayer } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 30.733350, // Example latitude (New York City)
  lng: 76.779040, // Example longitude
};

const options = {
  styles: [], // Add custom map styles if desired
};

const TrafficMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Use your API key here
    libraries: ['places'], // Include libraries if needed
  });

  const onLoad = useCallback(function callback(map:any) {
    // You can customize the map here
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    // Clean up when component unmounts
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12} // Adjust zoom level
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      <TrafficLayer />
    </GoogleMap>
  );
};

export default TrafficMap;
