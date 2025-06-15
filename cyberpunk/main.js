import "./style.css"
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { texture } from "three/tsl";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
  40, window.innerWidth/window.innerHeight, 0.1, 100
);
camera.position.z = 3.5;

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas"),
  antialias: true,
  alpha:true
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;


const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));


const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms['amount'].value = 0.0030;
composer.addPass(rgbShiftPass);


const peremGenrator = new THREE.PMREMGenerator(renderer);
peremGenrator.compileEquirectangularShader();

let model;

new RGBELoader().load(
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr',(texture)=>{
    const envMap = peremGenrator.fromEquirectangular(texture).texture;
    // scene.background = envMap;
    scene.environment = envMap;
    texture.dispose();
    peremGenrator.dispose();

    const loader = new GLTFLoader();
    loader.load("./DamagedHelmet.gltf",(gltf) =>{
      model = gltf.scene;
      scene.add(model);
    },undefined, (error) =>{
      console.log("An error occured while loading the GLRF model: ", error);
    })
  })


  window.addEventListener("mousemove",(e) =>{
if(model){
  const rotationX = (e.clientX / window.innerWidth - .5)*(Math.PI*.12);
    const rotationY = (e.clientY / window.innerHeight - .5)*(Math.PI*.12);
   
    gsap.to(model.rotation,{
      x:rotationY,
      y:rotationX,
      duration:0.9,
      ease:"power2.out"
    })

}
  })



// orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// // load GLTF model
// const loader = new GLTFLoader();
// loader.load(
//   './DamagedHelmet.gltf', // replace with the correct relative or absolute path
//   (gltf) => {
//     scene.add(gltf.scene);
//     gltf.scene.position.set(0, 0, 0);
//   },
//   undefined,
//   (error) => {
//     console.error('Error loading GLTF model:', error);
//   }
// );

window.addEventListener("resize",() =>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth,innerHeight);
})


// animation
function animate(){
  window.requestAnimationFrame(animate);
  // controls.update();
  renderer.render(scene, camera);
   composer.render(); 
}

animate();
