import * as THREE from "three";

/**
 * Creates a soft, gaseous sprite texture.
 */
function createPuffTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
  gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.05)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  return new THREE.CanvasTexture(canvas);
}

export function createNebula() {
  const group = new THREE.Group();
  const texture = createPuffTexture();
  
  const colors = [
    new THREE.Color("#1e4d8c"), // Deep Blue
    new THREE.Color("#430c5d"), // Purple
    new THREE.Color("#ff6b35"), // Orange
    new THREE.Color("#005b96"), // Cyan
  ];

  const puffCount = 300; 

  for (let i = 0; i < puffCount; i++) {
    const material = new THREE.SpriteMaterial({
      map: texture,
      color: colors[Math.floor(Math.random() * colors.length)],
      transparent: true,
      opacity: Math.random() * 0.4 + 0.1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const sprite = new THREE.Sprite(material);
    
    // Irregular distribution
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 600;
    sprite.position.set(
      Math.cos(angle) * radius + (Math.random() - 0.5) * 200,
      Math.sin(angle) * radius * 0.5 + (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 400
    );

    // Large scale for that "massive" feeling
    const scale = radius + 200;
    sprite.scale.set(scale, scale, 1);
    sprite.rotation.z = Math.random() * Math.PI;
    
    group.add(sprite);
  }

  return group;
}