# 🎨 Artwork, Tags & Stacks — Developer Guide

All gallery data and metadata live in **[`scripts/app.js`](file:///c:/Projects/02_Software_Projects/website/psypher5/scripts/app.js)** under two clean data structures:
1. `artGalleryData` (the Art Mosaic wall)
2. `indieBoxes` (the 3D Game Shelf dossiers)

---

## 🗂️ 1. How Gallery Data is Structured

In [`scripts/app.js`](file:///c:/Projects/02_Software_Projects/website/psypher5/scripts/app.js#L337), each gallery item is a simple JavaScript object:

### 🔹 Single Image Example
```javascript
{
    id: 'sonic-fanart',
    title: 'Sonic 3D Tribute',
    tag: 'SEGA // FAN ART',
    category: 'drawing',      // 'digital' | 'drawing' | 'photography' | 'concept'
    isConcept: false,         // Set to true to also appear under "Game Concept Art"
    images: [
        {
            src: 'assets/art-web/drawing/Sonic_3D_by_Psypher5.webp',
            title: 'Sonic 3D Dynamic Tribute',
            tag: 'SEGA // ISOMETRIC',
            desc: 'Pencil drawing celebrating classic SEGA isometric character styling.'
        }
    ]
}
```

### 🔹 Multi-Image Stack Example (Flippable Card)
To turn any card into a **stacked deck with pagination arrows**:
```javascript
{
    id: 'sketchbook-feb',
    title: 'Sketchbook Series — Feb 2015',
    tag: 'SKETCHBOOK // PENCIL',
    category: 'drawing',
    isConcept: true,
    wide: true,               // Optional: spans 2 columns in the mosaic grid
    images: [
        {
            src: 'assets/art-web/drawing/20150206_173255.webp',
            title: 'Page 1 — Joint Mechanics',
            tag: 'SKETCHBOOK // PAGE 1',
            desc: 'Pencil study of joint articulation and mechanical pivots.'
        },
        {
            src: 'assets/art-web/drawing/20150206_173310.webp',
            title: 'Page 2 — Silhouette Studies',
            tag: 'SKETCHBOOK // PAGE 2',
            desc: 'Crosshatching and dynamic anatomy.'
        }
        // Add as many pages as you want here!
    ]
}
```

---

## 🏷️ 2. Categories & Filter Tags

The filter bar in [`index.html`](file:///c:/Projects/02_Software_Projects/website/psypher5/index.html#L375) maps directly to `category`:

| `category` Value | Filter Tab | Folder Location |
|---|---|---|
| `'digital'` | **Digital Art** | `assets/art-web/digital/` |
| `'drawing'` | **Drawings & Sketches** | `assets/art-web/drawing/` |
| `'photography'` | **Photography** | `assets/art-web/photography/` |
| `'concept'` | **Game Concept Art** | Any item with `isConcept: true` |

> [!TIP]
> Setting `isConcept: true` on any drawing, 3D render, or photograph will make it show up in its primary category **AND** under the **Game Concept Art** filter tab!

---

## 🎮 3. Linking Concept Art to Indie Game Dossiers

In [`scripts/app.js`](file:///c:/Projects/02_Software_Projects/website/psypher5/scripts/app.js#L276) under `indieBoxes`, you can change the thumbnail previews for each game:

```javascript
'ewefo': {
    title: 'ewe-FO',
    // ...
    conceptArt: [
        {
            src: 'assets/psypher53-2-WE5f5c30150a (1).png', // Change to your real artwork path whenever ready!
            title: 'Visual Pipeline (In Development)',
            tag: 'CONCEPT // WIP',
            desc: '3D diorama assets currently being authored for the Godot prototype.'
        }
    ]
}
```

---

## ⚡ 4. Adding New Artwork in the Future

1. **Drop raw images** into `assets/art/digital/`, `assets/art/drawing/`, or `assets/art/photography/`.
2. **Run the compression script**:
   ```powershell
   node scripts/compress-art.js
   ```
   *(This automatically creates web-optimized `.webp` files in `assets/art-web/` at 90% reduced size).*
3. **Add or edit the entry** in `artGalleryData` in [`scripts/app.js`](file:///c:/Projects/02_Software_Projects/website/psypher5/scripts/app.js#L337). That's all!
