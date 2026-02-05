import * as THREE from "three";
import { createStars } from "./stars";
import { createNebula } from "./nebula";

export function initScene(container) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 20000);
  camera.position.z = 100;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    logarithmicDepthBuffer: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const galaxyGroup = new THREE.Group();

  const nebula = createNebula();
  galaxyGroup.add(nebula);

  const stars = createStars({ count: 18000, spread: 5000, size: 3.8 });
  galaxyGroup.add(stars);

  // Recess the entire scene back for depth
  galaxyGroup.position.z = -800; 
  scene.add(galaxyGroup);

  let animationFrameId;
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    // --- INCREASED SPEED CONTROL ---
    galaxyGroup.rotation.y += 0.00015; 
    galaxyGroup.rotation.x += 0.00008;

    // --- NEBULA INTERNAL CHURN ---
    nebula.children.forEach((sprite, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      sprite.rotation.z += 0.0008 * direction;
    });
    
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
    cancelAnimationFrame(animationFrameId);
    
    // Deep memory cleanup
    scene.remove(galaxyGroup);
    nebula.children.forEach(s => {
      s.material.map.dispose();
      s.material.dispose();
    });
    stars.geometry.dispose();
    stars.material.map.dispose();
    stars.material.dispose();
    renderer.dispose();
    if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
  };
}