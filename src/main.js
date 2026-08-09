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

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(windowWidth, windowHeight);
// Rendering the scene
renderer.render(scene, camera);

// Add the renderer's DOM element - a canvas to the web page
document.body.appendChild(renderer.domElement);
