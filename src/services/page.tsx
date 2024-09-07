// src/pages/api/maps.js
import { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } from "../components/apikey";
export default async function handler(req: any, res: any) {
    const { origins, destinations } = req.query;
    const apiKey = NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
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
  