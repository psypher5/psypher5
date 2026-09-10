---
name: threejs
description: "Production guide and architectural toolkit for Three.js, WebGPU, TSL (Three.js Shading Language), asset pipelines (Blender, glTF, DRACO, KTX2), performance optimization, and modern web integration. Synthesized from 20 top video transcripts and r160-r174+ standards."
argument-hint: "[topic or subcommand: webgpu|tsl|assets|perf|bloom|setup|audit]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, Bash
model: sonnet
---

# Three.js Production Skill: WebGPU, TSL & Modern 3D Web Pipeline

This skill provides an end-to-end guide, architectural standards, and implementation blueprints for building high-performance 3D web applications using **Three.js**.

The guidance in this skill is weighted based on consensus analysis across 20 top video masterclasses (including Bruno Simon, Prismic, Andrew Woan, Wawa Sensei, Alvaro Dev Labs, and goodTSL) and official Three.js releases (r160–r174+).

---

## 1. Weighted Consensus Principles (Golden Rules)

Points repeated most frequently across industry masterclasses carry the highest weight:

| Weight | Consensus Principle | Description & Why It Matters |
| :---: | :--- | :--- |
| **10/10** | **WebGPU & TSL First** | Default to `WebGPURenderer` (from `three/webgpu`) and **TSL** (from `three/tsl`). TSL replaces brittle GLSL strings with type-safe, modular JS nodes that cross-compile cleanly to WGSL and GLSL (WebGL 2 fallback). |
| **9.5/10** | **Rigorous Asset Pipeline** | Never import uncompressed 3D assets. Use glTF/GLB with **Meshopt** or **DRACO** geometry compression and **KTX2/Basis Universal** GPU textures. Pre-bake static lighting/AO; never bake static shadows onto objects that will animate. |
| **9.0/10** | **Draw Call Discipline (`BatchedMesh` & `InstancedMesh`)** | Draw calls are the #1 web performance killer. Use `InstancedMesh` for identical meshes, and `BatchedMesh` (r160+) for diverse geometries sharing the same material. |
| **8.5/10** | **Strict Memory Disposal Lifecycle** | Browsers do not automatically garbage-collect GPU buffers. You must traverse and call `.dispose()` on geometries, materials, textures, and render targets upon component unmount or scene change. |
| **8.0/10** | **Clamp DPR & Scale by Delta** | Always cap device pixel ratio with `Math.min(window.devicePixelRatio, 2)`. Uncapped 3x+ retina rendering murders fill-rate. Always multiply movement/physics by `delta` time (`clock.getDelta()`). |
| **8.0/10** | **MRT-based Selective Bloom** | Eliminate dual-scene/layer hacks for bloom. In modern TSL/WebGPU, use **Multiple Render Targets (MRT)** in the primary scene pass to output emissive colors directly into the post-processing glow buffer. |
| **7.5/10** | **Box3 Auto-Framing** | Do not hardcode camera coordinates for loaded models. Compute `THREE.Box3().setFromObject(model)` to center the asset at the origin and calculate camera distance dynamically via the camera's FOV. |
| **7.0/10** | **Spatial Query Acceleration (`three-mesh-bvh`)** | Standard `Raycaster` against high-poly models freezes the main thread. Always accelerate raycasting and pointer interactions using BVH (Bounding Volume Hierarchy). |

---

## 2. Core Modern Scene Setup (WebGPURenderer + WebGL2 Fallback)

Modern Three.js standardizes on `WebGPURenderer`, which automatically provides a zero-config fallback to WebGL 2 if WebGPU is unsupported or unavailable on the client.

