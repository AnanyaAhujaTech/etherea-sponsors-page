import * as THREE from "three";
import { createStars } from "./stars";
import { createNebula } from "./nebula";
import { createOrbits } from "./orbits";
import { createLogo } from "./logo"; 
import { createSponsorToken } from "./sponsors";
import { createHeading } from "./heading";
import { createConstellationsManager } from "./constellations"; // <--- NEW IMPORT
import { createStardust } from "./stardust"; // <--- NEW IMPORT

// Placeholder Images
import LogoWhiteUrl from "../assets/logo-white.png";
import LogoColorUrl from "../assets/logo.png";

export function initScene(container) {
  // 1. Scene Setup
  const scene = new THREE.Scene();

  // Fog to blend distant objects
  scene.fog = new THREE.FogExp2(0x000000, 0.0006);

  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.z = 800; 

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    logarithmicDepthBuffer: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // 2. Interaction Setup
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(-1000, -1000);

  // Keep track of mouse position in 3D for stardust
  const mouseWorldPos = new THREE.Vector3(); 

  function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
  window.addEventListener( 'mousemove', onPointerMove );

  // 3. Environment
  const galaxyGroup = new THREE.Group();
  const nebula = createNebula();
  galaxyGroup.add(nebula);
  
  // Reduced spread slightly for density
  const stars = createStars({ count: 8000, spread: 4500, size: 5.0 });
  galaxyGroup.add(stars);
  
  galaxyGroup.position.z = -400; 
  scene.add(galaxyGroup);

  // --- CONSTELLATIONS (New Layer) ---
  const constellations = createConstellationsManager();
  scene.add(constellations.group);

  // --- STARDUST (New Layer) ---
  const stardust = createStardust();
  scene.add(stardust.mesh);

  // 4. Orbits
  const orbits = createOrbits();
  scene.add(orbits);

  // 5. Center Logo
  const logo = createLogo(); 
  scene.add(logo.group);

  // 6. Heading
  const heading = createHeading();
  scene.add(heading.group);

  // 7. Sponsors
  const sponsorManagers = []; 

  function addSponsor(config) {
    const { group, update } = createSponsorToken({ ...config, camera });
    scene.add(group);
    sponsorManagers.push({ group, update });
  }

  addSponsor({
    name: "Sponsor A",
    orbitIndex: 0,
    angleDegree: 245,
    imageWhitePath: LogoWhiteUrl,
    imageColorPath: LogoColorUrl,
    size: 100,
    lift: 0
  });

  addSponsor({
    name: "Sponsor B",
    orbitIndex: 1,
    angleDegree: 180,
    imageWhitePath: LogoWhiteUrl,
    imageColorPath: LogoColorUrl,
    size: 60,
    lift: 20
  });

  addSponsor({
    name: "Sponsor C",
    orbitIndex: 2,
    angleDegree: 300,
    imageWhitePath: LogoWhiteUrl,
    imageColorPath: LogoColorUrl,
    size: 80,
    lift: 25
  });

  // 8. Animation Loop
  let animationFrameId;
  const clock = new THREE.Clock();

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    const delta = clock.getDelta(); // Time management

    // Environment Rotation
    galaxyGroup.rotation.z += 0.00080;

    nebula.children.forEach((sprite, i) => {
      sprite.rotation.x += 0.05 * (i % 2 === 0 ? 1 : -1);
    });

    // --- INTERACTION LOGIC ---
    raycaster.setFromCamera( pointer, camera );
    
    // A. Unproject mouse for stardust positioning
    // We project mouse Z to roughly where constellations are (z = -500 to 0)
    // Using a simpler unproject at a fixed distance for the trail visual
    const vec = new THREE.Vector3(pointer.x, pointer.y, 0.5);
    vec.unproject(camera);
    const dir = vec.sub(camera.position).normalize();
    const distance = (0 - camera.position.z) / dir.z; // Project to Z=0 plane
    mouseWorldPos.copy(camera.position).add(dir.multiplyScalar(distance));


    // B. Raycast Groups
    // 1. Logo
    const logoIntersects = raycaster.intersectObjects( logo.group.children );
    logo.update(logoIntersects.length > 0);
    
    // 2. Heading
    heading.update(camera); 

    // 3. Sponsors
    sponsorManagers.forEach((sponsor) => {
       const hits = raycaster.intersectObjects(sponsor.group.children);
       sponsor.update(hits.length > 0);
    });

    // 4. Constellations (Hit Test against Invisible Spheres)
    const constellationHits = raycaster.intersectObjects(constellations.hitTargets);
    const hoveredConstellation = constellationHits.length > 0 ? constellationHits[0].object : null;
    
    // Update Constellations visual state & check if any are active
    const isConstellationActive = constellations.update(hoveredConstellation);

    // 5. Update Stardust
    // Only emit if a constellation is currently being hovered
    stardust.update(mouseWorldPos, isConstellationActive, delta);

    renderer.render(scene, camera);
  }

  animate();

  // 9. Resize Handler
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("resize", onResize);

  // 10. Cleanup
  return () => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("mousemove", onPointerMove);
    cancelAnimationFrame(animationFrameId);
    
    scene.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(mat => mat.dispose());
        } else {
          object.material.dispose();
        }
      }
    });

    renderer.dispose();
    if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
  };
}