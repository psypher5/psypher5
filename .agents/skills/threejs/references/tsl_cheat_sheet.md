# TSL (Three.js Shading Language) & WebGPU Quick Reference

## Core Node Equivalents (GLSL -> TSL)

| GLSL Pattern | TSL Syntax | Description |
| :--- | :--- | :--- |
| `float x = 1.0;` | `const x = float(1.0);` | Constant float node |
| `vec2 v = vec2(0.0, 1.0);` | `const v = vec2(0.0, 1.0);` | 2D vector node |
| `vec3 color = vec3(1.0);` | `const c = vec3(1.0);` or `color('#ffffff');` | 3D vector / color node |
| `uniform float uSpeed;` | `const uSpeed = uniform(1.5);` | Reactive uniform node |
| `uSpeed.value = 2.0;` | `uSpeed.value = 2.0;` | Update uniform value from JS |
| `vUv` | `uv()` | UV coordinate node |
| `position` | `positionLocal` or `positionWorld` | Mesh vertex position |
| `normal` | `normalLocal` or `normalWorld` | Surface normal vector |
| `time` | `timerLocal()` or `timerGlobal()` | Elapsed time node |
| `sin(x)` | `sin(x)` | Trigonometric sine |
| `cos(x)` | `cos(x)` | Trigonometric cosine |
| `mix(a, b, t)` | `mix(a, b, t)` | Linear interpolation |
| `clamp(x, min, max)` | `clamp(x, min, max)` | Clamping |
| `step(edge, x)` | `step(edge, x)` | Step function |
| `smoothstep(e0, e1, x)`| `smoothstep(e0, e1, x)` | Hermite interpolation |
| `texture2D(tex, uv)` | `texture(map, uv)` | Sample texture |
| `a * b` | `a.mul(b)` | Multiplication |
| `a + b` | `a.add(b)` | Addition |
| `a - b` | `a.sub(b)` | Subtraction |
| `a / b` | `a.div(b)` | Division |
| `dot(a, b)` | `dot(a, b)` | Dot product |
| `cross(a, b)` | `cross(a, b)` | Cross product |
| `length(v)` | `length(v)` | Vector length |
| `normalize(v)` | `normalize(v)` | Normalize vector |

---

## Defining Functions with `fn()`

```javascript
import { fn, float, vec3, sin } from 'three/tsl';

// Define a reusable TSL function
export const calculateRipple = fn(([worldPos, time, speed, intensity]) => {
  const dist = worldPos.xz.length();
  const wave = sin(dist.mul(10.0).sub(time.mul(speed))).mul(intensity);
  return worldPos.add(vec3(0.0, wave, 0.0));
});
```

---

## Common Material Node Slots

```javascript
import { MeshStandardNodeMaterial } from 'three/webgpu';

const mat = new MeshStandardNodeMaterial();

// Vertex stage
mat.positionNode = customPositionNode; // Modifies vertex position

// Fragment stage
mat.colorNode = customAlbedoColorNode;  // Replaces or modulates diffuse albedo
mat.roughnessNode = customRoughness;    // Float node [0..1]
mat.metalnessNode = customMetalness;    // Float node [0..1]
mat.emissiveNode = customEmissiveNode;  // Emissive color (can drive MRT bloom)
mat.normalNode = customNormalNode;      // Normal map or procedural normals
mat.opacityNode = customOpacity;        // Alpha / opacity node
```
