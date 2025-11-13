// HomeMaps.jsx
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import "./HomeMaps.css";

import colombiaTopo from "../../assets/co_2018_MGN_DPTO_POLITICO.geojson";

const sedes = [
  {
    name: "Bogotá D.C.",
    coords: [-74.0658, 4.6666],
    url: "https://www.google.com/maps/search/?api=1&query=4.6666,-74.0658"
  },
  {
    name: "Cúcuta",
    coords: [-72.4987, 7.8939],
    url: "https://www.google.com/maps/search/?api=1&query=7.8939,-72.4987"
  },
  {
    name: "Villavicencio",
    coords: [-73.6228, 4.1350],
    url: "https://www.google.com/maps/search/?api=1&query=4.1350,-73.6228"
  },
  {
    name: "Bucaramanga",
    coords: [-73.1241, 7.1179],
    url: "https://www.google.com/maps/search/?api=1&query=7.1179,-73.1241"
  },
  {
    name: "Santa Rosa de Cabal",
    coords: [-75.6228, 4.8745],
    url: "https://www.google.com/maps/search/?api=1&query=4.8745,-75.6228"
  }
];

const HomeMaps = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="homeMapsBody">

      {/* Tooltip */}
      {hovered && (
        <div className="tooltip" style={{ top: hovered.y, left: hovered.x }}>
          {hovered.name}
        </div>
      )}

      <div className="mapWrapper">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 2000, // 🔥 Aumenta zoom
            center: [-75, 4.3] // 🔥 Centra Colombia continental
          }}
        >
          <Geographies geography={colombiaTopo}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#4C5683",
                      stroke: "#C9C9C9",
                      strokeWidth: 0.6
                    },
                    hover: { fill: "#5D6799" }
                  }}
                />
              ))
            }
          </Geographies>

          {sedes.map(({ name, coords, url }) => (
            <Marker
              key={name}
              coordinates={coords}
              onMouseEnter={(e) =>
                setHovered({ name, x: e.clientX + 15, y: e.clientY + 15 })
              }
              onMouseLeave={() => setHovered(null)}
              onClick={() => window.open(url, "_blank")}
            >
              <circle r={7} fill="#efb325" stroke="#fff" strokeWidth={2} style={{ cursor: "pointer" }} />
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export { HomeMaps };
