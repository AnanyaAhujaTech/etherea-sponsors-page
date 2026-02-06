import * as THREE from "three";

// IMPORT IMAGES directly so Vite bundles them
import festLogoWhiteUrl from "../assets/fest-logo-white.png";
import festLogoColorUrl from "../assets/fest-logo.png";

/**
 * CONFIGURATION
 * Tweak these values to adjust the visuals.
 */
const CONFIG = {
  width: 220,              
  height: 220,             
  tiltXDeg: 30,             
  hoverSpeed: 0.6,         
  hoverScaleGrowth: 1.0,   
  glowScale: 1.5,          
  glowOpacity: 0.25,       
  zPosition: 0.15,            
};

export function createLogo() {
  const group = new THREE.Group();
  const loader = new THREE.TextureLoader();

  // ---------------------------------------------------------
  // 1. Textures (Loaded from imports)
  // ---------------------------------------------------------
  const texWhite = loader.load(festLogoWhiteUrl);
  const texColor = loader.load(festLogoColorUrl);

  // Optimize textures for crisp edges
  [texWhite, texColor].forEach((t) => {
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.colorSpace = THREE.SRGBColorSpace; // Ensure colors look correct
  });

  // ---------------------------------------------------------
  // 2. Geometry
  // ---------------------------------------------------------
  const geometry = new THREE.PlaneGeometry(CONFIG.width, CONFIG.height);

  // ---------------------------------------------------------
  // 3. Materials
  // ---------------------------------------------------------
  
  // Base White Logo Material
  const matWhite = new THREE.MeshBasicMaterial({
    map: texWhite,
    transparent: true,
    opacity: 1, // Starts fully visible
    depthWrite: false,
    side: THREE.FrontSide,
  });

  // Colored Hover Logo Material
  const matColor = new THREE.MeshBasicMaterial({
    map: texColor,
    transparent: true,
    opacity: 0, // Starts invisible
    depthWrite: false,
    side: THREE.FrontSide,
  });

  // ---------------------------------------------------------
  // 4. Meshes
  // ---------------------------------------------------------
  
  // We create two identical meshes.
  // The Colored one sits *tiny* bit in front to prevent Z-fighting
  const meshWhite = new THREE.Mesh(geometry, matWhite);
  const meshColor = new THREE.Mesh(geometry, matColor);
  meshColor.position.z = 0.5; 

  group.add(meshWhite);
  group.add(meshColor);

  // ---------------------------------------------------------
  // 5. The Glow (Halo) - EXACTLY AS PROVIDED
  // ---------------------------------------------------------
  const glowTexture = createGlowTexture();
  const glowMaterial = new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0xffffff,
    transparent: true,
    opacity: CONFIG.glowOpacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  
  const glowSprite = new THREE.Sprite(glowMaterial);
  // Scale the glow relative to the logo size
  const scale = Math.max(CONFIG.width, CONFIG.height) * CONFIG.glowScale;
  glowSprite.scale.set(scale, scale, 1);
  // Push glow slightly behind
  glowSprite.position.z = -5;
  
  group.add(glowSprite);

  // ---------------------------------------------------------
  // 6. Positioning & Rotation
  // ---------------------------------------------------------
  group.position.set(0, 20, CONFIG.zPosition);
  group.rotation.x = THREE.MathUtils.degToRad(CONFIG.tiltXDeg);

  // ---------------------------------------------------------
  // 7. Update Logic (Animation)
  // ---------------------------------------------------------
  // Current mix state: 0 = White, 1 = Color
  let currentMix = 0;
  // Current scale state: Starts at 1
  let currentScale = 1; 

  /**
   * Updates the logo appearance based on hover state.
   * Call this every frame.
   * @param {boolean} isHovered 
   */
  function update(isHovered) {
    // 1. Opacity Transition
    const targetMix = isHovered ? 1 : 0;
    currentMix += (targetMix - currentMix) * CONFIG.hoverSpeed;

    meshWhite.material.opacity = 1 - currentMix;
    meshColor.material.opacity = currentMix;

    // 2. Scale Transition (ADDED)
    const targetScale = isHovered ? CONFIG.hoverScaleGrowth : 1;
    currentScale += (targetScale - currentScale) * CONFIG.hoverSpeed;
    
    // Apply scale to the whole group (logo + glow)
    group.scale.set(currentScale, currentScale, 1);
  }

  return { group, update };
}

/**
 * Helper to create a radial gradient texture for the glow
 */
function createGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128; 
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  
  // Radial Gradient: Center White -> Outer Transparent
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");   // Bright center
  gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.2)"); // Soft falloff
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");     // Transparent edge
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  
  return new THREE.CanvasTexture(canvas);
}