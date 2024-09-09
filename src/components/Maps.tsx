import { useState, useEffect } from "react";
import TrafficMap from "./TrafficMap";

const MIN_DELAY = 5000; // Minimum delay in milliseconds
const MAX_DELAY = 8000; // Maximum delay in milliseconds

export default function MyComponent() {
  // State variables for red light and green light timings
  const [redLightTime, setRedLightTime] = useState(0);
  const [greenLightTime, setGreenLightTime] = useState(0);
  const [trafficLightId, setTrafficLightId] = useState("");
  const [trafficLightId2, setTrafficLightId2] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading

  // Set random values for red and green lights between 10 and 50 when input changes
  useEffect(() => {
    if (trafficLightId) {
      setLoading(true); // Start loading

      const delay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
      
      const timer = setTimeout(() => {
        const randomRedTime = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
        const randomGreenTime = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

        setRedLightTime(randomRedTime);
        setGreenLightTime(randomGreenTime);
        setLoading(false); // End loading
      }, delay);


      return () => clearTimeout(timer);
    }
  }, [trafficLightId]); 

  return (
    <div className="flex justify-between w-full">
      
      <div>
      <div className="text-bold w-[500px] h-[400px] shadow-lg hover:shadow-xl p-5 rounded animate-first-slide">
        
        <div className="flex justify-center font-bold text-bold text-xl pt-4">
          Real Time Statistics
        </div>
        <div className="mt-4 p-5">
          <input
            type="text"
            value={trafficLightId}
            onChange={(e) => setTrafficLightId(e.target.value)}
            placeholder="Traffic light ID"
            className="border border-gray-400 p-2 rounded w-full"
          />
        </div>
        <div className="flex justify-center text-xl font-bold mb-5">
          Traffic light {trafficLightId}
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-center">
              <div className="bg-red-500 rounded-full w-5 h-5 mr-4"></div>
              <div className="text-lg">Red Light Timing: {redLightTime} s</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-green-500 rounded-full w-5 h-5 mr-4"></div>
              <div className="text-lg">Green Light Timing: {greenLightTime} s</div>
            </div>
          </div>
        )}
        </div>
        <div className="grid grid-cols-1 place-items-center shadow-md hover:shadow-lg h-[200px] mt-4">
          <div className="font-bold text-lg pt-5">
            Congestion Index: 0
          </div>
          <div className="font-bold text-lg pb-10">
          Average delay time reduction: 0%
          </div>
        </div>
        </div>

      {/* TrafficMap div */}
      <div className="text-bold w-[500px] p-8 shadow-lg hover:shadow-xl rounded animate-slide-in ">
        <TrafficMap />
      </div>

      {/* Manual Override div */}
      <div className="text-bold border w-[400px] shadow-lg hover:shadow-xl p-5 rounded animate-slide-inx">
        <div className="flex justify-center font-bold text-bold text-xl pt-4">
          Manual Override
        </div>
        <div className="mt-4 p-10">
          <input
            type="text"
            placeholder="Traffic light ID"
            onChange={(e) => setTrafficLightId2(e.target.value)}
            className="border border-gray-400 p-2 rounded w-full"
          />
        </div>
        <div className="flex justify-center text-xl font-bold mb-5">
          Traffic light {trafficLightId2}
        </div>
        <div className="flex justify-center">
          <button className="bg-red-400 text-bold p-4 shadow mb-3">
            Switch to Red
          </button>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-400 text-bold p-4 shadow mb-3 ">
            Switch Green
          </button>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-400 text-bold p-4 shadow mb-3">
            Switch to Off
          </button>
        </div>
      </div>
    </div>
  );
}
