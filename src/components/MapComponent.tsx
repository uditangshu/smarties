
import  { useEffect, useState } from 'react';

const MapComponent = () => {
  const [distanceData, setDistanceData] = useState(null);
  const [roadsData, setRoadsData] = useState(null);

  // const getQueryParams = () => {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   return {
  //     origins: queryParams.get('origins') || '',
  //     destinations: queryParams.get('destinations') || '',
  //   };
  // };

  const fetchData = async () => {
    // const { origins, destinations } = getQueryParams();
    try {  
        const origins = '30.733350,76.779040';
      const destinations = '30.665260,76.861680';


      const response = await fetch(`http://localhost:8080/api/maps?origins=${origins}&destinations=${destinations}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

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
