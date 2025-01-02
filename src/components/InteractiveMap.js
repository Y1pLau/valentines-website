import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './InteractiveMap.css'; // Custom styles

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const locations = [
  {
    id: 1,
    name: 'Arashiyama',
    coords: [35.0095, 135.6706],
    description: 'A beautiful bamboo forest we visited together.',
    time: '2024-12-01 10:00 AM',
  },
  {
    id: 2,
    name: 'Lake Biwa',
    coords: [35.3331, 136.0565],
    description: 'The serene lake where we made heart gestures.',
    time: '2024-12-01 2:00 PM',
  },
  {
    id: 3,
    name: 'Yasaka Shrine',
    coords: [35.0037, 135.7787],
    description: 'The shrine where we prayed for happiness.',
    time: '2024-12-01 4:00 PM',
  },
];

// Component to handle map centering
const FlyToLocation = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 13, { duration: 1.5 }); // Fly to the new location
  }
  return null;
};

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ display: 'flex'}}>
      {/* Sidebar */}
      {showSidebar && (
        <div className="sidebar">
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
      <div
        style={{
          flex: 1,
          position: 'relative',
          width: showSidebar ? 'calc(100% - 250px)' : '100%', // Adjust map width based on sidebar visibility
        }}
      >
        <MapContainer
          center={[35.0095, 135.6706]}
          zoom={10}
          style={{ height: '60vh', width: '100%' }} // Set map height to 60% of the viewport height
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.coords}
              icon={customIcon}
              eventHandlers={{
                click: () => setActiveLocation(location),
              }}
            >
              <Popup>
                <b>{location.name}</b>
                <p>{location.description}</p>
                <p><i>{location.time}</i></p>
              </Popup>
            </Marker>
          ))}

          {/* Fly to the selected location */}
          {activeLocation && <FlyToLocation coords={activeLocation.coords} />}
        </MapContainer>

        {/* Toggle Sidebar Button */}
        <button
          className="toggle-sidebar-button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? 'Hide Checklist' : 'Show Checklist'}
        </button>
      </div>
    </div>
  );
};

export default InteractiveMap;
