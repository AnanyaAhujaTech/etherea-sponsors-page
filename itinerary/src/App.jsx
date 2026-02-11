import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Navbar from "./components/Navbar/Navbar";
import CountdownClock from "./components/CountdownClock";
import EventTable from "./components/EventTable";
import SmaranPage from "./components/SmaranPage/SmaranPage";
import SponsorsPage from "./components/Sponsors/SponsorsPage"; 

// Only ONE initScene is needed now
import { initScene } from "./three/initScene";

export default function App() {
  const containerRef = useRef(null); 
  const introLayerRef = useRef(null); 

  // options: 'clock', 'table', 'smaran', 'sponsors'
  const [activeContent, setActiveContent] = useState("table"); 
  const viewState = useRef("clock"); 
  const isAnimating = useRef(false); 
  const autoScrollTimer = useRef(null); 
  const NAV_HEIGHT = "80px";

  // --- TRANSITION LOGIC ---

  const hideClockOverlay = (targetContent) => {
    if (viewState.current === targetContent || isAnimating.current) return;
    
    setActiveContent(targetContent);
    
    if (viewState.current === "clock") {
        isAnimating.current = true;
        if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);

        gsap.to(introLayerRef.current, {
            yPercent: -100, 
            duration: 1.5,
            ease: "power4.inOut",
            onComplete: () => {
                viewState.current = targetContent;
                isAnimating.current = false;
            },
        });
    } else {
        viewState.current = targetContent;
    }
  };

  const showClockOverlay = () => {
    if (viewState.current === "clock" || isAnimating.current) return;
    isAnimating.current = true;

    gsap.to(introLayerRef.current, {
      yPercent: 0, 
      duration: 1.5,
      ease: "power4.inOut",
      onComplete: () => {
        viewState.current = "clock";
        isAnimating.current = false;
      },
    });
  };

  const handleNavigation = (page) => {
      switch (page) {
          case "home": showClockOverlay(); break;
          case "itinerary": hideClockOverlay("table"); break;
          case "smaran": hideClockOverlay("smaran"); break;
          case "sponsors": hideClockOverlay("sponsors"); break;
          default: break;
      }
  };

  // --- INITIALIZATION ---

  useEffect(() => {
    let cleanupScene;
    if (containerRef.current) {
      // Initialize Home (Clock) Scene
      cleanupScene = initScene(containerRef.current, 'home');
    }

    autoScrollTimer.current = setTimeout(() => {
      hideClockOverlay("table");
    }, 5000);

    const handleClockScroll = (e) => {
      if (viewState.current === "clock" && e.deltaY > 0) {
        hideClockOverlay("table");
      }
    };

    window.addEventListener("wheel", handleClockScroll);

    return () => {
      if (cleanupScene) cleanupScene();
      if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
      window.removeEventListener("wheel", handleClockScroll);
    };
  }, []);

  return (
    <>
      <Navbar onNavigate={handleNavigation} />

      {/* BACKGROUND CONTENT LAYER */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#050505" }}>
        {activeContent === "table" && <EventTable onReturnToClock={showClockOverlay} navHeight={NAV_HEIGHT} />}
        {activeContent === "smaran" && <SmaranPage navHeight={NAV_HEIGHT} />}
        {activeContent === "sponsors" && <SponsorsPage navHeight={NAV_HEIGHT} />}
      </div>

      {/* CLOCK / HOME OVERLAY LAYER */}
      <div ref={introLayerRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 10, background: "black", overflow: "hidden" }}>
        
        {/* Three.js Background Canvas */}
        <div ref={containerRef} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 1 }} />
        
        {/* Clock Component Container */}
        {/* NOTE: We removed paddingTop here to let CountdownClock handle its own vertical positioning completely. */}
        <div style={{ position: "relative", zIndex: 2, height: "100%", width: "100%", boxSizing: "border-box" }}>
            <CountdownClock />
        </div>
      </div>
    </>
  );
}