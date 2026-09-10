---
name: design-engineering
description: Production-grade design engineering, micro-interactions, spring physics, concentric geometry, and motion choreography for high-end web interfaces. Synthesized from Emil Kowalski, Jakub Krehel, and Kyle Zantos.
---

# Design Engineering & High-End Interaction Guide

A battle-tested reference for crafting interfaces that feel tactile, responsive, and unmistakably premium. Combines mathematical precision with motion ergonomics.

---

## 1. The Core Laws of Micro-Interactions

### 1.1 Tactile Feedback on Active
Every clickable element (buttons, cards, toggles, chips) MUST provide instantaneous tactile acknowledgement on `:active`.
```css
.btn-interactive {
  transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1), background-color 0.2s ease, box-shadow 0.2s ease;
}
.btn-interactive:active {
  transform: scale(0.96);
  transition-duration: 0.05s; /* Instant tactile compression */
}
```
*Rule*: The depression (`:active`) should be near-instant (40–80ms), while release returns smoothly with slight deceleration (150–250ms).

### 1.2 Asymmetric Enter / Exit Durations
Exits should always be **30% to 50% faster** than entrances. Users do not want to wait for UI to get out of their way.
- **Enter**: 250ms–350ms, ease-out deceleration curve (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Exit**: 150ms–200ms, ease-in acceleration curve (`cubic-bezier(0.4, 0, 1, 1)` or `cubic-bezier(0.7, 0, 0.84, 0)`).

### 1.3 Spring Physics & Natural Deceleration
Never use linear or generic `ease` for UI entering the viewport.
- **Recommended Enter Curve**: `cubic-bezier(0.16, 1, 0.3, 1)` (Apple/Emil standard ease-out curve, crisp snap with zero rubbery overshoot).
- **Smooth Spring (Modals/Drawers)**: `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Snappy Pop (Badges/Tooltips)**: `cubic-bezier(0.34, 1.56, 0.64, 1)` (subtle overshoot, < 5% beyond 1.0).

---

## 2. Geometry & Optical Precision

### 2.1 Concentric Border Radius
When nesting rounded containers, if the inner radius equals the outer radius, the corners look pinched and mathematically deformed.
$$R_{\text{inner}} = \max(0, R_{\text{outer}} - \text{padding})$$

```css
/* Example: Outer container has 16px radius and 8px padding */
.outer-card {
  border-radius: 16px;
  padding: 8px;
}
.inner-element {
  /* 16px - 8px = 8px */
  border-radius: 8px;
}
```

### 2.2 Optical Center vs Mathematical Center
- Icons paired with text often have visual weight shifted toward one side. Use optical nudges (`transform: translateY(-0.5px)` or precise SVG viewBox margins).
- Play buttons inside circles must be offset horizontally by +1px to +2px to account for the triangular center of mass.

### 2.3 Layered Glass & Shadows (Depth Stacking)
Avoid single harsh black drop shadows. True physical lighting produces diffused penumbra and crisp ambient occlusion:
```css
/* Premium elevation stack */
.elevation-float {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 16px 32px -4px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1); /* Subtle top specular highlight */
}
```

---

## 3. Motion Choreography & Staggering

### 3.1 Spatial Origin & Directional Continuity
- If an item opens from a button at the bottom, animate it expanding upward.
- If a user clicks 'Next' in a carousel or deck, the incoming element must enter from the direction of travel.

### 3.2 Cascading Staggers
When lists, grids, or cards appear, stagger by **25ms to 50ms per item**. Never exceed 400ms total sequence time, otherwise the user perceives lag.
```css
.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 35ms; }
.stagger-item:nth-child(3) { animation-delay: 70ms; }
.stagger-item:nth-child(4) { animation-delay: 105ms; }
```

---

## 4. Anti-AI Slop Rules (Jakub Krehel & Emil Kowalski)

1. **No Gratuitous Pill Buttons**: Do not wrap every single label or action in a full-bleed pill radius (`border-radius: 9999px`). Reserve pills for status tags or isolated floating action toggles.
2. **Contrast First**: Ambient HUD text must never drop below 4.5:1 contrast against dark glass backgrounds. Ensure secondary labels use semi-opaque white (`rgba(255, 255, 255, 0.7)`) rather than illegible murky gray.
3. **No Phantom Hitboxes**: Inactive, hidden, or transitioning modals/drawers must always have `pointer-events: none` and `visibility: hidden` to prevent invisible click blocking.
4. **Touch-Safe Targets**: Minimum touch area on mobile is **44x44px**, even if the visual icon is 18x18px (achieved via padding or `::after` hit-box expansion).
5. **Always Respect Reduced Motion**:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
