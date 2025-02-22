// import * as THREE from "three";
// import GUI from "lil-gui";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// const canvas = document.querySelector(".webgl");

// const group = new THREE.Group();
// const scene = new THREE.Scene();

// const gui = new GUI({
//   width: 300,
//   closeFolders: true,
//   title: "Tweaks",
// });

// gui.close();

// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 15.69;
// // camera.lookAt(group.position);
// camera.position.x = 12.31;
// camera.position.y = 7.41;
// scene.add(camera);

// const cameraControl = gui.addFolder("cameraControl");
// cameraControl.add(camera.position, "x").step(0.01).max(22).min(-25).name("x");
// cameraControl.add(camera.position, "y").step(0.01).max(22).min(-22).name("y");
// cameraControl.add(camera.position, "z").step(0.01).max(22).min(-22).name("z");

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.enablePan = false;

// window.addEventListener("resize", () => {
//   (sizes.width = window.innerWidth), (sizes.height = window.innerHeight);

//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//   renderer.setSize(sizes.width, sizes.height);
// });

// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// renderer.setSize(sizes.width, sizes.height);

// const gltfLoader = new GLTFLoader();
// let city = "";
// gltfLoader.load("/models/winter/scene.gltf", (gltf) => {
//   city = gltf.scene;
//   city.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });

//   group.add(city);
// });

// let ufo = "";

// gltfLoader.load("/models/ufo-traffic/scene.gltf", (gltf) => {
//   ufo = gltf.scene;
//   ufo.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });
//   ufo.scale.set(0.006, 0.006, 0.006);
//   ufo.position.set(-17.6, 0, 0);
//   group.add(ufo);
// });

// let truck = "";

// gltfLoader.load("/models/truck-engine/scene.gltf", (gltf) => {
//   truck = gltf.scene;
//   truck.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });
//   truck.scale.set(0.006, 0.006, 0.006);
//   truck.position.set(1, 0.06, 6);
//   truck.rotation.set(0, Math.PI, 0);

//   group.add(truck);
// });

// let dHead = "";

// gltfLoader.load("/models/diamondhead/dhead.glb", (glb) => {
//   dHead = glb.scene;
//   dHead.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });
//   dHead.scale.set(0.25, 0.25, 0.25);
//   dHead.position.set(-17, 0, -2);
//   dHead.rotation.set(0, 0, 0);

//   group.add(dHead);
// });

// let armadilo = "";

// gltfLoader.load("/models/armodrillo/scene.gltf", (gltf) => {
//   armadilo = gltf.scene;
//   armadilo.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });
//   armadilo.scale.set(1.5, 1.5, 1.5);
//   armadilo.position.set(-4, 0, 5);
//   armadilo.rotation.set(0, Math.PI, 0);

//   group.add(armadilo);
// });

// let fourArms = "";

// gltfLoader.load("/models/four-arms/scene.gltf", (gltf) => {
//   fourArms = gltf.scene;
//   fourArms.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });
//   fourArms.scale.set(80, 80, 80);
//   fourArms.position.set(-18, 0.3, 6);
//   fourArms.rotation.set(0, Math.PI, 0);

//   group.add(fourArms);
// });

// let cat = "";
// // let mixer = "";
// // let action1 = "";

// gltfLoader.load("/models/Cat.glb", (glb) => {
//   cat = glb.scene;
//   cat.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });
//   cat.scale.set(0.02, 0.02, 0.02);
//   cat.position.set(-3.7, 5.8, -1);
//   cat.rotation.set(0,0, 0);

//   // mixer = new THREE.AnimationMixer(astro);
//   // action1 = mixer.clipAction(glb.animations[2]);
//   // action1.play();

//   group.add(cat);
// });



// let bird = "";
// // let mixer = "";
// // let action1 = "";

// gltfLoader.load("/models/Sparrow.glb", (glb) => {
//   bird = glb.scene;
//   bird.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });
//   bird.scale.set(0.003, 0.003, 0.003);
//   bird.position.set(-1, 7.3, -2);
//   bird.rotation.set(0,5, 0);

//   // mixer = new THREE.AnimationMixer(astro);
//   // action1 = mixer.clipAction(glb.animations[2]);
//   // action1.play();

//   group.add(bird);
// });




// let alien = "";
// // let mixer = "";
// // let action1 = "";

// gltfLoader.load("/models/alien/Alien.glb", (glb) => {
//   alien = glb.scene;
//   alien.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });
//   alien.scale.set(0.2,0.2,0.2);
//   alien.position.set(-15, 1.4, -0.5);
//   alien.rotation.set(0,0, 0);

