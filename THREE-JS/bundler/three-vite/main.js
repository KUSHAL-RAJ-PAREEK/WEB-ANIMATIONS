import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as lil from 'lil-gui';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


let ambient = new THREE.AmbientLight(0xffffff,1);
scene.add(ambient);


let directional = new THREE.DirectionalLight(0xffffff,1);
directional.position.set(1,1,1);
scene.add(directional);


let point = new THREE.PointLight(0xffffff,1,10,2);
point.position.set(1,-2,1);
scene.add(point);


let loader = new THREE.TextureLoader();
let color = loader.load("./material/color.jpg");
let roughness = loader.load("./material/roughness.jpg");
let normal = loader.load("./material/normal.png")
let height = loader.load("./material/height.png")

const geometry = new THREE.BoxGeometry(3,1.8,2);

const material = new THREE.MeshStandardMaterial( { map: color,roughnessMap:roughness, normalMap:normal} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );




camera.position.z = 5;

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.antialias = true;



const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.enableZoom =  true


window.addEventListener('resize',()=>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
})


function animate() {
  window.requestAnimationFrame(animate);
  renderer.render( scene, camera );
 
controls.update();
}

animate()

