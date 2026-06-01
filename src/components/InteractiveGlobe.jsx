import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3-geo";
import { feature } from "topojson-client";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
  { name: "Canada", coordinates: [-106.3468, 56.1304] },
  { name: "Madagascar", coordinates: [46.8691, -18.7669] },
  { name: "Togo", coordinates: [1.1645, 6.1241] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Netherlands", coordinates: [5.2913, 52.1326] },
  { name: "DRC", coordinates: [23.6703, -4.0383] },
  { name: "Mexico", coordinates: [-102.5528, 23.6345] },
  { name: "Caribbean", coordinates: [-75.0000, 15.0000] },
  { name: "China", coordinates: [104.1954, 35.8617] },
  { name: "Peru", coordinates: [-75.0152, -9.1900] },
  { name: "Cameroon", coordinates: [12.3547, 7.3697] },
  { name: "Papua New Guinea", coordinates: [143.9555, -6.3150] }
];

const InteractiveGlobe = () => {
  const [rotation, setRotation] = useState([0, -20, 0]);
  const [geographies, setGeographies] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    fetch(geoUrl)
      .then(response => response.json())
      .then(data => {
        const countries = feature(data, data.objects.countries).features;
        setGeographies(countries);
      })
      .catch(err => console.error("Error loading map data:", err));
  }, []);

  const projection = d3.geoOrthographic()
    .scale(200)
    .translate([250, 250])
    .rotate(rotation);

  const path = d3.geoPath().projection(projection);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.x;
    const dy = e.clientY - lastPos.y;
    setRotation(prev => [prev[0] + dx * 0.3, prev[1] - dy * 0.3, 0]);
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, lastPos]);

  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      if (!isDragging) {
        setRotation(prev => [prev[0] + 0.15, prev[1], prev[2]]);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="globe-container" 
      style={{ 
        width: "100%", 
        maxWidth: "500px",
        height: "500px", 
        cursor: isDragging ? "grabbing" : "grab", 
        position: "relative", 
        userSelect: "none",
        background: "rgba(124, 255, 155, 0.02)",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onMouseDown={handleMouseDown}
    >

      <svg width="500" height="500" viewBox="0 0 500 500" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        {/* Sphere background */}
        <path d={path({ type: "Sphere" })} fill="rgba(124, 255, 155, 0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        
        {/* Graticule */}
        <path d={path(d3.geoGraticule10())} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        
        {/* Land/Countries */}
        <g>
          {geographies.map((geo, i) => (
            <path 
              key={`path-${i}`}
              d={path(geo)}
              fill="rgba(124, 255, 155, 0.15)"
              stroke="rgba(124, 255, 155, 0.3)"
              strokeWidth="0.5"
            />
          ))}
        </g>
        
        {/* Markers */}
        {locations.map(loc => {
          const projected = projection(loc.coordinates);
          if (!projected) return null;
          
          // Check if the point is on the visible side of the globe
          const geoRotation = projection.rotate();
          const center = [-geoRotation[0], -geoRotation[1]];
          const distance = d3.geoDistance(loc.coordinates, center);
          if (distance > Math.PI / 2) return null;

          return (
            <circle 
              key={`marker-${loc.name}`}
              cx={projected[0]} 
              cy={projected[1]} 
              r="5" 
              fill="var(--accent-cyan)" 
              stroke="#fff" 
              strokeWidth="1.5"
              style={{ filter: 'drop-shadow(0 0 5px var(--accent-cyan))' }}
            />
          );
        })}
      </svg>

    </div>
  );
};

export default InteractiveGlobe;
