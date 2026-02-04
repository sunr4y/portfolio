import { createAsciiScene } from './ascii-scene.js';
import fkapiData from './fkapi-data.js';
import footycollectData from './footycollect-data.js';

const fkapiEl = document.getElementById('scene-fkapi');
const footycollectEl = document.getElementById('scene-footycollect');

try {
  if (fkapiEl) {
    const fk = createAsciiScene(fkapiEl, fkapiData, { emissiveIntensity: 0.5 });
    fk.animate();
  }
} catch (err) {
  console.warn('FKApi scene failed to init:', err);
}

try {
  if (footycollectEl) {
    const fc = createAsciiScene(footycollectEl, footycollectData, { emissiveIntensity: 2 });
    fc.animate();
  }
} catch (err) {
  console.warn('FootyCollect scene failed to init:', err);
}
