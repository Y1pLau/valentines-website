import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './InteractiveMap.css'; // Custom styles
import L from 'leaflet';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome Free styles

// Custom Font Awesome Marker
const createFontAwesomeMarker = (iconClass) => {
  return L.divIcon({
    html: `<div style="color: #e63946; font-size: 24px; text-align: center;">
             <i class="${iconClass}"></i>
           </div>`,
    className: '', // Remove default Leaflet styles
    iconSize: [24, 24],
    iconAnchor: [12, 24], // Center icon
    popupAnchor: [0, -24],
  });
};

const locations = [
  {
    id: 1,
    name: 'Arashiyama',
    coords: [35.0095, 135.6706],
    description: 'A beautiful bamboo forest we visited together.',
    time: '2024-12-01 10:00 AM',
    image: 'Victoria1.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Lake Biwa',
    coords: [35.3331, 136.0565],
    description: 'The serene lake where we made heart gestures.',
    time: '2024-12-01 2:00 PM',
    image: 'https://via.placeholder.com/150/LakeBiwa.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Yasaka Shrine',
    coords: [35.0037, 135.7787],
    description: 'The shrine where we prayed for happiness.',
    time: '2024-12-01 4:00 PM',
    image: 'https://via.placeholder.com/150/YasakaShrine.jpg', // Replace with actual image URL
  },
];

// Component to Fly to Selected Location and Open Popup
const FlyToLocation = ({ activeLocation, markerRefs }) => {
  const map = useMap();

  useEffect(() => {
    if (activeLocation) {
      map.flyTo(activeLocation.coords, 14, { duration: 1.5 });

      // Open the popup of the active marker
      const markerRef = markerRefs[activeLocation.id];
      if (markerRef) {
        markerRef.openPopup();
      }
    }
  }, [activeLocation, map, markerRefs]);

  return null;
};

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  const markerRefs = useRef({}); // Store references to markers

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleToggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', position: 'relative' }}>
      {/* Sidebar */}
      {showSidebar && (
        <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
          <h3>Visited Locations</h3>
          <input
            type="text"
            placeholder="Search locations..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <ul>
            {filteredLocations.map((location) => (
              <li
                key={location.id}
                onClick={() => setActiveLocation(location)}
                className={activeLocation?.id === location.id ? 'active' : ''}
              >
                <b>{location.name}</b>
                <p>{location.time}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Map */}
      <div className="map-container">
        <MapContainer
          center={[35.0095, 135.6706]}
          zoom={10}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.coords}
              icon={createFontAwesomeMarker('fas fa-heart')} // Font Awesome Heart Icon
              ref={(ref) => {
                if (ref) markerRefs.current[location.id] = ref; // Store marker reference
              }}
              eventHandlers={{
                click: () => setActiveLocation(location),
              }}
            >
              <Popup>
                <b>{location.name}</b>
                <p>{location.description}</p>
                <p><i>{location.time}</i></p>
                <img
                  src={location.image}
                  alt={location.name}
                  style={{ width: '100%', borderRadius: '8px', marginTop: '8px' }}
                />
              </Popup>
            </Marker>
          ))}

          {/* Fly to Selected Location and Open Popup */}
          <FlyToLocation activeLocation={activeLocation} markerRefs={markerRefs.current} />
        </MapContainer>

        {/* Toggle Sidebar Button */}
        <button
          className="toggle-sidebar-button"
          onClick={handleToggleSidebar}
        >
          {showSidebar ? 'Hide Checklist' : 'Show Checklist'}
        </button>
      </div>
    </div>
  );
};

export default InteractiveMap;
