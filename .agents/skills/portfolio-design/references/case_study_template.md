# High-Impact Developer & Designer Case Study Template (PSR Framework)

Use this markdown template when writing deep project case studies for your personal portfolio.

---

# [Project Title]: [One-Sentence Punchy Summary]

> [!NOTE]
> **Quick Metadata**:
> - **Role**: Lead Gameplay Programmer / Technical Artist
> - **Timeline**: 3 Months (Q1 2026)
> - **Tech Stack**: Unity 6, C#, HLSL, URP, Git LFS
> - **Live Demo**: [Play in Browser (WebGL) →](https://example.com/play)
> - **Source Code**: [GitHub Repository →](https://github.com/example/repo)

---

## 1. Overview & The Problem

State the background in 2–3 concise sentences. What made this project challenging?

> *Example Problem Statement:*
> In multiplayer VR titles, rendering dynamic volumetric fog with multiple dynamic flashlights crushes mobile GPU fill-rates, dropping framerates below the mandatory 72 FPS threshold on standalone headsets.

---

## 2. My Role & Core Ownership

Clearly separate what you built from third-party assets or team members:

- **Architected**: The decoupled event-driven inventory and stat system using ScriptableObject data containers.
- **Implemented**: Custom HLSL single-pass raymarching fog shader with temporal reprojection.
- **Optimized**: CPU draw calls via GPU instancing and custom LOD distance culling.

---

## 3. Technical Architecture & Key Trade-Offs

Hiring managers want to see your engineering judgment. Explain the "Why":

### Trade-Off: Approach A vs. Approach B
- **Approach A (Rejected)**: Standard post-processing full-screen pass. Rejected due to severe memory bandwidth saturation on mobile tiled GPUs.
- **Approach B (Selected)**: Half-resolution raymarching buffer with bilateral upsampling. Reduced fragment shader cost by 65% while maintaining crisp geometric silhouettes.

```csharp
// Key snippet showcasing senior engineering patterns:
public class VolumetricFogPass : ScriptableRenderPass
{
    private readonly Material _fogMaterial;
    private RenderTargetHandle _halfResTarget;

    public override void Execute(ScriptableRenderContext context, ref RenderingData renderingData)
    {
        var cmd = CommandBufferPool.Get("VolumetricFog");
        // Half-resolution downsample and raymarch execution
        cmd.Blit(BuiltinRenderTextureType.CameraTarget, _halfResTarget.Identifier(), _fogMaterial, 0);
        // Bilateral upscale composite
        cmd.Blit(_halfResTarget.Identifier(), BuiltinRenderTextureType.CameraTarget, _fogMaterial, 1);
        context.ExecuteCommandBuffer(cmd);
        CommandBufferPool.Release(cmd);
    }
}
```

---

## 4. Measurable Results & Impact

Always provide concrete metrics:

| Metric | Before Optimization | After Solution | Net Impact |
| :--- | :---: | :---: | :---: |
| **Framerate (Oculus Quest 2)** | 48 FPS (Stutter) | **72 FPS (Rock-solid)** | **+50% performance** |
| **GPU Frame Time** | 18.2 ms | **11.4 ms** | **-37% GPU latency** |
| **Draw Calls** | 185 | **32** | **-82% draw calls** |

---

## 5. What I Learned & Next Steps

Briefly reflect on technical challenges, lessons learned, or architectural improvements you would make in v2.0. This demonstrates intellectual humility and continuous growth.
