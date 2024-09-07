import Navbar from "./components/Navbar";
import Maps from "./components/Maps";
// import TrafficMap from "./components/TrafficMap.tsx";
import MapComponent from "./components/MapComponent.tsx"
function App() {
  return (
    <div>
      <Navbar />
      <Maps />
      <MapComponent/>
    </div>
  );
}

export default App;
