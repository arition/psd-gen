import { readFile, writeFile } from "node:fs/promises";

import { type Psd, writePsd } from "ag-psd";

import parseArgs from "./args";
import { createCanvasFromImagePath } from "./layer";

async function main() {
  const { input, output } = parseArgs();
  const inputBuffer = await readFile(input, { encoding: "utf-8" });
  const psd = JSON.parse(inputBuffer) as Psd;
  psd.children = psd.children ? await Promise.all(psd.children.map((c) => createCanvasFromImagePath(c))) : undefined;

  const buffer = writePsd(psd, { generateThumbnail: false, invalidateTextLayers: true, logMissingFeatures: true });
  await writeFile(output, Buffer.from(buffer));
}

void main();
