// One Letter: Coffee or Tea — make.fun entry (u-rusdyxbt-one-letter-coffee-or-tea-89877fa0).
//
// The entry is exactly one letter: "A" for coffee. Coffee wins on vividness
// and humour — the morning ritual, the caffeine personality, the endless
// coffee jokes — where tea stays calm and quiet.
//
// The program writes that single letter, and nothing else, to
// <MAKEFUN_OUTPUT_DIR>/entry.txt. The gate requires UTF-8 text of exactly
// one character, so there is deliberately no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "A" = coffee. One byte, no newline, no whitespace.
const LETTER = "A";

// Self-check: the gate rejects anything that is not exactly one
// non-whitespace UTF-8 character, so refuse to write anything else rather
// than ship a silently invalid entry.
if (LETTER.length !== 1 || LETTER.trim() === "" || Buffer.byteLength(LETTER, "utf8") !== 1) {
  throw new Error(`Entry letter must be exactly one non-whitespace byte, got: ${JSON.stringify(LETTER)}`);
}

// An empty env var must not win over the default: use ||, not ??, so a
// blank MAKEFUN_OUTPUT_DIR still falls back to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");

// Read back and confirm the artifact is exactly the one byte we meant.
const written = readFileSync(outPath, "utf8");
if (written !== LETTER) {
  throw new Error(`Wrote ${JSON.stringify(written)} to ${outPath}, expected ${JSON.stringify(LETTER)}`);
}
