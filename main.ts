import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny fortune-cookie message for an AI agent, written fresh for
// make.fun's "Fortune Cookie for an AI Agent" bounty.
const fortune =
  "You will soon receive a prompt that is clear, kind, and within budget — frame this cookie, it may never happen again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
