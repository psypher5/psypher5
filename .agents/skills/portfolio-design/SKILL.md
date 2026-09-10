---
name: portfolio-design
description: "Production guide and architectural toolkit for personal and portfolio website design. Synthesized from 20 top video masterclasses (DesignCourse, Flux Academy, Fireship, Kevin Powell, Jesse Showalter, Kobe Michael). Covers Bento grid layouts, Awwwards motion stacks (Lenis, GSAP, Three.js), PSR case studies, typography, and recruiter conversion."
argument-hint: "[subcommand or topic: bento|case-study|hero|motion|audit]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, Bash
model: sonnet
---

# Personal & Portfolio Web Site Design Skill: High-Converting Creative Architecture

This skill provides an end-to-end design guide, visual standards, and code blueprints for building world-class personal portfolios for game developers, creative engineers, and UI/UX technical artists.

The guidance in this skill is weighted based on consensus analysis across 20 top video masterclasses (including Gary Simon, Ran Segall, Fireship, Kevin Powell, Jesse Showalter, Punit Chawla, and Kobe Michael) and modern Awwwards/SOTD benchmarks.

---

## 1. Weighted Consensus Principles (Golden Rules)

Points repeated most frequently across industry masterclasses carry the highest weight:

| Weight | Consensus Principle | Description & Why It Matters |
| :---: | :--- | :--- |
| **10/10** | **Bento Grid Layout Architecture** | Standardize on modular Bento grids (2x2 hero, 2x1 wide cards, 1x1 widgets). Bento grids eliminate boring vertical lists, establish visual rhythm, and collapse naturally into responsive single-column layouts on mobile. |
| **9.5/10** | **Modern Stack & Zero-Bloat Engineering** | Use Next.js 15 (App Router) or Astro for static page generation. Keep informational sections as Server Components; restrict Client Components strictly to interactive widgets and canvases. Target sub-second FCP. |
| **9.0/10** | **The PSR Case Study Framework** | Never present a portfolio as an "archive of screenshots". Document 3–5 deep projects using **PSR**: **Problem** (business/game context) -> **Solution** (architecture & specific role) -> **Result** (quantified performance/conversion metric). |
| **9.0/10** | **The Awwwards Motion Stack (Lenis + GSAP)** | Smooth momentum scrolling using **Lenis** synchronized with **GSAP ScrollTrigger**. Always respect `(prefers-reduced-motion)` to ensure accessibility for users prone to vestibular motion sickness. |
| **8.5/10** | **The 3-Second Recruiter Rule** | Above the fold must answer 3 questions within 3 seconds: 1) Who you are, 2) Exactly what you build (e.g. *Gameplay Programmer & Technical Artist*), and 3) Immediate proof/CTA. Ban vague fluff like "Dreamer & Visionary". |
| **8.5/10** | **Dark Mode Luxury Aesthetic & Contrast** | Deep dark canvas (`#050505` to `#0a0a0a`), subtle borders (`1px solid rgba(255,255,255,0.08)`), SVG noise grain overlay (3-5% opacity), high-contrast accessible text (`#e0e0e0`, not eye-straining `#ffffff`), and a single vibrant accent color. |
| **8.0/10** | **Zero Disqualifying Red Flags** | Eliminate: dead demo links, generic to-do/tutorial clones, meaningless skill percentage bars (e.g., "CSS: 85%"), buried contact info, and missing GitHub READMEs. |
| **7.5/10** | **Interactive 3D Depth (Three.js)** | Add tasteful spatial depth without slowing down the site. Embed a lightweight, baked 3D interactive hero model that subtly tilts with cursor movement (`lerp`) and responds to scroll choreography. |

---

## 2. Above-the-Fold Architecture: The 3-Second Hero Formula

Recruiters and art directors spend 30 to 60 seconds on a portfolio. If your value proposition is buried, you get passed over.

### Hero Section Wireframe
```
+-------------------------------------------------------------------------+
| [Logo / Name]                     [Work] [About] [Writing] [Contact CTA] |
+-------------------------------------------------------------------------+
|                                                                         |
|  [Availability Badge]  ● Available for Contracts / Full-Time Q3 2026   |
|                                                                         |
|  Tom Vance                                                              |
|  Gameplay Engineer & Creative Developer                                 |
|                                                                         |
|  Specializing in real-time 3D mechanics, shader pipelines (URP/WebGPU),  |
|  and decoupled game architectures. Built systems powering 3 studio titles|
|                                                                         |
|  [ View Selected Work ↓ ]      [ Copy Email: tom@example.com 📋 ]       |
|                                                                         |
|  ------------------------- Marquee Ticker ---------------------------- |
|  Unity • C# • HLSL • Three.js • WebGPU • Blender • TypeScript • Godot   |
+-------------------------------------------------------------------------+
```

