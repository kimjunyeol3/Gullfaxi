import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { OrbitControls } from 'OrbitControls';

const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(3, 1.5, 4);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const cubeLoader = new THREE.CubeTextureLoader();
const envMap = cubeLoader.load([
  'https://threejs.org/examples/textures/cube/Bridge2/posx.jpg',
  'https://threejs.org/examples/textures/cube/Bridge2/negx.jpg',
  'https://threejs.org/examples/textures/cube/Bridge2/posy.jpg',
  'https://threejs.org/examples/textures/cube/Bridge2/negy.jpg',
  'https://threejs.org/examples/textures/cube/Bridge2/posz.jpg',
  'https://threejs.org/examples/textures/cube/Bridge2/negz.jpg'
]);
scene.environment = envMap;
scene.background = new THREE.Color('white');

scene.add(new THREE.DirectionalLight(0xffffff, 1.5).position.set(5, 5, 5));
scene.add(new THREE.AmbientLight(0xffffff, 0.8));

const loader = new GLTFLoader();
loader.load('../img/model360view/scene.gltf', (gltf) => {
  const model = gltf.scene;
  model.scale.set(1.5, 1.5, 1.5);
  model.position.set(-2, 0, 0);
  scene.add(model);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});