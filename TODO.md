# Psypher5 Portfolio — Mobile & Responsive TODO List

> **Deployment Rule**: Always ask for explicit confirmation before pushing commits to Git.

---

## 📱 1. Mobile & Responsive Refinements
- [x] **Avatar & Hero Layout on Small Viewports (< 480px)**
  - [x] Fine-tune avatar scale and vertical margin on ultra-compact phone screens (`.profile-avatar` 120px).
  - [x] Ensure title and subtitle font sizes scale proportionally using `clamp()`.
  - [x] Adjust padding around the full-width family quote box on narrow displays.

- [ ] **Smartphone Console & Dossier (Mobile Views)**
  - Add smooth touch momentum scrolling (`-webkit-overflow-scrolling: touch`) inside the smartphone screen glass.
  - Verify app squircle grid tap target spacing (minimum 48px hit areas).
  - Ensure the dossier panel below the phone flows seamlessly when stacked vertically.

- [x] **3D Game Shelf & Spawn.co Partner Studio**
  - [x] Official Spawn.co partner creator badge & direct links to profile and Discord hub.
  - [x] 3D physical shelf with overhead industrial pendant lamp and electric blue LED underglow.
  - [x] Spawn Den Easter eggs: pixel penguin wizard mascot on brass plaque, sprout, candle, mug, and live stats.
  - [x] 5 Live 3D game boxes (Noble Gnomes, Starbloom, Void Warden, Star Sanctuary, Aegis of Ages) with interactive mouseover 3D tilt & gloss sheen.
  - [x] Spawn-styled detail modal with synopsis, "What's in the Box" features, changelog, community reviews, full-res screenshots, like counter, and instant new-tab browser play.
  - [x] Spacebar shortcut to launch active game, Escape to dismiss, outside-click handling.
  - [x] Integrated navigation into Hero nav dock and bottom floating dock with custom controller icons.
  - [x] Responsive layout with touch momentum scrolling on mobile devices (< 640px).

- [x] **Career Wave Timeline**
  - [x] Serpentine SVG wave timeline with staggered milestone nodes.
  - [x] Touch radius / tap area for milestone wave nodes enlarged with active state highlight.
  - [x] Synchronized card deck navigation without edge clipping or page jumping.
  - [x] Fixed carousel layout shifts by replacing `scrollIntoView()` with target-safe container scrolling.

- [x] **Bottom Nav Dock & Screen Heights**
  - [x] Add `env(safe-area-inset-bottom)` support for iOS Safari home indicator bar.
  - [x] Optimize backdrop-blur performance with GPU-friendly translucent glass.
  - [x] Prevent accidental double-tap zoom triggers using `touch-action: manipulation;`.

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
- [x] **Custom Favicon & PWA Icons**
  - [x] Generate apple-touch-icon and 32x32 / 16x16 `.png` favicon package plus root multi-res `favicon.ico`.
  - [x] Add `manifest.json` with 192px and 512px maskable icons for "Add to Home Screen" support on mobile.
- [x] **Contact Channel Interface**
  - [x] Tactile Inset Retro Modern Console Deck with live transmission target readout, direct mailto action, Steam profile integration, and clipboard copy toasts.
- [ ] **SEO & OpenGraph Tags**
  - Add `<meta property="og:image">`, Twitter card meta tags, and description for rich link previews in Discord/LinkedIn/WhatsApp.
