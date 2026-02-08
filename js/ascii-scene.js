import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const CAMERA_FOV = 50;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 2000;
const CAMERA_DISTANCE_FACTOR = 1.3;
const AMBIENT_LIGHT_INTENSITY = 0.3;
const PIXEL_RATIO_MAX = 2;
const TONE_MAPPING_EXPOSURE = 1.5;
const CHAR_HEIGHT = 1;
const CHAR_ASPECT = 0.6;
const TEXT_DEPTH = 0.02;
const CURVE_SEGMENTS = 2;
const Z_POSITION_SCALE = 10;
const ROTATION_LERP_FACTOR = 0.1;
const SCROLL_ROTATION_RANGE = 100;
const SCROLL_ROTATION_OFFSET = 50;
const DEG_TO_RAD = Math.PI / 180;
const CONTROLS_DAMPING_FACTOR = 0.05;
const FONT_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_regular.typeface.json';
const DEFAULT_COLOR = '#ffffff';

export function createAsciiScene(container, asciiData, options = {}) {
  const emissiveIntensity = options.emissiveIntensity ?? 0.6;

  const scene = new THREE.Scene();
  scene.background = null;

  const aspect = container.clientWidth / container.clientHeight;
  const camera = new THREE.PerspectiveCamera(CAMERA_FOV, aspect, CAMERA_NEAR, CAMERA_FAR);
  const maxDim = Math.max(asciiData.dimensions.width, asciiData.dimensions.height);
  camera.position.set(0, 0, maxDim * CAMERA_DISTANCE_FACTOR);
  camera.lookAt(0, 0, 0);

  const ambientLight = new THREE.AmbientLight(0xffffff, AMBIENT_LIGHT_INTENSITY);
  scene.add(ambientLight);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, PIXEL_RATIO_MAX));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.classList.add('scene-canvas');
  container.appendChild(renderer.domElement);

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = TONE_MAPPING_EXPOSURE;

  const meshGroup = new THREE.Group();
  scene.add(meshGroup);

  const textMeshes = [];
  const fontLoader = new FontLoader();
  fontLoader.load(
    FONT_URL,
    function (font) {
      asciiData.groups.forEach(function (group) {
        group.instances.forEach(function (inst) {
          const textGeometry = new TextGeometry(group.char, {
            font: font,
            size: CHAR_HEIGHT,
            height: TEXT_DEPTH,
            curveSegments: CURVE_SEGMENTS,
          });
          textGeometry.center();
          textGeometry.scale(CHAR_ASPECT, 1, 1);
          const material = new THREE.MeshStandardMaterial({
            color: inst.color || DEFAULT_COLOR,
            emissive: inst.color || DEFAULT_COLOR,
            emissiveIntensity: emissiveIntensity,
            toneMapped: false,
          });
          const mesh = new THREE.Mesh(textGeometry, material);
          mesh.position.set(inst.x, inst.y, inst.z * Z_POSITION_SCALE);
          meshGroup.add(mesh);
          textMeshes.push(mesh);
        });
      });
    },
    undefined,
    function () {
      console.warn('Ascii scene font failed to load');
    }
  );

  let targetRotation = 0;
  let currentRotation = 0;
  function onScroll() {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const scroll = window.scrollY / maxScroll;
    targetRotation = (scroll * SCROLL_ROTATION_RANGE - SCROLL_ROTATION_OFFSET) * DEG_TO_RAD;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = CONTROLS_DAMPING_FACTOR;
  controls.screenSpacePanning = true;

  function onWindowResize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w === 0 || h === 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onWindowResize);
  const ro = new ResizeObserver(function () {
    onWindowResize();
  });
  ro.observe(container);
  onWindowResize();

  let animationId = null;
  function animate() {
    animationId = requestAnimationFrame(animate);
    currentRotation += (targetRotation - currentRotation) * ROTATION_LERP_FACTOR;
    meshGroup.rotation.y = currentRotation;
    controls.update();
    renderer.render(scene, camera);
  }

  function pause() {
    if (animationId != null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  function resume() {
    if (animationId == null) {
      animate();
    }
  }

  function dispose() {
    pause();
    window.removeEventListener('resize', onWindowResize);
    window.removeEventListener('scroll', onScroll);
    ro.disconnect();
    textMeshes.forEach(function (mesh) {
      mesh.geometry.dispose();
      mesh.material.dispose();
      meshGroup.remove(mesh);
    });
    scene.remove(meshGroup);
    renderer.dispose();
    if (container.contains(renderer.domElement)) {
      renderer.domElement.remove();
    }
    controls.dispose();
  }

  return { scene, camera, renderer, animate, pause, resume, dispose };
}
