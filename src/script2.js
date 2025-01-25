import * as THREE from "three";
import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
const canvas = document.querySelector(".webgl");

const officeGroup = new THREE.Group();
const scene = new THREE.Scene();

const gui = new GUI({
  width: 300,
  closeFolders: true,
  title: "Tweaks",
});

gui.close();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const planeMaterial = new THREE.MeshStandardMaterial();
const planeGeo = new THREE.PlaneGeometry(50, 50);
const plane = new THREE.Mesh(planeGeo, planeMaterial);
plane.receiveShadow = true;
planeMaterial.side = THREE.DoubleSide;
planeMaterial.color = new THREE.Color("white");
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -2;
scene.add(plane);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 15.69;
// camera.lookAt(group.position);
// camera.position.x = 12.31;
camera.position.y = 7.41;
scene.add(camera);

const cameraControl = gui.addFolder("cameraControl");
cameraControl.add(camera.position, "x").step(0.01).max(22).min(-25).name("x");
cameraControl.add(camera.position, "y").step(0.01).max(22).min(-22).name("y");
cameraControl.add(camera.position, "z").step(0.01).max(22).min(-22).name("z");

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;

window.addEventListener("resize", () => {
  (sizes.width = window.innerWidth), (sizes.height = window.innerHeight);

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(sizes.width, sizes.height);
});

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(sizes.width, sizes.height);

const gltfLoader = new GLTFLoader();
let standingDesk = "";
gltfLoader.load("/models/office-pizza/Standing Desk.glb", (glb) => {
  standingDesk = glb.scene;
  standingDesk.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }

    standingDesk.scale.set(4, 4, 4);
    standingDesk.position.set(-18, -2, 0);
    standingDesk.rotation.set(0, -1.52, 0);

    // if (child.material) {
    //   child.material = new THREE.MeshStandardMaterial({
    //     color: "green", // Replace with your desired color
    //     roughness: 0.5, // Adjust material properties as needed
    //     metalness: 0.3,
    //   });
    // }
  });
  // const deskt = gui.addFolder("deskt");
  // deskt.add(standingDesk.rotation, "y").min(-8).max(20).name("y").step(0.01);
  // deskt.add(standingDesk.rotation, "x").min(-4).max(4).name("x").step(0.01);
  // deskt.add(standingDesk.rotation, "z").min(-4).max(4).name("z").step(0.01);

  // deskt.add(standingDesk.position, "x").min(-4).max(4).name("z").step(0.01);

  officeGroup.add(standingDesk);
});

let brownDesk = "";
gltfLoader.load("/models/office-pizza/Desk2.glb", (glb) => {
  brownDesk = glb.scene;
  brownDesk.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }

    brownDesk.scale.set(12, 12, 12);
    brownDesk.position.set(0, 0, 0);
    brownDesk.rotation.set(0, -1.52, 0);
  });
  // const brownDeskt = gui.addFolder("deskt");
  // brownDeskt.add(brownDesk.rotation, "y").min(-8).max(20).name("y").step(0.01);
  // brownDeskt.add(brownDesk.rotation, "x").min(-4).max(4).name("x").step(0.01);
  // brownDeskt.add(brownDesk.rotation, "z").min(-4).max(4).name("z").step(0.01);

  // brownDeskt.add(brownDesk.position, "x").min(-4).max(4).name("z").step(0.01);

  officeGroup.add(brownDesk);
});

const clock = new THREE.Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();

scene.add(officeGroup);
// group.position.x = -12;

const ambientLight = new THREE.AmbientLight("white", 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("white", 3);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.far = -10;
directionalLight.shadow.camera.near = 7;
directionalLight.shadow.camera.left = -12;
directionalLight.shadow.camera.right = 10;

scene.add(directionalLight);

const dlHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
scene.add(dlHelper);
dlHelper.visible = false;

const dlTweaks = gui.addFolder("dlTweaks");
dlTweaks
  .add(directionalLight.position, "x")
  .step(0.01)
  .max(20)
  .min(-20)
  .name("x");
dlTweaks
  .add(directionalLight.position, "y")
  .step(0.01)
  .max(20)
  .min(-20)
  .name("y");
dlTweaks
  .add(directionalLight.position, "z")
  .step(0.01)
  .max(20)
  .min(-20)
  .name("z");

const dlSH = new THREE.CameraHelper(directionalLight.shadow.camera);
scene.add(dlSH);
dlSH.visible = false;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // ghostFreak.position.set(Math.sin(elapsedTime), 2, 6);
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