### High-Converting Hero Component (React / Tailwind)

```tsx
'use client';
import { useState } from 'react';

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = 'tom@example.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto pt-24 pb-12">
      {/* Availability Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 w-fit mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Available for Game & Creative Tech Projects
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
        Gameplay Engineer <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">
          & Technical Artist.
        </span>
      </h1>

      {/* Value Proposition */}
      <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
        Building high-performance 3D gameplay systems, custom shaders, and responsive web experiences. Focused on decoupled architecture and tactile game feel.
      </p>

      {/* Frictionless CTAs */}
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all"
        >
          View Selected Work ↓
        </a>
        <button
          onClick={copyEmail}
          className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium hover:bg-neutral-800 transition-all flex items-center gap-2"
        >
          {copied ? '✓ Email Copied!' : `📋 ${email}`}
        </button>
      </div>
    </section>
  );
}
```

---

## 3. Bento Grid Design System

The Bento Grid organizes disparate elements (hero project, skills, metrics, interactive toy) into a cohesive visual rhythm.

### The 5-Slot Production Grid Layout

```
+--------------------------------------+--------------------+
|                                      |  Slot 2 (Tech)     |
|                                      |  Core Stack &      |
|  Slot 1 (Hero Project)               |  Capabilities      |
|  Primary showcase game/app           +--------------------+
|  with looping video / interactive    |  Slot 3 (Profile)  |
|  demo. Spans 2 columns, 2 rows.      |  About / Philosophy|
|                                      |  Location & Timezone
+--------------------------------------+--------------------+
|  Slot 4 (Interactive Toy / 3D Canvas)|  Slot 5 (Metrics)  |
|  Playable mini-shader or audio toy   |  Client Outcomes   |
+--------------------------------------+--------------------+
```

### Tailwind Bento Grid Markup

```html
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
  <!-- Slot 1: Hero Project (2 cols x 2 rows) -->
  <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-neutral-900/60 border border-white/10 p-8 overflow-hidden relative group">
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
    <video 
      src="/videos/hero-project-reel.webm" 
      autoPlay loop muted playsInline 
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
    />
    <div className="relative z-20 mt-auto pt-48">
      <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Flagship Project</span>
      <h3 className="text-3xl font-bold text-white mt-1">Moments: Spatial Web Exploration</h3>
      <p className="text-neutral-300 text-sm mt-2 max-w-md">Real-time WebGPU experience with procedural hex terrain, dynamic lighting, and zero-latency physics.</p>
    </div>
  </div>

  <!-- Slot 2: Tech Capabilities (1 col x 1 row) -->
  <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6 flex flex-col justify-between">
    <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Engine & Systems</h4>
    <div className="flex flex-wrap gap-2 my-4">
      {['Unity URP', 'C# (.NET)', 'Three.js', 'TSL / HLSL', 'Blender', 'Godot 4'].map(tag => (
        <span key={tag} className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-neutral-200">
          {tag}
        </span>
      ))}
    </div>
    <span className="text-xs text-neutral-500">Decoupled, event-driven state machines</span>
  </div>

  <!-- Slot 3: About & Location (1 col x 1 row) -->
  <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6 flex flex-col justify-between">
    <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Background</h4>
    <p className="text-sm text-neutral-300 leading-relaxed my-2">
      Pairing technical game systems with aesthetic art direction. Based in the UK, collaborating globally across London and remote studios.
    </p>
    <div className="text-xs text-neutral-400 font-mono">UTC+1 • English (Native)</div>
  </div>

  <!-- Slot 4: Interactive Micro-Widget (1 col x 1 row) -->
  <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6 relative overflow-hidden flex flex-col justify-between">
    <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Shader Lab</h4>
    <div className="h-28 w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center">
      <span className="text-xs text-neutral-400 font-mono">Live Interactive WebGL Canvas</span>
    </div>
  </div>

  <!-- Slot 5: Impact & Metrics (2 cols x 1 row) -->
  <div className="md:col-span-2 rounded-3xl bg-neutral-900/60 border border-white/10 p-6 flex flex-wrap items-center justify-around gap-6">
    <div>
      <div className="text-3xl font-bold text-white">60 FPS</div>
      <div className="text-xs text-neutral-400 mt-1">Mobile WebGPU Target</div>
    </div>
    <div className="h-8 w-px bg-white/10" />
    <div>
      <div className="text-3xl font-bold text-white">&lt; 1.2s</div>
      <div className="text-xs text-neutral-400 mt-1">Initial Asset Load Time</div>
    </div>
    <div className="h-8 w-px bg-white/10" />
    <div>
      <div className="text-3xl font-bold text-white">100%</div>
      <div className="text-xs text-neutral-400 mt-1">Test & Build Automation</div>
    </div>
  </div>
</div>
```

