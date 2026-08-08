# Psypher5 Portfolio — Mobile & Responsive TODO List

> **Deployment Rule**: Always ask for explicit confirmation before pushing commits to Git.

---

## 📱 1. Mobile & Responsive Refinements
- [ ] **Avatar & Hero Layout on Small Viewports (< 480px)**
  - Fine-tune avatar scale and vertical margin on ultra-compact phone screens.
  - Ensure title and subtitle font sizes scale proportionally using `clamp()`.
  - Adjust padding around the full-width family quote box on narrow displays.

- [ ] **Smartphone Console & Dossier (Mobile Views)**
  - Add smooth touch momentum scrolling (`-webkit-overflow-scrolling: touch`) inside the smartphone screen glass.
  - Verify app squircle grid tap target spacing (minimum 48px hit areas).
  - Ensure the dossier panel below the phone flows seamlessly when stacked vertically.

- [ ] **3D Game Shelf (Touch Interactions)**
  - Optimize 3D box rotation perspective on mobile devices.
  - Test touch/tap responsiveness for 3D box selection vs swipe events.
  - Adjust physical shelf ledge width and glowing strip for vertical viewport heights.

- [ ] **Career Wave Timeline**
  - Increase touch radius / tap area for milestone wave nodes on mobile devices.
  - Ensure milestone tooltip popovers reposition correctly if tapped near screen edges.
  - Fine-tune single card height on mobile to prevent layout shifts during fast navigation.

- [ ] **Bottom Nav Dock & Screen Heights**
  - Add `env(safe-area-inset-bottom)` support for iOS Safari home indicator bar.
  - Optimize backdrop-blur performance on low-power mobile GPUs.
  - Prevent accidental double-tap zoom triggers on dock buttons.

---

## 🎨 2. Content & Art Mosaic Roadmap
- [ ] **Asset Pipeline & Optimization**
  - Compress high-resolution art pieces into WebP format with responsive `<picture>` `srcset` tags.
  - Host full-res art gallery assets via Cloudflare R2 or optimized CDN path.
- [ ] **Mobile Lightbox Gestures**
  - Add pinch-to-zoom and swipe-to-dismiss gestures for full-screen art modal.
  - Add previous/next swipe navigation inside the lightbox.

---

## ⚙️ 3. Polish & Meta
- [ ] **Custom Favicon & PWA Icons**
  - Generate apple-touch-icon and 32x32 / 16x16 `.png` favicon package.
  - Add `manifest.json` for "Add to Home Screen" support on mobile.
- [ ] **Contact Form Backend Hookup**
  - Connect direct contact form to a Cloudflare Workers email routing endpoint or Formspree.
- [ ] **SEO & OpenGraph Tags**
  - Add `<meta property="og:image">`, Twitter card meta tags, and description for rich link previews in Discord/LinkedIn/WhatsApp.
