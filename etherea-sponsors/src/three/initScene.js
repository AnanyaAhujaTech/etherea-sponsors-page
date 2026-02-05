import * as THREE from "three";
import { createStars } from "./stars";
import { createNebula } from "./nebula";
import { createOrbits } from "./orbits";

export function initScene(container) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.z = 800; // Pulled back slightly for better view of large orbits

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

  const stars = createStars({ count: 15000, spread: 4000, size: 3.0 });
  galaxyGroup.add(stars);

  galaxyGroup.position.z = -400; 
  scene.add(galaxyGroup);

  const orbits = createOrbits();
  scene.add(orbits);

  let animationFrameId;
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    galaxyGroup.rotation.y += 0.00040;
    galaxyGroup.rotation.x += 0.00040;

    nebula.children.forEach((sprite, i) => {
      sprite.rotation.z += 0.0005 * (i % 2 === 0 ? 1 : -1);
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
    
    // Updated recursive cleanup
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