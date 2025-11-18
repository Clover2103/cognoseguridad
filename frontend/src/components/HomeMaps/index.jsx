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
    url: "https://www.google.com/maps/place/Academia+Cognoseguridad+Ltda./data=!4m2!3m1!1s0x0:0xb91454118c0ce402?sa=X&ved=1t:2428&ictx=111"
  },
  {
    name: "Cúcuta",
    coords: [-72.4987, 7.8939],
    url: "https://www.google.com/maps/place/Academia+Cognoseguridad+Ltda.+Agencia+C%C3%BAcuta/@7.8936464,-72.4987335,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6645737d2309c7:0x8adcf0120eec0965!8m2!3d7.8936464!4d-72.4987335!16s%2Fg%2F11c2k39gfn?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Villavicencio",
    coords: [-73.6228, 4.1350],
    url: "https://www.google.com/maps/place/Academia+Cognoseguridad+Ltda.+Agencia+Villavicencio/data=!4m2!3m1!1s0x0:0x7bca00f39807b209?sa=X&ved=1t:2428&ictx=111"
  },
  {
    name: "Bucaramanga",
    coords: [-73.1241, 7.1179],
    url: "https://www.google.com/maps/place/Academia+de+Vigilancia+Cognoseguridad+Bucaramanga/@7.117897,-73.124168,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6815d5bbfab617:0x13c36a19a3fc669d!8m2!3d7.117897!4d-73.124168!16s%2Fg%2F11fs331klx?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Santa Rosa de Cabal",
    coords: [-75.6228, 4.8745],
    url: "https://www.google.com/maps/search/?api=1&query=4.8745,-75.6228"
  },
  {
    name: "Tocancipa",
    coords: [-73.91522170428286, 4.964322262127691],
    url: "https://www.google.com/maps/place/4%C2%B057'51.6%22N+73%C2%B054'54.8%22W/@4.9643386,-73.9177971,17z/data=!3m1!4b1!4m4!3m3!8m2!3d4.9643333!4d-73.9152222?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  }
];

const HomeMaps = () => {
  const [hovered, setHovered] = useState(null); // Tooltip
  const [active, setActive] = useState(null); // Sede resaltada

  const handleMouseMove = (e) => {
    if (hovered) {
      setHovered((prev) => ({
        ...prev,
        x: e.clientX + 15,
        y: e.clientY + 15
      }));
    }
  };

  return (
    <div className="homeMapsBody" onMouseMove={handleMouseMove}>
      {/* Tooltip */}
      {hovered && (
        <div className="tooltip" style={{ top: hovered.y, left: hovered.x }}>
          {hovered.name}
        </div>
      )}

      <div className="homeMapsContainer">
        {/* Lista de sedes */}
        <div className="sedesList">
          <h3 className="sedesTitle">Nuestras Sedes</h3>
          <ul>
            {sedes.map((sede) => (
              <li
                key={sede.name}
                className={`sedeItem ${
                  active === sede.name ? "active" : ""
                }`}
                onMouseEnter={() => setActive(sede.name)}
                onMouseLeave={() => setActive(null)}
                onClick={() => window.open(sede.url, "_blank")}
              >
                {sede.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Mapa */}
        <div className="mapWrapper">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: window.innerWidth < 768 ? 1800 : 2000,
              center: [-74.3, 4.3]
            }}
            style={{ width: "100%", height: "auto" }}
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
                onMouseEnter={(e) => {
                  setHovered({ name, x: e.clientX + 15, y: e.clientY + 15 });
                  setActive(name);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setActive(null);
                }}
                onClick={() => window.open(url, "_blank")}
              >
                <circle
                  r={active === name ? 10 : 8}
                  fill="#efb325"
                  stroke="#fff"
                  strokeWidth={2}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.15s ease"
                  }}
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export { HomeMaps };
