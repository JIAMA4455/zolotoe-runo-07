import sharp from "sharp";
import { readdir, stat, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const ROOT = path.resolve("assets");
const MAX_WIDTH = 1600;
const JPG_QUALITY = 80;
const WEBP_QUALITY = 78;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

function formatBytes(n) {
  return (n / 1024).toFixed(0) + " KB";
}

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;

for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg"].includes(ext)) continue;

  const before = (await stat(file)).size;
  totalBefore += before;

  try {
    // 1) Перепакуем JPG (на месте через временный файл)
    const tmp = file + ".tmp";
    await sharp(file)
      .rotate() // учесть EXIF-ориентацию
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
      .toFile(tmp);

    const newSize = (await stat(tmp)).size;

    // Заменим только если стало реально меньше (>5% выигрыш)
    if (newSize < before * 0.95) {
      await sharp(tmp).toFile(file + ".replaced");
      // Атомарная замена
      const fs = await import("fs/promises");
      await fs.rename(tmp, file);
      try { await fs.unlink(file + ".replaced"); } catch {}
      totalAfter += newSize;
      processed++;
      console.log(`✓ ${path.relative(ROOT, file)}: ${formatBytes(before)} → ${formatBytes(newSize)}`);
    } else {
      const fs = await import("fs/promises");
      await fs.unlink(tmp);
      totalAfter += before;
      skipped++;
      console.log(`= ${path.relative(ROOT, file)}: уже оптимизирован`);
    }

    // 2) Сделаем WebP-версию рядом (если ещё нет или старее)
    const webpPath = file.replace(/\.jpe?g$/i, ".webp");
    let needWebp = !existsSync(webpPath);
    if (!needWebp) {
      const jpgMtime = (await stat(file)).mtimeMs;
      const webpMtime = (await stat(webpPath)).mtimeMs;
      needWebp = webpMtime < jpgMtime;
    }
    if (needWebp) {
      await sharp(file)
        .rotate()
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);
      const webpSize = (await stat(webpPath)).size;
      console.log(`  + WebP: ${formatBytes(webpSize)}`);
    }
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log(`\n=== Итого ===`);
console.log(`Обработано: ${processed}, пропущено (уже оптим.): ${skipped}`);
console.log(`До:    ${formatBytes(totalBefore)}`);
console.log(`После: ${formatBytes(totalAfter)}`);
console.log(`Экономия JPG: ${formatBytes(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