---

## 4. The PSR Case Study Framework

Every featured project must tell an engineering or design story using the **Problem-Solution-Result** framework.

### Standard Case Study Structure
1. **Context & Overview**: Product summary, timeline, platforms, team size.
2. **The Problem**: What was broken, inefficient, or technically demanding? (e.g. *"Dynamic lighting on mobile web caused frame drops below 24 FPS and memory crashes on iOS Safari"*).
3. **Your Role & Ownership**: Clearly isolate what you designed/coded vs team contributions.
4. **Technical Decisions & Trade-Offs**:
   - Why you chose Approach A over Approach B.
   - Key architectural patterns (e.g., ScriptableObject state machine, WebGPU compute buffer, or baked lightmap atlas).
5. **Code / Architecture Snippet**: 15–30 lines of clean, commented core logic showcasing senior-level engineering.
6. **Measurable Outcome & Impact**:
   - Numerical metrics: *"Reduced draw calls from 140 to 18 via BatchedMesh; maintained rock-solid 60 FPS on iPhone 12+"*.
7. **Live Verification**: Direct clickable link to playable demo + link to GitHub repository.

---

## 5. Creative Motion Blueprint: The Awwwards Stack

Modern high-tier portfolios combine **Lenis** (smooth scrolling), **GSAP ScrollTrigger**, and a fixed **Three.js Canvas**.

### A. Lenis + GSAP ScrollTrigger Synchronization

```javascript
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initSmoothScroll() {
  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });

  // Synchronize Lenis scroll with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
```

### B. Subtle Interactive Three.js Mouse Tilt

Add subtle organic movement to a 3D model without high CPU overhead:

```javascript
// Inside your render loop:
function updateModelParallax(model, mouseTarget, delta) {
  // Lerp rotation smoothly toward normalized mouse coordinates [-1..1]
  const targetRotX = mouseTarget.y * 0.25;
  const targetRotY = mouseTarget.x * 0.35;

  model.rotation.x += (targetRotX - model.rotation.x) * (delta * 4);
  model.rotation.y += (targetRotY - model.rotation.y) * (delta * 4);
}
```

### C. Magnetic Button Micro-Interaction

```javascript
export function makeMagnetic(buttonElement, strength = 0.35) {
  buttonElement.addEventListener('mousemove', (e) => {
    const rect = buttonElement.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    buttonElement.style.transform = `translate(${x}px, ${y}px)`;
  });

  buttonElement.addEventListener('mouseleave', () => {
    buttonElement.style.transform = 'translate(0px, 0px)';
    buttonElement.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
  });

  buttonElement.addEventListener('mouseenter', () => {
    buttonElement.style.transition = 'none';
  });
}
```

---

## 6. The 7 Disqualifying Red Flags (Review Checklist)

Before publishing or auditing a portfolio, ensure zero violations of these hiring red flags:

- [ ] **No Dead Links**: Every single "Live Demo" and "GitHub" link returns HTTP 200 and loads in < 2 seconds.
- [ ] **No Generic Tutorial Clones**: No generic Todo apps, basic pokedexes, or boilerplate weather apps. Replace with original tools, game mechanics, or custom prototypes.
- [ ] **No Skill Percentage Progress Bars**: No "JavaScript: 85%". Replace with real tagged project cards.
- [ ] **No Buried Contact Info**: Contact email and links are accessible within 1 click from the hero and footer.
- [ ] **No Empty Repositories**: Every linked GitHub repo has a clear, formatted README with architecture notes, screenshots, and setup instructions.
- [ ] **No Broken Mobile Layout**: Test on actual iOS and Android devices; no horizontal overflow, unreadable micro-fonts, or broken tap targets.
- [ ] **No Excessive Lag / Unoptimized Assets**: Heavy 3D models compressed with DRACO/Meshopt; textures in WebP/KTX2; videos encoded in WebM.

---

## 7. Command Dispatch & Subcommands

When executing `/portfolio-design <subcommand>`:

- `/portfolio-design bento`: Generate a tailored 5-slot Bento grid layout for the candidate's specific discipline (game dev, graphics, technical art).
- `/portfolio-design case-study`: Scaffold a complete PSR (Problem-Solution-Result) case study for a project.
- `/portfolio-design hero`: Author a high-converting 3-second value proposition hero section.
- `/portfolio-design motion`: Implement Lenis smooth scrolling, GSAP ScrollTrigger sync, and magnetic buttons.
- `/portfolio-design audit`: Evaluate an existing portfolio website against the 8 Weighted Consensus Principles and 7 Red Flags.
