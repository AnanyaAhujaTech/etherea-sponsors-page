import * as THREE from "three";

/**
 * Creates a high-quality circular glow texture.
 */
function createCircleTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const center = size / 2;

  const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);

  // GAUSSIAN FALLOFF: 
  // This creates a bright core that bleeds into a soft, blurred edge.
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");   // Solid white core
  gradient.addColorStop(0.1, "rgba(255, 255, 255, 0.9)"); // Slight spread
  gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.2)"); // Soft blur starts
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");   // Completely transparent

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  return texture;
}

/**
 * @param {number} count - DENSITY: How many stars in the scene.
 * @param {number} brightness - BRIGHTNESS: 0.0 to 1.0 (multiplier for star color).
 */
export function createStars({ count = 5000, spread = 2000, size = 4.0, brightness = 0.8 }) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const baseColor = new THREE.Color("#b0e5ff");
  const whiteColor = new THREE.Color("#ffffff");

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * spread;
    positions[i3 + 1] = (Math.random() - 0.5) * spread;
    positions[i3 + 2] = (Math.random() - 0.5) * spread;

    // --- TUNING BRIGHTNESS ---
    // This creates a mix of very bright "hero" stars and dim background stars.
    const individualVariation = Math.random() < 0.15 ? 1.0 : 0.4;
    const finalBrightness = individualVariation * brightness; 

    const mixedColor = baseColor.clone().lerp(whiteColor, Math.random() * 0.5);

    colors[i3] = mixedColor.r * finalBrightness;
    colors[i3 + 1] = mixedColor.g * finalBrightness;
    colors[i3 + 2] = mixedColor.b * finalBrightness;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size,
      map: createCircleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 1.0, // Control global brightness/transparency here
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
  );
}