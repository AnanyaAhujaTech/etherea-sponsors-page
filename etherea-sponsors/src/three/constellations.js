// constellations.js
import * as THREE from "three";

const CONFIG = {
  lineColor: 0xffeebb, // Slightly warm
  starColor: 0xffffff,
  passiveOpacity: 0.05,
  activeOpacity: 0.65,
  fadeSpeedIn: 0.1,    // Fast activation
  fadeSpeedOut: 0.015, // Slow fade out (approx 1.2s at 60fps)
  scale: 4.5,          // Global scale for constellations
};

// --- SHAPE DEFINITIONS (Relative Coordinates) ---
// Simple connect-the-dots arrays. 
const SHAPES = {
  mirror: [
    [0, 40, 0], [20, 20, 0], [0, 0, 0], [-20, 20, 0], [0, 40, 0], // Oval
    [0, 0, 0], [0, -40, 0] // Handle
  ],
  trident: [
    [0, -40, 0], [0, 40, 0], // Center shaft
    [-20, 20, 0], [-20, 0, 0], [0, -10, 0], [20, 0, 0], [20, 20, 0] // Fork
  ],
  lotus: [
    [0, -20, 0], [-15, 0, 0], [0, 20, 0], [15, 0, 0], [0, -20, 0], // Center petal
    [-15, 0, 0], [-30, 10, 0], [-10, -20, 0], // Left petal
    [15, 0, 0], [30, 10, 0], [10, -20, 0] // Right petal
  ],
  feather: [
    [0, -40, 0], [0, 40, 0], // Spine
    [0, 30, 0], [10, 35, 0], 
    [0, 20, 0], [15, 25, 0],
    [0, 10, 0], [12, 12, 0],
    [0, 0, 0], [10, 0, 0] // Quills
  ],
  sword: [
    [0, -40, 0], [0, 50, 0], // Blade
    [-15, -10, 0], [15, -10, 0] // Crossguard
  ],
  moon: [
    [0, 40, 0], [10, 20, 0], [10, -20, 0], [0, -40, 0], // Inner arc
    [-15, -30, 0], [-25, 0, 0], [-15, 30, 0], [0, 40, 0] // Outer arc
  ],
  teardrop: [
    [0, 40, 0], [15, -10, 0], [0, -30, 0], [-15, -10, 0], [0, 40, 0]
  ],
  eye: [
    [-40, 0, 0], [0, 20, 0], [40, 0, 0], [0, -20, 0], [-40, 0, 0], // Outline
    [0, 5, 0], [5, 0, 0], [0, -5, 0], [-5, 0, 0], [0, 5, 0] // Pupil
  ],
  dove: [
    [0, 0, 0], [-20, 10, 0], [-30, 30, 0], [-10, 20, 0], [0, 0, 0], // Wing
    [0, 0, 0], [20, -10, 0], [10, 10, 0], [0, 0, 0] // Body/Head
  ]
};

// Positions in the sky (X, Y, Z)
const POSITIONS = [
  { name: "mirror",  x: -600, y: 300, z: -500 },
  { name: "trident", x: 600,  y: 350, z: -550 },
  { name: "lotus",   x: -700, y: -200, z: -450 },
  { name: "feather", x: 700,  y: -250, z: -600 },
  { name: "sword",   x: 0,    y: 450, z: -700 }, // Top center
  { name: "moon",    x: -400, y: 0,   z: -800 },
  { name: "teardrop",x: 400,  y: 50,  z: -750 },
  { name: "eye",     x: -200, y: -350, z: -500 },
  { name: "dove",    x: 200,  y: -350, z: -500 }
];

export function createConstellationsManager() {
  const group = new THREE.Group();
  const hitTargets = []; // Array of invisible meshes to raycast against
  const instances = [];  // Array of logical objects to manage state

  const starTexture = createStarTexture();

  POSITIONS.forEach((pos) => {
    const shapeKey = pos.name;
    const pointsData = SHAPES[shapeKey];
    if (!pointsData) return;

    // 1. Create Container
    const constellation = new THREE.Group();
    constrainPosition(constellation, pos);
    
    // 2. Geometry Setup
    const points = pointsData.map(p => new THREE.Vector3(p[0], p[1], p[2]));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // 3. Lines
    const lineMat = new THREE.LineBasicMaterial({
      color: CONFIG.lineColor,
      transparent: true,
      opacity: CONFIG.passiveOpacity,
      linewidth: 1, // Note: WebGL linewidth is usually 1
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const lineMesh = new THREE.Line(geometry, lineMat);
    constellation.add(lineMesh);

    // 4. Stars (Vertices)
    const starGeo = new THREE.BufferGeometry().setFromPoints(points);
    const starMat = new THREE.PointsMaterial({
      color: CONFIG.starColor,
      map: starTexture,
      size: 15, // Relative size
      transparent: true,
      opacity: CONFIG.passiveOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    constellation.add(starPoints);

    // 5. Interaction Volume (Invisible Sphere)
    // Calculate bounding sphere radius based on points
    geometry.computeBoundingSphere();
    const radius = geometry.boundingSphere.radius + 15; // Add padding
    
    const hitGeo = new THREE.SphereGeometry(radius, 8, 8);
    const hitMat = new THREE.MeshBasicMaterial({ 
      visible: false, // Invisible but raycastable
      color: 0xff0000 
    });
    const hitMesh = new THREE.Mesh(hitGeo, hitMat);
    
    // Add to container but doesn't move relative to lines
    constellation.add(hitMesh);
    
    // Store for raycaster
    hitMesh.userData = { id: pos.name };
    hitTargets.push(hitMesh);

    group.add(constellation);

    // 6. Instance State Management
    instances.push({
      name: pos.name,
      lineMat,
      starMat,
      isHovered: false,
      currentOpacity: CONFIG.passiveOpacity
    });
  });

  // --- UPDATE LOOP ---
  function update(hoveredMesh) {
    let anyActive = false;

    instances.forEach(inst => {
      // Check if this instance corresponds to the hovered mesh
      const isTarget = hoveredMesh && hoveredMesh.userData.id === inst.name;
      
      // Target opacity
      const target = isTarget ? CONFIG.activeOpacity : CONFIG.passiveOpacity;
      
      // Lerp Opacity
      const speed = isTarget ? CONFIG.fadeSpeedIn : CONFIG.fadeSpeedOut;
      inst.currentOpacity += (target - inst.currentOpacity) * speed;

      // Apply
      inst.lineMat.opacity = inst.currentOpacity;
      inst.starMat.opacity = inst.currentOpacity;
      
      if (isTarget) anyActive = true;
    });

    return anyActive; // Tell main loop if we should emit stardust
  }

  return { group, hitTargets, update };
}

// Helper: Place and scale
function constrainPosition(obj, pos) {
  obj.position.set(pos.x, pos.y, pos.z);
  obj.scale.set(CONFIG.scale, CONFIG.scale, CONFIG.scale);
  // Random slight rotation for variety
  obj.rotation.z = (Math.random() - 0.5) * 0.5;
}

// Helper: Texture
function createStarTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 32; canvas.height = 32;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);
  return new THREE.CanvasTexture(canvas);
}