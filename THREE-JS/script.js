let Scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight, .1,100);
camera.position.z = 5
Scene.add(camera);

let box = new THREE.BoxGeometry(1,1,1);

let material = new THREE.MeshBasicMaterial({color: "red"});
let mesh = new THREE.Mesh(box,material);
Scene.add(mesh);

 

const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({canvas:canvas,antialias : true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(Scene,camera);



let clock = new THREE.Clock();
function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(Scene,camera);
    mesh.rotation.y = clock.getElapsedTime();  
}

animate();

