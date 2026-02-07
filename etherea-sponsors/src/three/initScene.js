import * as THREE from "three";
import { createStars } from "./stars";
import { createNebula } from "./nebula";
import { createOrbits } from "./orbits";
import { createLogo } from "./logo"; 
import { createSponsorToken } from "./sponsors";
import { createHeading } from "./heading"; // <--- 1. IMPORT THIS

// Placeholder Images
import LogoWhiteUrl from "../assets/logo-white.png";
import LogoColorUrl from "../assets/logo.png";

export function initScene(container) {
  // 1. Scene Setup
  const scene = new THREE.Scene();

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

  function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
  window.addEventListener( 'mousemove', onPointerMove );

  // 3. Environment
  const galaxyGroup = new THREE.Group();
  const nebula = createNebula();
  galaxyGroup.add(nebula);
  const stars = createStars({ count: 8000, spread: 4500, size: 5.0 });
  galaxyGroup.add(stars);
  galaxyGroup.position.z = -400; 
  scene.add(galaxyGroup);

  // 4. Orbits
  const orbits = createOrbits();
  scene.add(orbits);

  // 5. Center Logo
  const logo = createLogo(); 
  scene.add(logo.group);

  // 6. Heading (Partners in Creation)
  const heading = createHeading(); // <--- 2. CREATE HEADING
  scene.add(heading.group);        // <--- 3. ADD TO SCENE

  // 7. Sponsors
  const sponsorManagers = []; 

  function addSponsor(config) {
    const { group, update } = createSponsorToken({ ...config, camera });
    scene.add(group);
    sponsorManagers.push({ group, update });
  }

  // --- Add Sponsors ---
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

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    // Environment Rotation
    galaxyGroup.rotation.z += 0.00080;

    nebula.children.forEach((sprite, i) => {
      sprite.rotation.x += 0.05 * (i % 2 === 0 ? 1 : -1);
    });

    // Interaction Logic
    raycaster.setFromCamera( pointer, camera );

    // Updates
    const logoIntersects = raycaster.intersectObjects( logo.group.children );
    logo.update(logoIntersects.length > 0);
    
    // Update Heading (Float + Billboarding)
    heading.update(camera); // <--- 4. UPDATE HEADING

    sponsorManagers.forEach((sponsor) => {
       const hits = raycaster.intersectObjects(sponsor.group.children);
       sponsor.update(hits.length > 0);
    });
    
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