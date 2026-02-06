import * as THREE from "three";
import { createStars } from "./stars";
import { createNebula } from "./nebula";
import { createOrbits } from "./orbits";
import { createLogo } from "./logo"; // Import the new module

export function initScene(container) {
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

  // --- Interaction Setup (Raycaster) ---
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  // Move pointer off-screen initially so it doesn't trigger hover on load
  pointer.x = -1000; 
  pointer.y = -1000;

  function onPointerMove(event) {
    // Normalize mouse coordinates (-1 to +1)
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
  window.addEventListener( 'mousemove', onPointerMove );
  // -------------------------------------

  const galaxyGroup = new THREE.Group();
  const nebula = createNebula();
  galaxyGroup.add(nebula);

  const stars = createStars({ count: 25000, spread: 4000, size: 3.0 });
  galaxyGroup.add(stars);

  galaxyGroup.position.z = -400; 
  scene.add(galaxyGroup);

  const orbits = createOrbits();
  scene.add(orbits);

  // --- Add Logo ---
  const logo = createLogo();
  scene.add(logo.group);
  // ----------------

  let animationFrameId;

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    // Galaxy Rotation
    galaxyGroup.rotation.y += 0.00040;
    galaxyGroup.rotation.z += 0.00040;

    // Nebula Animation
    nebula.children.forEach((sprite, i) => {
      sprite.rotation.z += 0.0005 * (i % 2 === 0 ? 1 : -1);
    });

    // --- Logo Interaction Logic ---
    // update the picking ray with the camera and pointer position
    raycaster.setFromCamera( pointer, camera );

    // calculate objects intersecting the picking ray
    // We check intersections specifically with the logo group
    const intersects = raycaster.intersectObjects( logo.group.children );
    
    // Pass true if we hit something in the logo group, false otherwise
    const isHovered = intersects.length > 0;
    logo.update(isHovered);
    // ------------------------------

    renderer.render(scene, camera);
  }

  animate();

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("resize", onResize);

  return () => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("mousemove", onPointerMove); // Cleanup event
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