//   // mixer = new THREE.AnimationMixer(astro);
//   // action1 = mixer.clipAction(glb.animations[2]);
//   // action1.play();

//   group.add(alien);
// });

// const clock = new THREE.Clock();

// const animate = () => {
//   const elapsedTime = clock.getElapsedTime();

//   controls.update();
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(animate);
// };

// animate();

// scene.add(group);
// // group.position.x = -12;

// const ambientLight = new THREE.AmbientLight("white", 1.5);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight("white", 3);
// directionalLight.castShadow = true;
// directionalLight.shadow.mapSize.width = 1024;
// directionalLight.shadow.mapSize.height = 1024;
// directionalLight.shadow.camera.far = -10;
// directionalLight.shadow.camera.near = 7;
// directionalLight.shadow.camera.left = -12;
// directionalLight.shadow.camera.right = 10;

// scene.add(directionalLight);

// const dlHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
// scene.add(dlHelper);
// dlHelper.visible = false;

// const dlTweaks = gui.addFolder("dlTweaks");
// dlTweaks
//   .add(directionalLight.position, "x")
//   .step(0.01)
//   .max(20)
//   .min(-20)
//   .name("x");
// dlTweaks
//   .add(directionalLight.position, "y")
//   .step(0.01)
//   .max(20)
//   .min(-20)
//   .name("y");
// dlTweaks
//   .add(directionalLight.position, "z")
//   .step(0.01)
//   .max(20)
//   .min(-20)
//   .name("z");

// const dlSH = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(dlSH);
// dlSH.visible = false;

// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();

//   // ghostFreak.position.set(Math.sin(elapsedTime), 2, 6);
//   controls.update();
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// tick();

import * as THREE from "three";
import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const canvas = document.querySelector(".webgl");
const group = new THREE.Group();
const scene = new THREE.Scene();

const gui = new GUI({ width: 300, closeFolders: true, title: "Tweaks" });
gui.close();

const sizes = { width: window.innerWidth, height: window.innerHeight };

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(12.31, 7.41, 15.69);
scene.add(camera);

const cameraControl = gui.addFolder("cameraControl");
cameraControl.add(camera.position, "x").step(0.01).max(22).min(-25).name("x");
cameraControl.add(camera.position, "y").step(0.01).max(22).min(-22).name("y");
cameraControl.add(camera.position, "z").step(0.01).max(22).min(-22).name("z");

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(sizes.width, sizes.height);
});

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

const loadModel = (path, scale, position, rotation) => {
  gltfLoader.load(path, (gltf) => {
    const model = gltf.scene;
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    model.scale.set(...scale);
    model.position.set(...position);
    model.rotation.set(...rotation);
    group.add(model);
  });
};

loadModel("/models/winter/scene.gltf", [1, 1, 1], [0, 0, 0], [0, 0, 0]);
loadModel("/models/ufo-traffic/scene.gltf", [0.006, 0.006, 0.006], [-17.6, 0, 0], [0, 0, 0]);
loadModel("/models/truck-engine/scene.gltf", [0.006, 0.006, 0.006], [1, 0.06, 6], [0, Math.PI, 0]);
loadModel("/models/diamondhead/dhead.glb", [0.25, 0.25, 0.25], [-17, 0, -2], [0, 0, 0]);
loadModel("/models/armodrillo/scene.gltf", [1.5, 1.5, 1.5], [-4, 0, 5], [0, Math.PI, 0]);
loadModel("/models/four-arms/scene.gltf", [80, 80, 80], [-18, 0.3, 6], [0, Math.PI, 0]);
loadModel("/models/Cat.glb", [0.02, 0.02, 0.02], [-3.7, 5.8, -1], [0, 0, 0]);
loadModel("/models/Sparrow.glb", [0.003, 0.003, 0.003], [-1, 7.3, -2], [0, 5, 0]);
loadModel("/models/alien/Alien.glb", [0.2, 0.2, 0.2], [-15, 1.4, -0.5], [0, 0, 0]);

const clock = new THREE.Clock();
const animate = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();
scene.add(group);

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
dlTweaks.add(directionalLight.position, "x").step(0.01).max(20).min(-20).name("x");
dlTweaks.add(directionalLight.position, "y").step(0.01).max(20).min(-20).name("y");
dlTweaks.add(directionalLight.position, "z").step(0.01).max(20).min(-20).name("z");

const dlSH = new THREE.CameraHelper(directionalLight.shadow.camera);
scene.add(dlSH);
dlSH.visible = false;

const tick = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
