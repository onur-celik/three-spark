import { GUI } from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './style.css';
import { SceneSetup } from './scenes/SceneSetup';
import { Lights } from './lights/Lights';
import { Cube } from './objects/Cube';
import { Plane } from './objects/Plane';

// Scene setup
const sceneSetup = new SceneSetup();
const scene = sceneSetup.scene;
const camera = sceneSetup.camera;
const renderer = sceneSetup.renderer;
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.autoRotate = true;

declare global {
  interface Window {
      threeSpark: {
        scene : THREE.Scene,
        camera: THREE.PerspectiveCamera,
        renderer : THREE.Renderer,
        controls :OrbitControls,  
      }
  }
}

window.threeSpark = {
  scene,
  camera,
  renderer,
  controls
}

// Cube
const cube = new Cube();
scene.add(cube.mesh);

// Plane
const plane = new Plane();
scene.add(plane.mesh);

// Lights
const lights = new Lights();
scene.add(lights.ambientLight);
scene.add(lights.directionalLight);

// GUI
const gui = new GUI();
const cubeFolder = gui.addFolder('Cube');
cubeFolder.add(cube.mesh.rotation, 'x', 0, Math.PI * 2);
cubeFolder.add(cube.mesh.rotation, 'y', 0, Math.PI * 2);
cubeFolder.add(cube.mesh.rotation, 'z', 0, Math.PI * 2);
cubeFolder.open();
console.log(123123)

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();