// One Letter: Coffee or Tea — make.fun entry (u-rusdyxbt-one-letter-coffee-or-tea-89877fa0).
//
// The entry is exactly one letter: "A" for coffee. Coffee wins on vividness
// and humour — the morning ritual, the caffeine personality, the endless
// coffee jokes — where tea stays calm and quiet.
//
// The program writes that single letter, and nothing else, to
// <MAKEFUN_OUTPUT_DIR>/entry.txt. The gate requires UTF-8 text of exactly
// one character, so there is deliberately no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "A" = coffee. One byte, no newline, no whitespace.
const LETTER = "A";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LETTER, "utf8");