```javascript
import * as THREE from 'three';
import { WebGPURenderer } from 'three/webgpu';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

class Experience {
  constructor(canvas) {
    this.canvas = canvas;
    this.init();
  }

  async init() {
    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Dimensions & Camera
    this.sizes = {
      width: this.canvas.clientWidth || window.innerWidth,
      height: this.canvas.clientHeight || window.innerHeight
    };

    this.camera = new THREE.PerspectiveCamera(
      45,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.camera.position.set(0, 2, 5);
    this.scene.add(this.camera);

    // 3. Modern WebGPU Renderer with automatic WebGL2 fallback
    this.renderer = new WebGPURenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    // CRITICAL: Clamp pixel ratio to maximum of 2 to protect mobile/Retina fill-rate
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    await this.renderer.init();

    // 4. Controls
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    // 5. Clock & Listeners
    this.clock = new THREE.Clock();
    this.bindEvents();

    // 6. Start Loop
    this.tick();
  }

  bindEvents() {
    this.onResize = () => {
      this.sizes.width = this.canvas.clientWidth || window.innerWidth;
      this.sizes.height = this.canvas.clientHeight || window.innerHeight;
      this.camera.aspect = this.sizes.width / this.sizes.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.sizes.width, this.sizes.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    // Use ResizeObserver if attached to a responsive container
    if (this.canvas.parentElement) {
      this.resizeObserver = new ResizeObserver(this.onResize);
      this.resizeObserver.observe(this.canvas.parentElement);
    } else {
      window.addEventListener('resize', this.onResize);
    }
  }

  tick() {
    this.rafId = requestAnimationFrame(() => this.tick());
    const delta = this.clock.getDelta();

    this.controls.update();
    this.renderer.renderAsync(this.scene, this.camera);
  }

  destroy() {
    cancelAnimationFrame(this.rafId);
    if (this.resizeObserver) this.resizeObserver.disconnect();
    window.removeEventListener('resize', this.onResize);
    this.controls.dispose();
    
    // Call deep disposal
    disposeHierarchy(this.scene);
    this.renderer.dispose();
  }
}
```

---

## 3. TSL (Three.js Shading Language) Deep Dive

TSL replaces raw GLSL string shaders with node-based functional JavaScript/TypeScript syntax. It compiles to WGSL on WebGPU and GLSL on WebGL2 backends.

### A. Node Materials & Imports
Instead of `THREE.MeshStandardMaterial`, import node-aware equivalents from `three/webgpu` or `three/tsl`:
```javascript
import { MeshStandardNodeMaterial } from 'three/webgpu';
import { 
  color, 
  float, 
  vec2, 
  vec3, 
  vec4, 
  uniform, 
  texture, 
  uv, 
  positionWorld, 
  timerLocal, 
  sin, 
  mix, 
  fn 
} from 'three/tsl';
```

### B. Custom Procedural Shaders via TSL
Writing procedural effects in TSL avoids shader string concatenations, syntax bugs, and broken builds:

```javascript
// Define a reusable TSL function using fn()
const waveDisplacement = fn(([pos, time, speed, frequency, amplitude]) => {
  const wave = sin(pos.x.mul(frequency).add(time.mul(speed))).mul(amplitude);
  return pos.add(vec3(0.0, wave, 0.0));
});

// Create uniforms
const uSpeed = uniform(2.0);
const uFrequency = uniform(3.5);
const uAmplitude = uniform(0.15);
const uColorA = uniform(color('#1a2a6c'));
const uColorB = uniform(color('#fdbb2d'));

const material = new MeshStandardNodeMaterial();

// Vertex modification: displace along Y based on world coordinates & local time
material.positionNode = waveDisplacement(
  positionWorld,
  timerLocal(),
  uSpeed,
  uFrequency,
  uAmplitude
);

// Fragment color: interpolate colors based on normalized wave height
const waveHeight = material.positionNode.y.mul(2.0).add(0.5);
material.colorNode = mix(uColorA, uColorB, waveHeight);
material.roughnessNode = float(0.2);
material.metalnessNode = float(0.8);
```

### C. WebGPU Compute Shaders (Particles / GPU Physics)
WebGPU unlocks native compute shaders without texture ping-pong hacks:
```javascript
import { StorageBufferNode, computeShader, uniform, float, vec3, vec4 } from 'three/tsl';

const PARTICLE_COUNT = 65536; // 64k particles
const particleBuffer = new THREE.StorageInstancedBufferAttribute(PARTICLE_COUNT, 4);

// Storage buffer node
const positionStorage = new StorageBufferNode(particleBuffer, 'vec4', PARTICLE_COUNT);

// Compute shader kernel executed directly on the GPU
const computeUpdate = fn(() => {
  const index = computeShader.instanceIndex;
  const currentPos = positionStorage.element(index);
  
  // Update particle position (e.g. gravitational swirl)
  const newY = currentPos.y.sub(float(0.01));
  positionStorage.element(index).assign(vec4(currentPos.x, newY, currentPos.z, 1.0));
})().compute(PARTICLE_COUNT);

// In render loop:
renderer.computeAsync(computeUpdate);
```

