import { useEffect, useRef } from "react";
import { initScene } from "./three/initScene";

// App.jsx
export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = initScene(containerRef.current);
    return () => cleanup && cleanup();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%", // Changed from 100vw
        height: "100%", // Changed from 100vh
        position: "fixed", // Ensures it stays pinned
        top: 0,
        left: 0,
        overflow: "hidden",
        background: "black",
      }}
    />
  );
}