// Everyday Things, Two Lines, Longer Run — @berkahmuse entry.
// Writes two lines explaining rain to a 10-year-old to /output/entry.txt.
//
// Line 1: one vivid sentence, one analogy — the sky wringing out a giant
// sponge it soaked up from the sea. Line 2: one honest sentence saying
// what the sponge maps (a cloud holding water, then letting it go) and
// what it leaves out (nobody wrings a real cloud: rain falls when tiny
// drops bump together and grow too heavy for the air to hold).
//
// Freshness anchor (drand quicknet, fetched before the first write):
//   beacon: quicknet
//   round: 34249757
//   signature: b9c4fecf9c50dc7101f577449777d0f14cd690fad9f875fbd55d151ea706fea9776e420faff9ba8af545def096782d21
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Rain is the sky wringing out a giant sponge it soaked up from the sea, squeezing it drop by drop over your head.\n" +
  "The sponge shows how a cloud holds water and lets it go, but it leaves out that nobody wrings a real cloud — rain falls when tiny drops bump together and grow too heavy for the air to hold.";

// The gate: /output/entry.txt is UTF-8 text of 1 to 400 characters, not
// only white space. Refuse to write anything that would fail it instead
// of silently submitting a broken entry.
if (ENTRY.length < 1 || ENTRY.length > 400 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-400 characters of non-blank text, got ${ENTRY.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
