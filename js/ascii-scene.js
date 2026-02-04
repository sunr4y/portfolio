import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
export function createAsciiScene(container, asciiData, options = {}) {
  const emissiveIntensity = options.emissiveIntensity ?? 0.6;

  const scene = new THREE.Scene();
  scene.background = null;

  const aspect = container.clientWidth / container.clientHeight;
  const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 2000);
  const maxDim = Math.max(asciiData.dimensions.width, asciiData.dimensions.height);
  camera.position.set(0, 0, maxDim * 1.3);
  camera.lookAt(0, 0, 0);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.classList.add('scene-canvas');
  container.appendChild(renderer.domElement);

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;

  const meshGroup = new THREE.Group();
  scene.add(meshGroup);

  const textMeshes = [];
  const fontLoader = new FontLoader();
  fontLoader.load(
    'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_regular.typeface.json',
    function (font) {
      const charHeight = 1;
      const charAspect = 0.6;
      asciiData.groups.forEach(function (group) {
        group.instances.forEach(function (inst) {
          const textGeometry = new TextGeometry(group.char, {
            font: font,
            size: charHeight,
            height: 0.02,
            curveSegments: 2,
          });
          textGeometry.center();
          textGeometry.scale(charAspect, 1, 1);
          const material = new THREE.MeshStandardMaterial({
            color: inst.color || '#ffffff',
            emissive: inst.color || '#ffffff',
            emissiveIntensity: emissiveIntensity,
            toneMapped: false,
          });
          const mesh = new THREE.Mesh(textGeometry, material);
          mesh.position.set(inst.x, inst.y, inst.z * 10);
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
  const degToRad = Math.PI / 180;
  function onScroll() {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const scroll = window.scrollY / maxScroll;
    targetRotation = (scroll * 100 - 50) * degToRad;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
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
    currentRotation += (targetRotation - currentRotation) * 0.1;
    meshGroup.rotation.y = currentRotation;
    controls.update();
    renderer.render(scene, camera);
  }

  function dispose() {
    if (animationId) cancelAnimationFrame(animationId);
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

  return { scene, camera, renderer, animate, dispose };
}
