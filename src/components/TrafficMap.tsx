import React, { useCallback } from "react";
import { GoogleMap, useJsApiLoader, TrafficLayer } from "@react-google-maps/api";
import { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } from "./apikey";
// Define the style for the map container
const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '500px',
};

// Define the center of the map
const center = {
  lat: 30.733350, // Example latitude
  lng: 76.779040, // Example longitude
};

// Define options for the map (e.g., custom styles)
const options: google.maps.MapOptions = {
  styles: [], // Add custom map styles if desired
};
// console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
// Define the TrafficMap component
const TrafficMap: React.FC = () => {
  // Load the Google Maps JavaScript API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Use your API key here
    libraries: ['places'], // Include libraries if needed
  });

  // Callback function for when the map is loaded
  const onLoad = useCallback((map: google.maps.Map) => {
    // Customize the map here if needed
  }, []);

  // Callback function for when the map is unmounted
  const onUnmount = useCallback((map: google.maps.Map) => {
    // Clean up when component unmounts
  }, []);

  // Show a loading message if the map is not yet loaded
  if (!isLoaded) return <div>Loading...</div>;

  // Render the Google Map component with the TrafficLayer
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
