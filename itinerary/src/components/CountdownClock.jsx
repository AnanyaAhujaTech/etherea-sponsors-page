import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  getClockRotation, 
  getCurrentSecond, 
  getInitialRotation,
  TICK_SETTINGS 
} from "../config/timeConfig";

// ==========================================
// 🎛️ CONTROL PANEL (TWEAK THESE VALUES)
// ==========================================

const CONFIG = {
  // 1. POSITIONING
  // Positive value moves the whole group (Title + Clock) DOWN. 
  // Negative moves it UP.
  VERTICAL_OFFSET: "20px", 

  // 2. HEADING SETTINGS (The "Navrasa in Motion" Image)
  HEADING: {
    PATH: "/assets/countdown.png",
    WIDTH: "clamp(250px, 40vmin, 600px)", // Responsive width
    MARGIN_BOTTOM: "60px", // Space between Text and Clock
    OPACITY: 0.9,
  },

  // 3. GLOW SETTINGS
  // A drop-shadow filter to create the copper glow effect.
  GLOW_FILTER: "drop-shadow(0px 0px 15px rgba(184, 115, 51, 0.7))",

  // 4. SIZING
  SIZES: {
    GLOBAL_SIZE: "clamp(300px, 70vmin, 650px)", 
    FRAME_SCALE: "114%",    
    RING_SCALE: "72%",      
    SEGMENT_SCALE: "65%",   
    MAIN_HAND_LENGTH: "16%", 
    MINUTE_HAND_LENGTH: "22%",
    GEAR_SIZE: "18%",
  }
};

// ==========================================

export default function CountdownClock() {
  const mainHandRef = useRef(null);
  const minuteHandRef = useRef(null);
  const gearRef = useRef(null);
  const segmentsRef = useRef(null);

  const START_MARKER = "Taking Shape";
  const END_MARKER = "The Moment You've Waited For...";

  const lastSecond = useRef(getCurrentSecond());
  const visualRotation = useRef(getInitialRotation());

  useEffect(() => {
    if (minuteHandRef.current) {
      gsap.set(minuteHandRef.current, { rotation: visualRotation.current });
    }

    const tick = () => {
      // 1. Main Hand
      const mainRotation = getClockRotation(START_MARKER, END_MARKER);
      if (mainHandRef.current) {
        gsap.set(mainHandRef.current, { rotation: mainRotation });
      }

      // 2. Minute Hand
      const currentSecond = getCurrentSecond();
      if (currentSecond !== lastSecond.current) {
        visualRotation.current += TICK_SETTINGS.DEGREES_PER_TICK;
        if (minuteHandRef.current) {
          gsap.to(minuteHandRef.current, {
            rotation: visualRotation.current,
            duration: TICK_SETTINGS.DURATION,    
            ease: `back.out(${TICK_SETTINGS.ELASTICITY})`,
            overwrite: true,
          });
        }
        lastSecond.current = currentSecond;
      }

      // 3. Continuous Rotation
      if (gearRef.current) gsap.set(gearRef.current, { rotation: "+=0.5" });
      if (segmentsRef.current) gsap.set(segmentsRef.current, { rotation: "-=0.05" }); 
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, []);

  return (
    <div style={styles.overlayContainer}>
      
      {/* This wrapper holds both the Title and the Clock.
        We apply the vertical offset here to move them together.
      */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          transform: `translateY(${CONFIG.VERTICAL_OFFSET})`
        }}
      >
        
        {/* --- HEADING IMAGE --- */}
        <img 
          src={CONFIG.HEADING.PATH} 
          alt="Navrasa In Motion"
          style={{
            width: CONFIG.HEADING.WIDTH,
            marginBottom: CONFIG.HEADING.MARGIN_BOTTOM,
            opacity: CONFIG.HEADING.OPACITY,
            objectFit: "contain",
            // Optional: Apply the copper glow to the text too? 
            // Remove the next line if you want the text plain white.
            filter: CONFIG.GLOW_FILTER 
          }}
        />

        {/* --- CLOCK COMPONENT --- */}
        <div 
          style={{ 
            ...styles.clockWrapper, 
            width: CONFIG.SIZES.GLOBAL_SIZE, 
            height: CONFIG.SIZES.GLOBAL_SIZE,
          }}
        >
          
          {/* Layer 1: Segments */}
          <div style={{ ...styles.layerContainer, zIndex: 1, width: CONFIG.SIZES.SEGMENT_SCALE, height: CONFIG.SIZES.SEGMENT_SCALE }}>
            <img ref={segmentsRef} src="/assets/clock_segments.png" alt="Segments" style={styles.imageFit} />
          </div>

          {/* Layer 2: Ring (With Copper Glow) */}
          <div style={{ ...styles.layerContainer, zIndex: 2, width: CONFIG.SIZES.RING_SCALE, height: CONFIG.SIZES.RING_SCALE }}>
            <img 
              src="/assets/clock_ring.png" 
              alt="Ring" 
              style={{ ...styles.imageFit, filter: CONFIG.GLOW_FILTER }} 
            />
          </div>

          {/* Layer 3: Frame (With Copper Glow) */}
          <div style={{ ...styles.layerContainer, zIndex: 3, width: CONFIG.SIZES.FRAME_SCALE, height: CONFIG.SIZES.FRAME_SCALE }}>
            <img 
              src="/assets/clock_frame.png" 
              alt="Frame" 
              style={{ ...styles.imageFit, filter: CONFIG.GLOW_FILTER }} 
            />
          </div>

          {/* Layer 4: Main Hand */}
          <div ref={mainHandRef} style={{ ...styles.handContainer, zIndex: 4 }}>
            <img 
              src="/assets/clock_hand.png" 
              alt="Main Hand" 
              style={{ ...styles.handImage, height: CONFIG.SIZES.MAIN_HAND_LENGTH }} 
            />
          </div>

          {/* Layer 5: Minute Hand */}
          <div ref={minuteHandRef} style={{ ...styles.handContainer, zIndex: 5 }}>
            <img 
              src="/assets/long_clock_hand.png" 
              alt="Minute Hand" 
              style={{ ...styles.minuteHandImage, height: CONFIG.SIZES.MINUTE_HAND_LENGTH }} 
            />
          </div>

          {/* Layer 6: Gears */}
          <div style={{ ...styles.centerPivot, zIndex: 6, width: CONFIG.SIZES.GEAR_SIZE, height: CONFIG.SIZES.GEAR_SIZE }}>
            <img ref={gearRef} src="/assets/clock_gears.png" alt="Gears" style={styles.imageFit} />
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    overflow: "visible", 
  },
  clockWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: "1 / 1", 
  },
  layerContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageFit: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },
  centerPivot: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  handContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    willChange: "transform",
  },
  handImage: {
    transformOrigin: "bottom center",
    transform: "translateY(-50%)", 
    width: "auto",
  },
  minuteHandImage: {
    opacity: 0.9,
    filter: "brightness(1.1)",
    transformOrigin: "bottom center",
    transform: "translateY(-50%)", 
    width: "auto",
  },
};