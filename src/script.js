import * as THREE from "three";
import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
const canvas = document.querySelector(".webgl");

const group = new THREE.Group();
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

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 15.69;
// camera.lookAt(group.position);
camera.position.x = 12.31;
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
let city = "";
gltfLoader.load("/models/winter/scene.gltf", (gltf) => {
  city = gltf.scene;
  city.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  group.add(city);
});

let ufo = "";

gltfLoader.load("/models/ufo-traffic/scene.gltf", (gltf) => {
  ufo = gltf.scene;
  ufo.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  ufo.scale.set(0.006, 0.006, 0.006);
  ufo.position.set(-17.6, 0, 0);
  group.add(ufo);
});

let truck = "";

gltfLoader.load("/models/truck-engine/scene.gltf", (gltf) => {
  truck = gltf.scene;
  truck.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  truck.scale.set(0.006, 0.006, 0.006);
  truck.position.set(1, 0.06, 6);
  truck.rotation.set(0, Math.PI, 0);

  group.add(truck);
});

let dHead = "";

gltfLoader.load("/models/diamondhead/dhead.glb", (glb) => {
  dHead = glb.scene;
  dHead.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  dHead.scale.set(0.25, 0.25, 0.25);
  dHead.position.set(-17, 0, -2);
  dHead.rotation.set(0, 0, 0);

  group.add(dHead);
});

let armadilo = "";

gltfLoader.load("/models/armodrillo/scene.gltf", (gltf) => {
  armadilo = gltf.scene;
  armadilo.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  armadilo.scale.set(1.5, 1.5, 1.5);
  armadilo.position.set(-4, 0, 5);
  armadilo.rotation.set(0, Math.PI, 0);

  group.add(armadilo);
});

let fourArms = "";

gltfLoader.load("/models/fourArms/scene.gltf", (gltf) => {
  fourArms = gltf.scene;
  fourArms.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  fourArms.scale.set(80, 80, 80);
  fourArms.position.set(-18, 0.3, 6);
  fourArms.rotation.set(0, Math.PI, 0);

  group.add(fourArms);
});

const clock = new THREE.Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();

scene.add(group);
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

// let truck = null;

// // Load the truck model
// gltfLoader.load("/models/truck-engine/scene.gltf", (gltf) => {
//   truck = gltf.scene;
//   truck.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });

//   truck.scale.set(0.006, 0.006, 0.006);
//   truck.position.set(0, 0.06, 0); // Initial position
//   truck.rotation.set(0, Math.PI, 0); // Face the correct direction

//   group.add(truck);

//   // Movement variables
//   const truckSpeed = 5; // Speed of movement
//   const turnSpeed = Math.PI / 2; // Speed of turning

//   // Camera offset from the truck (motorbike following behind)
//   const cameraOffset = new THREE.Vector3(0, 2, -8); // Adjust the distance

//   // Keyboard state
//   const keys = {
//     w: false,
//     a: false,
//     s: false,
//     d: false,
//   };

//   // Event listeners for keypress
//   window.addEventListener("keydown", (event) => {
//     keys[event.key.toLowerCase()] = true;
//   });

//   window.addEventListener("keyup", (event) => {
//     keys[event.key.toLowerCase()] = false;
//   });

//   // Animation loop
//   const animate = () => {
//     const deltaTime = clock.getDelta(); // Time since last frame

//     if (truck) {
//       // Handle movement based on X-axis (changed from Z-axis)
//       if (keys.w) {
//         truck.translateX(truckSpeed * deltaTime); // Move forward along X-axis
//       }
//       if (keys.s) {
//         truck.translateX(-truckSpeed * deltaTime); // Move backward along X-axis
//       }
//       if (keys.a) {
//         truck.rotation.y += turnSpeed * deltaTime; // Turn left (rotate around Y-axis)
//       }
//       if (keys.d) {
//         truck.rotation.y -= turnSpeed * deltaTime; // Turn right (rotate around Y-axis)
//       }

//       // Update camera position
//       const truckPosition = new THREE.Vector3();
//       truck.getWorldPosition(truckPosition); // Get truck position

//       const truckDirection = new THREE.Vector3();
//       truck.getWorldDirection(truckDirection); // Get truck direction

//       // Calculate new camera position
//       const cameraPosition = truckPosition
//         .clone()
//         .add(
//           truckDirection.clone().multiplyScalar(cameraOffset.z) // Offset behind the truck along Z-axis
//         )
//         .add(new THREE.Vector3(0, cameraOffset.y, 0)); // Offset above the truck

//       // Smoothly move the camera to the new position
//       camera.position.lerp(cameraPosition, 0.1); // Smooth transition

//       // Always look at the truck
//       camera.lookAt(truckPosition); // Keep camera focused on the truck
//     }

//     // Render the scene
//     controls.update();
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
//   };

//   animate();
// });
