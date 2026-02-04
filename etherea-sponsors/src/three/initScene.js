import * as THREE from "three";
import { createStars } from "./stars";

export function initScene(container) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.z = 100;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    logarithmicDepthBuffer: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // --- CONTROL PANEL ---
  const stars = createStars({
    count: 6000,      // <--- DENSITY: Increase for more stars, decrease for fewer
    brightness: 0.9,   // <--- BRIGHTNESS: 0.1 (very dim) to 1.5 (neon bright)
    spread: 2500,     // <--- AREA: Larger spread makes density look lower
    size: 5.0,        // <--- STAR SIZE: Adjust based on how "blurry" you want them
  });

  scene.add(stars);

  let animationFrameId;
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    stars.rotation.y += 0.00004;
    stars.rotation.x += 0.00002;
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
    scene.remove(stars);
    stars.geometry.dispose();
    stars.material.map.dispose();
    stars.material.dispose();
    renderer.dispose();
    if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
  };
}