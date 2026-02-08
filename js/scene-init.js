import { createAsciiScene } from './ascii-scene.js';

const SCENE_FKAPI_ID = 'scene-fkapi';
const SCENE_FOOTYCOLLECT_ID = 'scene-footycollect';
const ROOT_MARGIN = '100px';
const THRESHOLD = 0.1;

function loadScene(containerId, dataModulePath, emissiveIntensity) {
  const el = document.getElementById(containerId);
  if (!el) return;
  import(dataModulePath).then(function (mod) {
    const data = mod.default;
    const instance = createAsciiScene(el, data, { emissiveIntensity });
    instance.animate();
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            instance.resume && instance.resume();
          } else {
            instance.pause && instance.pause();
          }
        });
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
    );
    observer.observe(el);
  }).catch(function (err) {
    console.warn(containerId + ' scene failed to load:', err);
  });
}

loadScene(SCENE_FKAPI_ID, './fkapi-data.js', 0.5);
loadScene(SCENE_FOOTYCOLLECT_ID, './footycollect-data.js', 2);
