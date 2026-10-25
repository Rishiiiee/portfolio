import sharp from "sharp";
import fs from "fs";

async function processImage() {
  const inputPath = "d:/Rishi/Projects/portfolio/src/asset/robot_thinking.jpg";
  const outputPath = "d:/Rishi/Projects/portfolio/src/asset/robot_thinking.png";

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4 (RGBA)

  // Visited array for flood fill
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isNearWhite(idx) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Background in generated image is white/near-white (> 245) or very light grey shadow
    return r > 240 && g > 240 && b > 240;
  }

  // Push all perimeter pixels that are near-white to queue
  for (let x = 0; x < width; x++) {
    // top edge
    let idxTop = (0 * width + x) * channels;
    if (isNearWhite(idxTop)) {
      visited[x] = 1;
      queue.push(x, 0);
    }
    // bottom edge
    let idxBot = ((height - 1) * width + x) * channels;
    if (isNearWhite(idxBot)) {
      visited[(height - 1) * width + x] = 1;
      queue.push(x, height - 1);
    }
  }

  for (let y = 0; y < height; y++) {
    // left edge
    let idxLeft = (y * width + 0) * channels;
    if (isNearWhite(idxLeft)) {
      visited[y * width] = 1;
      queue.push(0, y);
    }
    // right edge
    let idxRight = (y * width + (width - 1)) * channels;
    if (isNearWhite(idxRight)) {
      visited[y * width + (width - 1)] = 1;
      queue.push(width - 1, y);
    }
  }

  // BFS Flood Fill
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIndex = ny * width + nx;
        if (!visited[nIndex]) {
          const pixelIdx = nIndex * channels;
          if (isNearWhite(pixelIdx)) {
            visited[nIndex] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Also include the subtle ground shadow if near white or clean it up
  for (let i = 0; i < width * height; i++) {
    if (visited[i]) {
      data[i * channels + 3] = 0; // Transparent
    }
  }

  // Save as PNG
  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log("Successfully created transparent robot_thinking.png!");
}

processImage().catch(console.error);
