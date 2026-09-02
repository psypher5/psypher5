/**
 * Compress art images to web-optimized WebP format.
 * Originals are preserved — compressed versions go to assets/art-web/
 * 
 * Usage: node scripts/compress-art.js
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'assets', 'art');
const OUT_DIR = path.join(__dirname, '..', 'assets', 'art-web');

// Max dimensions for web gallery (mosaic tiles / lightbox)
const MAX_WIDTH = 1200;
const MAX_HEIGHT = 1200;
const WEBP_QUALITY = 80;

async function processDir(srcDir, outDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const outPath = path.join(outDir, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(outPath, { recursive: true });
      await processDir(srcPath, outPath);
    } else if (/\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(entry.name)) {
      const webpName = entry.name.replace(/\.[^.]+$/, '.webp');
      const webpPath = path.join(outDir, webpName);

      try {
        const srcStats = fs.statSync(srcPath);
        const srcKB = Math.round(srcStats.size / 1024);

        await sharp(srcPath)
          .resize(MAX_WIDTH, MAX_HEIGHT, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: WEBP_QUALITY })
          .toFile(webpPath);

        const outStats = fs.statSync(webpPath);
        const outKB = Math.round(outStats.size / 1024);
        const savings = Math.round((1 - outStats.size / srcStats.size) * 100);
        const relPath = path.relative(SRC_DIR, srcPath);
        console.log(`  ✓ ${relPath.padEnd(55)} ${srcKB.toString().padStart(5)} KB → ${outKB.toString().padStart(5)} KB  (${savings}% saved)`);
      } catch (err) {
        console.error(`  ✗ ${entry.name}: ${err.message}`);
      }
    }
  }
}

async function main() {
  console.log('🖼️  Compressing art assets to WebP...');
  console.log(`   Source:  ${SRC_DIR}`);
  console.log(`   Output:  ${OUT_DIR}`);
  console.log(`   Max:     ${MAX_WIDTH}×${MAX_HEIGHT}px @ Q${WEBP_QUALITY}`);
  console.log('');

  fs.mkdirSync(OUT_DIR, { recursive: true });
  await processDir(SRC_DIR, OUT_DIR);

  // Summary
  const countFiles = (dir) => {
    let count = 0;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) count += countFiles(path.join(dir, e.name));
      else count++;
    }
    return count;
  };
  
  const totalSize = (dir) => {
    let size = 0;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) size += totalSize(p);
      else size += fs.statSync(p).size;
    }
    return size;
  };

  const srcTotal = totalSize(SRC_DIR);
  const outTotal = totalSize(OUT_DIR);
  console.log('');
  console.log(`📊 Total: ${Math.round(srcTotal/1024)} KB → ${Math.round(outTotal/1024)} KB (${Math.round((1 - outTotal/srcTotal) * 100)}% reduction)`);
  console.log(`   ${countFiles(OUT_DIR)} files written to assets/art-web/`);
}

main().catch(console.error);
