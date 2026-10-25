import sharp from "sharp";

async function makeLogoTransparent() {
  const inputPath = "C:/Users/Admin/.gemini/antigravity-ide/brain/59877b9c-fb15-475d-aad5-e211e609c06f/rs_signature_sharp_1787671771497.jpg";
  const outputPath = "d:/Rishi/Projects/portfolio/src/asset/rs_logo.png";

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4 (RGBA)

  // For a pure black on white signature, opacity = 255 - luminance
  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    
    // Calculate lightness (0 = black, 255 = white)
    const lightness = (r + g + b) / 3;
    
    if (lightness > 240) {
      // Pure background -> full transparent
      data[idx + 3] = 0;
    } else if (lightness < 40) {
      // Solid stroke -> pure black, full opacity
      data[idx] = 10;
      data[idx + 1] = 10;
      data[idx + 2] = 10;
      data[idx + 3] = 255;
    } else {
      // Smooth edge antialiasing
      const alpha = Math.round(255 * (1 - (lightness - 40) / 200));
      data[idx] = 10;
      data[idx + 1] = 10;
      data[idx + 2] = 10;
      data[idx + 3] = Math.max(0, Math.min(255, alpha));
    }
  }

  // Trim transparent edges and save as PNG
  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .trim()
    .png()
    .toFile(outputPath);

  console.log("Successfully created transparent rs_logo.png!");
}

makeLogoTransparent().catch(console.error);