---

## 4. Asset Pipeline & Blender-to-Three.js Workflow

Based on consensus across 3D web art tutorials:

### A. The 6-Step Blender Export Checklist
1. **Apply All Transforms**: In Blender, select all meshes and run `Ctrl + A` -> `All Transforms` (resets rotation/scale to `[1, 1, 1]`).
2. **Bake High Poly to Low Poly (AO & Global Illumination)**:
   - For static environment scenes (interiors, portfolios, isometric rooms), bake ambient occlusion and diffuse lighting into a lightmap.
   - **Crucial Rule**: **Never bake static contact shadows onto an object you intend to animate or move**, or it will leave an ugly static dark mark when transformed.
3. **Use 2 UV Channels when using Lightmaps**:
   - **UV0**: Albedo, normal, roughness, metalness tiling textures.
   - **UV1**: Lightmap / ambient occlusion unwrapped without overlaps.
4. **Channel Packing (ORM)**: Pack textures into single files to reduce HTTP requests:
   - **Red**: Ambient Occlusion
   - **Green**: Roughness
   - **Blue**: Metallic
5. **Clean Hierarchy**: Remove empty groups, unused cameras, extra lights, and orphaned materials.
6. **Export Format**: glTF 2.0 Binary (`.glb`) with `Include: Selected Objects`, `Apply Modifiers: Checked`.

### B. High-Performance glTF Loader Boilerplate
Equip `GLTFLoader` with DRACO and KTX2 to handle compressed models and GPU-native textures:

```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

export function createOptimizedGLTFLoader(renderer) {
  const gltfLoader = new GLTFLoader();

  // 1. DRACO geometry compression
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
  gltfLoader.setDRACOLoader(dracoLoader);

  // 2. Meshopt compression (lighter CPU decode than Draco for mobile)
  gltfLoader.setMeshoptDecoder(MeshoptDecoder);

  // 3. KTX2 Basis Universal texture compression (transcodes straight to GPU VRAM)
  const ktx2Loader = new KTX2Loader();
  ktx2Loader.setTranscoderPath('https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/libs/basis/');
  ktx2Loader.detectSupport(renderer);
  gltfLoader.setKTX2Loader(ktx2Loader);

  return gltfLoader;
}
```

### C. Box3 Auto-Fit & Framing Blueprint
Never guess model coordinates or hardcode camera distances:

```javascript
export function autoFitModelToCamera(model, camera, controls = null, fitOffset = 1.25) {
  const box = new THREE.Box3().setFromObject(model);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  // Re-center model at scene origin
  model.position.x += (model.position.x - center.x);
  model.position.y += (model.position.y - center.y);
  model.position.z += (model.position.z - center.z);

  // Calculate required camera distance
  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * fitOffset;

  camera.position.set(cameraZ * 0.6, cameraZ * 0.4, cameraZ);
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();

  if (controls) {
    controls.target.set(0, 0, 0);
    controls.maxDistance = cameraZ * 3;
    controls.update();
  }
}
```

---

## 5. Performance Optimization & Draw Call Discipline

### A. `BatchedMesh` (r160+) vs `InstancedMesh`
- **`InstancedMesh`**: Use when rendering hundreds or thousands of instances of the **exact same geometry** with the same material (e.g., grass blades, trees, bullets, debris).
- **`BatchedMesh`**: Use when rendering **different geometries** that share the **same material** in a **single draw call** (e.g., modular building kits, dungeon tiles, game props).

