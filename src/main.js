// 3 things needed to display anything with three.js: scene, camera and renderer
// So that we can render the scene with camera
import * as THREE from 'three';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// SCENE
const scene = new THREE.Scene();
// CAMERA
const camera = new THREE.PerspectiveCamera(
  75, // field of view (FOV - góc nhìn). The value is in degrees.
  windowWidth / windowHeight, // aspect ratio
  0.1, // near clipping plane: objects closer to the camera than `near` won't be rendered
  1000, // far clipping plane: objects further away from the camera than the value of `far` won't be rendered
);

// Create cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
});
// Objects created from geometry and material.
const cube = new THREE.Mesh(geometry, material);
// by default, objects will be added to the coordinates (0,0,0)
// cause both the camera and the objects to be inside each other
scene.add(cube);
// to avoid this, move the camera out a bit
camera.position.z = 5;

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(windowWidth, windowHeight);
function animate(time) {
  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;
  // Rendering the scene
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

// Add the renderer's DOM element - a canvas to the web page
document.body.appendChild(renderer.domElement);
