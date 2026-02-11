import React, { useEffect, useRef } from "react";
import { initScene } from "../../three/initScene"; // Adjust path if needed

const SponsorsPage = ({ navHeight }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Pass 'sponsors' mode to load orbits, logos, etc.
    const cleanup = initScene(containerRef.current, 'sponsors');
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#000", paddingTop: navHeight, boxSizing: "border-box", overflow: "hidden" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default SponsorsPage;