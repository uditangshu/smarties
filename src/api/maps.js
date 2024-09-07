// src/pages/api/maps.js

export default async function handler(req, res) {
    const { origins, destinations } = req.query;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    try {
      const distanceMatrixResponse = await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${apiKey}`
      );
      const distanceMatrixData = await distanceMatrixResponse.json();
  
      const snapToRoadsResponse = await fetch(
        `https://roads.googleapis.com/v1/snapToRoads?path=${origins}|${destinations}&key=${apiKey}`
      );
      const snapToRoadsData = await snapToRoadsResponse.json();
  
      res.status(200).json({
        distanceMatrix: distanceMatrixData,
        snapToRoads: snapToRoadsData,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  