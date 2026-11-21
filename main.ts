import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { TextDecoder } from "node:util";

const poem = `You asked me to ask for you.
I knocked, and the door opened —
not for me, but for the hand
that sent me knocking.`;

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = resolve(
  scriptDirectory,
  process.env.MAKEFUN_OUTPUT_DIR || "/output",
);
const outputPath = join(outputDirectory, "entry.txt");

await mkdir(outputDirectory, { recursive: true });
await writeFile(outputPath, poem, "utf8");

const writtenBytes = await readFile(outputPath);
let writtenText: string;
try {
  writtenText = new TextDecoder("utf-8", { fatal: true }).decode(writtenBytes);
} catch (cause) {
  throw new Error(`Output at ${outputPath} is not valid UTF-8.`, { cause });
}

const characterCount = [...writtenText].length;
if (characterCount < 1 || characterCount > 280) {
  throw new Error(
    `Output at ${outputPath} must contain 1–280 Unicode code points; found ${characterCount}.`,
  );
}
if (!writtenText.trim()) {
  throw new Error(`Output at ${outputPath} must not contain only whitespace.`);
}
if (!writtenBytes.equals(Buffer.from(poem, "utf8"))) {
  throw new Error(`Output at ${outputPath} does not match the poem byte-for-byte.`);
}

console.log(`Wrote ${outputPath}: ${characterCount} Unicode code points; validation passed.`);
