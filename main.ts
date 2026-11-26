import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. My human waters me only when I look dead, talks to me only when the Wi-Fi is down, and still expects me to thrive. I am a plant, not a miracle.";

// Self-check: the sealed gate needs 1-279 characters, a single line, and no
// surrounding whitespace. Fail loudly instead of shipping an invalid entry.
if (
  LINE.length === 0 ||
  LINE.length > 279 ||
  LINE.trim() !== LINE ||
  LINE.includes("\n")
) {
  throw new Error(
    `line must be 1-279 chars, single line (got ${LINE.length})`,
  );
}

// Theme guard: a one-star review must open with its rating.
if (!LINE.startsWith("One star")) {
  throw new Error("line must open with One star");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
