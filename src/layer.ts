import { readFile } from "node:fs/promises";

import type { Layer, PixelData } from "ag-psd";
import sharp from "sharp";

export interface LayerWithImage extends Layer {
  imagePath: string;
}

export async function createCanvasFromImagePath(layer: Layer | LayerWithImage) {
  if ("imagePath" in layer) {
    const image = sharp(await readFile(layer.imagePath));
    const metadata = await image.metadata();
    const pixelData: PixelData = {
      width: metadata.width!,
      height: metadata.height!,
      data: await image.ensureAlpha().raw().toBuffer(),
    };
    layer.imageData = pixelData;
  }
  return layer;
}
