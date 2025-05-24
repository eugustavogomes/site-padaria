// components/Map.jsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
 // No componente Map.jsx
const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
  border: '2px solid #D1A054', // Cor dourada do seu tema
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

  const center = {
    lat: -25.38874061051657,  // Substitua pelas coordenadas da sua padaria
    lng:  -49.23686780986604,
  };

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;