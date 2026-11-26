// One-Line Laugh-Off
// make.fun bounty: u-zkhiel-one-line-laugh-off-714618ae
// Writes exactly one funny line, no setup, to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My sleep schedule is a hostage negotiation between me and tomorrow, and tomorrow keeps hanging up.";

// The turn is the last clause: tomorrow is the one refusing to negotiate,
// so the insomniac is losing to a day that will not even answer the phone.
// The gate allows 1 to 200 characters; refuse to emit an over-long line.
if (LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
