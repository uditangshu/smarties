// src/components/MapComponent/index.jsx

import React, { useEffect, useState } from 'react';

const MapComponent = () => {
  const [distanceData, setDistanceData] = useState(null);
  const [roadsData, setRoadsData] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Use environment variable

  // Fetch data from custom API route
  const fetchData = async () => {
    try {
      const origins = '30.733350,76.779040'; // Example origin (New York City)
      const destinations = '30.665260,76.861680'; // Example destination (Los Angeles)

      const response = await fetch(`/api/maps?origins=${origins}&destinations=${destinations}`);
      const data = await response.json();

      setDistanceData(data.distanceMatrix);
      setRoadsData(data.snapToRoads);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Map Data</h1>
      <h2>Distance Matrix</h2>
      {distanceData ? (
        <pre>{JSON.stringify(distanceData, null, 2)}</pre>
      ) : (
        <p>Loading distance data...</p>
      )}

      <h2>Snap to Roads</h2>
      {roadsData ? (
        <pre>{JSON.stringify(roadsData, null, 2)}</pre>
      ) : (
        <p>Loading snap-to-roads data...</p>
      )}
    </div>
  );
};

export default MapComponent;
