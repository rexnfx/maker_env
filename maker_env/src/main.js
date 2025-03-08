import './style.css'
import * as THREE from 'three'

//options
const options = {
width: window.innerWidth,
height: window.innerWidth
}

//scene
const scene = new THREE.Scene();

//cam
const cam = new THREE.PerspectiveCamera(80, options.width/ options.height, 0.1, 1000.0);
cam.position.z = 10;

//objs
const cube = new THREE.BoxGeometry(2,2,2);
const mat = new THREE.MeshBasicMaterial({color: 'orange'});
const cube_obj = new THREE.Mesh(cube, mat);
scene.add(cube_obj);

//lights

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(options.width, options.height);
document.body.appendChild(renderer.domElement);
renderer.render(scene, cam);

//animation