```javascript
// Creating a BatchedMesh for 50 distinct props sharing one PBR material:
const maxGeometryCount = 50;
const maxVertexCount = 100000;
const maxIndexCount = 150000;

const batchedMesh = new THREE.BatchedMesh(
  maxGeometryCount,
  maxVertexCount,
  maxIndexCount,
  sharedMaterial
);

// Add individual geometries to the batch
const propGeoId1 = batchedMesh.addGeometry(crateGeometry);
const propGeoId2 = batchedMesh.addGeometry(barrelGeometry);

// Create instances with individual transform matrices
const crateInstanceId = batchedMesh.addInstance(propGeoId1);
const barrelInstanceId = batchedMesh.addInstance(propGeoId2);

const matrix = new THREE.Matrix4();
matrix.setPosition(2, 0, -3);
batchedMesh.setMatrixAt(crateInstanceId, matrix);

scene.add(batchedMesh);
```

### B. Deep Memory Disposal Traversal Routine
To prevent WebGL/WebGPU context loss and browser tab crashes during single-page navigation:

```javascript
export function disposeHierarchy(rootObject) {
  if (!rootObject) return;

  rootObject.traverse((obj) => {
    // 1. Geometry
    if (obj.geometry) {
      obj.geometry.dispose();
    }

    // 2. Material(s) and associated textures
    if (obj.material) {
      const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of materials) {
        // Dispose all textures referenced by material uniforms/properties
        for (const key of Object.keys(mat)) {
          const value = mat[key];
          if (value && typeof value === 'object' && 'isTexture' in value) {
            value.dispose();
          }
        }
        mat.dispose();
      }
    }
  });

  // Clear scene children
  while (rootObject.children.length > 0) {
    const child = rootObject.children[0];
    rootObject.remove(child);
  }
}
```

---

## 6. Post-Processing: TSL Multiple Render Targets (MRT) Bloom

The #1 issue reported in modern Three.js tutorials is **Bloom bleeding onto non-emissive meshes**. In legacy Three.js, developers relied on dual-scene rendering or selective layers. In modern TSL/WebGPU, this is solved via **Multiple Render Targets (MRT)**:

```javascript
import { PostProcessing, pass, mrt, output, emissive } from 'three/webgpu';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';

export function setupMRTBloom(renderer, scene, camera) {
  const postProcessing = new PostProcessing(renderer);

  // 1. Scene pass with MRT: outputs regular color AND emissive target
  const scenePass = pass(scene, camera);
  scenePass.setMRT(
    mrt({
      output: output,
      emissive: emissive
    })
  );

  const colorTexture = scenePass.getTextureNode('output');
  const emissiveTexture = scenePass.getTextureNode('emissive');

  // 2. Run bloom ONLY on the extracted emissive channel
  const bloomPass = bloom(emissiveTexture, 1.2, 0.4, 0.85);

  // 3. Composite original scene color + isolated bloom
  postProcessing.outputNode = colorTexture.add(bloomPass);

  return postProcessing;
}
```

---

## 7. Interactive Web Integration & GSAP ScrollTrigger

For creative landing pages and portfolio sites:

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function setupScrollAnimation(camera, model) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5 // Smooth scrubbing lag
    }
  });

  // Camera choreography through page sections
  tl.to(camera.position, { x: 3, y: 1.5, z: 4, ease: 'power2.inOut' }, 0)
    .to(model.rotation, { y: Math.PI * 0.5, ease: 'none' }, 0)
    .to(camera.position, { x: -2, y: 3, z: 2, ease: 'power2.inOut' }, 1)
    .to(model.rotation, { y: Math.PI * 1.5, ease: 'none' }, 1);
}
```

---

## 8. Command Dispatch & Subcommands

When executing `/threejs <subcommand>`:

- `/threejs setup`: Scaffold a production-ready Vite + Three.js + WebGPU + TSL template project.
- `/threejs webgpu`: Provide WebGPURenderer initialization and WebGL2 fallback architecture.
- `/threejs tsl`: Author custom procedural shaders, node materials, or compute shader pipelines.
- `/threejs assets`: Generate an asset optimization audit or load pipeline (glTF, DRACO, KTX2, Box3 framing).
- `/threejs perf`: Analyze a Three.js scene for draw call bottlenecks, memory leaks, and missing disposal routines.
- `/threejs bloom`: Implement MRT-based selective bloom in TSL.
- `/threejs audit`: Inspect an existing Three.js codebase against the 8 Weighted Consensus Principles.
